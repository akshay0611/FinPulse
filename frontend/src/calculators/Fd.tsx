import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function FDCalculator() {
  const [initialDeposit, setInitialDeposit] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateFD = () => {
    const P = parseFloat(initialDeposit);  // Principal amount
    const r = parseFloat(rate) / 100;  // Annual interest rate (as a decimal)
    const n = parseFloat(time);  // Time period in years

    // Formula for Fixed Deposit maturity amount with quarterly compounding
    const maturityAmount =
      P * Math.pow(1 + r / 4, 4 * n); // Compound interest formula for quarterly compounding
    setResult(parseFloat(maturityAmount.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-yellow-600 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Fixed Deposit (FD) Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the maturity amount of your Fixed Deposit (FD) based on the initial deposit, interest rate, and tenure.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your FD Maturity Amount</h2>
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
                      placeholder="e.g., 10000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-200 ease-in-out"
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
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-200 ease-in-out"
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
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateFD}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate
                </button>

                {result !== null && (
                  <div className="mt-6 p-4 bg-yellow-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Maturity Amount: ₹{result.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Interest: ₹{(result - parseFloat(initialDeposit)).toLocaleString()}
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
