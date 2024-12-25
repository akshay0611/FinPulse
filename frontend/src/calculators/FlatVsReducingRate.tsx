import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function FlatVsReducingRate() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [flatTotalAmount, setFlatTotalAmount] = useState<number | null>(null);
  const [reducingTotalAmount, setReducingTotalAmount] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Function to calculate total amount for flat rate
  const calculateFlatRate = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const term = parseInt(loanTerm);

    if (isNaN(principal) || principal <= 0 || isNaN(rate) || rate <= 0 || isNaN(term) || term <= 0) {
      setError('Please enter valid positive values for loan amount, interest rate, and loan term.');
      return;
    }

    // Flat Rate Calculation
    const totalInterestFlat = principal * rate * term;
    const totalAmountFlat = principal + totalInterestFlat;

    setFlatTotalAmount(totalAmountFlat);
    setError('');
  };

  // Function to calculate total amount for reducing rate
  const calculateReducingRate = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const term = parseInt(loanTerm);

    if (isNaN(principal) || principal <= 0 || isNaN(rate) || rate <= 0 || isNaN(term) || term <= 0) {
      setError('Please enter valid positive values for loan amount, interest rate, and loan term.');
      return;
    }

    // Reducing Rate Calculation
    let totalInterestReducing = 0;
    let outstandingPrincipal = principal;

    for (let month = 1; month <= term; month++) {
      const interestForMonth = (outstandingPrincipal * rate) / 12;
      totalInterestReducing += interestForMonth;
      outstandingPrincipal -= principal / term; // EMI principal repayment
    }

    const totalAmountReducing = principal + totalInterestReducing;
    setReducingTotalAmount(totalAmountReducing);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Flat vs Reducing Rate Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Compare the total interest payable on a loan under the flat rate and reducing balance rate methods.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Loan Comparison Calculator</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="loanAmount" className="block text-lg font-medium text-gray-700">
                      Loan Amount (₹)
                    </label>
                    <input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="Enter loan amount"
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
                      placeholder="Enter interest rate"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="loanTerm" className="block text-lg font-medium text-gray-700">
                      Loan Term (Years)
                    </label>
                    <input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      placeholder="Enter loan term in years"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <button
                    onClick={calculateFlatRate}
                    className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                  >
                    Calculate Flat Rate
                  </button>
                  <button
                    onClick={calculateReducingRate}
                    className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                  >
                    Calculate Reducing Rate
                  </button>
                </div>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {flatTotalAmount !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Flat Rate Total Amount: ₹{flatTotalAmount.toFixed(2)}
                    </p>
                  </div>
                )}

                {reducingTotalAmount !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Reducing Rate Total Amount: ₹{reducingTotalAmount.toFixed(2)}
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
