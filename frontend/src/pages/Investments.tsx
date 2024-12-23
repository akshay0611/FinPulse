import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, PiggyBank, TrendingUp, Building, Landmark, ArrowRightLeft, Calendar, Wallet, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const investmentTypes = [
  {
    title: "Mutual Funds",
    icon: PiggyBank,
    description: "Mutual Funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.",
    link: "/mutual-funds",
    category: "Popular",
    features: [
      "Diversification: Mutual funds allow investors to own a small portion of a wide variety of assets.",
      "Professional Management: Fund managers make the decisions on where to invest the pooled money.",
      "Liquidity: Most mutual funds allow you to redeem your shares at any time."
    ]
  },
  {
    title: "Stocks",
    icon: TrendingUp,
    description: "Investing in stocks means buying shares of ownership in a company. It offers potential returns through capital appreciation and dividends.",
    link: "/stocks",
    category: "Popular",
    features: [
      "Ownership: Stockholders are part-owners of the company, with voting rights on certain company matters.",
      "Dividends: Many companies pay dividends to their shareholders, providing an additional income stream.",
      "Capital Appreciation: Stock prices can increase, providing an opportunity for gains over time."
    ]
  },
  {
    title: "Corporate Fixed Deposits",
    icon: Building,
    description: "Corporate Fixed Deposits (FDs) are term deposits offered by companies, providing a fixed rate of return over a specific period.",
    link: "/corporate-fixed-deposits",
    category: "Fixed Income",
    features: [
      "Fixed Returns: Corporate FDs offer fixed interest rates, providing predictable returns.",
      "Tenure Flexibility: The investment period can be customized to match your financial goals.",
      "Risk: While safer than stocks, they carry the risk of the issuing company defaulting."
    ]
  },
  {
    title: "NPS (National Pension System)",
    icon: Landmark,
    description: "The National Pension System (NPS) is a government-sponsored pension scheme designed to help individuals build a retirement corpus.",
    link: "/nps",
    category: "Systematic",
    features: [
      "Tax Benefits: NPS offers tax deductions under section 80C and additional deductions for retirement savings.",
      "Flexibility: Investors can choose their asset allocation between equity, government bonds, and corporate bonds.",
      "Retirement Focus: The primary goal of NPS is to build a retirement corpus for long-term financial security."
    ]
  },
  {
    title: "Systematic Transfer Plan (STP)",
    icon: ArrowRightLeft,
    description: "A Systematic Transfer Plan (STP) allows investors to transfer a fixed amount from one mutual fund to another at regular intervals.",
    link: "/stp",
    category: "Systematic",
    features: [
      "Automated Transfers: Transfers occur automatically, allowing for regular fund allocation adjustments.",
      "Risk Mitigation: Helps reduce the impact of market volatility by gradually transferring investments.",
      "Flexibility: Investors can choose the amount and frequency of transfers, based on their financial strategy."
    ]
  },
  {
    title: "Systematic Investment Plan (SIP)",
    icon: Calendar,
    description: "A Systematic Investment Plan (SIP) allows investors to invest a fixed amount regularly in mutual funds.",
    link: "/sip",
    category: "Systematic",
    features: [
      "Regular Contributions: Investors contribute fixed amounts regularly, making investing easy and consistent.",
      "Dollar-Cost Averaging: SIPs help average the purchase cost, reducing the impact of market fluctuations.",
      "Long-Term Wealth Creation: SIPs encourage long-term investment, building wealth over time through consistent contributions."
    ]
  },
  {
    title: "Auto Sweep Account",
    icon: Wallet,
    description: "An Auto Sweep Account is a high-interest savings account where excess funds are automatically transferred into Fixed Deposits.",
    link: "/auto-sweep-account",
    category: "Fixed Income",
    features: [
      "Higher Interest: Earn more on your savings by automatically transferring excess funds into Fixed Deposits.",
      "No Lock-in Period: Funds remain accessible without restrictions or penalties, even after being transferred to Fixed Deposits.",
      "Liquidity: Easily access funds transferred to Fixed Deposits whenever needed, ensuring flexibility.",
      "Low Risk: Offers a safe way to earn higher returns while maintaining easy access to your funds."
    ]
  },
  {
    title: "Insurance",
    icon: Shield,
    description: "Insurance provides a safety net in case of emergencies. From life insurance to health insurance, it helps mitigate risks.",
    link: "/insurance",
    category: "Protection",
    features: [
      "Risk Mitigation: Insurance policies help manage financial risks from life events or health emergencies.",
      "Customization: Policies can be tailored to individual needs and preferences.",
      "Peace of Mind: Insurance offers financial security for you and your family in case of unexpected events."
    ]
  }
];

export default function InvestmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInvestments = selectedCategory === "All"
    ? investmentTypes
    : investmentTypes.filter(investment => investment.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Ideas Overview</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Investment Ideas to Empower Your Financial Journey. Explore a wide range of investment options tailored to suit your financial goals. Discover the best strategies and insights for your future.
            </p>
            <a href="#">
              <button className="px-6 py-3 text-lg font-semibold text-purple-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 flex items-center">
                Start Exploring
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Tabs for filtering investments */}
            <div className="mb-8">
              <div className="flex space-x-4 border-b-2 border-gray-300">
                {["All", "Popular", "Fixed Income", "Systematic", "Protection"].map(category => (
                  <button
                    key={category}
                    className={`px-6 py-3 text-lg font-semibold 
                      ${selectedCategory === category 
                        ? 'border-b-2 border-purple-600 text-purple-600'  // Active tab: purple bottom border and text color
                        : 'text-gray-600 hover:text-purple-600'}  // Inactive tabs: gray text with hover effect
                      transition-colors duration-300 focus:outline-none`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of investment cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInvestments.map((investment, index) => (
                <div key={index} className="flex flex-col h-full transition-all duration-300 hover:shadow-lg group">
                  <div className="bg-white rounded-lg shadow-lg flex flex-col h-full p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group-hover:bg-purple-50">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 transform hover:bg-purple-600 transition-all duration-300">
                      <investment.icon className="h-6 w-6 text-purple-600 transform hover:text-white transition-all duration-300" />
                    </div>
                    {/* Hover effect on the title when hovering over the card */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-all duration-300">{investment.title}</h3> 
                    <p className="text-gray-600 mb-4 flex-grow">{investment.description}</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {investment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600">{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link to={investment.link}>
                        <button className="w-full px-6 py-3 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center">
                          Explore Investment
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
