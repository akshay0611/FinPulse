import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Linkedin, Users, TrendingUp, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const teamMembers = [
  { name: 'Akshay Kumar', role: 'Director', image: 'https://assets.leetcode.com/users/akshay0611/avatar_1729924803.png', linkedin: 'https://www.linkedin.com/in/akshaykumar0611/' },
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">About FinPulse</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
              Your trusted companion for financial insights and information. We empower individuals and businesses with the knowledge they need to make informed financial decisions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 rounded-full text-lg font-semibold shadow-lg"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-50 to-transparent"></div>
        </section>

        {/* Mission, Values, and Culture Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-12">
                {['mission', 'values', 'culture'].map((tab) => (
                  <motion.button
                    key={tab}
                    className={`py-3 px-6 text-lg font-semibold rounded-full mx-2 ${
                      activeTab === tab ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-100'
                    }`}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-xl"
                >
                  {activeTab === 'mission' && (
                    <div>
                      <h2 className="text-3xl font-bold text-purple-600 mb-6">Our Mission</h2>
                      <p className="text-xl leading-relaxed text-gray-700">
                        At FinPulse, our mission is to provide timely and accurate financial news, government schemes updates, and investment insights to help our users stay informed and make empowered financial decisions.
                      </p>
                    </div>
                  )}
                  {activeTab === 'values' && (
                    <div>
                      <h2 className="text-3xl font-bold text-purple-600 mb-6">Our Values</h2>
                      <ul className="space-y-6">
                        {[
                          "Transparency in sharing financial information",
                          "Empowering our users with the latest financial trends",
                          "Commitment to providing up-to-date news and insights"
                        ].map((value, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start space-x-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-xl text-gray-700">{value}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeTab === 'culture' && (
                    <div>
                      <h2 className="text-3xl font-bold text-purple-600 mb-6">Our Culture</h2>
                      <p className="text-xl leading-relaxed text-gray-700 mb-8">
                        A dynamic environment for a dynamic team. We pour our souls into our craft, but that doesn't compromise on our ability to keep the work environment lively. We don't juggle work and life; we handle it like the Pros we are!
                      </p>
                      <Link to="/careers">
                        <motion.button 
                          className="px-8 py-4 bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 rounded-full text-lg font-semibold shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Join Our Team
                        </motion.button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-purple-600">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all duration-300 hover:scale-105">
                    <div className="w-40 h-40 mx-auto mb-6 relative overflow-hidden rounded-full border-4 border-purple-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-purple-600 mb-2">{member.name}</h3>
                    <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
                    >
                      <Linkedin className="w-6 h-6 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-purple-600">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105">
                      <h3 className="text-2xl font-semibold text-purple-600 mb-2">{milestone.year}</h3>
                      <p className="text-lg text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-purple-600">Our Global Presence</h2>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-semibold text-purple-600 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 mr-3" />
                Serving Users Worldwide
              </h3>
              <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
                FinPulse is proud to serve users across 5 countries, providing localized financial insights and empowering global financial decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['India', 'USA', 'UK', 'Singapore', 'Australia'].map((country, index) => (
                  <motion.span 
                    key={index} 
                    className="px-6 py-3 bg-purple-100 text-purple-600 rounded-full text-lg font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#D8B4FE" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {country}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

