import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-16 fixed w-full z-50'>
      <nav className="border-gray-200 px-4 py-2.5 bg-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-700">Portfolio</span>
          </Link>
          <ul className="flex p-4 space-x-8 md:space-x-12">
            <li className="text-gray-700 hover:text-blue-600"><Link to="/">Home</Link></li>
            <li className="text-gray-700 hover:text-blue-600"><Link to="/about">About</Link></li>
            <li className="text-gray-700 hover:text-blue-600"><Link to="/projects">Projects</Link></li>
            <li className="text-gray-700 hover:text-blue-600"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
