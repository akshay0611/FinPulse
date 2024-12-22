import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import StartUpInsights from './components/StartUpInsights';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import GovernmentSchemesSection from './components/GovernmentSchemesSection';
import About from './pages/About'; 
import FAQ from './pages/FAQ';
import Contact from './pages/Contact'; // Import the Contact page
import Investments from './pages/Investments'; // Import the Investments page
import Blog from './pages/Blog'; 
import SignInSignUp from './pages/SignInSignUp'; // Import SignInSignUp page
import News from './pages/News'; // Adjust the path as needed
import Schemes from './pages/Schemes';
import WhyChooseUs from './components/WhyChooseUs'; // Import the new component
import Testimonial from './components/Testimonial'; // Import the Testimonial section
import BlogDetail from './pages/BlogDetail';
import ScrollToTopButton from './components/ScrollToTopButton.tsx';
import MarketPulse from './pages/MarketPulse'; // Import the Market Pulse page
import Careers from './pages/Careers'; // adjust the import path if necessary
import Press from './pages/Press'; 
import Guides from './pages/Guides'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WhyChooseUs /> 
              <NewsSection />
              <GovernmentSchemesSection />
              <Testimonial /> 
              <StartUpInsights />
              <Newsletter />
            </>
          } />
          <Route path="/about" element={<About />} /> 
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/signin-signup" element={<SignInSignUp />} />
          <Route path="/news" element={<News />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/blog/:id" element={<BlogDetail />} />  
          <Route path="/market-pulse" element={<MarketPulse />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
        <Footer />
        <ScrollToTopButton /> {/* Add the ScrollToTopButton */}
      </div>
    </Router>
  );
}

export default App;
