import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

type Scheme = {
  title: string;
  description: string;
  imageUrl: string;
  exploreUrl: string;
  category: string;
};

const categories = [
  "All Categories",
  "Agriculture, Rural & Environment",
  "Banking, Financial Services and Insurance",
  "Business & Entrepreneurship",
  "Education & Learning",
  "Health & Wellness",
  "Housing & Shelter",
  "Public Safety, Law & Justice",
  "Science, IT & Communications",
  "Skills & Employment",
  "Social welfare & Empowerment",
  "Sports & Culture",
  "Transport & Infrastructure",
  "Travel & Tourism",
  "Utility & Sanitation",
  "Women and Child",
];

const Schemes = () => {
  const [schemesData, setSchemesData] = useState<Scheme[]>([]); // Type added
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch('https://fin-test-2m8d.vercel.app/api/schemes');
        if (!response.ok) {
          throw new Error('Failed to fetch schemes');
        }
        const data = await response.json();
        setSchemesData(data.schemes);
      } catch (err) {
        console.error('Error fetching schemes:', err);
      }
    };

    fetchSchemes();
  }, []);

  const filteredSchemes =
    selectedCategory === "All Categories"
      ? schemesData
      : schemesData.filter((scheme) => scheme.category === selectedCategory);

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />

      <main className="flex-grow">
        {/* Section for Blog Introduction */}
        <section className="mt-12 py-16 bg-gradient-to-b from-blue-600 to-purple-600 text-white">
  <div className="container mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Available Schemes</h1>
    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
      Discover a variety of schemes across categories to find the best options for your needs.
    </p>
  </div>
</section>



        {/* Dropdown for Category Selection */}
        <div className="container mx-auto px-6 mt-12">
          <div className="flex justify-between items-center">
            <label htmlFor="category" className="text-lg font-semibold text-gray-700">
              Filter by Category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-full px-6 py-3 text-lg text-gray-700 bg-white shadow-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              {categories.map((category, index) => (
                <option key={index} value={category} className="text-lg">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid of Schemes */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredSchemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex flex-col justify-between h-full group"
            >
              {scheme.imageUrl && (
                <img
                  src={scheme.imageUrl}
                  alt={scheme.title}
                  className="w-full h-64 object-cover rounded-lg mb-6 transition-transform transform group-hover:scale-105 group-hover:opacity-90"
                />
              )}
              <div className="flex-grow">
                {/* Badge above the title */}
                <span className="inline-block bg-emerald-500 text-white font-medium text-xs uppercase tracking-wide rounded-full px-4 py-2 mb-6">
                  {scheme.category}
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#34d399]">{scheme.title}</h2>
                <p className="text-gray-600 mb-6">{scheme.description}</p>
              </div>
              <a
                href={scheme.exploreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 text-white hover:bg-emerald-600 font-semibold py-3 px-8 rounded-full transition-all mt-auto w-full text-center"
              >
                Explore More
              </a>
            </div>
          ))}
        </div>

        {/* No Results Found */}
        {filteredSchemes.length === 0 && (
          <div className="text-center text-gray-600 mt-12 text-lg">
            No schemes available for the selected category.
          </div>
        )}
      </main>
    </div>
  );
};

export default Schemes;
