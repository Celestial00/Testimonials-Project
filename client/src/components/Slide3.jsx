export default function SlideThree() {
  const options = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full space-y-6">
      {/* Case Section */}
      <div>
        <strong className="block mb-4 text-gray-900">Case</strong>

        <label className="block mb-4 font-medium text-gray-700">
          Communication / Availability:
          <select
            required
            defaultValue=""
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          >
            <option value="" disabled>
              [▼ Select 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-4 font-medium text-gray-700">
          Working group / team:
          <select
            required
            defaultValue=""
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          >
            <option value="" disabled>
              [▼ Select 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Project & Organization Section */}
      <div>
        <strong className="block mb-4 text-gray-900">Project &amp; Organization</strong>

        <label className="block mb-4 font-medium text-gray-700">
          Structure / Planning / Implementation:
          <select
            required
            defaultValue=""
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          >
            <option value="" disabled>
              [▼ Select 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-4 font-medium text-gray-700">
          Scope of work:
          <select
            required
            defaultValue=""
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          >
            <option value="" disabled>
              [▼ Select 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Overall impression Section */}
      <div>
        <strong className="block mb-4 text-gray-900">Overall impression</strong>

        <label className="block mb-4 font-medium text-gray-700">
          Overall grade:
          <select
            required
            defaultValue=""
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          >
            <option value="" disabled>
              [▼ Select 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
