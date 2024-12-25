import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function SSYCalculator() {
  const [initialDeposit, setInitialDeposit] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSSY = () => {
    const P = parseFloat(initialDeposit);  // Initial deposit
    const M = parseFloat(monthlyContribution);  // Monthly contribution
    const r = parseFloat(rate) / 100;  // Annual interest rate (as a decimal)
    const n = parseFloat(time);  // Time period in years

    // SSY formula: FV = P * (1 + r)^n + M * [(1 + r)^n - 1] / r
    // Since interest is compounded yearly, we adjust the formula accordingly
    const futureValue =
      P * Math.pow(1 + r, n) + M * (((Math.pow(1 + r, n) - 1) / r) * (1 + r)); // Adjustment for monthly contribution
    setResult(parseFloat(futureValue.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sukanya Samriddhi Yojana Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the future value of your Sukanya Samriddhi Yojana investment.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your SSY Returns</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="initialDeposit"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Initial Deposit (₹)
                    </label>
                    <input
                      id="initialDeposit"
                      type="number"
                      value={initialDeposit}
                      onChange={(e) => setInitialDeposit(e.target.value)}
                      placeholder="e.g., 1000"
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
                      placeholder="e.g., 1000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Expected Annual Interest Rate (%)
                    </label>
                    <input
                      id="rate"
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      placeholder="e.g., 7.6"
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
                      placeholder="e.g., 14"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateSSY}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
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
                        parseFloat(initialDeposit) + parseFloat(monthlyContribution) * parseFloat(time) * 12
                      ).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Gain: ₹{(result - (parseFloat(initialDeposit) + parseFloat(monthlyContribution) * parseFloat(time) * 12)).toLocaleString()}
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
