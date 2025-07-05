import React, { useEffect, useState } from "react";
import { useSlideContext } from "../context/SlideContext";

export default function SlideExact() {
  const gradeOptions = [1, 2, 3, 4, 5, 6];

  const { validateSlide4Ref, getDataSlide4, AllData } = useSlideContext();
  const SlideData = AllData[3];
  const [care, setCare] = useState(SlideData !== null ? SlideData.care : "");
  const [researchTopic, setResearchTopic] = useState(
    SlideData !== null ? SlideData.researchTopic : ""
  );
  const [workingGroup, setWorkingGroup] = useState(
    SlideData !== null ? SlideData.workingGroup : ""
  );
  const [recommendations, setRecommendations] = useState(
    SlideData !== null ? SlideData.recommendations : ""
  );
  const [improvement, setImprovement] = useState(
    SlideData !== null ? SlideData.improvement : ""
  );
  const [finalGrade, setFinalGrade] = useState(
    SlideData !== null ? SlideData.finalGrade : ""
  );
  const [dissertationGrade, setDissertationGrade] = useState(
    SlideData !== null ? SlideData.dissertationGrade : ""
  );
  const [name, setName] = useState(SlideData !== null ? SlideData.name : "");
  const [gender, setGender] = useState(
    SlideData !== null ? SlideData.gender : ""
  );
  const [email, setEmail] = useState(SlideData !== null ? SlideData.email : "");
  const [anonymousContact, setAnonymousContact] = useState(false);
  const [errors, setErrors] = useState({});

  const dependencyArr = [
    care,
    researchTopic,
    workingGroup,
    recommendations,
    improvement,
    finalGrade,
    dissertationGrade,
    name,
    gender,
    email,
    anonymousContact,
    errors,
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!care.trim()) newErrors.care = "Care field is required.";
    if (!researchTopic.trim())
      newErrors.researchTopic = "Research topic is required.";
    if (!workingGroup.trim())
      newErrors.workingGroup = "Working group is required.";
    if (!recommendations.trim())
      newErrors.recommendations = "Recommendations required.";
    if (!improvement.trim())
      newErrors.improvement = "Improvement suggestions required.";
    if (!finalGrade) newErrors.finalGrade = "Final grade is required.";
    if (!dissertationGrade)
      newErrors.dissertationGrade = "Dissertation grade is required.";
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!gender) newErrors.gender = "Gender is required.";
    if (!email.trim()) newErrors.email = "Email is required.";

    setErrors(newErrors);

    const data = {
      care,
      researchTopic,
      workingGroup,
      recommendations,
      improvement,
      finalGrade,
      dissertationGrade,
      name,
      gender,
      email,
      anonymousContact,
    };

    if (Object.keys(newErrors).length === 0) {
      getDataSlide4(data);
      return true;
    }
  };

  useEffect(() => {
    validateSlide4Ref.current = validateForm;
  }, dependencyArr);

  return (
    <div className="w-full space-y-6 max-w-screen">
      <label className="block font-medium text-gray-700">
        Care:
        <input
          type="text"
          value={care}
          onChange={(e) => setCare(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
        {errors.care && <p className="text-red-500 text-sm">{errors.care}</p>}
      </label>

      <label className="block font-medium text-gray-700">
        Research topic:
        <input
          type="text"
          value={researchTopic}
          onChange={(e) => setResearchTopic(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
        {errors.researchTopic && (
          <p className="text-red-500 text-sm">{errors.researchTopic}</p>
        )}
      </label>

      <label className="block font-medium text-gray-700">
        Working group / Chair:
        <input
          type="text"
          value={workingGroup}
          onChange={(e) => setWorkingGroup(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
        {errors.workingGroup && (
          <p className="text-red-500 text-sm">{errors.workingGroup}</p>
        )}
      </label>

      <label className="block font-medium text-gray-700">
        Recommendations / Tips:
        <input
          type="text"
          value={recommendations}
          onChange={(e) => setRecommendations(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
        {errors.recommendations && (
          <p className="text-red-500 text-sm">{errors.recommendations}</p>
        )}
      </label>

      <label className="block font-medium text-gray-700">
        Improvement requests / suggestions:
        <input
          type="text"
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          placeholder="____________"
          maxLength={12}
        />
        {errors.improvement && (
          <p className="text-red-500 text-sm">{errors.improvement}</p>
        )}
      </label>

      <label className="block font-medium text-gray-700">
        Final grade:
        <select
          value={finalGrade}
          onChange={(e) => setFinalGrade(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
        >
          <option value="" disabled></option>
          {gradeOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        {errors.finalGrade && (
          <p className="text-red-500 text-sm">{errors.finalGrade}</p>
        )}
      </label>

      <label className="block font-medium text-gray-700">
        Final grade of your dissertation:
        <select
          value={dissertationGrade}
          onChange={(e) => setDissertationGrade(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
        >
          <option value="" disabled></option>
          {gradeOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        {errors.dissertationGrade && (
          <p className="text-red-500 text-sm">{errors.dissertationGrade}</p>
        )}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
            placeholder="____________"
            maxLength={12}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </label>

        <label className="font-medium text-gray-700 flex-1">
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 rounded-[10px] border border-gray-300 mt-1"
          >
            <option value="" disabled></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </label>
      </div>

      <label className="font-medium text-gray-700 flex-1">
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-[10px] border border-gray-300 mt-1 mb-4"
          placeholder="____________"
          maxLength={12}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>

      <label className="block font-medium text-gray-700 flex items-center gap-2">
        <input
          type="checkbox"
          checked={anonymousContact}
          onChange={(e) => setAnonymousContact(e.target.checked)}
          className="w-4 h-4"
        />
        Show anonymous contact form under my report
      </label>
    </div>
  );
}
