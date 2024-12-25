import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Apy() {
  const [age, setAge] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [expectedPension, setExpectedPension] = useState<number | null>(null);
  const [error, setError] = useState('');

  // APY Calculation Logic
  const calculatePension = () => {
    const userAge = parseFloat(age);
    const contribution = parseFloat(monthlyContribution);

    if (isNaN(userAge) || userAge <= 0 || isNaN(contribution) || contribution <= 0) {
      setError('Please enter valid age and contribution.');
      return;
    }

    // Assuming a simple model where the monthly contribution is multiplied by years to calculate the pension.
    const yearsToContribute = 60 - userAge; // Assuming pension starts at 60 years of age
    if (yearsToContribute <= 0) {
      setError('Age must be less than 60 to contribute to APY.');
      return;
    }

    // A basic formula for expected pension: (monthly contribution * years of contribution * a constant factor)
    const pension = contribution * yearsToContribute * 12 * 0.5; // Simplified factor for pension estimation.
    setExpectedPension(pension);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Atal Pension Yojana Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate your expected pension under the Atal Pension Yojana (APY) based on your age and monthly contribution.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your Expected Pension</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g., 30"
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
                </div>

                <button
                  onClick={calculatePension}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Pension
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {expectedPension !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Expected Pension Amount: ₹{expectedPension.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      The pension is calculated based on the following assumptions:
                      <br />
                      - The monthly contribution continues until the user turns 60.
                      <br />
                      - The constant factor used here is for simplified estimation.
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
