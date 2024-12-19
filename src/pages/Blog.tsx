import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const posts = [
    {
      title: 'How to Invest in Stocks for Beginners',
      description: 'A comprehensive guide for beginners to understand the stock market and how to start investing.',
      date: 'December 10, 2024',
      image: 'https://via.placeholder.com/600x400',
      url: '/blog/how-to-invest-in-stocks-for-beginners', // Unique URL for this post
    },
    {
      title: '5 Tips for Financial Planning in 2025',
      description: 'Learn the best strategies for financial planning and securing your financial future in the new year.',
      date: 'December 8, 2024',
      image: 'https://via.placeholder.com/600x400',
      url: '/blog/financial-planning-tips-2025', // Unique URL for this post
    },
    {
      title: 'Understanding Cryptocurrency and Blockchain',
      description: 'A beginner’s guide to understanding cryptocurrency, blockchain technology, and its potential impact on the future.',
      date: 'December 5, 2024',
      image: 'https://via.placeholder.com/600x400',
      url: '/blog/understanding-cryptocurrency-and-blockchain', // Unique URL for this post
    },
  ];

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
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={post.image}
                alt="Blog post"
                className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:opacity-80"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-[rgb(52,211,153)] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <span className="text-gray-400 text-sm">{post.date}</span>
              <div className="mt-4">
                <a
                  href={post.url} // Dynamic URL for each post
                  className="inline-block text-emerald-400 font-semibold hover:text-emerald-500 transition-colors duration-200"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blog;
