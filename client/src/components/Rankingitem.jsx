const RankingItem = ({ title, university, grade }) => {
  return (
    <div className="mb-4 pl-4 border-l-4 border-blue-200">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="flex justify-between items-center mt-1">
        <p className="text-gray-600">{university}</p>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {grade}
        </span>
      </div>
    </div>
  );
};

export default RankingItem;