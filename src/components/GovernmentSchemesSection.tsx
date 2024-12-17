import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing the icons
import { schemesData } from '../pages/Schemes'; // Importing the named export

const GovernmentSchemesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">New Government Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSchemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={scheme.imageUrl}
                  alt={scheme.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4 transition-transform transform group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{scheme.title}</h3>
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
