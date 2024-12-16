import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import StartUpInsights from './components/StartUpInsights';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <NewsSection />
      <StartUpInsights/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;