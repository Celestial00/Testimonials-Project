import RankingList from "../components/RankingList";

import { useEffect, useState } from "react";

const RankingPage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}api/Testimonials/get`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const results = await response.json();

      setData(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our ranking</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          dissertation
        </h2>

        <RankingList items={data} />
      </div>
    </div>
  );
};

export default RankingPage;
