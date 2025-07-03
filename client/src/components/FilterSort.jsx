const FilterSort = ({ filters, onFilterChange, onSortChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter and sort</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* University Filter */}
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
          <select
            id="university"
            value={filters.university}
            onChange={(e) => onFilterChange('university', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">All</option>
            <option value="University of Linz">University of Linz</option>
            <option value="Friedrich Schiller University Jena">Friedrich Schiller University Jena</option>
            <option value="Charlie University Medicine Berlin">Charlie University Medicine Berlin</option>
            <option value="University of Duisburg-Essen">University of Duisburg-Essen</option>
            <option value="Technical University of Dresden">Technical University of Dresden</option>
          </select>
        </div>
        
        {/* Specialization Filter */}
        <div>
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
          <select
            id="specialization"
            value={filters.specialization}
            onChange={(e) => onFilterChange('specialization', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">All</option>
            <option value="Psychiatry and psychotherapy">Psychiatry and psychotherapy</option>
            <option value="Trauma surgery">Trauma surgery</option>
            <option value="Anesthesiology">Anesthesiology</option>
            <option value="Radiology">Radiology</option>
            <option value="Pediatric and adolescent medicine">Pediatric and adolescent medicine</option>
            <option value="Neurology">Neurology</option>
          </select>
        </div>
        
        {/* Country Filter */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <select
            id="country"
            value={filters.country}
            onChange={(e) => onFilterChange('country', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">All</option>
            <option value="Austria">Austria</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        
        {/* Compulsory Sabbatical Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Compulsory Sabbatical</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="sabbatical"
                checked={filters.compulsorySabbatical === ""}
                onChange={() => onFilterChange('compulsorySabbatical', "")}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">All</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="sabbatical"
                checked={filters.compulsorySabbatical === "Yes"}
                onChange={() => onFilterChange('compulsorySabbatical', "Yes")}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
          </div>
        </div>
        
        {/* Form Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Form</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="form"
                checked={filters.form === ""}
                onChange={() => onFilterChange('form', "")}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">All</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="form"
                checked={filters.form === "Paper"}
                onChange={() => onFilterChange('form', "Paper")}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Paper</span>
            </label>
          </div>
        </div>
        
        {/* Method Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Method</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="method"
                checked={filters.method === ""}
                onChange={() => onFilterChange('method', "")}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">All</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="method"
                checked={filters.method === "Experimental"}
                onChange={() => onFilterChange('method', "Experimental")}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Experimental</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="method"
                checked={filters.method === "Clinical"}
                onChange={() => onFilterChange('method', "Clinical")}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Clinical</span>
            </label>
          </div>
        </div>
        
        {/* Sorting */}
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sorting</label>
          <select
            id="sort"
            value={filters.sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="projectStartDesc">Project Start (Newest First)</option>
            <option value="projectStartAsc">Project Start (Oldest First)</option>
            <option value="universityAsc">University (A-Z)</option>
            <option value="universityDesc">University (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;