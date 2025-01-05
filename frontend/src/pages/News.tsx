import React, { useEffect, useState } from 'react';
import { Search, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-50">
      <Navbar />

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Latest Financial <br className="hidden md:inline" /> News
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed">
              Stay informed with the most recent updates from the world of finance, curated just for you.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  aria-label="Search news"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-300" />
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-50 to-transparent"></div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-200 animate-pulse"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-600 mb-8"
              >
                <p className="text-xl mb-4">{error}</p>
                <motion.button
                  onClick={fetchNews}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCcw className="h-5 w-5" />
                  <span>Retry</span>
                </motion.button>
              </motion.div>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredNews.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="relative h-48">
                        <img
                          src={article.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                          alt={article.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                            {article.source.name || 'Unknown'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">
                          {new Date(article.publishedAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-purple-600 transition-colors duration-300">
                          {article.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.description || 'No description available.'}
                        </p>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-all duration-300"
                        >
                          Read More
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;