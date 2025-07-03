const ReviewCard = ({ review, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(review)}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{review.university}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {review.country}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-4 font-medium text-gray-600">Specialization</th>
              <th className="text-left py-2 px-4 font-medium text-gray-600">Project start</th>
              <th className="text-left py-2 px-4 font-medium text-gray-600">Research method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-700">{review.specification}</td>
              <td className="py-2 px-4 text-gray-700">{review.projectStart}</td>
              <td className="py-2 px-4 text-gray-700">{review.researchMethod}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewCard;