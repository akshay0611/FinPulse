import React, { useState } from 'react';

export const schemesData = [
  {
    "title": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    "description": "A scheme to ensure access to irrigation for every farm and improve water use efficiency through 'Per Drop More Crop'.",
    "imageUrl": "/src/assets/PMKSY.png",
    "exploreUrl": "https://pmksy.gov.in",
    "category": "Agriculture, Rural & Environment"
  },
  {
    "title": "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    "description": "A financial inclusion program to expand affordable access to financial services such as bank accounts, remittances, credit, and insurance.",
    "imageUrl": "/src/assets/PMJDY.png",
    "exploreUrl": "https://pmjdy.gov.in",
    "category": "Banking, Financial Services and Insurance"
  },
  {
    "title": "Startup India",
    "description": "An initiative to build a strong ecosystem for nurturing innovation and startups in India.",
    "imageUrl": "/src/assets/StartupIndia.png",
    "exploreUrl": "https://www.startupindia.gov.in",
    "category": "Business & Entrepreneurship"
  },
  {
    "title": "Mid-Day Meal Scheme",
    "description": "A school meal program to improve the nutritional status of school-age children and encourage school attendance.",
    "imageUrl": "/src/assets/MidDayMeal.png",
    "exploreUrl": "https://education.gov.in",
    "category": "Education & Learning"
  },
  {
    "title": "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana",
    "description": "A national health insurance scheme that provides health coverage of up to Rs. 5 lakhs per family annually.",
    "imageUrl": "/src/assets/AyushmanBharat.png",
    "exploreUrl": "https://pmjay.gov.in",
    "category": "Health & Wellness"
  },
  {
    "title": "Pradhan Mantri Awas Yojana (PMAY)",
    "description": "A scheme to provide affordable housing to urban and rural poor with a target of 'Housing for All' by 2022.",
    "imageUrl": "/src/assets/PMAY.png",
    "exploreUrl": "https://pmaymis.gov.in",
    "category": "Housing & Shelter"
  },
  {
    "title": "Crime and Criminal Tracking Network & Systems (CCTNS)",
    "description": "A project to create a nationwide networked infrastructure for tracking criminal records.",
    "imageUrl": "/src/assets/CCTNS.png",
    "exploreUrl": "https://cctns.gov.in",
    "category": "Public Safety, Law & Justice"
  },
  {
    "title": "Digital India Initiative",
    "description": "A flagship program to transform India into a digitally empowered society and knowledge economy.",
    "imageUrl": "/src/assets/DigitalIndia.png",
    "exploreUrl": "https://digitalindia.gov.in",
    "category": "Science, IT & Communications"
  },
  {
    "title": "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    "description": "A skill development initiative that provides industry-relevant skill training to youth.",
    "imageUrl": "/src/assets/PMKVY.png",
    "exploreUrl": "https://pmkvyofficial.org",
    "category": "Skills & Employment"
  },
  {
    "title": "Indira Gandhi National Widow Pension Scheme",
    "description": "A scheme offering a monthly pension to widows aged 40–59 from BPL families.",
    "imageUrl": "/src/assets/WidowPension.png",
    "exploreUrl": "https://nsap.nic.in",
    "category": "Social welfare & Empowerment"
  },
  {
    "title": "Khelo India Programme",
    "description": "An initiative to revive the sports culture in India at the grassroots level and identify future sports talent.",
    "imageUrl": "/src/assets/KheloIndia.png",
    "exploreUrl": "https://kheloindia.gov.in",
    "category": "Sports & Culture"
  },
  {
    "title": "Bharatmala Pariyojana",
    "description": "A highway development project aimed at improving road infrastructure and connectivity across India.",
    "imageUrl": "/src/assets/Bharatmala.png",
    "exploreUrl": "https://morth.nic.in/bharatmala",
    "category": "Transport & Infrastructure"
  },
  {
    "title": "Swadesh Darshan Scheme",
    "description": "A tourism development initiative to promote, develop, and harness the tourism potential of India.",
    "imageUrl": "/src/assets/SwadeshDarshan.png",
    "exploreUrl": "https://tourism.gov.in",
    "category": "Travel & Tourism"
  },
  {
    "title": "Swachh Bharat Mission (SBM)",
    "description": "A mission to eliminate open defecation and improve solid waste management across urban and rural areas.",
    "imageUrl": "/src/assets/SwachhBharat.png",
    "exploreUrl": "https://swachhbharatmission.gov.in",
    "category": "Utility & Sanitation"
  },
  {
    "title": "Beti Bachao Beti Padhao (BBBP)",
    "description": "A campaign to address the declining child sex ratio and promote the education of girls in India.",
    "imageUrl": "/src/assets/BBBP.png",
    "exploreUrl": "https://wcd.nic.in",
    "category": "Women and Child"
  }
];

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
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter schemes based on selected category
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{scheme.title}</h2>
        {/* Badge below the title */}
        <span className="inline-block bg-emerald-500 text-white font-medium text-xs uppercase tracking-wide rounded-full px-3 py-1 mb-4">
          {scheme.category}
        </span>
        <p className="text-gray-600 mb-4">{scheme.description}</p>
      </div>
      <a
        href={scheme.exploreUrl}
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
