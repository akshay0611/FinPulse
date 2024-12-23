import React, { useState } from 'react';

const Newsletter = () => {
  const newsletters = [
    {
      title: "Latest Financial News: Market Overview",
      description: "Stay updated with the latest market movements, including Nifty 50 and Sensex trends.",
      date: "Tue Dec 19 2024",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Government Schemes for 2024",
      description: "Explore the latest government schemes that could impact your investments.",
      date: "Mon Dec 18 2024",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Investment Ideas for Beginners",
      description: "Discover simple and actionable investment tips to start your portfolio.",
      date: "Sun Dec 17 2024",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Investment Ideas for Beginners",
      description: "Discover simple and actionable investment tips to start your portfolio.",
      date: "Sun Dec 17 2024",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsletters.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const displayedNewsletters = newsletters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#e0f7fa] py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1f2937]">FinPulse Daily Newsletter</h2>
          <p className="text-lg text-[#6b7280] mt-4">Get the latest financial news, market updates, and investment tips straight to your inbox.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedNewsletters.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt="Newsletter"
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-[#10b981] mb-2">{item.title}</h3>
                  <p className="text-black mb-4">{item.description}</p>
                  <time className="text-sm text-[#9ca3af]">{item.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
        <nav className="flex justify-center mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`mx-1 px-4 py-2 rounded-full transition-colors duration-300 ${
                currentPage === index + 1 ? 'bg-[#10b981] text-white' : 'bg-[#d1d5db] text-[#1f2937] hover:bg-[#34d399]'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Newsletter;
