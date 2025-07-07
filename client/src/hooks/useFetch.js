import { useState, useEffect } from "react";

export default function useFetch(role = "user", refreshTrigger = 0) {
  const [data, setData] = useState(null); // ✅ changed from [] to null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // just in case role changes
      try {
        const res = await fetch("http://localhost:3300/api/Testimonials/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await res.json();

        const filteredData =
          role === "admin"
            ? result.data
            : result.data.filter((d) => d.approved === true);

        setData(filteredData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [role, refreshTrigger]);

  return { data, loading, error };
}
