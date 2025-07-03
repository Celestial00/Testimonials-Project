import { ClipboardList, Star, SearchCheck, BadgeCheck } from "lucide-react";

import { useNavigate, Link } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/evaluate");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-200 flex items-center justify-center px-4 py-10">
      <div className="text-center w-full max-w-6xl px-4">
        <h1 className="text-2xl mt-20 sm:text-3xl md:text-5xl font-bold text-gray-900 mb-10 sm:mb-12">
          Evaluation For more transparency on the way to becoming a Dr. med.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-center">
          {/* Box 1 */}

          <div
            onClick={handleChange}
            className="bg-white shadow-xl cursor-pointer p-8 sm:p-10 w-full h-48 sm:h-56 rounded-2xl flex flex-col items-center justify-center hover:shadow-2xl transition"
          >
            <p className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
              Evaluate
            </p>
            <ClipboardList size={36} className="text-blue-500" />
          </div>

          {/* Box 2 */}
          <Link to="/reviews">
            <div className="bg-white shadow-xl cursor-pointer p-8 sm:p-10 w-full h-48 sm:h-56 rounded-2xl flex flex-col items-center justify-center hover:shadow-2xl transition">
              <p className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                All Reviews
              </p>
              <SearchCheck size={36} className="text-blue-500" />
            </div>
          </Link>

          {/* Box 3 */}

          <Link to="rankings">
            <div className="bg-white shadow-xl cursor-pointer p-8 sm:p-10 w-full h-48 sm:h-56 rounded-2xl flex flex-col items-center justify-center hover:shadow-2xl transition">
              <p className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                Our Ranking
              </p>
              <Star size={36} className="text-blue-500" />
            </div>
          </Link>
          {/* Box 4 */}
          <div className="bg-white shadow-xl cursor-pointer p-8 sm:p-10 w-full h-48 sm:h-56 rounded-2xl flex flex-col items-center justify-center hover:shadow-2xl transition">
            <p className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
              Certified
            </p>
            <BadgeCheck size={36} className="text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
