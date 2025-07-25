
const FilterSort = ({ filters, onFilterChange, onSortChange }) => {
  const countries = ["Germany", "Austria", "Switzerland"];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter and sort</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* University Filter */}
        <div>
          <label
            htmlFor="university"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            University
          </label>
          <input
            id="university"
            value={filters.university}
            onChange={(e) => onFilterChange("university", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter university name"
          />
        </div>

        {/* Country Filter */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country
          </label>
          <select
            id="country"
            value={filters.country}
            onChange={(e) => onFilterChange("country", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">All</option>
            {countries.map((name, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Sorting */}
       
      </div>
    </div>
  );
};

export default FilterSort;
