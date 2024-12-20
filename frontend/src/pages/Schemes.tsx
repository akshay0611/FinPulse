import React, { useState, useEffect } from 'react';


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
        const response = await fetch('https://fin-test-2m8d.vercel.app/api/blog');
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
        <div className="bg-white min-h-screen text-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mt-16 mb-6 text-gray-900">Available Schemes</h1>
            <p className="text-lg mb-8 text-gray-700">
              Explore the various schemes that can help you achieve your goals across various sectors.
            </p>
    
            {/* Dropdown for Category Selection */}
            <div className="mb-8">
              <label htmlFor="category" className="text-gray-700 font-semibold mr-4">
                Filter by Category:
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded-md px-4 py-2 text-gray-700 focus:outline-none"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
    
            {/* Grid of Schemes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSchemes.map((scheme, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 flex flex-col justify-between h-full group"
                >
                  {scheme.imageUrl && (
                    <img
                      src={scheme.imageUrl}
                      alt={scheme.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform group-hover:scale-105 group-hover:opacity-90"
                    />
                  )}
                  <div>
                    {/* Badge above the title */}
                    <span className="inline-block bg-emerald-500 text-white font-medium text-xs uppercase tracking-wide rounded-full px-3 py-1 mb-4">
                      {scheme.category}
                    </span>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#34d399]">{scheme.title}</h2>
                    <p className="text-gray-600 mb-4">{scheme.description}</p>
                  </div>
                  <a
                    href={scheme.exploreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-500 text-white hover:bg-emerald-600 font-bold py-2 px-6 rounded-lg transition-all mt-auto max-w-xs w-full text-center"
                  >
                    Explore More
                  </a>
                </div>
              ))}
            </div>
    
            {/* No Results Found */}
            {filteredSchemes.length === 0 && (
              <div className="text-center text-gray-600 mt-8">
                No schemes available for the selected category.
              </div>
            )}
          </div>
        </div>
      );
    };
    
    export default Schemes;
