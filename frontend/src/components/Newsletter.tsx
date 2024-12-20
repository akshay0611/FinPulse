import React, { useState } from 'react';

const Newsletter = () => {
  const allNewsletters = [
    {
      title: "Latest Financial News: Market Overview",
      description: "Stay updated with the latest market movements, including Nifty 50 and Sensex trends.",
      date: "Tue Dec 19 2024",
      image: "https://via.placeholder.com/300x200" // Placeholder image
    },
    {
      title: "Government Schemes for 2024",
      description: "Explore the latest government schemes that could impact your investments.",
      date: "Mon Dec 18 2024",
      image: "https://via.placeholder.com/300x200" // Placeholder image
    },
    {
      title: "Investment Ideas for Beginners",
      description: "Discover simple and actionable investment tips to start your portfolio.",
      date: "Sun Dec 17 2024",
      image: "https://via.placeholder.com/300x200" // Placeholder image
    },
    {
      title: "Investment Ideas for Beginners",
      description: "Discover simple and actionable investment tips to start your portfolio.",
      date: "Sun Dec 17 2024",
      image: "https://via.placeholder.com/300x200" // Placeholder image
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(allNewsletters.length / itemsPerPage);

  const handlePageClick = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const displayedNewsletters = allNewsletters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#f3f4f6] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#1f2937]">FinPulse Daily Newsletter</h2>
        <p className="text-center text-[#6b7280] mb-12">Get the latest financial news, market updates, and investment tips straight to your inbox.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNewsletters.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                src={item.image}
                alt="Newsletter Image"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3 text-[#10b981]">{item.title}</h3>
              <p className="text-[#4b5563] mb-4">{item.description}</p>
              <p className="text-sm text-[#9ca3af]">{item.date}</p>
            </div>
          ))}
        </div>
        
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-[#10b981] text-white' : 'bg-[#d1d5db] text-[#1f2937] hover:bg-[#34d399]'}`}
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
