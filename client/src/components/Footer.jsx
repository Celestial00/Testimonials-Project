import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">FAQ</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="hover:text-blue-400 transition">
                General Questions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                Who We Are
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Privacy</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/policy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact Form
              </Link>
            </li>
          
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} MedTransparency™. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
