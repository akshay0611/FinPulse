import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Linkedin, Users, TrendingUp, Award, Globe } from 'lucide-react';

const teamMembers = [
  { name: 'Akshay Kumar', role: 'Director', image: '/placeholder.svg', linkedin: '#' },
  { name: 'Priya Sharma', role: 'Chief Financial Officer', image: '/placeholder.svg', linkedin: '#' },
  { name: 'Rahul Mehta', role: 'Head of Technology', image: '/placeholder.svg', linkedin: '#' },
  { name: 'Anita Desai', role: 'Chief Marketing Officer', image: '/placeholder.svg', linkedin: '#' },
];

const milestones = [
  { year: 2018, event: 'FinPulse founded' },
  { year: 2019, event: 'Launched mobile app' },
  { year: 2020, event: 'Reached 1 million users' },
  { year: 2021, event: 'Expanded to 5 countries' },
  { year: 2022, event: 'Introduced AI-powered insights' },
  { year: 2023, event: 'Awarded "Best FinTech Startup"' },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About FinPulse</h1>
            <p className="text-xl mb-8 max-w-3xl">
              FinPulse is your trusted companion for financial insights and information. We provide timely news, updates on government schemes, and investment ideas to empower individuals and businesses with the knowledge they need to make informed financial decisions.
            </p>
            <button className="px-6 py-3 bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300 rounded-lg text-lg">
              Learn More
            </button>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Mission, Values, and Culture Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <div className="grid w-full grid-cols-3 mb-8">
                <button
                  className={`py-2 px-4 text-lg ${activeTab === 'mission' ? 'bg-purple-600 text-white' : 'bg-transparent text-purple-600'}`}
                  onClick={() => setActiveTab('mission')}
                >
                  Our Mission
                </button>
                <button
                  className={`py-2 px-4 text-lg ${activeTab === 'values' ? 'bg-purple-600 text-white' : 'bg-transparent text-purple-600'}`}
                  onClick={() => setActiveTab('values')}
                >
                  Our Values
                </button>
                <button
                  className={`py-2 px-4 text-lg ${activeTab === 'culture' ? 'bg-purple-600 text-white' : 'bg-transparent text-purple-600'}`}
                  onClick={() => setActiveTab('culture')}
                >
                  Our Culture
                </button>
              </div>
              {activeTab === 'mission' && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold text-purple-600">Our Mission</h2>
                  <p className="text-lg mt-4">
                    At FinPulse, our mission is to provide timely and accurate financial news, government schemes updates, and investment insights to help our users stay informed and make empowered financial decisions.
                  </p>
                </div>
              )}
              {activeTab === 'values' && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold text-purple-600">Our Values</h2>
                  <ul className="space-y-4 mt-4">
                    {[
                      "Transparency in sharing financial information.",
                      "Empowering our users with the latest financial trends.",
                      "Commitment to providing up-to-date news and insights."
                    ].map((value, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                        <span className="text-lg">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'culture' && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold text-purple-600">Our Culture</h2>
                  <p className="text-lg mt-4 mb-6">
                    A dynamic environment for a dynamic team. We pour our souls into our craft, but that doesn't compromise on our ability to keep the work environment lively. We don't juggle work and life; we handle it like the Pros we are!
                  </p>
                  <button className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 rounded-lg text-lg">
                    Work With Us
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-lg text-gray-600">{member.role}</p>
                    <div className="mt-4">
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center text-purple-600 hover:text-purple-800"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold">{milestone.year}</h3>
                      <p>{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

{/* Global Presence Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Our Global Presence</h2>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-semibold text-purple-600 flex items-center justify-center">
        <Globe className="w-6 h-6 mr-2" />
        Serving Users Worldwide
      </h3>

      <p className="text-lg mb-6">
        FinPulse is proud to serve users across 5 countries, providing localized financial insights and empowering global financial decisions.
      </p>

      <div className="flex justify-center space-x-4">
        {['India', 'USA', 'UK', 'Singapore', 'Australia'].map((country, index) => (
          <span key={index} className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
            {country}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
