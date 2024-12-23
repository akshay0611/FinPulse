import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Navbar from '../components/Navbar';
import { Search } from 'lucide-react'; // Assuming you're using lucide-react for the search icon
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');  // State to store the search query
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);  // State to store filtered blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://finpulsebackend.vercel.app/api/blog');
        if (response.data && Array.isArray(response.data.blogs)) {
          setBlogs(response.data.blogs);
          setFilteredBlogs(response.data.blogs);  // Set the initial blogs as filteredBlogs
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter blogs based on the search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredBlogs(blogs);  // If no search query, show all blogs
    } else {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);  // Set filtered blogs
    }
  }, [searchQuery, blogs]);

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
  
      {/* Section for Search and Blog Introduction */}
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
    <h1 className="text-5xl md:text-6xl font-bold mb-6">FinPulse Blog</h1>
    <p className="text-xl mb-8 max-w-3xl">
      Insights, analysis, and expert opinions on all things finance.
    </p>
    <div className="max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
      </div>
    </div>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>


        {/* Blog List Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between h-full"
                >
                  <img
                    src={blog.image}
                    alt="Blog post"
                    className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:opacity-80"
                  />
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-[rgb(52,211,153)] transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">{blog.description}</p>
                  <span className="text-gray-400 text-sm">{new Date(blog.date).toLocaleDateString()}</span>
                  <div className="mt-4">
                    <Link to={`/blog/${blog._id}`} className="inline-block text-emerald-400 font-semibold hover:text-emerald-500 transition-colors duration-200">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
