import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Salary() {
  const [basicSalary, setBasicSalary] = useState('');
  const [houseRentAllowance, setHouseRentAllowance] = useState('');
  const [specialAllowance, setSpecialAllowance] = useState('');
  const [providentFund, setProvidentFund] = useState('');
  const [taxDeductions, setTaxDeductions] = useState('');
  const [netSalary, setNetSalary] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Salary Calculation Logic
  const calculateSalary = () => {
    const basic = parseFloat(basicSalary);
    const hra = parseFloat(houseRentAllowance);
    const special = parseFloat(specialAllowance);
    const pf = parseFloat(providentFund);
    const tax = parseFloat(taxDeductions);

    if (
      isNaN(basic) ||
      isNaN(hra) ||
      isNaN(special) ||
      isNaN(pf) ||
      isNaN(tax) ||
      basic <= 0 ||
      hra < 0 ||
      special < 0 ||
      pf < 0 ||
      tax < 0
    ) {
      setError('Please enter valid positive values for salary components and deductions.');
      return;
    }

    // Calculate Gross Salary
    const grossSalary = basic + hra + special;
    
    // Calculate Net Salary
    const totalDeductions = pf + tax;
    const calculatedNetSalary = grossSalary - totalDeductions;

    setNetSalary(calculatedNetSalary);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Salary Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate your take-home salary based on various salary components and deductions.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your Salary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="basicSalary" className="block text-lg font-medium text-gray-700">
                      Basic Salary (₹)
                    </label>
                    <input
                      id="basicSalary"
                      type="number"
                      value={basicSalary}
                      onChange={(e) => setBasicSalary(e.target.value)}
                      placeholder="Enter your basic salary"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="houseRentAllowance" className="block text-lg font-medium text-gray-700">
                      House Rent Allowance (₹)
                    </label>
                    <input
                      id="houseRentAllowance"
                      type="number"
                      value={houseRentAllowance}
                      onChange={(e) => setHouseRentAllowance(e.target.value)}
                      placeholder="Enter your HRA"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialAllowance" className="block text-lg font-medium text-gray-700">
                      Special Allowance (₹)
                    </label>
                    <input
                      id="specialAllowance"
                      type="number"
                      value={specialAllowance}
                      onChange={(e) => setSpecialAllowance(e.target.value)}
                      placeholder="Enter your special allowance"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="providentFund" className="block text-lg font-medium text-gray-700">
                      Provident Fund Deduction (₹)
                    </label>
                    <input
                      id="providentFund"
                      type="number"
                      value={providentFund}
                      onChange={(e) => setProvidentFund(e.target.value)}
                      placeholder="Enter PF deduction"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="taxDeductions" className="block text-lg font-medium text-gray-700">
                      Tax Deductions (₹)
                    </label>
                    <input
                      id="taxDeductions"
                      type="number"
                      value={taxDeductions}
                      onChange={(e) => setTaxDeductions(e.target.value)}
                      placeholder="Enter your tax deductions"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateSalary}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Salary
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {netSalary !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Net Salary (Take-home): ₹{netSalary?.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      The net salary is calculated by adding up all salary components and subtracting applicable deductions.
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
