import { useNavigate } from "react-router-dom";
import { useSlideContext } from "../context/SlideContext";

export default function SlideThankYou() {
  const nav = useNavigate();
  const { AllData } = useSlideContext();

  async function addDissertation(dataArray) {
    if (!Array.isArray(dataArray) || dataArray.length !== 4) {
      throw new Error("Data must be an array of exactly 4 objects.");
    }

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/Testimonials/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataArray),
      }
    );

    nav("/ThankYou");

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to add dissertation");
    return data;
  }

  return (
    <div className="w-full bg-transparent text-center py-12 space-y-6">
      <p className="text-gray-700 text-lg max-w-xl mx-auto">
        Your review has been registered we you urge to please check your provide
        information by clicking See your review button than click the submit
        button. We truly appreciate your feedback!
      </p>

      <div className=" flex justify-center items-center gap-3">
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-[10px] hover:bg-blue-700 transition"
          onClick={() => {
            nav("/Evaluation", { state: { formData: AllData } });
          }}
        >
          See Your Review
        </button>

        <button
          onClick={() => addDissertation(AllData)}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-[10px] hover:bg-blue-700 transition"
        >
          {" "}
          Submit Review{" "}
        </button>
      </div>
    </div>
  );
}
