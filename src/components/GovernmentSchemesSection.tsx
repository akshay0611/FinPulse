import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing the icons

const GovernmentSchemesSection = () => {
  const allSchemes = [
    {
      title: "Pradhan Mantri Awas Yojana (PMAY)",
      description: "The PMAY aims to provide affordable housing for all by the year 2022, through subsidies, loans, and government support.",
      imageUrl: "https://images.unsplash.com/photo-1583118139079-e0e9c1a39e58?fit=crop&w=1000&q=80",
    },
    {
      title: "PM Kisan Yojana",
      description: "PM Kisan Yojana provides financial support to small and marginal farmers across the country.",
      imageUrl: "https://images.unsplash.com/photo-1583118162740-9291d0b9a438?fit=crop&w=1000&q=80",
    },
    {
      title: "Atmanirbhar Bharat Abhiyan",
      description: "The Atmanirbhar Bharat scheme aims to make India self-reliant by supporting local businesses, industries, and the workforce.",
      imageUrl: "https://images.unsplash.com/photo-1604727415350-1d6e570b5020?fit=crop&w=1000&q=80",
    },
    {
      title: "Pradhan Mantri Jan Dhan Yojana",
      description: "A financial inclusion scheme to ensure that every household has access to basic financial services, including a bank account.",
      imageUrl: "https://images.unsplash.com/photo-1593542259389-56c0b6b634fc?fit=crop&w=1000&q=80",
    },
    {
      title: "Ayushman Bharat",
      description: "Ayushman Bharat aims to provide health insurance coverage to the poor and vulnerable families across India.",
      imageUrl: "https://images.unsplash.com/photo-1577145613377-0e13ff21fc4f?fit=crop&w=1000&q=80",
    },
    {
      title: "Make in India",
      description: "This initiative encourages domestic manufacturing and aims to make India a global manufacturing hub.",
      imageUrl: "https://images.unsplash.com/photo-1610543420424-70d4b3473206?fit=crop&w=1000&q=80",
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
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">New Government Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSchemes.map((scheme, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <img
                src={scheme.imageUrl}
                alt={scheme.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
              <p className="text-gray-700 flex-grow mb-4">{scheme.description}</p>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 mt-auto">
                Explore More
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md disabled:opacity-50 flex items-center"
          >
            <AiOutlineLeft size={24} /> {/* Left Arrow Icon */}
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= allSchemes.length}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md disabled:opacity-50 flex items-center"
          >
            <AiOutlineRight size={24} /> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemesSection;
