export default function SlideTwo() {
  return (
    <div className="w-full space-y-6">

      {/* 1. Dissertation Title */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Dissertation Title
        </label>
        <textarea
          className="w-full p-3 rounded-[10px] border border-gray-300"
          rows={3}
          placeholder="Enter the full title of the dissertation"
        />
      </div>

      {/* 2. Project Status + Degree (side-by-side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Status */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Status
          </label>
          <div className="flex gap-4">
            {["finished", "consecutive", "aborted"].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input type="radio" name="project_status" value={status} />
                <span className="capitalize">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Degree */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Degree Level
          </label>
          <div className="flex gap-4">
            {["bachelor", "master", "thesis"].map((level) => (
              <label key={level} className="flex items-center gap-2">
                <input type="radio" name="degree_level" value={level} />
                <span className="capitalize">{level}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Time Frame: Start + End Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Start Date
          </label>
          <input
            type="date"
            className="w-full p-3 rounded-[10px] border border-gray-300"
            name="project_start_date"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project End Date
          </label>
          <input
            type="date"
            className="w-full p-3 rounded-[10px] border border-gray-300"
            name="project_end_date"
          />
        </div>
      </div>

      {/* 5. Degree */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Degree (e.g., MD, PhD, Dr. rer. nat.)
        </label>
        <input
          type="text"
          name="degree"
          className="w-full p-3 rounded-[10px] border border-gray-300"
          placeholder="Enter the academic degree"
        />
      </div>

      {/* 6. Research Methodology */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Research Methodology
        </label>
        <div className="flex gap-6">
          {["experimental", "statistical", "clinical"].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input type="radio" name="research_methodology" value={method} />
              <span className="capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 7. Author Count */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            First Author Count
          </label>
          <div className="flex gap-4 flex-wrap">
            {["0x", "1x", "2x", ">2x"].map((count) => (
              <label key={count} className="flex items-center gap-2">
                <input type="radio" name="first_author" value={count} />
                <span>{count}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Co-Author Count
          </label>
          <div className="flex gap-4 flex-wrap">
            {["0x", "1x", "2x", ">2x"].map((count) => (
              <label key={count} className="flex items-center gap-2">
                <input type="radio" name="co_author" value={count} />
                <span>{count}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Dissertation Format */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Dissertation Format
        </label>
        <div className="flex gap-6 mb-2 flex-wrap">
          {["paper", "cumulative", "monograph", "other"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="radio" name="dissertation_format" value={type} />
              <span className="capitalize">{type}</span>
            </label>
          ))}
        </div>
        <input
          type="text"
          name="form_other_specify"
          placeholder="If other, please specify"
          className="w-full p-3 rounded-[10px] border border-gray-300"
        />
      </div>

      {/* 9. Research Publication */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Is there a publication based on this research?
        </label>
        <div className="flex gap-4">
          {["yes", "no", "n/a"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input type="radio" name="research_publication" value={val} />
              <span className="capitalize">{val}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 10. Support & Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Statistician Available
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="statistician" value={val} />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Regular Meetings
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="meetings" value={val} />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 11. Working Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Doctoral Contract
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="contract" value={val} />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Work Mode
          </label>
          <div className="flex gap-4">
            {["remote", "on site", "hybrid"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="work_mode" value={val} />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 12. Training Provided */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Training Provided
        </label>
        <div className="flex gap-4">
          {["yes", "no", "n/a"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input type="radio" name="training" value={val} />
              <span className="capitalize">{val}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 13. Miscellaneous */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Remuneration
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="remuneration" value={val} />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Compulsory Free Semesters
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input type="radio" name="free_semesters" value={val} />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
