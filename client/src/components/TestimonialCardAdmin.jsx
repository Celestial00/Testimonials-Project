import React from "react";
import { Star } from "lucide-react";

const TestimonialCardAdmin = ({ testimonial, onApprove, onDelete }) => {
  const { id, title, description, rating } = testimonial;

  return (
    <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-indigo-300">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>

      {/* Static Rating Display */}
      <div className="flex gap-1 items-center mt-4">
        {[1, 2, 3, 4, 5].map((val) => (
          <Star
            key={val}
            size={20}
            className={`${
              val <= rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-500"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-400">({rating})</span>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-end gap-3">
        <button
          onClick={() => onApprove(id)}
          className="px-4 py-2 bg-[#2a2a2a] hover:bg-indigo-600 text-white text-sm font-semibold rounded-lg cursor-pointer"
        >
          Approve
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-2 bg-[#2a2a2a] hover:bg-red-600 text-white text-sm font-semibold rounded-lg cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TestimonialCardAdmin;
  