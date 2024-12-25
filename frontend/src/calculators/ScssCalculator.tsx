import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function ScssCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [interestRate, setInterestRate] = useState('8.0'); // Current interest rate for SCSS (may vary)
  const [tenure, setTenure] = useState('5'); // Default tenure is 5 years
  const [quarterlyIncome, setQuarterlyIncome] = useState<number | null>(null);
  const [error, setError] = useState('');

  // SCSS Calculation Logic
  const calculateSCSSIncome = () => {
    const principal = parseFloat(investmentAmount);
    const rate = parseFloat(interestRate) / 100;
    const tenureYears = parseInt(tenure);

    if (isNaN(principal) || principal <= 0 || isNaN(rate) || rate <= 0 || isNaN(tenureYears) || tenureYears <= 0) {
      setError('Please enter valid positive values for investment amount, interest rate, and tenure.');
      return;
    }

    // SCSS provides quarterly interest
    const quarterlyIncomeValue = (principal * rate) / 4;
    setQuarterlyIncome(quarterlyIncomeValue);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Senior Citizen Savings Scheme (SCSS) Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate your quarterly income from the Senior Citizen Savings Scheme based on the investment amount, interest rate, and tenure.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Senior Citizen Savings Scheme (SCSS) Income Calculator</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="investmentAmount" className="block text-lg font-medium text-gray-700">
                      Investment Amount (₹)
                    </label>
                    <input
                      id="investmentAmount"
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                      placeholder="Enter investment amount"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="interestRate" className="block text-lg font-medium text-gray-700">
                      Interest Rate (%)
                    </label>
                    <input
                      id="interestRate"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      placeholder="Enter annual interest rate"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="tenure" className="block text-lg font-medium text-gray-700">
                      Tenure (Years)
                    </label>
                    <input
                      id="tenure"
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      placeholder="Enter number of years"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateSCSSIncome}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Quarterly Income
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {quarterlyIncome !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Quarterly Income: ₹{quarterlyIncome?.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      This is the quarterly income you will receive based on your investment in the Senior Citizen Savings Scheme.
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
