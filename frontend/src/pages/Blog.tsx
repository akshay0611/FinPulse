import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Navbar from '../components/Navbar';

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://fin-test-2m8d.vercel.app/api/blog');
        if (response.data && Array.isArray(response.data.blogs)) {
          setBlogs(response.data.blogs);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
  
      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[rgb(52,211,153)] mb-6">Our Blog</h1>
          <p className="text-xl text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights, tips, and strategies on personal finance, investments, and more. Our blog is designed to help you make smarter financial decisions.
          </p>
        </div>
  
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
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
                <span className="text-gray-400 text-sm">{blog.date}</span>
                <div className="mt-4">
              <a
                href={`/blog/${blog._id}`}  // Use _id to navigate to the specific blog's detail page
                className="inline-block text-emerald-400 font-semibold hover:text-emerald-500 transition-colors duration-200"
                >
                 Read More &rarr;
              </a>
              </div>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
