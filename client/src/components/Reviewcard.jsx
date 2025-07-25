import { useNavigate } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const nav = useNavigate();

  const { universityDetails, projectDetails, evaluation, feedback } = review;

  const ViewData = [universityDetails, projectDetails, evaluation, feedback];
  const onView = () => {
    nav("/Evaluation", { state: { formData: ViewData, Tag: "user" } });
  };

  //   MethodOtherSpecify, formOtherSpecify

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onView()}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {universityDetails.selectedUniversity}
        </h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {universityDetails.selectedCountry}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-4 font-medium text-gray-600">
                Specialization
              </th>
              <th className="text-left py-2 px-4 font-medium text-gray-600">
                Format
              </th>
              <th className="text-left py-2 px-4 font-medium text-gray-600">
                Research method
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-700">
                {universityDetails.speciality}
              </td>
              <td className="py-2 px-4 text-gray-700">
                {projectDetails.dissertationFormat === "other"
                  ? projectDetails.MethodOtherSpecify
                  : projectDetails.dissertationFormat}
              </td>
              <td className="py-2 px-4 text-gray-700">
                {projectDetails.researchMethodology === "other"
                  ? projectDetails.MethodOtherSpecify
                  : projectDetails.researchMethodology  }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewCard;
