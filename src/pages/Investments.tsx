import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Investments = () => {
  const investmentOptions = [
    {
      title: 'Stocks',
      description: 'Investing in stocks gives you ownership in companies and the opportunity to earn dividends and capital gains.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
    },
    {
      title: 'Bonds',
      description: 'Bonds are debt securities where you lend money to a corporation or government in exchange for interest payments.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
    },
    {
      title: 'Real Estate',
      description: 'Real estate investments involve purchasing properties to generate rental income or for appreciation.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
    },
    {
      title: 'Cryptocurrency',
      description: 'Cryptocurrencies are digital currencies that leverage blockchain technology to operate in decentralized systems.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
    },
    {
      title: 'Mutual Funds',
      description: 'Mutual funds pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
    },
    {
      title: 'ETFs (Exchange-Traded Funds)',
      description: 'ETFs are similar to mutual funds but trade like stocks on exchanges, offering liquidity and diversification.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
    },
  ];

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />

      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[rgb(52,211,153)] mb-6">Investment Opportunities</h1>
          <p className="text-xl text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore a variety of investment options to diversify your portfolio and build long-term wealth. Each option has its unique features and benefits.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {investmentOptions.map((investment, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={investment.image}
                alt={investment.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:opacity-80"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-[rgb(52,211,153)] transition-colors">
                {investment.title}
              </h2>
              <p className="text-gray-600 mb-4">{investment.description}</p>
              <a
                href={investment.link}
                className="inline-block text-emerald-400 font-semibold hover:text-emerald-500 transition-colors duration-200"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Investments;
