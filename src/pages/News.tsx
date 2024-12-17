import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import { MdAccessTime } from 'react-icons/md'; // Import clock icon

const API_KEY = import.meta.env.VITE_API_KEY_2;
const API_URL = `https://gnews.io/api/v4/top-headlines?topic=business&country=in&lang=en&apikey=${API_KEY}&max=10`;

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-white min-h-screen text-indigo-900 flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 md:p-12">
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-emerald-400 mb-6">Latest News</h1>
        </div>
        {loading ? (
          <p className="text-center text-gray-600">Loading news...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <div className="relative">
                  <img
                    src={article.image || 'https://via.placeholder.com/400x200'}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-white text-sm">Source: {article.source.name || 'Unknown'}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 truncate group-hover:text-emerald-400 transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2 flex items-center">
                    <MdAccessTime className="mr-2" />
                    {new Date(article.publishedAt).toLocaleDateString()} at {new Date(article.publishedAt).toLocaleTimeString()}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description || 'No description available.'}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:ring-emerald-300 rounded-lg px-6 py-2 text-sm font-semibold transition-all"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>

      
    </div>
  );
};

export default News;
