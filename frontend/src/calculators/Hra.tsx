import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function HRA() {
  const [basicSalary, setBasicSalary] = useState('');
  const [houseRent, setHouseRent] = useState('');
  const [cityType, setCityType] = useState('');
  const [hraExempt, setHraExempt] = useState<number | null>(null);

  const calculateHRA = () => {
    const basic = parseFloat(basicSalary); // Basic salary
    const rent = parseFloat(houseRent); // Monthly rent paid
    const city = cityType.toLowerCase(); // City type (metro or non-metro)

    if (isNaN(basic) || isNaN(rent) || !city) {
      return;
    }

    // HRA Calculation Formula
    // Exemption is calculated as the minimum of the following:
    // 1. Actual HRA received
    // 2. Rent paid minus 10% of basic salary
    // 3. 50% of basic salary for metro cities or 40% for non-metro cities

    const actualHRAReceived = rent * 0.10 * basic;
    const rentMinus10Percent = rent - (0.10 * basic);
    const cityAllowance = city === 'metro' ? 0.50 * basic : 0.40 * basic;

    const hraExemption = Math.min(actualHRAReceived, rentMinus10Percent, cityAllowance);

    setHraExempt(parseFloat(hraExemption.toFixed(2)));
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">House Rent Allowance (HRA) Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate your HRA exemption and how much tax you can save based on your salary, rent paid, and city type.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your HRA Exemption</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="basicSalary"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Basic Salary (₹)
                    </label>
                    <input
                      id="basicSalary"
                      type="number"
                      value={basicSalary}
                      onChange={(e) => setBasicSalary(e.target.value)}
                      placeholder="e.g., 30000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="houseRent"
                      className="block text-lg font-medium text-gray-700"
                    >
                      House Rent (₹)
                    </label>
                    <input
                      id="houseRent"
                      type="number"
                      value={houseRent}
                      onChange={(e) => setHouseRent(e.target.value)}
                      placeholder="e.g., 15000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cityType"
                      className="block text-lg font-medium text-gray-700"
                    >
                      City Type (Metro / Non-Metro)
                    </label>
                    <input
                      id="cityType"
                      type="text"
                      value={cityType}
                      onChange={(e) => setCityType(e.target.value)}
                      placeholder="e.g., Metro"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateHRA}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate
                </button>

                {hraExempt !== null && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Estimated HRA Exemption: ₹{hraExempt.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      The above HRA exemption is calculated based on the entered salary, rent paid, and city type (metro or non-metro).
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
