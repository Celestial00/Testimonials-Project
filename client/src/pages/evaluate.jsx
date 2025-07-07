import { useState } from "react";
import SlideOne from "../components/Slide1";
import SlideTwo from "../components/Slide2";
import SlideThree from "../components/Slide3";
import SlideFour from "../components/Slide4";
import SlideThankYou from "../components/SlideThankYou";
import { useSlideContext } from "../context/SlideContext";

export default function EvaluationForm() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    validateSlide1Ref,
    validateSlide2Ref,
    validateSlide3Ref,
    validateSlide4Ref,
    AllData,
  } = useSlideContext();
  const totalSlides = 5;


  const goNext = () => {
    if (currentSlide === 0 && validateSlide1Ref.current) {
      let isValid = validateSlide1Ref.current();
      if (!isValid) {
        console.log("Form not filled correctly");
        return;
      }
    }

    if (currentSlide === 1 && validateSlide2Ref.current) {
      let isValid = validateSlide2Ref.current();
      if (!isValid) {
        console.log("Form not filled correctly");
        return;
      }
    }

    if (currentSlide === 2 && validateSlide3Ref.current) {
      let isValid = validateSlide3Ref.current();
      if (!isValid) {
        console.log("Form not filled correctly");
        return;
      }
    }

    if (currentSlide === 3 && validateSlide4Ref.current) {
      let isValid = validateSlide4Ref.current();
      if (!isValid) {
        console.log("Form not filled correctly");
        return;
      }
    }

    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goBack = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const titles = [
    "Write your review",
    "Research & Supervision",
    "Workload & Environment",
    "Final Feedback",
  ];

  const descriptions = [
    "Tell us about your background and university.",
    "Share insights about guidance and topic relevance.",
    "Evaluate working conditions, resources, and balance.",
    "Give your overall thoughts and final remarks.",
  ];

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-200 p-6">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center ">
        <div className="w-full mb-4">
          <h2 className="text-5xl text-blue-700 mb-2 text-left">
            {titles[currentSlide]}
          </h2>
          <p className="text-md text-gray-700 text-left">
            {descriptions[currentSlide]}
          </p>
        </div>

        {/* Step Indicators */}
        <div className="w-full flex justify-between mb-2 px-1">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`text-sm font-medium ${
                index === currentSlide
                  ? "text-blue-700 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {index === 4 ? "Final" : `Step${index + 1}`}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-8 bg-blue-100 rounded-sm mb-6 overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Slide Content */}
        <div className="w-full bg-white text-gray-800 rounded-xl mb-6 px-6 py-8 shadow-md">
          {currentSlide === 0 && <SlideOne />}
          {currentSlide === 1 && <SlideTwo />}
          {currentSlide === 2 && <SlideThree />}
          {currentSlide === 3 && <SlideFour />}
          {currentSlide === 4 && <SlideThankYou />}
        </div>

        {/* Navigation Buttons */}

        {currentSlide === 4 ? (
                     <button
              onClick={goBack}
              disabled={currentSlide === 0}
              className={`px-6 py-3 rounded-md text-white transition ${
                currentSlide === 0
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Back
            </button>
        ) : (
          <div className="flex justify-between w-full">
            <button
              onClick={goBack}
              disabled={currentSlide === 0}
              className={`px-6 py-3 rounded-md text-white transition ${
                currentSlide === 0
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Back
            </button>
            <button
              onClick={goNext}
              disabled={currentSlide === totalSlides - 1}
              className={`px-6 py-3 rounded-md text-white transition ${"bg-blue-600 hover:bg-blue-700"}`}
            >
              {currentSlide === totalSlides - 2 ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
