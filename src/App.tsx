import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import StartUpInsights from './components/StartUpInsights';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import GovernmentSchemesSection from './components/GovernmentSchemesSection';
import About from './pages/About'; // Import the About page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NewsSection />
              <GovernmentSchemesSection />
              <StartUpInsights />
              <Newsletter />
            </>
          } />
          <Route path="/about" element={<About />} /> {/* Add route for About page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
