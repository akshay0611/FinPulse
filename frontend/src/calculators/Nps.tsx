import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function NPSCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateNPS = () => {
    const P = parseFloat(monthlyContribution); // Monthly contribution
    const r = parseFloat(rateOfReturn) / 100; // Annual rate of return (as a decimal)
    const t = parseFloat(years); // Time period in years

    // Formula for NPS maturity amount
    // Future Value of Series Formula (FVS):
    // A = P * [(1 + r / 12)^(12 * t) - 1] / (r / 12)
    const futureValue = P * ((Math.pow(1 + r / 12, 12 * t) - 1) / (r / 12));

    setResult(parseFloat(futureValue.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-green-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">National Pension System (NPS) Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate your NPS corpus at the time of retirement based on your monthly contribution, rate of return, and investment duration.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your NPS Corpus</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="monthlyContribution"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Monthly Contribution (₹)
                    </label>
                    <input
                      id="monthlyContribution"
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                      placeholder="e.g., 5000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rateOfReturn"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Expected Annual Rate of Return (%)
                    </label>
                    <input
                      id="rateOfReturn"
                      type="number"
                      value={rateOfReturn}
                      onChange={(e) => setRateOfReturn(e.target.value)}
                      placeholder="e.g., 8"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="years"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Investment Duration (Years)
                    </label>
                    <input
                      id="years"
                      type="number"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      placeholder="e.g., 30"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateNPS}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate
                </button>

                {result !== null && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Estimated NPS Corpus at Retirement: ₹{result.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Contribution: ₹{(parseFloat(monthlyContribution) * parseFloat(years) * 12).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
