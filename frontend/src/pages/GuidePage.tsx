import React from "react";
import { useParams } from "react-router-dom";
import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";


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
    relatedGuides: [2, 3],
  },
  // Add other guides similarly...
];

export default function GuidePage() {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = guides.find((g) => g.id === parseInt(guideId || "", 10));

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h1 className="text-2xl font-bold">Guide not found</h1>
      </div>
    );
  }

  const relatedGuides = guide.relatedGuides
    .map((id) => guides.find((g) => g.id === id))
    .filter((g) => g !== undefined) as Guide[];

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 min-h-screen p-8">
      <div className="w-full max-w-7xl mx-auto">
        <img
          src={guide.coverImage}
          alt={guide.title}
           className="w-full h-64 object-cover rounded-lg shadow-lg mt-16"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-6">{guide.title}</h1>
        <p className="text-lg font-semibold text-gray-500 mt-2">{guide.category} Guide</p>

        <div className="mt-10 space-y-8">
          {guide.content.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">{section.title}</h2>
              <p className="text-lg text-gray-700">{section.text}</p>
              {section.list && (
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="hover:text-blue-500 transition duration-300">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className="list-decimal pl-6 mt-4 space-y-2 text-gray-700">
                  {section.steps.map((step, idx) => (
                    <li key={idx} className="hover:text-blue-500 transition duration-300">
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}

          <div className="mt-10">
            <h3 className="text-3xl font-semibold text-gray-800">Key Takeaways</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              {guide.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="hover:text-blue-500 transition duration-300">
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-3xl font-semibold text-gray-800">Tips</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              {guide.tips.map((tip, index) => (
                <li key={index} className="hover:text-blue-500 transition duration-300">
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {relatedGuides.length > 0 && (
            <div className="mt-10">
              <h3 className="text-3xl font-semibold text-gray-800">Related Guides</h3>
              <ul className="mt-4 space-y-2">
                {relatedGuides.map((relatedGuide) => (
                  <li
                    key={relatedGuide.id}
                    className="text-lg text-blue-600 hover:underline hover:text-blue-800 transition duration-300"
                  >
                    {relatedGuide.title}
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
