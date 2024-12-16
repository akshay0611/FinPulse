import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing the icons
import NewsCard from './NewsCard';

const NewsSection = () => {
  const allNews = [
    {
      title: "Indian stock market: 7 key things that changed for market over weekend",
      description: "Indian stock market: Gift Nifty was trading around 24,780 level, a discount of nearly 50 points from the Nifty futures' previous close, indicating...",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      publishedAt: "16 Dec 2024, 1:33 AM",
      source: "Mint"
    },
    {
      title: "Kia Syros to be offered with two engine options",
      description: "The Kia Syros will make its global debut in India on 19 December and be offered with both petrol and diesel power",
      imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      publishedAt: "16 Dec 2024, 1:12 AM",
      source: "CarWale"
    },
    {
      title: "Bonus, Stock Split, Dividend Alert: Maruti Suzuki-backed company",
      description: "From Linc's stock split and bonus issue to the Maruti Suzuki-promoted company's bonus issue of shares, these are the stocks with corporate actions",
      imageUrl: "https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      publishedAt: "16 Dec 2024, 12:45 AM",
      source: "CNBCTV18"
    },
    {
      title: "US Fed signals possible interest rate hike in 2025",
      description: "The US Federal Reserve has indicated the possibility of increasing interest rates to combat rising inflation in the coming year.",
      imageUrl: "https://images.unsplash.com/photo-1572032980435-7d8fe1235103?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZlZGVyYWwlMjBmb3JlY3VzdGVyY3VsdHVyZXxlbnwwfHx8fDE2NzU5NjkwNzE&ixlib=rb-1.2.1&q=80&w=1080",
      publishedAt: "15 Dec 2024, 3:00 PM",
      source: "Reuters"
    },
    {
      title: "Tesla shares rise as new model is announced",
      description: "Tesla's new electric vehicle model has been met with strong investor interest, leading to a significant uptick in its stock price.",
      imageUrl: "https://images.unsplash.com/photo-1599647232031-c1e9c9c7a015?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZlbmR8ZW58MHx8fHwxNjc1OTY5MDcx&ixlib=rb-1.2.1&q=80&w=1080",
      publishedAt: "14 Dec 2024, 2:30 PM",
      source: "TechCrunch"
    },
    {
      title: "Tesla shares rise as new model is announced",
      description: "Tesla's new electric vehicle model has been met with strong investor interest, leading to a significant uptick in its stock price.",
      imageUrl: "https://images.unsplash.com/photo-1599647232031-c1e9c9c7a015?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZlbmR8ZW58MHx8fHwxNjc1OTY5MDcx&ixlib=rb-1.2.1&q=80&w=1080",
      publishedAt: "14 Dec 2024, 2:30 PM",
      source: "TechCrunch"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < allNews.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const displayedNews = allNews.slice(currentIndex, currentIndex + 3);
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">All latest financial updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((item, index) => (
            <NewsCard key={index} {...item} />
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
            disabled={currentIndex + 3 >= allNews.length}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md disabled:opacity-50 flex items-center"
          >
            <AiOutlineRight size={24} /> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;