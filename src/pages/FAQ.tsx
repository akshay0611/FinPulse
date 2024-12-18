import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiSearch } from 'react-icons/fi';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "What is FinPulse?",
      answer:
        "FinPulse is your go-to platform for the latest financial news, updates on government schemes, and fresh investment ideas. You can access all of this information without the need to sign up or log in. Everything you need is available right away!",
    },
    {
      question: "Do I need to create an account to access the content on FinPulse?",
      answer:
        "No, you don’t need to create an account or log in to view the content. All news, government schemes, and investment ideas are available to everyone, free of any sign-up requirements.",
    },
    {
      question: "How can I stay updated with the latest financial news?",
      answer:
        "Simply visit FinPulse to get the latest updates on financial trends, news, and government schemes. You don’t need an account—just access the site to stay informed.",
    },
    {
      question: "Can I find government schemes on FinPulse?",
      answer:
        "Yes, FinPulse regularly updates information about government schemes that could benefit individuals, businesses, and investors. All of this is available without needing to log in or register.",
    },
    {
      question: "Does FinPulse provide financial advice?",
      answer:
        "No, FinPulse does not provide financial advice. We offer news, updates on government schemes, and investment ideas to keep you informed, but the decision-making is entirely up to you.",
    },
    {
      question: "How do I get started with FinPulse?",
      answer:
        "There's no need to sign up or log in. Just visit the site to explore the latest financial news, government schemes, and investment ideas. Everything is available to you without any barriers.",
    },
    {
      question: "Is my personal data secure with FinPulse?",
      answer:
        "Absolutely! We take your privacy seriously. Since there is no sign-up process, we don’t collect any personal information from you. Your data is safe with us.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f8f9fa] text-gray-800">
      <Navbar />
      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[rgb(52,211,153)] mb-8">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Have questions? We have answers! Browse through our FAQs below to learn more about FinPulse and our services.
          </p>

          {/* Search Bar */}
          <div className="relative mb-12 max-w-lg mx-auto">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiSearch size={20} />
            </span>
            <input
              type="text"
              placeholder="Search for a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(52,211,153)]"
            />
          </div>

          {/* FAQ List */}
          {filteredFAQs.length > 0 ? (
            <div className="max-w-3xl mx-auto space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`border ${
                    openIndex === index ? "border-[rgb(52,211,153)]" : "border-gray-300"
                  } rounded-lg shadow-md transition-all duration-300`}
                >
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-[rgb(240,255,248)]"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 text-gray-600 bg-[rgb(240,255,248)]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-8">No FAQs match your search query.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
