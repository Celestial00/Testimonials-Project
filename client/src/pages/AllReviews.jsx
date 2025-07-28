import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/Reviewcard";
import FilterSort from "../components/FilterSort";

const ReviewsPage = () => {
  const [data, setData] = useState(null);
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    university: "",
    country: "",
  });
  const [sortOption, setSortOption] = useState("projectStartDesc");

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        ` ${import.meta.env.VITE_BACKEND_URL}api/Testimonials/get`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const filteredAndSortedData = data
    ? data
        .filter((review) => {
          const matchesUniversity = filters.university
            ? review.universityDetails.selectedUniversity
                ?.toLowerCase()
                .includes(filters.university.toLowerCase())
            : true;
          const matchesCountry = filters.country
            ? review.universityDetails.selectedCountry === filters.country
            : true;
          return matchesUniversity && matchesCountry;
        })
        .sort((a, b) => {
          if (sortOption === "projectStartDesc") {
            return new Date(b.projectStart) - new Date(a.projectStart);
          } else if (sortOption === "projectStartAsc") {
            return new Date(a.projectStart) - new Date(b.projectStart);
          }
          return 0;
        })
    : null;

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All reviews</h1>

        <FilterSort
          filters={filters}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />

        <div className="space-y-4">
          {loading ? (
            <p className="text-gray-500">Loading reviews...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : filteredAndSortedData === null ||
            filteredAndSortedData.length === 0 ? (
            <p>No available reviews.</p>
          ) : (
            filteredAndSortedData.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
