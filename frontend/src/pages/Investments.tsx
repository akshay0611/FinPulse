import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, PiggyBank, TrendingUp, Building, Landmark, ArrowRightLeft, Calendar, Wallet, Shield, Star,TrendingDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { motion } from 'framer-motion';

const investmentTypes = [
  {
    title: "Mutual Funds",
    icon: PiggyBank,
    description: "Mutual Funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.",
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
    category: "Protection",
    features: [
      "Risk Mitigation: Insurance policies help manage financial risks from life events or health emergencies.",
      "Customization: Policies can be tailored to individual needs and preferences.",
      "Peace of Mind: Insurance offers financial security for you and your family in case of unexpected events."
    ]
  },
  {
    title: "PPF (Public Provident Fund)",
    icon: Wallet, // Replace with appropriate icon
    description: "The PPF is a government-backed long-term savings scheme that offers tax benefits and fixed interest.",
    category: "Fixed Income",
    features: [
      "Tax Benefits: Contributions to PPF are eligible for tax deductions under Section 80C.",
      "Fixed Returns: The government sets the interest rate, ensuring predictable returns.",
      "Long-Term Savings: The minimum investment tenure is 15 years, encouraging long-term savings."
    ]
  },
  {
    title: "Fixed Deposits (FD)",
    icon: Wallet, // Replace with appropriate icon
    description: "A Fixed Deposit (FD) is a time-bound deposit offered by banks with a fixed interest rate.",
    category: "Fixed Income",
    features: [
      "Fixed Returns: FD offers guaranteed returns at fixed interest rates.",
      "Safety: One of the safest investment options with a low-risk profile.",
      "Liquidity: FDs come with a lock-in period but can be liquidated earlier with a penalty."
    ]
  },
  {
    title: "Bonds",
    icon: Wallet,
    description: "Bonds are debt instruments where investors lend money to governments or corporations in exchange for regular interest payments and the return of the principal amount at maturity.",
    category: "Fixed Income",
    features: [
      "Fixed Returns: Bonds provide regular interest payments, making them a steady source of income.",
      "Variety: Bonds are available in government, corporate, and municipal forms, offering different risk profiles.",
      "Capital Preservation: Bonds are typically considered safer investments, focusing on preserving principal while earning fixed returns."
    ]
  },
  {
    title: "REITs (Real Estate Investment Trusts)",
    icon: Wallet,
    description: "REITs are companies that own, operate, or finance real estate that produces income. Investors can buy shares in REITs to gain exposure to real estate markets without having to directly own property.",
    category: "Real Estate",
    features: [
      "Diversification: REITs provide exposure to a diverse portfolio of real estate assets, reducing individual investment risk.",
      "Income Generation: REITs distribute most of their income as dividends, offering regular cash returns.",
      "Liquidity: Unlike physical real estate investments, REITs are traded on stock exchanges, providing liquidity."
    ]
  },
  {
    title: "Tax-Free Bonds",
    icon: Wallet,
    description: "Tax-Free Bonds are government-issued bonds that provide interest income exempt from tax, making them attractive for investors looking for tax-efficient income.",
    category: "Fixed Income",
    features: [
      "Tax Exemption: The interest income earned is tax-free, providing an advantage over other taxable investment options.",
      "Low Risk: Tax-free bonds are typically issued by government entities, offering a high level of safety.",
      "Steady Returns: Tax-free bonds offer fixed returns over a specified period, ensuring stable income."
    ]
  },
  {
    title: "ETFs (Exchange Traded Funds)",
    icon: Wallet,
    description: "ETFs are investment funds that are traded on stock exchanges. They typically track the performance of an index, commodity, or a collection of assets.",
    category: "Popular",
    features: [
      "Diversification: ETFs allow investors to invest in a broad range of assets, such as stocks, bonds, or commodities.",
      "Liquidity: ETFs are traded on exchanges, offering high liquidity similar to stocks.",
      "Lower Fees: ETFs usually have lower expense ratios compared to mutual funds, making them cost-effective."
    ]
  },
  {
    title: "SGB (Sovereign Gold Bonds)",
    icon: Star,
    description: "SGBs are government securities denominated in grams of gold, offering an investment option that is linked to the price of gold. They provide an opportunity to invest in gold without holding physical gold.",
    category: "Precious Metals",
    features: [
      "Gold-Linked: The value of SGBs is linked to the market price of gold, making them a good hedge against inflation.",
      "Interest Income: SGBs provide an annual interest payment in addition to the potential appreciation in gold prices.",
      "Tax Benefits: The capital gains tax arising on redemption of SGBs is exempt from tax, offering tax-efficient returns."
    ]
  },
  {
    title: "ETCDs (Exchange Traded Commodity Derivatives)",
    icon: TrendingDown,
    description: "ETCDs are financial instruments that allow investors to trade commodity contracts like gold, silver, crude oil, etc., on commodity exchanges. They are used to gain exposure to commodity price movements.",
    category: "Commodities",
    features: [
      "Commodity Exposure: ETCDs provide direct exposure to commodity price fluctuations, such as oil, gold, and agricultural products.",
      "Leverage: ETCDs often allow investors to take leveraged positions, amplifying potential gains or losses.",
      "Liquidity: ETCDs are traded on exchanges, offering liquidity similar to stocks and ETFs."
    ]
  }
  // Other investment types remain the same...
];

export default function InvestmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();  // Initialize useNavigate hook

  const filteredInvestments = selectedCategory === "All"
    ? investmentTypes
    : investmentTypes.filter(investment => investment.category === selectedCategory);

  // Redirect function to handle the navigation to the SignInSignUp page
  const handleRedirect = () => {
    navigate("/signin-signUp");  // Navigate to the SignInSignUp page
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
  
<section className="py-20 mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 relative z-10"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Investment Ideas Overview</h1>
    <p className="text-xl mb-8 max-w-3xl">
      Investment Ideas to Empower Your Financial Journey. Explore a wide range of investment options tailored to suit your financial goals. Discover the best strategies and insights for your future.
    </p>
    <button 
      className="px-6 py-3 text-lg font-semibold text-purple-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 flex items-center"
      onClick={handleRedirect}  // Call the redirect function
    >
      Start Exploring
      <ChevronRight className="ml-2 h-4 w-4" />
    </button>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>


        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Tabs for filtering investments */}
            <div className="mb-8">
              <div className="flex space-x-4 border-b-2 border-gray-300">
                {["All", "Popular", "Fixed Income", "Systematic", "Protection", "Real Estate", "Precious Metals", "Commodities"].map(category => (
                  <button
                    key={category}
                    className={`px-6 py-3 text-lg font-semibold 
                      ${selectedCategory === category 
                        ? 'border-b-2 border-purple-600 text-purple-600'  
                        : 'text-gray-600 hover:text-purple-600'}  
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
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-all duration-300">{investment.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{investment.description}</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {investment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600">{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <button 
                        className="w-full px-6 py-3 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                        onClick={handleRedirect}  // Call the redirect function here
                      >
                        Explore Investment
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </button>
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
