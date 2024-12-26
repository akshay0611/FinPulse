import React from "react";
import { useParams } from "react-router-dom";
import { BookOpen, Lightbulb, TrendingUp , BarChart2, PieChart, Calendar, } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface Guide {
  id: number;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  coverImage: string;
  content: {
    title: string;
    text: string;
    list?: string[];
    steps?: string[];
  }[];
  keyTakeaways: string[];
  tips: string[];
  relatedGuides: number[];
}

const guides: Guide[] = [
  {
    id: 1,
    title: "Investing 101: Getting Started",
    category: "Beginner",
    icon: BookOpen,
    coverImage: "https://via.placeholder.com/800x400?text=Investing+101",
    content: [
      {
        title: "Introduction",
        text:
          "Investing can seem intimidating, but starting small and understanding key principles can make a significant difference. This guide covers the basics: understanding risk and reward, diversification, and how to begin investing with confidence.",
      },
      {
        title: "Why Invest?",
        text:
          "Investing allows you to make your money work for you, rather than just saving it in a bank account. By putting your money into assets like stocks, bonds, or real estate, you have the potential to earn a return on your investment, which can outpace inflation and help grow your wealth over time.",
        list: [
          "Wealth Building: Over time, investments can grow significantly, allowing you to accumulate wealth.",
          "Beating Inflation: Investing in assets with higher returns helps protect your money against inflation.",
          "Achieving Financial Goals: Whether it’s retirement, buying a home, or funding education, investments can help you achieve long-term goals.",
        ],
      },
      {
        title: "Types of Investments",
        text:
          "Before diving into the world of investing, it's important to understand the various types of investments available. Here are the most common options:",
        list: [
          "Stocks: Owning shares of a company means you own a small piece of that company. Stocks have the potential for high returns, but they also come with higher risk.",
          "Bonds: Bonds are loans made to companies or governments in exchange for periodic interest payments and the return of the principal at maturity. They are considered lower-risk compared to stocks.",
          "Mutual Funds & ETFs: These are pools of money from many investors used to purchase a variety of stocks, bonds, or other securities. Mutual funds are actively managed, while ETFs (Exchange-Traded Funds) are passively managed and often track an index.",
          "Real Estate: Investing in property can provide both rental income and potential appreciation in value. Real estate is considered a long-term investment.",
          "Commodities: Investing in physical goods like gold, silver, oil, or agricultural products. Commodities can serve as a hedge against inflation and global economic uncertainty.",
          "Cryptocurrency: Digital or virtual currencies that use cryptography for security. While highly volatile, cryptocurrencies like Bitcoin and Ethereum have gained popularity as speculative investments.",
        ],
      },
      {
        title: "Setting Your Investment Goals",
        text:
          "Before you start investing, it’s important to define your financial goals. These goals will guide your investment strategy and help you decide the right type of investment for your needs.",
        list: [
          "Short-Term vs. Long-Term: Are you investing for a goal in the next 1-5 years (like buying a car or a vacation) or for long-term goals (like retirement)?",
          "Risk Tolerance: How comfortable are you with the possibility of losing money? Higher risk investments often offer higher potential returns, but they can also be more volatile.",
          "Time Horizon: The length of time you plan to invest will influence the types of investments you should choose. A longer time horizon often allows you to take more risks.",
        ],
      },
      {
        title: "Building Your Investment Portfolio",
        text:
          "An investment portfolio is a collection of assets you own. To build a strong portfolio, it’s important to diversify, meaning spreading your investments across different asset classes to reduce risk.",
        steps: [
          "Start with an Emergency Fund: Before you invest, ensure you have a savings buffer for emergencies. This typically means 3-6 months' worth of living expenses.",
          "Define Your Asset Allocation: Decide how much of your money will go into stocks, bonds, real estate, etc. Your age, risk tolerance, and time horizon will influence this decision.",
          "Start Small: If you're new to investing, start with smaller amounts of money. Many platforms allow you to start investing with as little as $1.",
          "Regularly Rebalance: Over time, your investments will grow at different rates. Rebalancing ensures your portfolio stays aligned with your goals and risk tolerance.",
        ],
      },
      {
        title: "Where to Invest",
        text:
          "There are numerous platforms where you can begin investing. Here are some common ones:",
        list: [
          "Brokerage Accounts: These accounts allow you to buy and sell a variety of investments like stocks, bonds, and mutual funds. Examples include Robinhood, E*TRADE, and Charles Schwab.",
          "Robo-Advisors: These are automated platforms that build and manage a diversified portfolio for you. Examples include Betterment and Wealthfront.",
          "Retirement Accounts (IRA, 401(k)): If you're investing for retirement, tax-advantaged accounts like IRAs and 401(k)s can help you save on taxes while growing your investments.",
        ],
      },
      {
        title: "Understanding Investment Risks",
        text:
          "All investments come with risk, which means the possibility of losing some or all of your money. Understanding risk is crucial for making informed decisions.",
        list: [
          "Market Risk: The risk of losing money due to changes in the overall market.",
          "Credit Risk: The risk that a bond issuer or borrower will fail to make payments.",
          "Liquidity Risk: The risk that you won’t be able to sell an investment quickly at a reasonable price.",
          "Inflation Risk: The risk that your investments won’t keep up with inflation and lose purchasing power.",
        ],
      },
    ],
    keyTakeaways: [
      "Understand the importance of risk and reward.",
      "Start small and invest regularly.",
      "Diversify to minimize risk.",
    ],
    tips: [
      "Set clear financial goals before investing.",
      "Research thoroughly before choosing investment options.",
      "Use tools like SIPs for consistent investment habits.",
    ],
    relatedGuides: [2, 3,4],
  },

  {
    id: 2,
    title: "Understanding Stock Market Basics",
    category: "Beginner",
    icon: BarChart2, 
    coverImage: "https://via.placeholder.com/800x400?text=Stock+Market+Basics",
    content: [
      {
        title: "Introduction",
        text:
          "The stock market can be overwhelming for beginners, but understanding its core principles and how it functions can help you make informed decisions. This guide covers the basics of the stock market, how it operates, and why it matters.",
      },
      {
        title: "What is the Stock Market?",
        text:
          "The stock market is a marketplace where shares of publicly traded companies are bought and sold. It acts as a barometer of the economy and provides companies with a way to raise capital while offering investors opportunities for growth.",
        list: [
          "Platform for Trading: Companies list their shares on stock exchanges like the NYSE or NASDAQ, enabling investors to buy and sell them.",
          "Wealth Creation: Over time, investing in stocks can lead to significant wealth accumulation.",
          "Economic Indicator: Stock market trends often reflect the overall health of the economy.",
        ],
      },
      {
        title: "How the Stock Market Works",
        text:
          "The stock market operates on a supply-and-demand basis. Here's how it typically functions:",
        list: [
          "Initial Public Offerings (IPOs): Companies go public to raise capital, allowing investors to buy shares.",
          "Stock Exchanges: Shares are traded on platforms like the NYSE or NASDAQ, which facilitate transactions between buyers and sellers.",
          "Market Participants: The market includes institutional investors, retail investors, market makers, and more.",
        ],
      },
      {
        title: "Common Stock Market Terms",
        text:
          "Familiarizing yourself with key stock market terminology is essential for understanding how it works. Here are some important terms:",
        list: [
          "Stock: A share in the ownership of a company.",
          "Dividend: A portion of a company’s earnings distributed to shareholders.",
          "Market Capitalization: The total market value of a company's outstanding shares.",
          "Index: A benchmark that represents a group of stocks, such as the S&P 500 or Nifty 50.",
          "Bull Market: A period of rising stock prices.",
          "Bear Market: A period of declining stock prices.",
        ],
      },
      {
        title: "Why Invest in the Stock Market?",
        text:
          "Investing in the stock market offers several benefits, including:",
        list: [
          "Potential for High Returns: Stocks historically provide higher returns compared to other asset classes over the long term.",
          "Ownership: Owning shares gives you a stake in the company and, in some cases, voting rights.",
          "Liquidity: Stocks are relatively liquid, meaning they can be easily bought or sold.",
        ],
      },
      {
        title: "Steps to Start Investing in Stocks",
        text:
          "Getting started in the stock market requires a clear plan and understanding of the process. Here are the key steps:",
        steps: [
          "Open a Brokerage Account: Choose a reliable platform that suits your needs.",
          "Set an Investment Budget: Determine how much money you can allocate to investing without affecting your financial stability.",
          "Research and Choose Stocks: Analyze the companies you want to invest in based on their financials, industry position, and growth potential.",
          "Diversify: Avoid putting all your money into one stock. Spread it across sectors to minimize risk.",
          "Monitor Your Investments: Regularly review your portfolio to ensure it aligns with your goals.",
        ],
      },
      {
        title: "Risks of Stock Market Investing",
        text:
          "Investing in the stock market involves risks. It's important to understand them before diving in.",
        list: [
          "Volatility Risk: Stock prices can fluctuate significantly in a short period.",
          "Company-Specific Risk: The performance of an individual company can impact its stock value.",
          "Market Risk: Economic downturns and other external factors can affect the entire market.",
          "Emotional Risk: Reacting emotionally to market movements can lead to poor investment decisions.",
        ],
      },
    ],
    keyTakeaways: [
      "Understand how the stock market operates.",
      "Learn key stock market terms to build your knowledge.",
      "Diversify your investments to manage risks.",
    ],
    tips: [
      "Start with a small investment and gradually increase as you gain experience.",
      "Keep emotions in check to make rational decisions.",
      "Use trusted platforms for research and trading.",
    ],
    relatedGuides: [1, 3, 5], 
  },

  {
    id: 3,
    title: "How to Create a Diversified Portfolio",
    category: "Intermediate",
    icon: PieChart, // Assuming an appropriate icon for portfolio diversification
    coverImage: "https://via.placeholder.com/800x400?text=Diversified+Portfolio",
    content: [
      {
        title: "Introduction",
        text:
          "Diversification is a key strategy for minimizing risk and optimizing returns in your investment portfolio. This guide explains how to create a well-balanced portfolio that aligns with your financial goals and risk tolerance.",
      },
      {
        title: "What is Diversification?",
        text:
          "Diversification is the process of spreading your investments across different asset classes, industries, and geographies to reduce risk. Here's why it matters:",
        list: [
          "Risk Reduction: Diversifying minimizes the impact of a poor-performing investment on your overall portfolio.",
          "Steady Returns: A diversified portfolio can provide more consistent returns over time.",
          "Opportunity for Growth: By investing in different sectors and regions, you can capitalize on various growth opportunities.",
        ],
      },
      {
        title: "Asset Classes for Diversification",
        text:
          "A strong portfolio includes a mix of asset classes to balance risk and return. Here are the primary options:",
        list: [
          "Stocks: High-growth potential but more volatile.",
          "Bonds: Lower risk and provide stable income.",
          "Real Estate: Offers rental income and capital appreciation.",
          "Commodities: Can act as a hedge against inflation.",
          "Cash Equivalents: Highly liquid and low risk, such as money market funds.",
          "Alternative Investments: Includes assets like private equity, hedge funds, or cryptocurrencies for additional diversification.",
        ],
      },
      {
        title: "Steps to Build a Diversified Portfolio",
        text:
          "Building a diversified portfolio involves strategic planning and ongoing management. Follow these steps to get started:",
        steps: [
          "Assess Your Risk Tolerance: Determine how much risk you’re comfortable taking based on your financial goals and time horizon.",
          "Set Asset Allocation: Decide the percentage of your portfolio to allocate to each asset class. For example, 60% stocks, 30% bonds, and 10% alternative investments.",
          "Choose Investments Within Each Class: Diversify further by investing in multiple sectors, industries, or regions within each asset class.",
          "Consider Index Funds or ETFs: These provide instant diversification across many securities and are cost-effective.",
          "Rebalance Regularly: Adjust your portfolio periodically to maintain your desired asset allocation as market values change.",
        ],
      },
      {
        title: "Common Diversification Mistakes to Avoid",
        text:
          "While diversification is crucial, it’s easy to make mistakes that can limit its effectiveness. Be mindful of the following:",
        list: [
          "Over-Diversification: Spreading investments too thin can dilute potential returns.",
          "Ignoring Correlation: Ensure assets are not too closely correlated, as they might move in the same direction during market fluctuations.",
          "Neglecting to Rebalance: Failure to rebalance can lead to a portfolio that no longer aligns with your goals or risk tolerance.",
          "Focusing Only on Domestic Assets: Including international investments can enhance diversification.",
        ],
      },
      {
        title: "Tools to Help Diversify",
        text:
          "Various tools and platforms can simplify the process of creating and managing a diversified portfolio:",
        list: [
          "Robo-Advisors: Automated platforms like Betterment and Wealthfront build diversified portfolios tailored to your goals.",
          "Mutual Funds and ETFs: These provide exposure to multiple assets in a single investment.",
          "Portfolio Management Software: Tools like Personal Capital and Morningstar Portfolio Manager help track and optimize diversification.",
        ],
      },
      {
        title: "The Role of Time and Market Conditions",
        text:
          "Diversification strategies can vary depending on your investment timeline and market conditions. Keep these factors in mind:",
        list: [
          "Short-Term vs. Long-Term: Short-term investors may focus on stability, while long-term investors can afford to take more risks.",
          "Market Trends: Adjust your diversification strategy based on economic and market conditions, such as interest rates or geopolitical events.",
          "Lifecycle Approach: Younger investors might emphasize growth assets like stocks, while older investors may shift to income-generating assets like bonds.",
        ],
      },
    ],
    keyTakeaways: [
      "Diversification reduces risk and promotes steady returns.",
      "Combine different asset classes and sectors for optimal results.",
      "Regularly rebalance your portfolio to maintain alignment with your goals.",
    ],
    tips: [
      "Start with index funds or ETFs for easy diversification.",
      "Avoid over-diversifying to ensure meaningful returns.",
      "Stay informed about market trends and adjust your strategy as needed.",
    ],
    relatedGuides: [1, 2, 4], 
  },

  {
    id: 4,
    title: "Retirement Planning Strategies",
    category: "Intermediate",
    icon: Calendar,
    coverImage: "https://via.placeholder.com/800x400?text=Retirement+Planning",
    content: [
      {
        title: "Introduction",
        text:
          "Retirement planning is a critical aspect of financial well-being. By starting early and adopting effective strategies, you can secure a comfortable and stress-free retirement. This guide outlines the steps to build a solid retirement plan.",
      },
      {
        title: "Why Plan for Retirement?",
        text:
          "Retirement planning ensures financial security and allows you to maintain your lifestyle after you stop working. Key reasons to plan include:",
        list: [
          "Financial Independence: Avoid relying on others for financial support.",
          "Cost of Living: Prepare for healthcare and other expenses that may increase with age.",
          "Achieving Goals: Fund your dream retirement lifestyle, such as travel or hobbies.",
        ],
      },
      {
        title: "Key Elements of Retirement Planning",
        text:
          "Effective retirement planning involves understanding and managing several components. These include:",
        list: [
          "Savings: Accumulate sufficient funds to cover your post-retirement needs.",
          "Investments: Grow your savings through diversified investments to outpace inflation.",
          "Pension Plans: Take advantage of employer-sponsored plans like 401(k)s or public pension schemes.",
          "Healthcare: Account for medical expenses by investing in insurance or health savings accounts (HSAs).",
          "Estate Planning: Ensure a smooth transfer of wealth and assets to your beneficiaries.",
        ],
      },
      {
        title: "Steps to Create a Retirement Plan",
        text:
          "Follow these steps to create and execute a retirement plan tailored to your goals:",
        steps: [
          "Define Your Retirement Goals: Decide when you want to retire and the lifestyle you aim to maintain.",
          "Calculate Future Expenses: Estimate the annual income you'll need to sustain your retirement.",
          "Assess Current Savings: Evaluate your existing savings and investments to determine the gap to your target.",
          "Choose Retirement Accounts: Contribute to tax-advantaged accounts like 401(k)s, IRAs, or Roth IRAs.",
          "Diversify Investments: Allocate assets across stocks, bonds, and real estate to balance growth and stability.",
          "Plan for Inflation: Ensure your investments provide returns that outpace inflation to maintain purchasing power.",
        ],
      },
      {
        title: "Common Mistakes to Avoid",
        text:
          "Avoid these pitfalls to ensure a successful retirement strategy:",
        list: [
          "Starting Late: Delaying savings can lead to insufficient funds.",
          "Underestimating Expenses: Failing to account for inflation and medical costs.",
          "Overreliance on Social Security: Social Security benefits may not cover all expenses.",
          "Neglecting to Rebalance: Periodically adjust your portfolio to reflect changing goals and market conditions.",
        ],
      },
      {
        title: "Tools and Resources for Retirement Planning",
        text:
          "Several tools and resources can simplify the retirement planning process:",
        list: [
          "Retirement Calculators: Tools like Fidelity’s Retirement Score or Vanguard’s Retirement Planner.",
          "Financial Advisors: Professional advice to create a personalized plan.",
          "Robo-Advisors: Automated platforms like Betterment or Wealthfront for goal-based investing.",
          "Health Savings Accounts (HSAs): Tax-advantaged accounts for medical expenses.",
        ],
      },
      {
        title: "Adjusting Your Plan Over Time",
        text:
          "Retirement planning is an ongoing process. Adjust your plan as your circumstances and goals evolve:",
        list: [
          "Life Events: Reassess your strategy after major milestones like marriage, children, or job changes.",
          "Economic Conditions: Adapt to changes in interest rates, inflation, or market performance.",
          "Health Changes: Account for medical needs or lifestyle adjustments as you age.",
        ],
      },
    ],
    keyTakeaways: [
      "Start saving for retirement as early as possible to benefit from compounding.",
      "Diversify your investments to balance growth and security.",
      "Regularly review and adjust your plan to stay on track.",
    ],
    tips: [
      "Take advantage of employer matching for retirement accounts.",
      "Prioritize paying off high-interest debt before increasing retirement contributions.",
      "Plan for healthcare costs by exploring insurance and HSA options.",
    ],
    relatedGuides: [1, 3, 6], 
  },
  {
    id: 5,
    title: "Advanced Options Trading Techniques",
    category: "Advanced",
    icon: TrendingUp, 
    coverImage: "https://via.placeholder.com/800x400?text=Options+Trading",
    content: [
      {
        title: "Introduction",
        text:
          "Options trading provides sophisticated investors with tools to hedge risks, enhance returns, and speculate on market movements. This guide delves into advanced strategies for trading options and managing complex positions effectively.",
      },
      {
        title: "Understanding Options Trading",
        text:
          "Before employing advanced techniques, it's essential to have a strong grasp of options basics, including the following:",
        list: [
          "Call Options: The right to buy an asset at a specified price before a certain date.",
          "Put Options: The right to sell an asset at a specified price before a certain date.",
          "Strike Price and Expiration: Key terms defining the terms of the option contract.",
          "Implied Volatility: A measure of market expectations for future price movements.",
        ],
      },
      {
        title: "Advanced Strategies for Options Trading",
        text:
          "Here are some advanced options trading strategies to optimize your returns:",
        list: [
          "Straddles and Strangles: Simultaneously buying calls and puts to profit from significant price movements, regardless of direction.",
          "Butterfly Spreads: Combining multiple options to limit risk and capitalize on minimal price movement.",
          "Iron Condors: A neutral strategy involving a combination of spreads to profit from low volatility.",
          "Calendar Spreads: Using options with different expiration dates to benefit from time decay and volatility changes.",
          "Ratio Spreads: Selling more options than purchased to increase premium income, while managing risk exposure.",
        ],
      },
      {
        title: "Risk Management in Options Trading",
        text:
          "Advanced options trading requires meticulous risk management to protect capital and minimize losses:",
        steps: [
          "Position Sizing: Allocate only a small portion of your capital to high-risk trades.",
          "Hedging: Use options to offset risks in other positions, such as stocks or ETFs.",
          "Stop-Loss Orders: Set automatic exit points to limit losses if the market moves against your position.",
          "Portfolio Diversification: Spread your investments across different asset classes and strategies.",
        ],
      },
      {
        title: "Analyzing Market Trends for Options Trading",
        text:
          "Successful options trading depends on analyzing market data and trends effectively. Key tools include:",
        list: [
          "Technical Analysis: Use charts and indicators like Bollinger Bands, RSI, and Moving Averages.",
          "Fundamental Analysis: Assess company performance, earnings reports, and macroeconomic factors.",
          "Volatility Analysis: Monitor implied and historical volatility to identify mispriced options.",
          "Options Chains: Analyze option prices, open interest, and Greeks to make informed decisions.",
        ],
      },
      {
        title: "Common Mistakes in Advanced Options Trading",
        text:
          "Avoid these common pitfalls when trading options at an advanced level:",
        list: [
          "Overleveraging: Taking excessively large positions relative to your portfolio size.",
          "Ignoring Time Decay: Failing to account for the impact of theta on your positions.",
          "Overtrading: Excessively frequent trades can erode profits through fees and slippage.",
          "Chasing Volatility: Entering trades based solely on high implied volatility without a solid plan.",
        ],
      },
      {
        title: "Tools and Resources for Advanced Options Trading",
        text:
          "Leverage advanced tools and platforms to enhance your trading strategies:",
        list: [
          "Options Analytics Platforms: Tools like Thinkorswim or Options Profit Calculator for detailed analysis.",
          "Greeks Calculators: Tools to calculate Delta, Theta, Vega, and Gamma for managing risk.",
          "Backtesting Software: Simulate strategies using historical data to evaluate effectiveness.",
          "Market News Platforms: Stay updated with real-time news and trends through platforms like Bloomberg or Reuters.",
        ],
      },
    ],
    keyTakeaways: [
      "Mastering advanced options strategies requires thorough knowledge and practice.",
      "Risk management is critical to minimizing losses and protecting capital.",
      "Analyze market trends and use professional tools to inform your decisions.",
    ],
    tips: [
      "Start with paper trading to test advanced strategies before committing real money.",
      "Stay disciplined and stick to your trading plan, even during market fluctuations.",
      "Monitor implied volatility closely to identify opportunities and risks.",
    ],
    relatedGuides: [2, 3, 6], 
  },
  {
    id: 6,
    title: "Tax Strategies for Investors",
    category: "Advanced",
    icon: Lightbulb,
    coverImage: "https://via.placeholder.com/800x400?text=Tax+Strategies",
    content: [
      {
        title: "Introduction",
        text:
          "Taxes can significantly impact your investment returns. Understanding and implementing effective tax strategies can help investors minimize tax liabilities and maximize after-tax returns. This guide covers key tax-efficient strategies for advanced investors.",
      },
      {
        title: "Understanding Taxable Investments",
        text:
          "Knowing how investments are taxed is the foundation for effective tax planning. Here's an overview:",
        list: [
          "Capital Gains Tax: Profits from the sale of assets are subject to taxes. Long-term gains (assets held for more than a year) are taxed at lower rates than short-term gains.",
          "Dividend Taxes: Dividends are typically taxed as ordinary income or at qualified dividend rates, depending on the type of dividend.",
          "Interest Income: Interest from bonds, savings accounts, or certificates of deposit is taxed as ordinary income.",
          "Tax-Deferred Accounts: Accounts like IRAs and 401(k)s allow investments to grow tax-deferred until withdrawal.",
        ],
      },
      {
        title: "Strategies to Minimize Taxes",
        text:
          "Here are some strategies to reduce your tax burden while investing:",
        list: [
          "Tax-Loss Harvesting: Offset capital gains by selling investments at a loss. These losses can also offset up to $3,000 of ordinary income annually.",
          "Hold Investments Long-Term: Benefit from lower tax rates on long-term capital gains by holding assets for more than one year.",
          "Use Tax-Advantaged Accounts: Maximize contributions to tax-deferred or tax-exempt accounts like IRAs, 401(k)s, or Health Savings Accounts (HSAs).",
          "Municipal Bonds: Invest in municipal bonds, as interest income from these bonds is often exempt from federal taxes and, in some cases, state taxes.",
          "Invest in Index Funds or ETFs: These funds typically generate fewer taxable events compared to actively managed funds.",
        ],
      },
      {
        title: "Tax Considerations for Different Investment Types",
        text:
          "Different investment types have unique tax implications. Here's a breakdown:",
        list: [
          "Real Estate: Take advantage of depreciation deductions, 1031 exchanges, and interest expense write-offs to reduce taxable income.",
          "Cryptocurrency: Be aware that selling, trading, or using cryptocurrencies triggers taxable events, often taxed as property.",
          "REITs (Real Estate Investment Trusts): Dividends from REITs are generally taxed as ordinary income but may include tax-advantaged components.",
          "International Investments: Be mindful of foreign tax credits and treaties that can reduce double taxation on overseas earnings.",
        ],
      },
      {
        title: "Advanced Tax Planning Techniques",
        text:
          "Advanced investors can employ the following strategies for efficient tax planning:",
        list: [
          "Asset Location: Place highly taxed investments (like bonds) in tax-deferred accounts and tax-efficient investments (like index funds) in taxable accounts.",
          "Roth Conversions: Convert traditional IRA assets to Roth IRAs strategically to reduce future taxable withdrawals.",
          "Charitable Contributions: Donate appreciated securities instead of cash to charities, avoiding capital gains taxes while receiving a tax deduction.",
          "Family Gifting: Gift appreciated assets to family members in lower tax brackets to reduce overall tax liability.",
        ],
      },
      {
        title: "Common Tax Mistakes to Avoid",
        text:
          "Avoid these common errors to ensure optimal tax efficiency in your investments:",
        list: [
          "Neglecting Tax-Loss Harvesting: Missing opportunities to offset gains with losses can result in higher tax liabilities.",
          "Failing to Rebalance: Rebalancing without considering tax implications can lead to unnecessary capital gains.",
          "Ignoring Tax Implications of Retirement Withdrawals: Mismanaging withdrawals from retirement accounts can lead to unexpected tax bills.",
          "Overlooking State Taxes: State tax rules vary widely and can significantly impact your investment returns.",
        ],
      },
      {
        title: "Staying Updated on Tax Laws",
        text:
          "Tax laws change frequently, and staying informed is crucial for effective tax planning. Utilize the following resources:",
        list: [
          "IRS Publications: Regularly review IRS guidelines and updates on investment-related tax rules.",
          "Tax Software: Use software like TurboTax or H&R Block to manage and optimize your taxes.",
          "Professional Advisors: Work with a tax advisor or financial planner for personalized strategies.",
          "Educational Platforms: Follow trusted financial blogs and platforms for updates on tax law changes.",
        ],
      },
    ],
    keyTakeaways: [
      "Understanding how different investments are taxed is critical to optimizing returns.",
      "Implement strategies like tax-loss harvesting and asset location to minimize taxes.",
      "Stay informed about changing tax laws to adapt your investment approach.",
    ],
    tips: [
      "Keep detailed records of all investment transactions for accurate tax reporting.",
      "Consider a tax advisor for complex tax situations.",
      "Regularly review your portfolio for tax-efficiency opportunities.",
    ],
    relatedGuides: [1, 4 ,5], 
  }
];

export default function GuidePage() {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = guides.find((g) => g.id === parseInt(guideId || "", 10));

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
        <h1 className="text-2xl font-bold">Guide not found</h1>
      </div>
    );
  }

  const relatedGuides = guide.relatedGuides
    .map((id) => guides.find((g) => g.id === id))
    .filter((g) => g !== undefined) as Guide[];

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="w-full max-w-7xl mx-auto">
        <img
          src={guide.coverImage}
          alt={guide.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mt-16 border-4 border-purple-600"
        />

<div className="flex items-start mt-6 space-x-4">
          <h1 className="text-4xl font-bold text-gray-900 mt-2">{guide.title}</h1>
          <div className="w-10 h-10 flex justify-center items-center bg-purple-600 rounded-full mt-2">
            <guide.icon className="text-white" />
          </div>
        </div>

        <p className="text-lg font-medium text-gray-700 mt-2">
          {guide.category} Guide
        </p>

        <div className="mt-10 space-y-8">
          {guide.content.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.text}</p>
              {section.list && (
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  {section.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-purple-600 transition duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className="list-decimal pl-6 mt-4 space-y-2 text-gray-700">
                  {section.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="hover:text-purple-600 transition duration-300"
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}

          <div className="mt-10">
            <h3 className="text-3xl font-semibold text-gray-900">Key Takeaways</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              {guide.keyTakeaways.map((takeaway, index) => (
                <li
                  key={index}
                  className="hover:text-purple-600 transition duration-300"
                >
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-3xl font-semibold text-gray-900">Tips</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              {guide.tips.map((tip, index) => (
                <li
                  key={index}
                  className="hover:text-purple-600 transition duration-300"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {relatedGuides.length > 0 && (
            <div className="mt-10">
              <h3 className="text-3xl font-semibold text-gray-900">Related Guides</h3>
              <ul className="mt-4 space-y-2">
                {relatedGuides.map((relatedGuide) => (
                  <li key={relatedGuide.id}>
                    <Link
                      to={`/guides/${relatedGuide.id}`}
                      className="text-lg text-purple-600 hover:underline hover:text-purple-800 transition duration-300"
                    >
                      {relatedGuide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


  