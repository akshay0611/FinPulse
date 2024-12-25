import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function IncomeTax() {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [taxableIncome, setTaxableIncome] = useState<number | null>(null);
  const [taxPayable, setTaxPayable] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Income Tax Calculation Logic
  const calculateTax = () => {
    const incomeAmount = parseFloat(income);
    const deductionAmount = parseFloat(deductions);
    
    if (isNaN(incomeAmount) || incomeAmount <= 0 || isNaN(deductionAmount) || deductionAmount < 0) {
      setError('Please enter valid income and deduction values.');
      return;
    }
    
    // Calculate taxable income
    const netIncome = incomeAmount - deductionAmount;
    setTaxableIncome(netIncome);

    // Tax slabs for FY 2024-25 (for individuals below 60 years)
    let tax = 0;
    if (netIncome <= 250000) {
      tax = 0;
    } else if (netIncome <= 500000) {
      tax = (netIncome - 250000) * 0.05;
    } else if (netIncome <= 1000000) {
      tax = 250000 * 0.05 + (netIncome - 500000) * 0.1;
    } else if (netIncome <= 2000000) {
      tax = 250000 * 0.05 + 500000 * 0.1 + (netIncome - 1000000) * 0.15;
    } else {
      tax = 250000 * 0.05 + 500000 * 0.1 + 1000000 * 0.15 + (netIncome - 2000000) * 0.2;
    }

    setTaxPayable(tax);
    setError('');
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Income Tax Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate your income tax based on the income tax slabs and deductions applicable for the current financial year.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your Income Tax</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="income"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Annual Income (₹)
                    </label>
                    <input
                      id="income"
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      placeholder="e.g., 600000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="deductions"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Deductions (₹)
                    </label>
                    <input
                      id="deductions"
                      type="number"
                      value={deductions}
                      onChange={(e) => setDeductions(e.target.value)}
                      placeholder="e.g., 150000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateTax}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Tax
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {taxableIncome !== null && taxPayable !== null && !error && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Taxable Income: ₹{taxableIncome.toLocaleString()}
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      Tax Payable: ₹{taxPayable.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      The tax payable is calculated based on the current income tax slabs for individuals below 60 years. You can claim deductions like 80C, 80D, etc.
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
