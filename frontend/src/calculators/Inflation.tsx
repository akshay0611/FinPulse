import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Inflation() {
  const [currentValue, setCurrentValue] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Inflation Calculation Logic
  const calculateInflation = () => {
    const current = parseFloat(currentValue);
    const rate = parseFloat(inflationRate) / 100;
    const period = parseInt(years);

    if (
      isNaN(current) ||
      isNaN(rate) ||
      isNaN(period) ||
      current <= 0 ||
      rate < 0 ||
      period <= 0
    ) {
      setError('Please enter valid positive values for all fields.');
      return;
    }

    // Calculate Future Value considering inflation
    const future = current * Math.pow(1 + rate, period);
    setFutureValue(future);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Inflation Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the future value of your savings or investments accounting for inflation over time.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Inflation Impact Calculator</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="currentValue" className="block text-lg font-medium text-gray-700">
                      Current Value (₹)
                    </label>
                    <input
                      id="currentValue"
                      type="number"
                      value={currentValue}
                      onChange={(e) => setCurrentValue(e.target.value)}
                      placeholder="Enter current value"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="inflationRate" className="block text-lg font-medium text-gray-700">
                      Inflation Rate (%)
                    </label>
                    <input
                      id="inflationRate"
                      type="number"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value)}
                      placeholder="Enter annual inflation rate"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="years" className="block text-lg font-medium text-gray-700">
                      Number of Years
                    </label>
                    <input
                      id="years"
                      type="number"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      placeholder="Enter number of years"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateInflation}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Future Value
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {futureValue !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Future Value: ₹{futureValue?.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      This is the value of your savings/investment considering the inflation rate over the given period.
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
