import { useState } from "react";
// import MockData from "../MockData/MockData.json";

// SlideOne.js
export default function SlideOne() {
  return (
    <div className="w-full">
      {/* Row 1: Country and City */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">
            Country
          </label>
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select Country
            </option>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">City</label>
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select City
            </option>
            <option>New York</option>
            <option>Toronto</option>
            <option>London</option>
          </select>
        </div>
      </div>

      {/* Row 2: Institution */}
      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Institution
        </label>
        <select
          className="w-full p-3 rounded-[10px] border border-gray-300"
          defaultValue=""
        >
          <option value="" disabled>
            Select Institution
          </option>
          <option>Harvard</option>
          <option>MIT</option>
          <option>Oxford</option>
        </select>
      </div>

      {/* Row 3: Working Group */}
      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Working Group
        </label>
        <input
          type="text"
          placeholder="Enter working group"
          className="w-full p-3 rounded-[10px] border border-gray-300"
        />
      </div>

      {/* Row 4: Department and Speciality */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">
            Department
          </label>
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select Department
            </option>
            <option>Computer Science</option>
            <option>Engineering</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">
            Speciality
          </label>
          <select
            className="w-full p-3 rounded-[10px] border border-gray-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select Speciality
            </option>
            <option>Machine Learning</option>
            <option>Data Science</option>
          </select>
        </div>
      </div>
    </div>
  );
}
