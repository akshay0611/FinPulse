import React from 'react';
import Navbar from '../components/Navbar'; // Assuming you already have a Navbar component
// Remove Footer import here as it's handled by Layout or elsewhere
// import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
      
      {/* About Us Section */}
      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[rgb(52,211,153)] mb-8 leading-tight">
            About Us
          </h1>
          
          <p className="text-xl text-[#333333] mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to FinPulse! At FinPulse, we strive to bring you the latest financial insights and news, all in one place. Our mission is to keep users informed and up-to-date with relevant financial information from across the globe. Whether you're a seasoned investor, a startup enthusiast, or someone looking to stay updated with government schemes, FinPulse has got you covered.
          </p>

          <h2 className="text-3xl font-semibold text-[rgb(52,211,153)] mb-6">What We Cover</h2>
          
          <p className="text-lg text-[#333333] mb-8 max-w-2xl mx-auto">
            We cover a wide range of financial categories, providing the most up-to-date and relevant information:
          </p>

          {/* Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[rgb(52,211,153)] mb-4">Finance News</h3>
              <p className="text-[#333333]">
                Stay informed with the most recent and impactful news in the financial sector. From stock market movements to global economic trends, we keep you updated.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[rgb(52,211,153)] mb-4">Government Schemes</h3>
              <p className="text-[#333333]">
                Our platform provides detailed insights into the latest government policies and initiatives that impact various sectors of the economy. Whether you're a business owner or an individual looking for opportunities, we help you navigate the maze of government schemes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[rgb(52,211,153)] mb-4">Startup Insights</h3>
              <p className="text-[#333333]">
                For entrepreneurs and startup enthusiasts, we offer exclusive insights into the startup ecosystem. Learn about emerging trends, funding opportunities, and successful startup stories to fuel your own journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[rgb(52,211,153)] mb-4">Daily News</h3>
              <p className="text-[#333333]">
                Get a quick and concise summary of the day’s top stories. We know you're busy, so we deliver bite-sized news that keeps you informed without overwhelming you.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-xl text-[#333333] leading-relaxed">
              At FinPulse, we believe that staying informed is key to making smarter financial decisions. Our goal is to provide timely and accurate information in a way that is accessible to everyone, from individual investors to large enterprises. We are dedicated to making financial literacy more attainable and equipping our users with the tools they need to thrive in an ever-changing world.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
