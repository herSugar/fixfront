import React, { createContext, useContext, useState, ReactNode } from 'react';

// Theme configuration
interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

const redWhiteTheme: ThemeConfig = {
  colors: {
    primary: '#DC2626', // red-600
    secondary: '#FFFFFF', // white
    accent: '#EF4444', // red-500
    background: '#FEF2F2', // red-50
    surface: '#FFFFFF',
    text: {
      primary: '#1F2937', // gray-800
      secondary: '#6B7280', // gray-500
      accent: '#DC2626', // red-600
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
};

// Theme context
const ThemeContext = createContext<ThemeConfig | undefined>(undefined);

// Hook to use theme
export const useTheme = (): ThemeConfig => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeWrapper');
  }
  return context;
};

// ThemeWrapper component
interface ThemeWrapperProps {
  children: ReactNode;
  className?: string;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children, className = '' }) => {
  return (
    <ThemeContext.Provider value={redWhiteTheme}>
      <div className={`min-h-screen bg-red-50 ${className}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Example components using the theme
const Header: React.FC = () => {
  const theme = useTheme();
  
  return (
    <header className="bg-white shadow-lg border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">Red White App</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Card: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const theme = useTheme();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};

const Button: React.FC<{ 
  children: ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Hero: React.FC = () => {
  const [count, setCount] = useState(0);
  
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Welcome to Red White Theme
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Sebuah tema yang elegan dengan kombinasi warna merah dan putih yang memberikan kesan modern dan profesional.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary" onClick={() => setCount(count + 1)}>
            Click Me ({count})
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 Red White Theme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App component demonstrating the theme
const App: React.FC = () => {
  return (
    <ThemeWrapper>
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the beautiful red and white theme components built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            title="Modern Design" 
            content="Desain yang modern dan elegan dengan kombinasi warna merah dan putih yang memberikan kesan profesional dan menarik."
          />
          <Card 
            title="Responsive Layout" 
            content="Layout yang responsif dan dapat beradaptasi dengan berbagai ukuran layar, dari mobile hingga desktop."
          />
          <Card 
            title="TypeScript Support" 
            content="Dukungan penuh untuk TypeScript dengan type safety yang membantu pengembangan yang lebih robust."
          />
          <Card 
            title="Tailwind CSS" 
            content="Menggunakan utility-first CSS framework yang memungkinkan styling yang cepat dan konsisten."
          />
          <Card 
            title="Theme Context" 
            content="Sistem tema yang dapat digunakan di seluruh aplikasi dengan React Context API."
          />
          <Card 
            title="Reusable Components" 
            content="Komponen yang dapat digunakan kembali dengan props yang fleksibel dan mudah dikustomisasi."
          />
        </div>
      </main>
      
      <Footer />
    </ThemeWrapper>
  );
};

export default App;