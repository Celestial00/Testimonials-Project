import React, { useState, useEffect } from "react";
import TestimonialCardAdmin from "../components/TestimonialCardAdmin";
import useFetch from "../hooks/useFetch";

export default function Testimonials() {
  const [data, setData] = useState(null); // ✅ changed from [] to null
  const [role, setRoke] = useState("admin");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (id) => {
    try {
      await fetch(`http://localhost:3300/api/Testimonials/approved/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: true }),
      });

      await fetchData();
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3300/api/Testimonials/deleted/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      await fetchData();
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Pending Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data === null
            ? null
            : data
                .filter((t) => t.approved === false)
                .map((t) => (
                  <TestimonialCardAdmin
                    key={t._id}
                    testimonial={t}
                    onApprove={handleApprove}
                    onDelete={handleDelete}
                  />
                ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Approved Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data === null
            ? " "
            : data
                .filter((t) => t.approved === true)
                .map((t) => (
                  <TestimonialCardAdmin
                    key={t._id}
                    testimonial={t}
                    onApprove={handleApprove}
                    onDelete={handleDelete}
                  />
                ))}
        </div>
      </div>
    </main>
  );
}
