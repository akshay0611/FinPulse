import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[rgb(52,211,153)] mb-6">About Us</h1>
          <p className="text-xl text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
            FinPulse is your trusted companion for financial guidance and investment strategies. We aim to empower
            individuals and businesses with the knowledge, tools, and resources to make informed decisions and secure
            their financial future.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <img 
              src="https://via.placeholder.com/400" 
              alt="Team Image"
              className="rounded-lg shadow-xl max-w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At FinPulse, our mission is to provide comprehensive financial advice and insights that help our
              clients achieve financial stability and growth. We aim to be the leading resource for individuals looking
              to take control of their financial destiny.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-[rgb(52,211,153)]">✔️</span> Integrity in all of our dealings.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[rgb(52,211,153)]">✔️</span> Transparency and clear communication.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[rgb(52,211,153)]">✔️</span> Commitment to customer success.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-4">
                John is the visionary behind FinPulse. With years of experience in financial services, he leads the
                team with a passion for helping others achieve their financial goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Chief Financial Officer</p>
              <p className="text-gray-500 mt-4">
                Jane oversees FinPulse's financial operations and ensures we stay on the right track. Her expertise
                in managing finances has been crucial to the company's success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alex Lee</h3>
              <p className="text-gray-600">Head of Marketing</p>
              <p className="text-gray-500 mt-4">
                Alex drives the marketing strategies at FinPulse. With a strong background in digital marketing, he
                ensures that our mission and values are shared with the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default About;
