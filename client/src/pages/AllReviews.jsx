import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/Reviewcard";
import FilterSort from "../components/FilterSort";

const ReviewsPage = () => {
  const navigate = useNavigate();

  const initialReviews = [
    {
      id: 1,
      university: "University of Linz",
      specification: "Psychiatry and psychotherapy",
      projectStart: "October 2023",
      researchMethod: "Clinical",
      country: "Austria",
      compulsorySabbatical: "Yes",
      form: "Paper",
    },
    {
      id: 2,
      university: "Friedrich Schiller University Jena",
      specification: "Trauma surgery",
      projectStart: "June 2022",
      researchMethod: "Experimental",
      country: "Germany",
      compulsorySabbatical: "No",
      form: "Digital",
    },
    {
      id: 3,
      university: "Friedrich Schiller University Jena",
      specification: "Anesthesiology",
      projectStart: "October 2023",
      researchMethod: "Experimental",
      country: "Germany",
      compulsorySabbatical: "Yes",
      form: "Paper",
    },
    {
      id: 4,
      university: "Charlie University Medicine Berlin",
      specification: "Radiology",
      projectStart: "October 2023",
      researchMethod: "Clinical",
      country: "Germany",
      compulsorySabbatical: "No",
      form: "Digital",
    },
    {
      id: 5,
      university: "University of Duisburg-Essen",
      specification: "Pediatric and adolescent medicine",
      projectStart: "October 2021",
      researchMethod: "Clinical",
      country: "Germany",
      compulsorySabbatical: "Yes",
      form: "Paper",
    },
    {
      id: 6,
      university: "Friedrich Schiller University Jena",
      specification: "Neurology",
      projectStart: "October 2020",
      researchMethod: "Experimental",
      country: "Germany",
      compulsorySabbatical: "No",
      form: "Digital",
    },
    {
      id: 7,
      university: "Technical University of Dresden",
      specification: "Neurology",
      projectStart: "April 2023",
      researchMethod: "Clinical",
      country: "Germany",
      compulsorySabbatical: "Yes",
      form: "Paper",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [filters, setFilters] = useState({
    university: "",
    specialization: "",
    country: "",
    compulsorySabbatical: "",
    form: "",
    method: "",
    sort: "projectStartDesc",
  });

  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    applyFiltersAndSort(newFilters);
  };

  const handleSortChange = (sortOption) => {
    const newFilters = { ...filters, sort: sortOption };
    setFilters(newFilters);
    applyFiltersAndSort(newFilters);
  };

  const applyFiltersAndSort = (filterValues) => {
    let filtered = [...initialReviews];

    if (filterValues.university) {
      filtered = filtered.filter(
        (review) => review.university === filterValues.university
      );
    }

    if (filterValues.specialization) {
      filtered = filtered.filter(
        (review) => review.specification === filterValues.specialization
      );
    }

    if (filterValues.country) {
      filtered = filtered.filter((review) => review.country === filterValues.country);
    }

    if (filterValues.compulsorySabbatical) {
      filtered = filtered.filter(
        (review) => review.compulsorySabbatical === filterValues.compulsorySabbatical
      );
    }

    if (filterValues.form) {
      filtered = filtered.filter((review) => review.form === filterValues.form);
    }

    if (filterValues.method) {
      filtered = filtered.filter((review) => review.researchMethod === filterValues.method);
    }

    switch (filterValues.sort) {
      case "projectStartDesc":
        filtered.sort((a, b) => new Date(b.projectStart) - new Date(a.projectStart));
        break;
      case "projectStartAsc":
        filtered.sort((a, b) => new Date(a.projectStart) - new Date(b.projectStart));
        break;
      case "universityAsc":
        filtered.sort((a, b) => a.university.localeCompare(b.university));
        break;
      case "universityDesc":
        filtered.sort((a, b) => b.university.localeCompare(a.university));
        break;
      default:
        break;
    }

    setReviews(filtered);
  };

  const handleReviewClick = (review) => {
    navigate("/evaluation", { state: { review } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All reviews</h1>

        <FilterSort
          filters={filters}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />

        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} onClick={() => handleReviewClick(review)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
