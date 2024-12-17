import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing the icons

const GovernmentSchemesSection = () => {
  const allSchemes = [
    {
      "title": "National Family Benefit Scheme (NFBS)",
      "description": "This scheme provides lump sum financial assistance of Rs. 20,000 in case of the death of a primary breadwinner in a BPL family between the ages of 18 to 59.",
      "imageUrl": "/src/assets/National Family Benefit Scheme.png", 
      "exploreUrl": "https://www.example.com" 
    },
    {
      "title": "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
      "description": "Persons aged 65 and above from BPL families receive a pension of Rs. 200 from the Government of India and Rs. 400 from the Government of Maharashtra.",
      "imageUrl": "/src/assets/Indira Gandhi National Old Age Pension Scheme.jpeg", 
      "exploreUrl": "https://www.example.com" 
    },
    {
      "title": "Indira Gandhi National Disability Pension Scheme",
      "description": "This scheme provides Rs. 200 per month for persons with 80% disability between the ages of 18 to 65 years.",
      "imageUrl": "/src/assets/Indira Gandhi National Disability Pension Scheme.jpeg", 
      "exploreUrl": "https://www.example.com" 
    },
    {
      "title": "Aam Aadmi Bima Yojana",
      "description": "This scheme is for landless laborers in rural areas aged 18 to 59, with a premium of Rs. 200 per year, 50% of which is subsidized.",
      "imageUrl": "/src/assets/Aam Aadmi Bima Yojana.png", 
      "exploreUrl": "https://www.example.com" 
    },
    {
      "title": "Sanjay Gandhi Niradhar Yojana",
      "description": "This scheme provides assistance to destitute persons under 65 years, orphans, handicapped individuals, and those suffering from critical illnesses.",
      "imageUrl": "/src/assets/Sanjay Gandhi Niradhar Anudan Yojana.jpeg", 
      "exploreUrl": "https://www.example.com" 
    },
    {
      "title": "Shravan Bal Seva Rajya Nivruttivetan Yojana",
      "description": "This scheme provides a pension of Rs. 1000 per month for destitute persons aged 65 and above belonging to BPL families in Maharashtra.",
      "imageUrl": "/src/assets/Shravanbal Seva Rajya Nivruttivetan Yojana.png", 
      "exploreUrl": "https://www.example.com" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < allSchemes.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const displayedSchemes = allSchemes.slice(currentIndex, currentIndex + 3);

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
            disabled={currentIndex + 3 >= allSchemes.length}
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
