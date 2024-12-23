import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import { Search } from 'lucide-react'; // Import Search icon
import { motion, AnimatePresence } from 'framer-motion';

const API_KEY = import.meta.env.VITE_API_KEY_2;
const API_URL = `https://gnews.io/api/v4/top-headlines?topic=business&country=in&lang=en&apikey=${API_KEY}&max=10`;

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch news');
      }

      if (!data.articles) {
        throw new Error('Invalid response format');
      }

      setNewsArticles(data.articles);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err instanceof Error ? err.message : 'Failed to load news updates. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-indigo-900">
      <Navbar />

      <main className="flex-grow">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 relative z-10"
  >
    <div className="mb-10"></div> {/* Added space above */}
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest Financial News</h1>
    <p className="text-xl mb-8 max-w-3xl">
      Stay informed with the latest updates from the world of finance.
    </p>
    <div className="max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
      </div>
    </div>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>


        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-200 h-64 rounded-lg animate-pulse"></div>
                <div className="bg-gray-200 h-64 rounded-lg animate-pulse"></div>
                <div className="bg-gray-200 h-64 rounded-lg animate-pulse"></div>
              </div>
            ) : error ? (
              <div className="text-center text-red-600 mb-4">
                <p>{error}</p>
                <button
                  onClick={fetchNews}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100"
                  >
                    <div className="relative h-48">
                      <img
                        src={article.image || 'https://via.placeholder.com/400x200'}
                        alt={article.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded">
                          {article.source.name || 'Unknown'}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2 truncate hover:text-purple-600">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.description || 'No description available.'}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg transition-all"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;
