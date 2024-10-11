import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
        <div className="text-lg font-semibold mb-2 md:mb-0">
          Portfolio
        </div>
        <span className="text-sm text-gray-300 mb-2 md:mb-0">
          Copyright &copy; {year} Portfolio. All Rights Reserved.
        </span>
        <div className="flex flex-col md:flex-row items-center">
          <span className="font-semibold text-gray-300 mr-2">Quick Links:</span>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-400 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 transition duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
