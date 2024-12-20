import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faLightbulb, faHandsHelping, faTools } from "@fortawesome/free-solid-svg-icons";

// FeatureItem component
interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: Feature) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg py-6 px-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 group">
    <div className="flex items-center justify-center bg-emerald-100 rounded-full">
      {icon}
    </div>
      <div>
        <p className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
          {title}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

// FeatureList component
const features: Feature[] = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faNewspaper} className="text-emerald-500 w-6 h-6" />,
    title: "Summarized Financial News",
    description: "Get the latest financial news updates, helping you stay informed on global market trends, stock movements, and investment opportunities.",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faLightbulb} className="text-emerald-500 w-6 h-6" />,
    title: "Curated Investment Ideas",
    description: "Explore curated investment strategies that are suited to your financial goals. Whether you're a beginner or seasoned investor, we have options tailored for you.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faHandsHelping} className="text-emerald-500 w-6 h-6" />,
    title: "Government Schemes Updates",
    description: "Access the latest updates on government schemes designed to help individuals and businesses, with detailed insights on eligibility and benefits.",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faTools} className="text-emerald-500 w-6 h-6" />,
    title: "Financial Tools & Resources",
    description: "Gain access to a suite of financial tools that help you track investments, analyze market trends, and make data-driven decisions.",
  },
];

const FeatureList = () => {
  return (
    <div className="space-y-6">
      {features.map((feature) => (
        <FeatureItem key={feature.id} {...feature} />
      ))}
    </div>
  );
};

// PointingPerson component
const PointingPerson = () => {
    return (
      <div className="relative w-full h-[500px]">
        <img
          src="https://cdn.fundsindia.com/prelogin/home-second-block-bg.png?auto=format&fit=max&w=1200"
          alt="Investment advisor pointing to features"
          className="w-full h-full object-contain"
          style={{ position: 'relative', top: '100px' }} 
        />
      </div>
    );
};
  

// SectionTitle component
const SectionTitle = () => {
  return (
    <h2 className="text-4xl font-bold mb-12 text-center lg:text-left text-gray-800">
      <span className="text-emerald-500">Why</span> should you choose us?
    </h2>
  );
};

// WhyChooseUs component
const WhyChooseUs = () => {
    return (
      <section
        className="relative bg-gradient-to-br from-[#f0f4f4] via-[#f5f7f7] to-[#ffffff] px-4 py-16 mt-4 " // Added mt-10 for margin top
        style={{ height: '750px' }} // Keep the height as it is
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <PointingPerson />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle />
              <FeatureList />
            </div>
          </div>
        </div>
      </section>
    );
};
  
  

export default WhyChooseUs;
