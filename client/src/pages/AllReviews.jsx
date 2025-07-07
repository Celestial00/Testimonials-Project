import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/Reviewcard";
import FilterSort from "../components/FilterSort";
import useFetch from "../hooks/useFetch";

const ReviewsPage = () => {
  
  const { data, loading, error } = useFetch("user");

  // const [reviews, setReviews] = useState([]);
  // const [filters, setFilters] = useState({
  //   university: "",
  //   specialization: "",
  //   country: "",
  //   compulsorySabbatical: "",
  //   form: "",
  //   method: "",
  //   sort: "projectStartDesc",
  // });

  // useEffect(() => {
  //   if (data) {
  //     setReviews(
  //       data.map((d, i) => ({
  //         id: d._id || i,
  //         university: d.universityDetails?.selectedUniversity,
  //         specification: d.universityDetails?.speciality,
  //         projectStart: d.projectDetails?.projectStartDate,
  //         researchMethod: d.projectDetails?.researchMethodology,
  //         country: d.universityDetails?.selectedCountry,
  //         compulsorySabbatical:
  //           d.projectDetails?.freeSemesters === "yes" ? "Yes" : "No",
  //         form: d.projectDetails?.dissertationFormat,
  //         full: d, // for sending full to next page
  //       }))
  //     );
  //   }
  // }, [data]);

  // const handleFilterChange = (filterName, value) => {
  //   const newFilters = { ...filters, [filterName]: value };
  //   setFilters(newFilters);
  //   applyFiltersAndSort(newFilters, reviews);
  // };

  // const handleSortChange = (sortOption) => {
  //   const newFilters = { ...filters, sort: sortOption };
  //   setFilters(newFilters);
  //   applyFiltersAndSort(newFilters, reviews);
  // };

  // const applyFiltersAndSort = (filterValues, originalList) => {
  //   let filtered = [...originalList];

  //   if (filterValues.university) {
  //     filtered = filtered.filter(
  //       (review) => review.university === filterValues.university
  //     );
  //   }

  //   if (filterValues.specialization) {
  //     filtered = filtered.filter(
  //       (review) => review.specification === filterValues.specialization
  //     );
  //   }

  //   if (filterValues.country) {
  //     filtered = filtered.filter(
  //       (review) => review.country === filterValues.country
  //     );
  //   }

  //   if (filterValues.compulsorySabbatical) {
  //     filtered = filtered.filter(
  //       (review) =>
  //         review.compulsorySabbatical === filterValues.compulsorySabbatical
  //     );
  //   }

  //   if (filterValues.form) {
  //     filtered = filtered.filter((review) => review.form === filterValues.form);
  //   }

  //   if (filterValues.method) {
  //     filtered = filtered.filter(
  //       (review) => review.researchMethod === filterValues.method
  //     );
  //   }

  //   switch (filterValues.sort) {
  //     case "projectStartDesc":
  //       filtered.sort(
  //         (a, b) => new Date(b.projectStart) - new Date(a.projectStart)
  //       );
  //       break;
  //     case "projectStartAsc":
  //       filtered.sort(
  //         (a, b) => new Date(a.projectStart) - new Date(b.projectStart)
  //       );
  //       break;
  //     case "universityAsc":
  //       filtered.sort((a, b) => a.university.localeCompare(b.university));
  //       break;
  //     case "universityDesc":
  //       filtered.sort((a, b) => b.university.localeCompare(a.university));
  //       break;
  //     default:
  //       break;
  //   }

  //   setReviews(filtered);
  // };

  // console.log("====================================");
  // console.log(reviews.full);
  // console.log("====================================");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All reviews</h1>

        <FilterSort
        // filters={filters}
        // onFilterChange={handleFilterChange}
        // onSortChange={handleSortChange}
        />

        <div className="space-y-4">
          {loading ? (
            <p className="text-gray-500">Loading reviews...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : data === null ? (
            <p>No available reviews.</p>
          ) : (
            data.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
