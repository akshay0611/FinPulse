import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Investments = () => {
  const investmentIdeas = [
    {
      title: 'Mutual Funds',
      description:
        'Mutual Funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. It provides an easy way for individual investors to access professionally managed portfolios.',
      features: [
        'Diversification: Mutual funds allow investors to own a small portion of a wide variety of assets.',
        'Professional Management: Fund managers make the decisions on where to invest the pooled money.',
        'Liquidity: Most mutual funds allow you to redeem your shares at any time.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/mutual-funds.webp?auto=format&fit=max&w=1080',
    },
    {
      title: 'Stocks',
      description:
        'Investing in stocks means buying shares of ownership in a company. It offers potential returns through capital appreciation and dividends, but it comes with higher risk compared to other investment vehicles.',
      features: [
        'Ownership: Stockholders are part-owners of the company, with voting rights on certain company matters.',
        'Dividends: Many companies pay dividends to their shareholders, providing an additional income stream.',
        'Capital Appreciation: Stock prices can increase, providing an opportunity for gains over time.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/stock.webp?auto=format&fit=max&w=1200',
    },
    {
      title: 'Corporate Fixed Deposits',
      description:
        'Corporate Fixed Deposits (FDs) are term deposits offered by companies, providing a fixed rate of return over a specific period. They are typically seen as safer than stocks, though slightly riskier than traditional bank FDs.',
      features: [
        'Fixed Returns: Corporate FDs offer fixed interest rates, providing predictable returns.',
        'Tenure Flexibility: The investment period can be customized to match your financial goals.',
        'Risk: While safer than stocks, they carry the risk of the issuing company defaulting.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/fixed-deposits.webp?auto=format&fit=max&w=1080',
    },
    {
      title: 'NPS (National Pension System)',
      description:
        'The National Pension System (NPS) is a government-sponsored pension scheme designed to help individuals build a retirement corpus. It allows for investments in equity, government bonds, and corporate bonds.',
      features: [
        'Tax Benefits: NPS offers tax deductions under section 80C and additional deductions for retirement savings.',
        'Flexibility: Investors can choose their asset allocation between equity, government bonds, and corporate bonds.',
        'Retirement Focus: The primary goal of NPS is to build a retirement corpus for long-term financial security.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/nps.webp?auto=format&fit=max&w=1080',
    },
    {
      title: 'Systematic Transfer Plan (STP)',
      description:
        'A Systematic Transfer Plan (STP) allows investors to transfer a fixed amount from one mutual fund to another at regular intervals. This strategy is used to gradually move investments from a high-risk fund to a low-risk one, or to diversify into other funds based on the investor’s goals.',
      features: [
        'Automated Transfers: Transfers occur automatically, allowing for regular fund allocation adjustments.',
        'Risk Mitigation: Helps reduce the impact of market volatility by gradually transferring investments.',
        'Flexibility: Investors can choose the amount and frequency of transfers, based on their financial strategy.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/power-stp.webp?auto=format&fit=max&w=1080',
    },
    {
      title: 'Systematic Investment Plan (SIP)',
      description:
        'A Systematic Investment Plan (SIP) allows investors to invest a fixed amount regularly in mutual funds. This method encourages disciplined investing and compounding by investing small amounts periodically, regardless of market conditions.',
      features: [
        'Regular Contributions: Investors contribute fixed amounts regularly, making investing easy and consistent.',
        'Dollar-Cost Averaging: SIPs help average the purchase cost, reducing the impact of market fluctuations.',
        'Long-Term Wealth Creation: SIPs encourage long-term investment, building wealth over time through consistent contributions.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/power-sip.webp?auto=format&fit=max&w=1080',
    },
    {
      title: 'Auto Sweep Account',
      description:
        'An Auto Sweep Account is a high-interest savings account where excess funds are automatically transferred into Fixed Deposits, offering better returns while maintaining liquidity and easy access to your funds.',
      features: [
        'Higher Interest: Earn more on your savings by automatically transferring excess funds into Fixed Deposits.',
        'No Lock-in Period: Funds remain accessible without restrictions or penalties, even after being transferred to Fixed Deposits.',
        'Liquidity: Easily access funds transferred to Fixed Deposits whenever needed, ensuring flexibility.',
        'Low Risk: Offers a safe way to earn higher returns while maintaining easy access to your funds.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/super-savings.webp?auto=format&fit=max&w=1080',
    },    
    {
      title: 'Insurance',
      description:
        'Insurance provides a safety net in case of emergencies. From life insurance to health insurance, it helps mitigate risks by providing financial protection against unforeseen events.',
      features: [
        'Risk Mitigation: Insurance policies help manage financial risks from life events or health emergencies.',
        'Customization: Policies can be tailored to individual needs and preferences.',
        'Peace of Mind: Insurance offers financial security for you and your family in case of unexpected events.',
      ],
      image: 'https://cdn.fundsindia.com/prelogin/insurance.webp?auto=format&fit=max&w=1080',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen relative">
      <Navbar />
      <section className="py-32 px-6 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Hero Section */}
          <section className="bg-white shadow-2xl rounded-3xl py-24 px-14 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Image Section */}
              <div className="lg:w-1/2 w-full flex justify-center relative mb-12 lg:mb-0">
                <img
                  src="https://cdn.fundsindia.com/prelogin/products-image.webp?auto=format&fit=max&w=1080"
                  alt="Investment Ideas Overview"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:opacity-80"
                />
              </div>
  
              {/* Text Section */}
              <div className="lg:w-1/2 w-full text-left lg:pl-20">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-8 leading-tight tracking-wide transition-all duration-500 hover:text-teal-500">
                  Investment Ideas to Empower Your Financial Journey
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed tracking-wide max-w-lg">
                  Explore a wide range of investment options tailored to suit your financial goals. Discover the best strategies and insights for your future.
                </p>
                <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-teal-600">
                  Start Exploring
                </button>
              </div>
            </div>
          </section>
  
          {/* Investment Ideas Sections */}
          {investmentIdeas.map((investment, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center bg-gradient-to-br from-indigo-50 via-gray-100 to-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform hover:scale-105 transition-all duration-500 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 w-full flex justify-center relative">
                <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-500">
                  <img
                    src={investment.image}
                    alt={investment.title}
                    className="object-cover w-full h-80 rounded-2xl"
                  />
                </div>
              </div>
  
              {/* Content Section */}
              <div className="lg:w-1/2 w-full text-left p-8 lg:p-16">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 transition-all duration-500 hover:text-teal-600">{investment.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{investment.description}</p>
                <ul className="space-y-4 mb-8">
                  {investment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-4 h-4 bg-emerald-500 rounded-full mr-4"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-teal-500 to-green-400 text-white px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300 hover:bg-teal-600">
                  Explore Investment
                </button>
              </div>
            </div>
          ))}
  
        </div>
  
        {/* Decorative Curved Lines */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            className="w-full h-40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#38BDF8"
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
