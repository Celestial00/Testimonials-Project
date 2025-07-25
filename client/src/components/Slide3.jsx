import React, { useEffect, useState } from "react";
import { useSlideContext } from "../context/SlideContext";

export default function SlideThree() {
  const options = [1, 2, 3, 4, 5, 6];

  const { validateSlide3Ref, getDataSlide3, AllData } = useSlideContext();
  const SlideData = AllData[2];
  const [communication, setCommunication] = useState(
    SlideData !== null ? SlideData.communication : ""
  );
  const [workingGroup, setWorkingGroup] = useState(
    SlideData !== null ? SlideData.workingGroup : ""
  );
  const [structurePlanning, setStructurePlanning] = useState(
    SlideData !== null ? SlideData.structurePlanning : ""
  );
  const [scopeOfWork, setScopeOfWork] = useState(
    SlideData !== null ? SlideData.scopeOfWork : ""
  );

  const [errors, setErrors] = useState({});

  const DependencyArr = [
    communication,
    workingGroup,
    structurePlanning,
    scopeOfWork,
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!communication)
      newErrors.communication = "Please select a communication grade.";
    if (!workingGroup)
      newErrors.workingGroup = "Please select a working group grade.";
    if (!structurePlanning)
      newErrors.structurePlanning = "Please select a structure/planning grade.";
    if (!scopeOfWork)
      newErrors.scopeOfWork = "Please select a scope of work grade.";

    setErrors(newErrors);

    const data = {
      communication,
      workingGroup,
      structurePlanning,
      scopeOfWork,
      overallGrade:
        ((Number(communication) || 0) +
          (Number(workingGroup) || 0) +
          (Number(structurePlanning) || 0) +
          (Number(scopeOfWork) || 0)) /
        4,
    };

    if (Object.keys(newErrors).length === 0) {
      getDataSlide3(data);
      return true;
    }
  };

  useEffect(() => {
    validateSlide3Ref.current = validateForm;
  }, DependencyArr);

  return (
    <div className="w-full space-y-6">
      {/* Case Section */}
      <div>
        <strong className="block mb-4 text-gray-900">Case</strong>

        <label className="block mb-4 font-medium text-gray-700">
          Communication / Availability:
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
            value={communication}
            onChange={(e) => setCommunication(e.target.value)}
          >
            <option value="" disabled>
              [ 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          {errors.communication && (
            <p className="text-red-500 text-sm mt-1">{errors.communication}</p>
          )}
        </label>

        <label className="block mb-4 font-medium text-gray-700">
          Working group / team:
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
            value={workingGroup}
            onChange={(e) => setWorkingGroup(e.target.value)}
          >
            <option value="" disabled>
              [ 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          {errors.workingGroup && (
            <p className="text-red-500 text-sm mt-1">{errors.workingGroup}</p>
          )}
        </label>
      </div>

      {/* Project & Organization Section */}
      <div>
        <strong className="block mb-4 text-gray-900">
          Project &amp; Organization
        </strong>

        <label className="block mb-4 font-medium text-gray-700">
          Structure / Planning / Implementation:
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
            value={structurePlanning}
            onChange={(e) => setStructurePlanning(e.target.value)}
          >
            <option value="" disabled>
              [ 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          {errors.structurePlanning && (
            <p className="text-red-500 text-sm mt-1">
              {errors.structurePlanning}
            </p>
          )}
        </label>

        <label className="block mb-4 font-medium text-gray-700">
          Scope of work:
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
            value={scopeOfWork}
            onChange={(e) => setScopeOfWork(e.target.value)}
          >
            <option value="" disabled>
              [ 1-6]
            </option>
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          {errors.scopeOfWork && (
            <p className="text-red-500 text-sm mt-1">{errors.scopeOfWork}</p>
          )}
        </label>
      </div>

      {/* Overall Impression Section */}
      <div>
        <strong className="block mb-4 text-gray-900">Overall impression</strong>

        <label className="block mb-4 font-medium text-gray-700">
          Overall grade:
          <p>
            {((Number(communication) || 0) +
              (Number(workingGroup) || 0) +
              (Number(structurePlanning) || 0) +
              (Number(scopeOfWork) || 0)) /
              4}
          </p>
        </label>
      </div>
    </div>
  );
}
