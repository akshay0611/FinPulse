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
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/Privacy-Policy';
import TermsOfService from './pages/Terms-Of-Service';
import CookiePolicy from './pages/Cookie-Policy';
import Disclaimer from './pages/Disclaimer';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import Calculators from './pages/Calculators';
import { SIPCalculator } from './calculators/Sip';
import { LumpsumCalculator } from './calculators/Lumpsum';
import { SWPCalculator } from './calculators/Swp';
import { MFCalculator } from './calculators/Mf';
import { SSYCalculator } from './calculators/Ssy';
import { PPFCalculator } from './calculators/Ppf';
import { EPFCalculator } from './calculators/Epf';
import { FDCalculator } from './calculators/Fd';
import { RDCalculator } from './calculators/Rd';
import { NPSCalculator } from './calculators/Nps';
import { HRA } from './calculators/Hra';
import { RetirementCalculator } from './calculators/Retirement';
import { EMI } from './calculators/Emi';
import { CarLoanEmi } from './calculators/CarLoanEmi';
import { HomeLoanEmi } from './calculators/HomeLoanEmi';
import { SimpleInterest } from './calculators/SimpleInterest';
import { CompoundInterest } from './calculators/CompoundInterest';
import { Nsc } from './calculators/Nsc';
import { StepUpSip } from './calculators/StepUpSip';
import { IncomeTax } from './calculators/IncomeTax';
import { Gratuity } from './calculators/Gratuity';
import { Apy } from './calculators/Apy';
import { Cagr } from './calculators/Cagr';
import { Gst } from './calculators/Gst';
import { FlatVsReducingRate } from './calculators/FlatVsReducingRate';
import { Brokerage } from './calculators/Brokerage';
import { Margin } from './calculators/Margin';
import { Tds } from './calculators/Tds';
import { Salary } from './calculators/Salary';
import { Inflation } from './calculators/Inflation';
import { PostOfficeMIS } from './calculators/PostOfficeMIS';
import { ScssCalculator } from './calculators/ScssCalculator';
import { StockAverageCalculator } from './calculators/StockAverageCalculator';

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
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/sip" element={<SIPCalculator />} />
          <Route path="/lumpsum" element={<LumpsumCalculator />} />
          <Route path="/swp" element={<SWPCalculator />} />
          <Route path="/mf" element={<MFCalculator />} />
          <Route path="/ssy" element={<SSYCalculator />} />
          <Route path="/ppf" element={<PPFCalculator />} />
          <Route path="/epf" element={<EPFCalculator />} />
          <Route path="/fd" element={<FDCalculator />} />
          <Route path="/rd" element={<RDCalculator />} />
          <Route path="/nps" element={<NPSCalculator />} />
          <Route path="/hra" element={<HRA />} />
          <Route path="/retirement" element={<RetirementCalculator />} />
          <Route path="/emi" element={<EMI />} />
          <Route path="/car-loan-emi" element={<CarLoanEmi />} />
          <Route path="/home-loan-emi" element={<HomeLoanEmi />} />
          <Route path="/simple-interest" element={<SimpleInterest />} />
          <Route path="/compound-interest" element={<CompoundInterest />} />
          <Route path="/nsc" element={<Nsc />} />
          <Route path="/step-up-sip" element={<StepUpSip />} />
          <Route path="/income-tax" element={<IncomeTax />} />
          <Route path="/gratuity" element={<Gratuity />} />
          <Route path="/apy" element={<Apy />} />
          <Route path="/cagr" element={<Cagr />} /> 
          <Route path="/gst" element={<Gst />} />
          <Route path="/flat-vs-reducing-rate" element={<FlatVsReducingRate />} />
          <Route path="/brokerage" element={<Brokerage />} />
          <Route path="/margin" element={<Margin />} />
          <Route path="/tds" element={<Tds />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/inflation" element={<Inflation />} />
          <Route path="/post-office-mis" element={<PostOfficeMIS />} />
          <Route path="/scss-calculator" element={<ScssCalculator />} />
          <Route path="/stock-average-calculator" element={<StockAverageCalculator />} />
        </Routes>
        <Footer />
        <ScrollToTopButton /> 
      </div>
    </Router>
  );
}

export default App;
