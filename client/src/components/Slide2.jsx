import { useEffect, useState } from "react";
import { useSlideContext } from "../context/SlideContext";

export default function SlideTwo() {
  const { validateSlide2Ref, getDataSlide2, AllData } = useSlideContext();
  const SlideData = AllData[1];
  const [dissertationTitle, setDissertationTitle] = useState(
    SlideData !== null ? SlideData.dissertationTitle : ""
  );

  const [researchMethodology, setResearchMethodology] = useState(
    SlideData !== null ? SlideData.researchMethodology : ""
  );

  const [MethodOtherSpecify, setMethodOtherSpecify] = useState(
    SlideData !== null ? SlideData.formOtherSpecify : ""
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

  const [contract, setContract] = useState(
    SlideData !== null ? SlideData.contract : ""
  );
  const [workMode, setWorkMode] = useState(
    SlideData !== null ? SlideData.workMode : ""
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
    researchMethodology,
    dissertationFormat,
    formOtherSpecify,
    researchPublication,
    contract,
    workMode,
    remuneration,
    freeSemesters,
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!dissertationTitle.trim())
      newErrors.dissertationTitle = "Dissertation title is required.";

    if (!researchMethodology)
      newErrors.researchMethodology = "Research methodology is required.";

    if (!dissertationFormat)
      newErrors.dissertationFormat = "Dissertation format is required.";
    if (dissertationFormat === "other" && !formOtherSpecify.trim())
      newErrors.formOtherSpecify = "Please specify the dissertation format.";
    if (!researchPublication)
      newErrors.researchPublication =
        "Research publication status is required.";

    if (!contract) newErrors.contract = "Doctoral contract info is required.";
    if (!workMode) newErrors.workMode = "Work mode is required.";

    if (!remuneration)
      newErrors.remuneration = "Remuneration info is required.";
    if (!freeSemesters)
      newErrors.freeSemesters = "Compulsory free semesters info is required.";

    setErrors(newErrors);

    const data = {
      dissertationTitle,
      researchMethodology,
      MethodOtherSpecify,
      dissertationFormat,
      formOtherSpecify,
      researchPublication,
      contract,
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

      {/* 5. Research Methodology */}
      {/* 5. Research Methodology */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Research Methodology
        </label>
        <div className="flex gap-4 flex-wrap">
          {["experimental", "statistical", "clinical", "other"].map(
            (method) => (
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
            )
          )}
        </div>

        {/* If "other" is selected, show input box */}
        {researchMethodology === "other" && (
          <input
            type="text"
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-2"
            placeholder="If other, please specify"
            value={MethodOtherSpecify}
            onChange={(e) => setMethodOtherSpecify(e.target.value)}
          />
        )}

        {errors.researchMethodology && (
          <p className="text-red-500 text-sm">{errors.researchMethodology}</p>
        )}
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
