import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-50 px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
          {/* Logo and Title */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-8 leading-tight">
              PROFESSIONAL<br />
              EVENT PLANNER
            </h1>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">FIX</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-black font-medium">
            <li>
              <a href="#about" className="hover:text-red-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#clients" className="hover:text-red-600 transition-colors">
                Clients
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-red-600 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#social-media" className="hover:text-red-600 transition-colors">
                Social Media
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-600 transition-colors">
                Services & Products
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;