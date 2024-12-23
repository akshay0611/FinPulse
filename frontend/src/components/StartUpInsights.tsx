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
    <section className="bg-gradient-to-br from-[#e0f7f7] via-[#ffffff] to-[#e0f7f7] text-gray-800 py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-center text-[#4ade80]">Startup Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {startupInsights.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-3 hover:scale-105 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl font-bold mb-5 text-[#000000]">{item.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{item.description}</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-sm text-gray-500 italic">{item.date}</p>
                <button className="text-[#4ade80] font-semibold hover:underline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupInsights;
