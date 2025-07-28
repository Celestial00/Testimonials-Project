import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 font-poppins transition-all  duration-300 
        ${scrolled ? "md:bg-white" : "md:bg-transparent"} bg-white`}
    >
      <div className="flex justify-between items-center max-w-screen px-4 md:px-6 py-4 mx-auto">
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
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-white px-6 py-4 flex flex-col space-y-4 z-40 shadow-md">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/reviews"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            All Reviews
          </Link>
          <Link
            to="/rankings"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Our Ranking
          </Link>
          <Link
            to="/FAQ"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link to="/evaluate" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition w-full text-left">
              Evaluate
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
