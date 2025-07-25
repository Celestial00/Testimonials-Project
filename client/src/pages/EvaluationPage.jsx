import { useLocation, useNavigate } from "react-router-dom";

export default function EvaluationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Accept data from any known keys
  const { formData, Tag } = location.state || {};

  const raw = formData;

  console.log(raw);

  if (!raw)
    return (
      <p className="text-center mt-10 text-gray-600">
        No evaluation data available.
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-4 py-12">
      <div className=" my-10  max-w-7xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700">
            Evaluation Overview
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back
          </button>
        </div>

        <Section
          title="1. Dissertation project"
          data={[
            { label: "Country", value: raw[0]?.selectedCountry },
            { label: "City", value: raw[0]?.selectedCity || "-" },
            { label: "University", value: raw[0]?.selectedUniversity },
            { label: "Specialization", value: raw[0]?.speciality },
            {
              label: "Working group / Chair",
              value: raw[0]?.workingGroup || "-",
            },
          ]}
        />

        <Section
          title="2. Details"
          data={[
            { label: "Title", value: raw[1]?.dissertationTitle },
            {
              label: "Research method",
              value:
                raw[1]?.researchMethodology === "other"
                  ? raw[1]?.MethodOtherSpecify
                  : raw[1]?.researchMethodology,
            },

            {
              label: "Form",
              value:
                raw[1]?.dissertationFormat === "other"
                  ? raw[1]?.formOtherSpecify
                  : raw[1]?.dissertationFormat,
            },
            {
              label: "Publications",
              value: raw[1]?.researchPublication || "No",
            },

            {
              label: "Statistician available",
              value: raw[1]?.statistician || "No",
            },
            { label: "Further training", value: raw[1]?.training || "No" },
            { label: "Doctoral contract", value: raw[1]?.contract || "No" },
            { label: "Remuneration", value: raw[1]?.remuneration || "No" },

            {
              label: "Regular meetings and support",
              value: raw[1]?.meetings || "No",
            },
          ]}
        />

        <Section
          title="3. Ratings"
          data={[
            { label: "Cars", value: raw[3]?.care || "-" },
            {
              label: "Communication / Availability",
              value: raw[2]?.communication || "-",
            },
            {
              label: "Working group / team",
              value: raw[2]?.workingGroup || "-",
            },
            {
              label: "Structure / Planning / Implementation",
              value: raw[2]?.structurePlanning || "-",
            },
            { label: "Scope of work", value: raw[2]?.scopeOfWork || "-" },

            { label: "Overall grade", value: raw[2]?.overallGrade || "-" },
          ]}
        />

        <div className="mt-10 mb-8  bg-white  shadow-lg  rounded-lg p-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            4. Comments
          </h3>
          <Comment title="Cars" value={raw[3]?.care} />
          <Comment title="Research topic" value={raw[3]?.researchTopic} />
          <Comment title="Working group / Chair" value={raw[3]?.workingGroup} />
        </div>

        {raw[3].anonymousContact === true && Tag === "user" ? (
          " "
        ) : (
          <Section
            title="3. User Information"
            data={[
              { label: "Name", value: raw[3]?.name || "-" },
              {
                label: "Email",
                value: raw[3]?.email || "-",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

const Section = ({ title, data }) => (
  <div className="mb-8  bg-white  shadow-lg rounded-lg p-10  ">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <table className="w-full border-collapse">
      <tbody>
        {data.map(({ label, value }) => (
          <tr key={label} className="border-b border-gray-200">
            <td className="py-2 px-4 font-medium text-gray-600 w-1/3">
              {label}
            </td>
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
