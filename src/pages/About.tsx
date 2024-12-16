import React from 'react';
import Navbar from '../components/Navbar'; // Assuming you already have a Navbar component
import Footer from '../components/Footer'; // Your existing Footer component

const About = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
      
      {/* About Us Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Welcome to FinPulse! At FinPulse, we strive to bring you the latest financial insights and news, all in one place. Our mission is to keep users informed and up-to-date with relevant financial information from across the globe. Whether you're a seasoned investor, a startup enthusiast, or someone looking to stay updated with government schemes, FinPulse has got you covered.
          </p>

          <h2 className="text-3xl font-semibold text-[#2c3e50] mb-6">What We Cover</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We cover a wide range of financial categories, providing the most up-to-date and relevant information:
          </p>

          {/* Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Finance News</h3>
              <p className="text-gray-700">
                Stay informed with the most recent and impactful news in the financial sector. From stock market movements to global economic trends, we keep you updated.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Government Schemes</h3>
              <p className="text-gray-700">
                Our platform provides detailed insights into the latest government policies and initiatives that impact various sectors of the economy. Whether you're a business owner or an individual looking for opportunities, we help you navigate the maze of government schemes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Startup Insights</h3>
              <p className="text-gray-700">
                For entrepreneurs and startup enthusiasts, we offer exclusive insights into the startup ecosystem. Learn about emerging trends, funding opportunities, and successful startup stories to fuel your own journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Daily News</h3>
              <p className="text-gray-700">
                Get a quick and concise summary of the day’s top stories. We know you're busy, so we deliver bite-sized news that keeps you informed without overwhelming you.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              At FinPulse, we believe that staying informed is key to making smarter financial decisions. Our goal is to provide timely and accurate information in a way that is accessible to everyone, from individual investors to large enterprises. We are dedicated to making financial literacy more attainable and equipping our users with the tools they need to thrive in an ever-changing world.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
