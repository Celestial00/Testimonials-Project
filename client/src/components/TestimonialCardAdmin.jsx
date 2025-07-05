// TestimonialCardAdmin.jsx
import { Star, CheckCircle, Trash2, Eye, ChevronRight } from "lucide-react";

export default function TestimonialCardAdmin({
  testimonial,
  onApprove,
  onDelete,
  onView,
}) {
  const {
    id,
    university,
    country,
    specialization,
    projectStart,
    researchMethod,
    rating,
    status,
  } = testimonial;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {university}
          </h3>
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
            {country}
          </p>
        </div>

        <div className="flex gap-1 font-bold ">{rating}</div>
      </div>

      <div className="space-y-3 text-sm text-gray-600 mb-5">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span>{specialization}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>Started {new Date(projectStart).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>{researchMethod} research</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-100 pt-4">
        <button
          onClick={() => onView(id)}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          <Eye className="w-4 h-4" />
          <span>View details</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {status === "pending" && (
            <button
              onClick={() => onApprove(id)}
              className="p-2 bg-green-50 rounded-lg text-green-600 hover:bg-green-100 transition-colors"
              title="Approve"
            >
              <CheckCircle className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => onDelete(id)}
            className="p-2 bg-red-50 rounded-lg text-red-600 hover:bg-red-100 transition-colors"
            title="Delete"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
