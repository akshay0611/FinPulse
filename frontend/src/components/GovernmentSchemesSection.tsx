import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing the icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const GovernmentSchemesSection = () => {
  const [schemesData, setSchemesData] = useState<any[]>([]); // State to store fetched data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState<string | null>(null); // State to track error

  // Fetch the schemes data from the backend
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch('https://fin-test-2m8d.vercel.app/api/schemes');  // Ensure the URL is correct
        const data = await response.json();
        setSchemesData(data.schemes.slice(0, 6)); // Limit the fetched data to 6 schemes
        setLoading(false);
      } catch (error) {
        setError('Error fetching schemes'); // Handle error if request fails
        setLoading(false);
      }
    };
  
    fetchSchemes();
  }, []);
  

  const handleNext = () => {
    if (currentIndex + 3 < schemesData.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const displayedSchemes = schemesData.slice(currentIndex, currentIndex + 3);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is fetching
  }

  if (error) {
    return <div>{error}</div>; // Display error message if fetch fails
  }

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading and Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">New Government Schemes</h2>
          <Link
            to="/schemes" // Use Link to navigate to /schemes
            className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-all transform hover:scale-105"
          >
            View All Schemes
          </Link>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSchemes.map((scheme, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full group">
            <div className="relative overflow-hidden">
              <img
                src={scheme.imageUrl}
                alt={scheme.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4 transition-transform transform group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
            <div className="flex justify-between items-start mb-4">
              {/* Badge positioned consistently */}
              <span className="inline-block bg-emerald-500 text-white font-medium text-xs uppercase tracking-wide rounded-full px-3 py-1">
                {scheme.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#34d399]">{scheme.title}</h3>
            <p className="text-gray-700 flex-grow mb-4">{scheme.description}</p>
            <a href={scheme.exploreUrl} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 mt-auto transition-all transform hover:scale-105">
                Explore More
              </button>
            </a>
          </div>
          
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md disabled:opacity-50 flex items-center transition-all transform hover:scale-105"
            aria-label="Previous Schemes"
          >
            <AiOutlineLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= schemesData.length}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md disabled:opacity-50 flex items-center transition-all transform hover:scale-105"
            aria-label="Next Schemes"
          >
            <AiOutlineRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemesSection;
