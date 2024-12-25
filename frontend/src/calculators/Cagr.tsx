import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Cagr() {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [years, setYears] = useState('');
  const [cagr, setCagr] = useState<number | null>(null);
  const [error, setError] = useState('');

  // CAGR Calculation Logic
  const calculateCagr = () => {
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);
    const yearsCount = parseFloat(years);

    if (isNaN(initial) || isNaN(final) || isNaN(yearsCount) || initial <= 0 || final <= 0 || yearsCount <= 0) {
      setError('Please enter valid values for initial value, final value, and years.');
      return;
    }

    // CAGR formula: (Final Value / Initial Value) ^ (1 / Years) - 1
    const cagrResult = ((final / initial) ** (1 / yearsCount) - 1) * 100;
    setCagr(cagrResult);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Compounded Annual Growth Rate (CAGR) Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the Compounded Annual Growth Rate (CAGR) of your investment over a specific period.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate CAGR</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="initialValue"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Initial Value (₹)
                    </label>
                    <input
                      id="initialValue"
                      type="number"
                      value={initialValue}
                      onChange={(e) => setInitialValue(e.target.value)}
                      placeholder="e.g., 10000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="finalValue"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Final Value (₹)
                    </label>
                    <input
                      id="finalValue"
                      type="number"
                      value={finalValue}
                      onChange={(e) => setFinalValue(e.target.value)}
                      placeholder="e.g., 20000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="years"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Number of Years
                    </label>
                    <input
                      id="years"
                      type="number"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      placeholder="e.g., 5"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateCagr}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate CAGR
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {cagr !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Compounded Annual Growth Rate (CAGR): {cagr.toFixed(2)}%
                    </p>
                    <p className="text-sm text-gray-600">
                      The CAGR represents the mean annual growth rate of your investment over the specified period.
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
