import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function EMI() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emiAmount, setEmiAmount] = useState<number | null>(null);

  const calculateEmi = () => {
    const loan = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const tenure = parseInt(loanTenure) * 12; // Converting years to months

    if (isNaN(loan) || isNaN(rate) || isNaN(tenure) || loan <= 0 || rate <= 0 || tenure <= 0) {
      return;
    }

    // EMI formula
    const emi = (loan * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    setEmiAmount(parseFloat(emi.toFixed(2)));
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">EMI Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate your monthly EMI for a loan based on the loan amount, interest rate, and tenure.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your EMI</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="loanAmount"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Loan Amount (₹)
                    </label>
                    <input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="e.g., 500000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="interestRate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Interest Rate (% per annum)
                    </label>
                    <input
                      id="interestRate"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      placeholder="e.g., 7"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="loanTenure"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Loan Tenure (Years)
                    </label>
                    <input
                      id="loanTenure"
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                      placeholder="e.g., 10"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateEmi}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate EMI
                </button>

                {emiAmount !== null && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Monthly EMI: ₹{emiAmount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      This is the monthly EMI you would need to pay based on the entered loan amount, interest rate, and tenure.
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
