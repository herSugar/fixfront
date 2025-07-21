import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
// import PortfolioPage from './components/PortfolioPage';
// import SocialMediaPage from './components/SocialMediaPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
          {/* <Route path="/social-media" element={<SocialMediaPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;