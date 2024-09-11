// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Packages from './pages/Packages';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Footer from './components/Footer'; 
import ArtSpace from './pages/ArtSpace';
import './App.css'; // Import your global styles

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // State for Dark Mode

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {/* Apply a global class based on the dark mode state */}
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {/* Navigation Bar */}
        <NavigationBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        {/* Routes for all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artspace" element={<ArtSpace />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
