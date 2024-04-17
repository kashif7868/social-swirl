import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../asset/css/footer.css";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className="site-footer bg-Color text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="col-span-1 md:col-span-2">
            <section
              id="news-letter"
              className="bg-gradient-to-r from-blue-900 to-blue-600 py-6 px-8 rounded-lg"
            >
              <div className="newstext mb-4">
                <h4 className="text-lg font-bold mb-2">
                  Sign Up For Newsletters
                </h4>
                <p>
                  Get email updates about our latest{" "}
                  <span className="text-blue-300">updates!</span>
                </p>
              </div>
              <div className="form flex flex-col md:flex-row items-center md:items-stretch space-y-4 md:space-x-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="border-2 border-gray-300 p-2 rounded-md flex-grow"
                />
                <button className="btn-use-signUp bg-blue-500 text-white px-4 py-2 rounded-md md:w-auto">
                  Sign Up
                </button>
              </div>
            </section>
          </div>

          {/* Resources Section */}
          <div className="col-span-1">
            <h6 className="site-footer-title mb-4">Resources</h6>
            <ul className="site-footer-links">
              <li>
                <Link to="/" className="site-footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="site-footer-link">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="#" className="site-footer-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="site-footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Language Dropdown Section */}
          <div className="col-span-1">
            {/* Contact Info Section */}
            <div className="col-span-1">
              <h6 className="site-footer-title mb-4">Information</h6>
              <p className="text-white mb-2">
                <a href="tel:305-240-9671" className="site-footer-link">
                  305-240-9671
                </a>
              </p>
              <p className="text-white">
                <a href="mailto:info@company.com" className="site-footer-link">
                  info@company.com
                </a>
              </p>
            </div>
            <h6 className="site-footer-title mb-4">Language</h6>
            <div className="dropdown">
              <button
                className="btn-use-signUp bg-blue-600 text-white px-4 py-2 rounded-md w-full md:w-auto"
                onClick={toggleDropdown}
              >
                English
              </button>
              {/* Conditional rendering of dropdown menu */}
              {isDropdownOpen && (
                <ul className="dropdown-menu mt-2">
                  <li>
                    <button
                      className="dropdown-item text-gray-800"
                      type="button"
                    >
                      Thai
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-gray-800"
                      type="button"
                    >
                      Myanmar
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-gray-800"
                      type="button"
                    >
                      Arabic
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          &copy; 2048 Topic Listing Center. Design:{" "}
          <Link to="#" rel="nofollow" target="_blank" className="text-blue-500">
            Swirl Marketing
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
