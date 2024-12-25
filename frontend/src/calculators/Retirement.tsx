import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [estimatedCorpus, setEstimatedCorpus] = useState<number | null>(null);

  const calculateRetirementCorpus = () => {
    const age = parseInt(currentAge);
    const retirement = parseInt(retirementAge);
    const contribution = parseFloat(monthlyContribution);
    const savings = parseFloat(currentSavings);
    const rate = parseFloat(rateOfReturn);

    if (isNaN(age) || isNaN(retirement) || isNaN(contribution) || isNaN(savings) || isNaN(rate)) {
      return;
    }

    // Calculate the number of years until retirement
    const yearsUntilRetirement = retirement - age;
    if (yearsUntilRetirement <= 0) {
      return;
    }

    // Formula to calculate the future value of the retirement corpus
    const monthsUntilRetirement = yearsUntilRetirement * 12;
    const monthlyRate = rate / 100 / 12;

    // Future value of monthly contributions using compound interest formula
    const futureValueOfContributions = contribution * ((Math.pow(1 + monthlyRate, monthsUntilRetirement) - 1) / monthlyRate);

    // Future value of current savings using compound interest formula
    const futureValueOfSavings = savings * Math.pow(1 + monthlyRate, monthsUntilRetirement);

    // Total retirement corpus
    const totalCorpus = futureValueOfContributions + futureValueOfSavings;

    setEstimatedCorpus(parseFloat(totalCorpus.toFixed(2)));
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Retirement Corpus Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Plan your retirement and estimate the corpus you will need for a comfortable life after retirement.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your Retirement Corpus</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="currentAge"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Current Age
                    </label>
                    <input
                      id="currentAge"
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(e.target.value)}
                      placeholder="e.g., 30"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="retirementAge"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Retirement Age
                    </label>
                    <input
                      id="retirementAge"
                      type="number"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(e.target.value)}
                      placeholder="e.g., 60"
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
                      htmlFor="currentSavings"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Current Savings (₹)
                    </label>
                    <input
                      id="currentSavings"
                      type="number"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(e.target.value)}
                      placeholder="e.g., 200000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rateOfReturn"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Expected Rate of Return (%)
                    </label>
                    <input
                      id="rateOfReturn"
                      type="number"
                      value={rateOfReturn}
                      onChange={(e) => setRateOfReturn(e.target.value)}
                      placeholder="e.g., 8"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateRetirementCorpus}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate
                </button>

                {estimatedCorpus !== null && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Estimated Retirement Corpus: ₹{estimatedCorpus.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      This is the estimated amount you will accumulate by your retirement age, based on your current savings, monthly contribution, and expected rate of return.
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
