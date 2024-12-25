import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function MFCalculator() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateMF = () => {
    const P = parseFloat(initialInvestment);
    const M = parseFloat(monthlyContribution);
    const r = parseFloat(rate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(time) * 12; // Total months

    // Mutual Fund formula: FV = P * (1 + r)^n + M * [(1 + r)^n - 1] / r
    const futureValue =
      P * Math.pow(1 + r, n) + M * ((Math.pow(1 + r, n) - 1) / r);
    setResult(parseFloat(futureValue.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mutual Fund Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Estimate your future returns with our Mutual Fund calculator.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your Mutual Fund Returns</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="initialInvestment"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Initial Investment (₹)
                    </label>
                    <input
                      id="initialInvestment"
                      type="number"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(e.target.value)}
                      placeholder="e.g., 50000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
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
                      htmlFor="rate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Expected Annual Return (% p.a.)
                    </label>
                    <input
                      id="rate"
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      placeholder="e.g., 12"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Time Period (Years)
                    </label>
                    <input
                      id="time"
                      type="number"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder="e.g., 10"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateMF}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate
                </button>

                {result !== null && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Future Value: ₹{result.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Investment: ₹{(
                        parseFloat(initialInvestment) + parseFloat(monthlyContribution) * parseFloat(time) * 12
                      ).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Gain: ₹{(result - (parseFloat(initialInvestment) + parseFloat(monthlyContribution) * parseFloat(time) * 12)).toLocaleString()}
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
