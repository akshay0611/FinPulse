import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Search, HelpCircle, MessageCircle, PhoneCall } from 'lucide-react';

const faqCategories = [
  {
    category: "Account & Security",
    questions: [
      { q: "How do I reset my password?", a: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email." },
      { q: "How can I enable two-factor authentication?", a: "Go to your account settings, select 'Security', and follow the prompts to set up two-factor authentication." },
    ],
  },
  {
    category: "Investments",
    questions: [
      { q: "How do I start investing?", a: "To start investing, first complete your profile and risk assessment. Then, navigate to the 'Invest' section and choose your preferred investment option." },
      { q: "What are the minimum investment amounts?", a: "Minimum investment amounts vary by product. Generally, you can start with as little as $100 for most of our investment options." },
    ],
  },
  {
    category: "Payments & Withdrawals",
    questions: [
      { q: "How long does it take to process a withdrawal?", a: "Withdrawals are typically processed within 1-3 business days, depending on your bank and the amount requested." },
      { q: "What payment methods do you accept?", a: "We accept bank transfers, credit/debit cards, and various digital payment methods. Check the 'Payment Methods' page for a full list." },
    ],
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter questions based on search query
  const filteredFaqCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(question =>
      question.q.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl mb-8">Find answers to your questions and get the support you need.</p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            {filteredFaqCategories.map((category, index) => (
              category.questions.length > 0 && (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                  <div className="space-y-4">
                    {category.questions.map((item, qIndex) => (
                      <details key={qIndex} className="bg-gray-100 rounded-lg shadow p-4">
                        <summary className="cursor-pointer font-medium">{item.q}</summary>
                        <p className="mt-2 text-gray-700">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Need More Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="mb-4">
                  <HelpCircle className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold">Knowledge Base</h3>
                  <p className="text-sm text-gray-600">Explore our comprehensive guides and tutorials</p>
                </div>
                <a
                  href="/guides"
                  className="inline-block text-center w-full py-2 px-4 rounded bg-purple-600 text-white hover:bg-purple-700"
                >
                  Browse Guides
                </a>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="mb-4">
                  <MessageCircle className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold">Live Chat</h3>
                  <p className="text-sm text-gray-600">Chat with our support team in real-time</p>
                </div>
                <button className="text-center w-full py-2 px-4 rounded bg-purple-600 text-white hover:bg-purple-700">
                  Start Chat
                </button>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="mb-4">
                  <PhoneCall className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold">Phone Support</h3>
                  <p className="text-sm text-gray-600">Speak directly with a customer service representative</p>
                </div>
                <button className="text-center w-full py-2 px-4 rounded bg-purple-600 text-white hover:bg-purple-700">
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
