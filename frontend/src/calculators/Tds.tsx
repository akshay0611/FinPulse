import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Tds() {
  const [income, setIncome] = useState('');
  const [tdsRate, setTdsRate] = useState('');
  const [tdsAmount, setTdsAmount] = useState<number | null>(null);
  const [netIncome, setNetIncome] = useState<number | null>(null);
  const [error, setError] = useState('');

  // TDS Calculation Logic
  const calculateTds = () => {
    const incomeAmount = parseFloat(income);
    const rate = parseFloat(tdsRate);

    if (isNaN(incomeAmount) || isNaN(rate) || incomeAmount <= 0 || rate < 0 || rate > 100) {
      setError('Please enter valid values for income and TDS rate.');
      return;
    }

    const calculatedTds = (incomeAmount * rate) / 100;
    const calculatedNetIncome = incomeAmount - calculatedTds;

    setTdsAmount(calculatedTds);
    setNetIncome(calculatedNetIncome);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">TDS (Tax Deducted at Source) Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the Tax Deducted at Source (TDS) based on your income and the applicable TDS rate.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate TDS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="income"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Income (₹)
                    </label>
                    <input
                      id="income"
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      placeholder="Enter your income"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tdsRate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      TDS Rate (%)
                    </label>
                    <input
                      id="tdsRate"
                      type="number"
                      value={tdsRate}
                      onChange={(e) => setTdsRate(e.target.value)}
                      placeholder="Enter TDS rate"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateTds}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate TDS
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {tdsAmount !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      TDS Amount: ₹{tdsAmount?.toFixed(2)}
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      Net Income After TDS: ₹{netIncome?.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      The TDS amount is calculated based on your income and the TDS rate you entered.
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
