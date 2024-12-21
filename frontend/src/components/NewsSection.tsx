import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing the icons
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]); // State for storing news data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const API_URL = `https://gnews.io/api/v4/top-headlines?topic=business&country=in&lang=en&apikey=${API_KEY}&max=10`;

  // Fetch the news data when the component loads
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data.articles); // Update the state with fetched articles
      } catch (err) {
        console.error(err);
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchNews();
  }, []); // Empty dependency array means this runs only once

  const handleNext = () => {
    if (currentIndex + 3 < newsData.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const displayedNews = newsData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">All Latest Financial Updates</h2>
          <Link
            to="/news" // Use Link to navigate to /schemes
            className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-all transform hover:scale-105"
          >
            View All News
          </Link>
        </div>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            {/* Updated Grid Layout for Better Responsiveness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedNews.map((item, index) => (
                <NewsCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.image}
                  publishedAt={new Date(item.publishedAt).toLocaleString()}
                  source={item.source.name}
                />
              ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-between mt-6 space-x-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-emerald-500 text-white rounded-md disabled:opacity-50 flex items-center justify-center"
              >
                <AiOutlineLeft size={24} /> {/* Left Arrow Icon */}
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex + 3 >= newsData.length}
                className="px-4 py-2 bg-emerald-500 text-white rounded-md disabled:opacity-50 flex items-center justify-center"
              >
                <AiOutlineRight size={24} /> {/* Right Arrow Icon */}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
