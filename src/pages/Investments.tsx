import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Investments = () => {
  const investmentOptions = [
    {
      title: 'Mutual Funds',
      description:
        'With FinPulse, invest in Mutual Funds online with just a few clicks. Expert recommendations & an easy-to-use interface make investing child’s play.',
      features: [
        'Goal-driven financial advice',
        'Instant personalized recommendations',
        'Flexible SIPs, trigger-based investing, instant portfolio reviews & more',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/mutual-funds.webp?auto=format&fit=max&w=1080',
      buttonText: 'Get Started',
    },
    {
      title: 'Stocks',
      description:
        'Dalal Street now on your Computers & Smartphones. Stock Recommendations, Reviews, Goal-based recommendations and much more!',
      features: [
        'Equity baskets feature for ease of investing',
        'Active monitoring of your portfolio',
        'Buy Today Sell Tomorrow (BTST), MTF & more',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/stock.webp?auto=format&fit=max&w=1200', 
      buttonText: 'Stock Up',
    },
    {
      title: 'Corporate Fixed Deposits',
      description:
        'FundsIndia offers Fixed Deposits from leading corporate houses to give you the best of benefits.',
      features: [
        'Select FDs',
        'Safety coupled with high returns',
        'Flexibility',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/fixed-deposits.webp?auto=format&fit=max&w=1080',
      buttonText: 'Start Saving',
    },
    {
      title: 'NPS (National Pension System)',
      description:
        'We cannot help but have this awesome retirement planning tool on our platform. Start an NPS account and keep that bucket list going!',
      features: [
        'Great Tax Benefits',
        'Choose your own Asset Allocation',
        'Low Fund Management Cost',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/nps.webp?auto=format&fit=max&w=1080',
      buttonText: 'Plan a Happy Retirement',
    },
    {
      title: 'Power STP (FundsIndia Exclusive)',
      description:
        'STP is good, but we made it ‘Better’. Power STP unlearnt uniform periodic deployment & fed on intelligence to shift amounts into equity, based on the market rates.',
      features: [
        'Intelligent investment per the market conditions',
        'Consistent & Superior Performance when compared to regular STP',
        'Suitable for a minimum time horizon of 5-7 years',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/power-stp.webp?auto=format&fit=max&w=1080',
      buttonText: 'Setup Power STP',
    },
    {
      title: 'Power SIP (FundsIndia Exclusive)',
      description:
        'Turbocharge your SIP returns. With an intelligent algorithm, PowerSIP shifts your funds between equities and debt to maximize your returns.',
      features: [
        'Effective utilisation of Market fluctuations',
        'Active Plus & Passive Plus',
        'Suitable for a time horizon of 5+ years',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/power-sip.webp?auto=format&fit=max&w=1080',
      buttonText: 'Setup Power SIP',
    },
    {
      title: 'Super Savings Account',
      description:
        'Why regular when you could go Super! Same features as Savings account, but almost TWICE THE RETURNS! What’s more - No lock-in period and Zero Account Charges!',
      features: [
        'High Liquidity',
        'Zero Account Charges',
        'No Lock-in Period',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/super-savings.webp?auto=format&fit=max&w=1080',
      buttonText: 'Start Saving',
    },
    {
      title: 'Insurance',
      description:
        'Investing is not limited to just building wealth; it includes having a backup plan for unfavourable circumstances. Having an insurance policy is common sense, for we all know that life is unpredictable. Hop on to www.merasuraksha.com, a comprehensive insurance platform powered by FundsIndia, and get the ideal policy for you.',
      features: [
        'Comprehensive insurance options',
        'Backup plan for life’s unpredictability',
        'Visit www.merasuraksha.com for policies',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/insurance.webp?auto=format&fit=max&w=1080',
      buttonText: 'Insure Now',
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <Navbar />
      <section className="py-16 px-6 mt-20 relative overflow-visible">
        <div className="max-w-7xl mx-auto space-y-32">
        <section className="py-12 px-6 bg-white relative">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex justify-center">
          <img
          src="https://cdn.fundsindia.com/prelogin/products-image.webp?auto=format&fit=max&w=1080"
          alt="Products Overview"
          className="rounded-2xl shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
          </div>

    {/* Text Section */}
    <div className="lg:w-1/2 w-full mt-8 lg:mt-0 text-left lg:pl-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Products</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Welcome to the town of investment! From <span className="font-semibold">Mutual Funds</span> to <span className="font-semibold">Corporate Deposits</span>, we hold a lot in store to suit the goals and needs of every investor and every risk appetite.
      </p>
      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-500 hover:to-green-600 transition duration-300 shadow-lg hover:scale-105">
          Explore Products
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300 shadow-md hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

          {investmentOptions.map((investment, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl shadow-lg relative z-10 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="lg:w-1/2 w-full flex justify-center relative -mt-12 z-20">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={investment.image}
                    alt={investment.title}
                    className="object-cover w-full h-80 rounded-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full text-left p-6 lg:p-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {investment.title}
                </h1>
                <p className="text-gray-600 mb-6">{investment.description}</p>
                <ul className="space-y-3 mb-8">
                  {investment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {/* Primary Button */}
                  <button className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-500 hover:to-green-600 transition duration-300 shadow-lg hover:scale-105">
                    {investment.buttonText}
                  </button>
                  {/* Secondary Button: Conditionally Rendered */}
                    {investment.title !== 'Insurance' && (
                     <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300 shadow-md hover:scale-105">
                     Read More
                     </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Curved Lines */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            className="w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#3B82F6"
              fillOpacity="0.1"
              d="M0,192L120,213.3C240,235,480,277,720,282.7C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
    </div>
  );
};

export default Investments;
