import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateRD = () => {
    const P = parseFloat(monthlyDeposit);  // Monthly deposit amount
    const r = parseFloat(rate) / 100;  // Annual interest rate (as a decimal)
    const n = parseFloat(time);  // Time period in years

    // Formula for Recurring Deposit maturity amount with quarterly compounding
    // Maturity Amount = P * [(1 + r / 4)^(4*n) - 1] / (1 - (1 + r / 4)^(-1/3))
    const maturityAmount = P * ((Math.pow(1 + r / 4, 4 * n) - 1) / (Math.pow(1 + r / 4, 1 / 3) - 1));
    setResult(parseFloat(maturityAmount.toFixed(2)));
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Recurring Deposit (RD) Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the maturity amount of your Recurring Deposit (RD) based on the monthly deposit, interest rate, and tenure.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your RD Maturity Amount</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="monthlyDeposit"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Monthly Deposit (₹)
                    </label>
                    <input
                      id="monthlyDeposit"
                      type="number"
                      value={monthlyDeposit}
                      onChange={(e) => setMonthlyDeposit(e.target.value)}
                      placeholder="e.g., 2000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Annual Interest Rate (%)
                    </label>
                    <input
                      id="rate"
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      placeholder="e.g., 7"
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
                      placeholder="e.g., 5"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateRD}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate
                </button>

                {result !== null && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Maturity Amount: ₹{result.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Interest: ₹{(result - parseFloat(monthlyDeposit) * parseFloat(time) * 12).toLocaleString()}
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
