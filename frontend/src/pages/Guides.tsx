import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowRight, Search, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// const guides = [
//   { title: "Investing 101: Getting Started", category: "Beginner", icon: BookOpen },
//   { title: "Understanding Stock Market Basics", category: "Beginner", icon: TrendingUp },
//   { title: "How to Create a Diversified Portfolio", category: "Intermediate", icon: Lightbulb },
//   { title: "Retirement Planning Strategies", category: "Intermediate", icon: Lightbulb },
//   { title: "Advanced Options Trading Techniques", category: "Advanced", icon: TrendingUp },
//   { title: "Tax Strategies for Investors", category: "Advanced", icon: Lightbulb },
// ]

const guides = [
  { id: 1, title: "Investing 101: Getting Started", category: "Beginner", icon: BookOpen },
  { id: 2, title: "Understanding Stock Market Basics", category: "Beginner", icon: TrendingUp },
  { id: 3, title: "How to Create a Diversified Portfolio", category: "Intermediate", icon: Lightbulb },
  { id: 4, title: "Retirement Planning Strategies", category: "Intermediate", icon: Lightbulb },
  { id: 5, title: "Advanced Options Trading Techniques", category: "Advanced", icon: TrendingUp },
  { id: 6, title: "Tax Strategies for Investors", category: "Advanced", icon: Lightbulb },
];


export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter guides based on the search query
  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 relative z-10"
  >
    <div className="mb-10"></div> {/* Added space above */}
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Financial Guides</h1>
    <p className="text-xl mb-8 max-w-3xl">
      Explore our comprehensive guides to enhance your financial knowledge.
    </p>
    <div className="max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search guides..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
      </div>
    </div>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>


        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-4">
                    <guide.icon className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold">{guide.title}</h3>
                    <p className="text-sm text-gray-600">{guide.category}</p>
                  </div>
<a
  href={`/guides/${guide.id}`}
  className="inline-flex items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
>
  Read Guide
  <ArrowRight className="ml-2 h-4 w-4" />
</a>

                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 mb-8">Our team of financial experts is here to help. Reach out for personalized guidance.</p>
            <a href="/contact" className="inline-flex items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
