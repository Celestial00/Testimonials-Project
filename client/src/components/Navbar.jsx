import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-6 py-4 font-poppins transition-all duration-300 ${
        scrolled ? "bg-white " : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-screen mx-auto">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-800">Testimonials</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>

          <Link
            to="/reviews"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            All Reviews
          </Link>

          <Link
            to="/rankings"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Our Ranking
          </Link>

          <Link
            to="/FAQ"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            FAQ
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link to="/evaluate">
            <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition">
              Evaluate
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex bg-white rounded flex-col items-start gap-4 mt-4 px-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Evaluate
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            All Reviews
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Our Ranking
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            FAQ
          </Link>

          <Link to="/evaluate">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition w-full text-left">
              Write Testimonial
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
