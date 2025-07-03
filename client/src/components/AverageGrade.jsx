const AverageGrade = ({ average }) => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-xl font-bold text-gray-800">Average grade</h3>
      <div className="mt-2 flex items-center">
        <span className="text-2xl font-bold text-blue-600 mr-2">{average}</span>
        <span className="text-gray-500 text-sm">(based on  dissertations)</span>
      </div>
    </div>
  );
};

export default AverageGrade;