import { useEffect, useState } from "react";
import { useSlideContext } from "../context/SlideContext";

export default function SlideTwo() {
  const { validateSlide2Ref, getDataSlide2, AllData } = useSlideContext();
  const SlideData = AllData[1];
  const [dissertationTitle, setDissertationTitle] = useState(
    SlideData !== null ? SlideData.dissertationTitle : ""
  );
  const [projectStatus, setProjectStatus] = useState(
    SlideData !== null ? SlideData.projectStatus : ""
  );
  const [degreeLevel, setDegreeLevel] = useState(
    SlideData !== null ? SlideData.degreeLevel : ""
  );
  const [projectStartDate, setProjectStartDate] = useState(
    SlideData !== null ? SlideData.projectStartDate : ""
  );
  const [projectEndDate, setProjectEndDate] = useState(
    SlideData !== null ? SlideData.projectEndDate : ""
  );
  const [degree, setDegree] = useState(
    SlideData !== null ? SlideData.degree : ""
  );
  const [researchMethodology, setResearchMethodology] = useState(
    SlideData !== null ? SlideData.researchMethodology : ""
  );
  const [firstAuthor, setFirstAuthor] = useState(
    SlideData !== null ? SlideData.firstAuthor : ""
  );
  const [coAuthor, setCoAuthor] = useState(
    SlideData !== null ? SlideData.coAuthor : ""
  );
  const [dissertationFormat, setDissertationFormat] = useState(
    SlideData !== null ? SlideData.dissertationFormat : ""
  );
  const [formOtherSpecify, setFormOtherSpecify] = useState(
    SlideData !== null ? SlideData.formOtherSpecify : ""
  );
  const [researchPublication, setResearchPublication] = useState(
    SlideData !== null ? SlideData.researchPublication : ""
  );
  const [statistician, setStatistician] = useState(
    SlideData !== null ? SlideData.statistician : ""
  );
  const [meetings, setMeetings] = useState(
    SlideData !== null ? SlideData.meetings : ""
  );
  const [contract, setContract] = useState(
    SlideData !== null ? SlideData.contract : ""
  );
  const [workMode, setWorkMode] = useState(
    SlideData !== null ? SlideData.workMode : ""
  );
  const [training, setTraining] = useState(
    SlideData !== null ? SlideData.training : ""
  );
  const [remuneration, setRemuneration] = useState(
    SlideData !== null ? SlideData.remuneration : ""
  );
  const [freeSemesters, setFreeSemesters] = useState(
    SlideData !== null ? SlideData.freeSemesters : ""
  );
  const [errors, setErrors] = useState({});

  const DependencyArr = [
    dissertationTitle,
    projectStatus,
    degreeLevel,
    projectStartDate,
    projectEndDate,
    degree,
    researchMethodology,
    firstAuthor,
    coAuthor,
    dissertationFormat,
    formOtherSpecify,
    researchPublication,
    statistician,
    meetings,
    contract,
    workMode,
    training,
    remuneration,
    freeSemesters,
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!dissertationTitle.trim())
      newErrors.dissertationTitle = "Dissertation title is required.";
    if (!projectStatus) newErrors.projectStatus = "Project status is required.";
    if (!degreeLevel) newErrors.degreeLevel = "Degree level is required.";
    if (!projectStartDate)
      newErrors.projectStartDate = "Project start date is required.";
    if (!projectEndDate)
      newErrors.projectEndDate = "Project end date is required.";
    if (!degree.trim()) newErrors.degree = "Degree is required.";
    if (!researchMethodology)
      newErrors.researchMethodology = "Research methodology is required.";
    if (!firstAuthor) newErrors.firstAuthor = "First author count is required.";
    if (!coAuthor) newErrors.coAuthor = "Co-author count is required.";
    if (!dissertationFormat)
      newErrors.dissertationFormat = "Dissertation format is required.";
    if (dissertationFormat === "other" && !formOtherSpecify.trim())
      newErrors.formOtherSpecify = "Please specify the dissertation format.";
    if (!researchPublication)
      newErrors.researchPublication =
        "Research publication status is required.";
    if (!statistician)
      newErrors.statistician = "Statistician availability is required.";
    if (!meetings) newErrors.meetings = "Meeting frequency is required.";
    if (!contract) newErrors.contract = "Doctoral contract info is required.";
    if (!workMode) newErrors.workMode = "Work mode is required.";
    if (!training) newErrors.training = "Training info is required.";
    if (!remuneration)
      newErrors.remuneration = "Remuneration info is required.";
    if (!freeSemesters)
      newErrors.freeSemesters = "Compulsory free semesters info is required.";

    setErrors(newErrors);

    const data = {
      dissertationTitle,
      projectStatus,
      degreeLevel,
      projectStartDate,
      projectEndDate,
      degree,
      researchMethodology,
      firstAuthor,
      coAuthor,
      dissertationFormat,
      formOtherSpecify,
      researchPublication,
      statistician,
      meetings,
      contract,
      workMode,
      training,
      remuneration,
      freeSemesters,
    };

    if (Object.keys(newErrors).length === 0) {
      getDataSlide2(data);
      return true;
    }
  };

  useEffect(() => {
    validateSlide2Ref.current = validateForm;
  }, DependencyArr);

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
          value={dissertationTitle}
          onChange={(e) => setDissertationTitle(e.target.value)}
        />
        {errors.dissertationTitle && (
          <p className="text-red-500 text-sm">{errors.dissertationTitle}</p>
        )}
      </div>

      {/* 2. Project Status + Degree Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Status
          </label>
          <div className="flex gap-4">
            {["finished", "consecutive", "aborted"].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="project_status"
                  value={status}
                  checked={projectStatus === status}
                  onChange={(e) => setProjectStatus(e.target.value)}
                />
                <span className="capitalize">{status}</span>
              </label>
            ))}
          </div>
          {errors.projectStatus && (
            <p className="text-red-500 text-sm">{errors.projectStatus}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Degree Level
          </label>
          <div className="flex gap-4">
            {["bachelor", "master", "thesis"].map((level) => (
              <label key={level} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="degree_level"
                  value={level}
                  checked={degreeLevel === level}
                  onChange={(e) => setDegreeLevel(e.target.value)}
                />
                <span className="capitalize">{level}</span>
              </label>
            ))}
          </div>
          {errors.degreeLevel && (
            <p className="text-red-500 text-sm">{errors.degreeLevel}</p>
          )}
        </div>
      </div>

      {/* 3. Time Frame */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project Start Date
          </label>
          <input
            type="date"
            className="w-full p-3 rounded-[10px] border border-gray-300"
            value={projectStartDate}
            onChange={(e) => setProjectStartDate(e.target.value)}
          />
          {errors.projectStartDate && (
            <p className="text-red-500 text-sm">{errors.projectStartDate}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Project End Date
          </label>
          <input
            type="date"
            className="w-full p-3 rounded-[10px] border border-gray-300"
            value={projectEndDate}
            onChange={(e) => setProjectEndDate(e.target.value)}
          />
          {errors.projectEndDate && (
            <p className="text-red-500 text-sm">{errors.projectEndDate}</p>
          )}
        </div>
      </div>

      {/* 4. Degree */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Degree</label>
        <input
          type="text"
          className="w-full p-3 rounded-[10px] border border-gray-300"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        {errors.degree && (
          <p className="text-red-500 text-sm">{errors.degree}</p>
        )}
      </div>

      {/* 5. Research Methodology */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Research Methodology
        </label>
        <div className="flex gap-4 flex-wrap">
          {["experimental", "statistical", "clinical"].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input
                type="radio"
                name="research_methodology"
                value={method}
                checked={researchMethodology === method}
                onChange={(e) => setResearchMethodology(e.target.value)}
              />
              <span className="capitalize">{method}</span>
            </label>
          ))}
        </div>
        {errors.researchMethodology && (
          <p className="text-red-500 text-sm">{errors.researchMethodology}</p>
        )}
      </div>

      {/* 6. Author Counts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            First Author Count
          </label>
          <div className="flex gap-4 flex-wrap">
            {["0x", "1x", "2x", ">2x"].map((count) => (
              <label key={count} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="first_author"
                  value={count}
                  checked={firstAuthor === count}
                  onChange={(e) => setFirstAuthor(e.target.value)}
                />
                <span>{count}</span>
              </label>
            ))}
          </div>
          {errors.firstAuthor && (
            <p className="text-red-500 text-sm">{errors.firstAuthor}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Co-Author Count
          </label>
          <div className="flex gap-4 flex-wrap">
            {["0x", "1x", "2x", ">2x"].map((count) => (
              <label key={count} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="co_author"
                  value={count}
                  checked={coAuthor === count}
                  onChange={(e) => setCoAuthor(e.target.value)}
                />
                <span>{count}</span>
              </label>
            ))}
          </div>
          {errors.coAuthor && (
            <p className="text-red-500 text-sm">{errors.coAuthor}</p>
          )}
        </div>
      </div>

      {/* 7. Dissertation Format */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Dissertation Format
        </label>
        <div className="flex gap-6 mb-2 flex-wrap">
          {["paper", "cumulative", "monograph", "other"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="dissertation_format"
                value={type}
                checked={dissertationFormat === type}
                onChange={(e) => setDissertationFormat(e.target.value)}
              />
              <span className="capitalize">{type}</span>
            </label>
          ))}
        </div>
        {dissertationFormat === "other" && (
          <input
            type="text"
            className="w-full p-3 rounded-[10px] border border-gray-300"
            placeholder="If other, please specify"
            value={formOtherSpecify}
            onChange={(e) => setFormOtherSpecify(e.target.value)}
          />
        )}
        {errors.dissertationFormat && (
          <p className="text-red-500 text-sm">{errors.dissertationFormat}</p>
        )}
        {errors.formOtherSpecify && (
          <p className="text-red-500 text-sm">{errors.formOtherSpecify}</p>
        )}
      </div>

      {/* 8. Research Publication */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Is there a publication based on this research?
        </label>
        <div className="flex gap-4">
          {["yes", "no", "n/a"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="research_publication"
                value={val}
                checked={researchPublication === val}
                onChange={(e) => setResearchPublication(e.target.value)}
              />
              <span className="capitalize">{val}</span>
            </label>
          ))}
        </div>
        {errors.researchPublication && (
          <p className="text-red-500 text-sm">{errors.researchPublication}</p>
        )}
      </div>

      {/* 9. Support & Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Statistician Available
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="statistician"
                  value={val}
                  checked={statistician === val}
                  onChange={(e) => setStatistician(e.target.value)}
                />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
          {errors.statistician && (
            <p className="text-red-500 text-sm">{errors.statistician}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Regular Meetings
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="meetings"
                  value={val}
                  checked={meetings === val}
                  onChange={(e) => setMeetings(e.target.value)}
                />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
          {errors.meetings && (
            <p className="text-red-500 text-sm">{errors.meetings}</p>
          )}
        </div>
      </div>

      {/* 10. Working Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Doctoral Contract
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contract"
                  value={val}
                  checked={contract === val}
                  onChange={(e) => setContract(e.target.value)}
                />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
          {errors.contract && (
            <p className="text-red-500 text-sm">{errors.contract}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Work Mode
          </label>
          <div className="flex gap-4">
            {["remote", "on site", "hybrid"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="work_mode"
                  value={val}
                  checked={workMode === val}
                  onChange={(e) => setWorkMode(e.target.value)}
                />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
          {errors.workMode && (
            <p className="text-red-500 text-sm">{errors.workMode}</p>
          )}
        </div>
      </div>

      {/* 11. Training Provided */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Training Provided
        </label>
        <div className="flex gap-4">
          {["yes", "no", "n/a"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="training"
                value={val}
                checked={training === val}
                onChange={(e) => setTraining(e.target.value)}
              />
              <span className="capitalize">{val}</span>
            </label>
          ))}
        </div>
        {errors.training && (
          <p className="text-red-500 text-sm">{errors.training}</p>
        )}
      </div>

      {/* 12. Miscellaneous */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Remuneration
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="remuneration"
                  value={val}
                  checked={remuneration === val}
                  onChange={(e) => setRemuneration(e.target.value)}
                />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
          {errors.remuneration && (
            <p className="text-red-500 text-sm">{errors.remuneration}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Compulsory Free Semesters
          </label>
          <div className="flex gap-4">
            {["yes", "no", "n/a"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="free_semesters"
                  value={val}
                  checked={freeSemesters === val}
                  onChange={(e) => setFreeSemesters(e.target.value)}
                />
                <span className="capitalize">{val}</span>
              </label>
            ))}
          </div>
          {errors.freeSemesters && (
            <p className="text-red-500 text-sm">{errors.freeSemesters}</p>
          )}
        </div>
      </div>

     
    </div>
  );
}
