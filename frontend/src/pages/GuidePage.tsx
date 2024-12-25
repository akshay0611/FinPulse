import React from "react";
import { useParams } from "react-router-dom";
import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { Link, Element } from "react-scroll";

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
      // Other content...
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
<div className="bg-gradient-to-r from-green-50 to-blue-50 min-h-screen p-8 flex">

{/* Sidebar Section */}
<div className="w-1/5 pl-4 p-6 bg-gray-50 border-r-2 border-gray-200 shadow-lg rounded-lg h-screen sticky top-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Sections</h2>
  <ul className="space-y-4">
    {guide.content.map((section, index) => (
      <li key={index} className="text-lg font-semibold">
        <Link
          to={`section-${index}`}
          smooth={true}
          duration={500}
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          {section.title}
        </Link>
      </li>
    ))}
    <li className="text-lg font-semibold">
      <Link
        to="key-takeaways"
        smooth={true}
        duration={500}
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
        Key Takeaways
      </Link>
    </li>
  </ul>
</div>


      {/* Main Content Section */}
      <div className="w-3/4 ml-8">
        <img
          src={guide.coverImage}
          alt={guide.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mt-16"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-6">{guide.title}</h1>
        <p className="text-lg font-semibold text-gray-500 mt-2">{guide.category} Guide</p>

        <div className="mt-10 space-y-8">
          {guide.content.map((section, index) => (
            <Element name={`section-${index}`} key={index} className="space-y-4">
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
            </Element>
          ))}

    {/* Key Takeaways Section */}
    <Element name="key-takeaways" className="mt-10">
      <h3 className="text-3xl font-semibold text-gray-800">Key Takeaways</h3>
      <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
        {guide.keyTakeaways.map((takeaway, index) => (
          <li key={index} className="hover:text-blue-500 transition duration-300">
            {takeaway}
          </li>
        ))}
      </ul>
    </Element>

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
