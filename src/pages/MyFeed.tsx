import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyFeed = () => {
  const posts = [
    {
      title: 'Top 5 Financial Tips for 2025',
      description: 'Stay ahead in 2025 with these top 5 tips for managing your personal finances and investments.',
      date: 'December 14, 2024',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Crypto Trends You Need to Know',
      description: 'Crypto is evolving. Discover the latest trends and how they may impact your investment strategy.',
      date: 'December 12, 2024',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'The Rise of Sustainable Investments',
      description: 'Sustainable investing is becoming a dominant trend. Learn how to align your portfolio with your values.',
      date: 'December 10, 2024',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
      
      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-[rgb(52,211,153)] mb-6">
            Your Feed
          </h1>
          <p className="text-xl text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay up to date with the latest news, articles, and insights on personal finance, investing, and more.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col">
              <img 
                src={post.image} 
                alt="Post"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-emerald-400 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                {post.description}
              </p>
              <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
                <span>{post.date}</span>
                <a href="#" className="text-emerald-400 font-semibold hover:text-emerald-500 transition-colors duration-200">
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

export default MyFeed; 
