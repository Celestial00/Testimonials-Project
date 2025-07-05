import { useNavigate } from "react-router-dom";
import { useSlideContext } from "../context/SlideContext";

export default function SlideThankYou() {
  const nav = useNavigate();
  const { AllData } = useSlideContext();

  return (
    <div className="w-full bg-transparent text-center py-12 space-y-6">
      <h2 className="text-5xl font-bold text-blue-700">Thank You!</h2>
      <p className="text-gray-700 text-lg max-w-xl mx-auto">
        Your testimonial has been successfully submitted. We truly appreciate
        your feedback!
      </p>

      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-[10px] hover:bg-blue-700 transition"
        onClick={() => {
          nav("/Evaluation", { state: { formData: AllData } });
        }}
      >
        See Your Testimonial
      </button>
    </div>
  );
}
