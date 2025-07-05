import { useLocation, useNavigate } from "react-router-dom";

export default function EvaluationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Accept data from any known keys
  const {
    review,
    feedback,
    evaluation,
    formData,
    data,
  } = location.state || {};

  const finalData = review || feedback || evaluation || formData || data;

  if (!finalData)
    return (
      <p className="text-center mt-10 text-gray-600">
        No evaluation data available.
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-4 py-12">
      <div className="bg-white my-10 rounded-lg shadow-xl max-w-7xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700">Evaluation Overview</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back
          </button>
        </div>

        <Section title="1. Dissertation project" data={[
          { label: "Country", value: finalData.country },
          { label: "City", value: finalData.city || "-" },
          { label: "University", value: finalData.university },
          { label: "Specialization", value: finalData.specialization || finalData.specification },
          { label: "Working group / Chair", value: finalData.workingGroup || "-" },
        ]} />

        <Section title="2. Details" data={[
          { label: "Title", value: finalData.title },
          { label: "Status", value: finalData.status },
          { label: "Degree", value: finalData.degree },
          { label: "Project start", value: finalData.projectStart },
          { label: "Project end", value: finalData.projectEnd || "-" },
          { label: "Research method", value: finalData.researchMethod },
          { label: "Compulsory sabbatical", value: finalData.compulsorySabbatical || "No" },
          { label: "Form", value: finalData.form },
          { label: "Publications", value: finalData.publications || "No" },
          { label: "First author", value: finalData.firstAuthor || "No" },
          { label: "Co-author", value: finalData.coAuthor || "No" },
          { label: "Statistician available", value: finalData.statisticianAvailable || "No" },
          { label: "Further training", value: finalData.furtherTraining || "No" },
          { label: "Doctoral contract", value: finalData.doctoralContract || "No" },
          { label: "Remuneration", value: finalData.remuneration || "No" },
          { label: "Working method", value: finalData.workingMethod },
          { label: "Regular meetings and support", value: finalData.regularMeetings || "No" },
          { label: "Final grade", value: finalData.finalGrade || "-" },
        ]} />

        <Section title="3. Ratings" data={[
          { label: "Cars", value: finalData.carsRating || "-" },
          { label: "Communication / Availability", value: finalData.communicationRating || "-" },
          { label: "Working group / team", value: finalData.teamRating || "-" },
          { label: "Structure / Planning / Implementation", value: finalData.planningRating || "-" },
          { label: "Scope of work", value: finalData.scopeRating || "-" },
          { label: "Satisfaction", value: finalData.satisfactionRating || "-" },
          { label: "Overall grade", value: finalData.overallGrade || "-" },
        ]} />

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Comments</h3>
          <Comment title="Cars" value={finalData.carsComment} />
          <Comment title="Research topic" value={finalData.researchTopicComment} />
          <Comment title="Working group / Chair" value={finalData.workingGroupComment} />
          <Comment title="Recommendations / Tips" value={finalData.recommendations} />
          <Comment title="Improvement requests / suggestions" value={finalData.improvements} />
        </div>
      </div>
    </div>
  );
}

const Section = ({ title, data }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <table className="w-full border-collapse">
      <tbody>
        {data.map(({ label, value }) => (
          <tr key={label} className="border-b border-gray-200">
            <td className="py-2 px-4 font-medium text-gray-600 w-1/3">{label}</td>
            <td className="py-2 px-4 text-gray-700">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Comment = ({ title, value }) => (
  <div className="mb-4">
    <h4 className="font-medium text-gray-700 mb-1">{title}</h4>
    <p className="text-gray-600">{value || "No comments"}</p>
  </div>
);
