import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotatingWords = [
    'PROFESSIONAL',
    'CREATIVE',
    'INNOVATIVE',
    'EXCEPTIONAL',
    'MEMORABLE',
  ];

  // Navigation items with their routes
  const navigationItems = [
    { name: 'About', path: '/', section: 'about' },
    { name: 'Clients', path: '/', section: 'clients' },
    { name: 'Contact', path: '/', section: 'contact' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services & Products', path: '/services' },
  ];

  const handleNavigation = (item: typeof navigationItems[0]) => {
    if (item.section && item.path === '/') {
      // If it's a section on the homepage
      if (location.pathname !== '/') {
        // Navigate to homepage first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on homepage, just scroll to section
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navigate to different page
      navigate(item.path);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start w-full max-w-none">
        {/* Logo and Title - Make it clickable to go home */}
        <div className="flex-1 text-left mb-4 sm:mb-0">
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <span
              className={`inline-block transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform -translate-y-2'
              }`}
              style={{ color: '#dc2626' }}
            >
              {rotatingWords[currentWordIndex]}
            </span>
            <br />
            EVENT PLANNER
          </h1>
        </div>

        {/* Logo - Make it clickable to go home */}
        <div className="flex-shrink-0">
          <div 
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <img
              src="/img/FixIndonesiaLogo.png"
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 w-full">
        <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2 text-black font-medium text-sm sm:text-base">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item)}
                className="relative group hover:text-red-600 transition-colors py-2 bg-transparent border-none cursor-pointer"
              >
                <span className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;