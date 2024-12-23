import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faLightbulb, faHandsHelping, faTools, faChartLine, faDollarSign } from "@fortawesome/free-solid-svg-icons";

// FeatureItem component
interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: Feature) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg py-8 px-6 shadow-md hover:shadow-xl transition-shadow duration-300 group transform hover:-translate-y-2 hover:scale-105 relative z-10">
      <div className="flex items-center justify-center bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-full p-4 mb-4">
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
        {title}
      </p>
      <p className="text-base text-gray-600 mt-3">
        {description}
      </p>
    </div>
  );
};

// FeatureList component
const features: Feature[] = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faNewspaper} className="text-emerald-500 w-8 h-8" />,
    title: "Summarized Financial News",
    description: "Get the latest financial news updates, helping you stay informed on global market trends, stock movements, and investment opportunities.",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faLightbulb} className="text-emerald-500 w-8 h-8" />,
    title: "Curated Investment Ideas",
    description: "Explore curated investment strategies that are suited to your financial goals. Whether you're a beginner or seasoned investor, we have options tailored for you.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faHandsHelping} className="text-emerald-500 w-8 h-8" />,
    title: "Government Schemes Updates",
    description: "Access the latest updates on government schemes designed to help individuals and businesses, with detailed insights on eligibility and benefits.",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faTools} className="text-emerald-500 w-8 h-8" />,
    title: "Financial Tools & Resources",
    description: "Gain access to a suite of financial tools that help you track investments, analyze market trends, and make data-driven decisions.",
  },
];

const FeatureList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature) => (
        <FeatureItem key={feature.id} {...feature} />
      ))}
    </div>
  );
};

// SectionTitle component
const SectionTitle = () => {
  return (
    <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-800">
      <span className="text-emerald-500">Why</span> should you choose us?
    </h2>
  );
};

// WhyChooseUs component
const WhyChooseUs = () => {
    return (
      <section
        className="relative bg-gradient-to-br from-[#e0f7f7] via-[#f0f9f9] to-[#ffffff] px-6 py-20 mt-6 overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        <div className="absolute top-0 left-0 opacity-10 z-0">
          <FontAwesomeIcon icon={faChartLine} className="text-emerald-500 w-16 h-16" />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10 z-0">
          <FontAwesomeIcon icon={faDollarSign} className="text-emerald-500 w-16 h-16" />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionTitle />
          <FeatureList />
        </div>
      </section>
    );
};
  
export default WhyChooseUs;
