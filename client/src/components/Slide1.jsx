import { useEffect, useState } from "react";
import MockData from "../MockData/MockData.json";
import { useSlideContext } from "../context/SlideContext";

export default function SlideOne({ Validate }) {
  const { countries } = MockData;
  const [avaliableDept, setAvaliableDept] = useState([]);
  const { validateSlide1Ref, getDataSlide1, AllData } = useSlideContext();
  const Slide1Data = AllData[0];
  const [selectedCountry, setSelectedCountry] = useState(
    Slide1Data !== null ? Slide1Data.selectedCountry : ""
  );
  const [selectedCity, setSelectedCity] = useState(
    Slide1Data !== null ? Slide1Data.selectedCity : ""
  );
  const [selectedUniversity, setSelectedUniversity] = useState(
    Slide1Data !== null ? Slide1Data.selectedUniversity : ""
  );
  const [workingGroup, setWorkingGroup] = useState(
    Slide1Data !== null ? Slide1Data.workingGroup : ""
  );
  const [department, setDepartment] = useState(
    Slide1Data !== null ? Slide1Data.department : ""
  );
  const [speciality, setSpeciality] = useState(
    Slide1Data !== null ? Slide1Data.speciality : ""
  );

  const [errors, setErrors] = useState({});

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity("");
    setSelectedUniversity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedUniversity("");
  };

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  const selectedCountryData = countries.find((c) => c.name === selectedCountry);
  const selectedCityData = selectedCountryData?.cities.find(
    (c) => c.name === selectedCity
  );

  const validateForm = () => {
    const newErrors = {};
    if (!selectedCountry) newErrors.selectedCountry = "Country is required.";
    if (!selectedCity) newErrors.selectedCity = "City is required.";
    if (!selectedUniversity)
      newErrors.selectedUniversity = "Institution is required.";

    if (!department) newErrors.department = "Department is required.";
    if (!speciality) newErrors.speciality = "Speciality is required.";

    setErrors(newErrors);

    const Data = {
      selectedCountry,
      selectedCity,
      selectedUniversity,
      workingGroup,
      department,
      speciality,
    };

    if (Object.keys(newErrors).length === 0) {
      getDataSlide1(Data);
      console.log(AllData);
      return true;
    }
  };

  useEffect(() => {
    const getDepts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3300/api/dept/Departments",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const Results = await response.json();
        setAvaliableDept(Results.Data);
      } catch (err) {
        console.log("Err:", err);
      }
    };

    getDepts();
  }, []);

  useEffect(() => {
    validateSlide1Ref.current = validateForm;
  }, [
    selectedCountry,
    selectedCity,
    selectedUniversity,
    workingGroup,
    department,
    speciality,
  ]);

  const inputClass = (hasError) =>
    `w-full p-3 rounded-[10px] border ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;


  return (
    <div className="w-full">
      {/* Row 1: Country and City */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">
            Country
          </label>
          <select
            className={inputClass(errors.selectedCountry)}
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              Select Country
            </option>
            {countries
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
          </select>
          {errors.selectedCountry && (
            <p className="text-red-500 text-sm mt-1">
              {errors.selectedCountry}
            </p>
          )}
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">City</label>
          <select
            className={inputClass(errors.selectedCity)}
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedCountry}
          >
            <option value="" disabled>
              Select City
            </option>
            {selectedCountryData?.cities
              ?.slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
          </select>
          {errors.selectedCity && (
            <p className="text-red-500 text-sm mt-1">{errors.selectedCity}</p>
          )}
        </div>
      </div>

      {/* Row 2: Institution */}
      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Institution
        </label>
        <select
          className={inputClass(errors.selectedUniversity)}
          value={selectedUniversity}
          onChange={handleUniversityChange}
          disabled={!selectedCity}
        >
          <option value="" disabled>
            Select Institution
          </option>
          {selectedCityData?.universities.map((uni, index) => (
            <option key={index} value={uni.name}>
              {uni.name}
            </option>
          ))}
        </select>
        {errors.selectedUniversity && (
          <p className="text-red-500 text-sm mt-1">
            {errors.selectedUniversity}
          </p>
        )}
      </div>

      {/* Row 3: Working Group */}
      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Working Group
        </label>
        <input
          type="text"
          placeholder="Enter working group"
          className={inputClass(errors.workingGroup)}
          value={workingGroup}
          onChange={(e) => setWorkingGroup(e.target.value)}
        />
        {errors.workingGroup && (
          <p className="text-red-500 text-sm mt-1">{errors.workingGroup}</p>
        )}
      </div>

      {/* Row 4: Department and Speciality */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">
            Department
          </label>
          <select
            className={inputClass(errors.department)}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="" disabled>
              Select Department
            </option>
            {avaliableDept.map((dept, i) => (
              <option key={i}>{dept.Name}</option>
            ))}
          </select>
          {errors.department && (
            <p className="text-red-500 text-sm mt-1">{errors.department}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="block mb-1  font-medium text-gray-700">
            Speciality
          </label>
          <input
            className={inputClass(errors.speciality)}
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            placeholder="Select Speciality"
          ></input>
          {errors.speciality && (
            <p className="text-red-500 text-sm mt-1">{errors.speciality}</p>
          )}
        </div>
      </div>

      {/* Validation Button */}
    </div>
  );
}
