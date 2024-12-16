import React from 'react';

const StartupInsights = () => {
  const startupInsights = [
    {
      title: "Building a Sustainable Startup",
      description: "Learn the key factors to ensure your startup's long-term success.",
      date: "Mon Sep 30 2024"
    },
    {
      title: "Top 10 Startup Trends",
      description: "Discover the latest trends shaping the startup ecosystem.",
      date: "Fri Sep 27 2024"
    },
    {
      title: "Funding Your Startup",
      description: "A comprehensive guide to securing funding for your startup.",
      date: "Thu Sep 26 2024"
    }
  ];

  return (
    <div className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Startup Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startupInsights.map((item, index) => (
            <div key={index} className="bg-[#fdf4ff] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupInsights;
