import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function EvaluationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const review = location.state?.review;

  useEffect(() => {
    if (!review) {
      // Optional: redirect back if no data is found
      navigate("/"); // or show an error
    }
  }, [review, navigate]);

  if (!review) return <p className="text-center mt-10 text-gray-600">No review data available.</p>;

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
          { label: "Country", value: review.country },
          { label: "City", value: review.city || "-" },
          { label: "University", value: review.university },
          { label: "Specialization", value: review.specialization || review.specification },
          { label: "Working group / Chair", value: review.workingGroup || "-" },
        ]} />

        <Section title="2. Details" data={[
          { label: "Title", value: review.title },
          { label: "Status", value: review.status },
          { label: "Degree", value: review.degree },
          { label: "Project start", value: review.projectStart },
          { label: "Project end", value: review.projectEnd || "-" },
          { label: "Research method", value: review.researchMethod },
          { label: "Compulsory sabbatical", value: review.compulsorySabbatical || "No" },
          { label: "Form", value: review.form },
          { label: "Publications", value: review.publications || "No" },
          { label: "First author", value: review.firstAuthor || "No" },
          { label: "Co-author", value: review.coAuthor || "No" },
          { label: "Statistician available", value: review.statisticianAvailable || "No" },
          { label: "Further training", value: review.furtherTraining || "No" },
          { label: "Doctoral contract", value: review.doctoralContract || "No" },
          { label: "Remuneration", value: review.remuneration || "No" },
          { label: "Working method", value: review.workingMethod },
          { label: "Regular meetings and support", value: review.regularMeetings || "No" },
          { label: "Final grade", value: review.finalGrade || "-" },
        ]} />

        <Section title="3. Ratings" data={[
          { label: "Cars", value: review.carsRating || "-" },
          { label: "Communication / Availability", value: review.communicationRating || "-" },
          { label: "Working group / team", value: review.teamRating || "-" },
          { label: "Structure / Planning / Implementation", value: review.planningRating || "-" },
          { label: "Scope of work", value: review.scopeRating || "-" },
          { label: "Satisfaction", value: review.satisfactionRating || "-" },
          { label: "Overall grade", value: review.overallGrade || "-" },
        ]} />

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Comments</h3>
          <Comment title="Cars" value={review.carsComment} />
          <Comment title="Research topic" value={review.researchTopicComment} />
          <Comment title="Working group / Chair" value={review.workingGroupComment} />
          <Comment title="Recommendations / Tips" value={review.recommendations} />
          <Comment title="Improvement requests / suggestions" value={review.improvements} />
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
