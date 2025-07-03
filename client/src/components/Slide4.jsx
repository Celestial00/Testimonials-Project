export default function SlideExact() {
  const gradeOptions = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full space-y-6 max-w-screen ">
      <label className="block font-medium text-gray-700">
        Care:
        <input
          type="text"
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
      </label>

      <label className="block font-medium text-gray-700">
        Research topic:
        <input
          type="text"
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
      </label>

      <label className="block font-medium text-gray-700">
        Working group / Chair:
        <input
          type="text"
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
      </label>

      <label className="block font-medium text-gray-700">
        Recommendations / Tips:
        <input
          type="text"
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
      </label>

      <label className="block font-medium text-gray-700">
        Improvement requests / suggestions:
        <input
          type="text"
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
      </label>

      <label className="block font-medium text-gray-700">
        Final grade:
        <select
          required
          defaultValue=""
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
        >
          <option value="" disabled></option>
          {gradeOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      <label className="block font-medium text-gray-700">
        Final grade of your dissertation:
        <select
          required
          defaultValue=""
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
        >
          <option value="" disabled></option>
          {gradeOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      <p className="text-sm text-gray-700">
        ① The following information will not be displayed publicly and is for
        internal administration purposes only.
      </p>

      <div className="flex items-center justify-between gap-16">
        <label className="font-medium text-gray-700 flex-1">
          Name:
          <input
            type="text"
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
            placeholder="____________"
            maxLength={12}
          />
        </label>

        <label className="font-medium text-gray-700 flex-1">
          Gender:
          <select
            required
            defaultValue=""
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
            aria-label="Gender"
          >
            <option value="" disabled></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </label>
      </div>

      <label className="font-medium text-gray-700 flex-1 ">
        Email:
        <input
          type="text"
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1 mb-4"
          placeholder="____________"
          maxLength={12}
        />
      </label>

      <label className="block font-medium text-gray-700 flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4" /> Show anonymous contact
        form under my report
      </label>
    </div>
  );
}
