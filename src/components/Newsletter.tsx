import React, { useState } from 'react';

const Newsletter = () => {
  const allNewsletters = [
    {
      title: "Market Insights for October",
      description: "Get the latest trends and movements in the financial markets for October.",
      date: "Tue Oct 01 2024"
    },
    {
      title: "Tech Stocks to Watch",
      description: "An in-depth analysis of technology stocks that are leading the market.",
      date: "Sun Sep 29 2024"
    },
    {
      title: "Crypto Market Update",
      description: "Find out what's happening in the volatile world of cryptocurrencies.",
      date: "Sat Sep 28 2024"
    },
    {
      title: "Green Energy Trends",
      description: "Explore the latest innovations in renewable energy sources.",
      date: "Fri Sep 27 2024"
    },
    {
      title: "AI Revolution",
      description: "How AI is transforming industries globally.",
      date: "Thu Sep 26 2024"
    },
    {
      title: "Investment Tips",
      description: "Practical tips for maximizing your investment portfolio.",
      date: "Wed Sep 25 2024"
    },
    {
      title: "Emerging Markets",
      description: "Insights into emerging markets and growth opportunities.",
      date: "Tue Sep 24 2024"
    },
    {
      title: "Healthcare Innovations",
      description: "Advancements in the healthcare sector you should know about.",
      date: "Mon Sep 23 2024"
    },
    {
      title: "Future of Work",
      description: "The evolving landscape of workplaces post-pandemic.",
      date: "Sun Sep 22 2024"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(allNewsletters.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const displayedNewsletters = allNewsletters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Daily Newsletter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNewsletters.map((item, index) => (
            <div key={index} className="bg-[#fdf4ff] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black hover:bg-blue-400'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;