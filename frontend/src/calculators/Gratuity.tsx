import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Gratuity() {
  const [lastSalary, setLastSalary] = useState('');
  const [yearsOfService, setYearsOfService] = useState('');
  const [gratuityAmount, setGratuityAmount] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Gratuity Calculation Logic
  const calculateGratuity = () => {
    const salary = parseFloat(lastSalary);
    const years = parseFloat(yearsOfService);
    
    if (isNaN(salary) || salary <= 0 || isNaN(years) || years <= 0) {
      setError('Please enter valid salary and years of service.');
      return;
    }

    // Gratuity formula: Gratuity = (Last Salary × Years of Service × 15) / 26
    const gratuity = (salary * years * 15) / 26;
    setGratuityAmount(gratuity);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gratuity Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the gratuity amount based on your last drawn salary and years of service with your employer.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your Gratuity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lastSalary"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Last Drawn Salary (₹)
                    </label>
                    <input
                      id="lastSalary"
                      type="number"
                      value={lastSalary}
                      onChange={(e) => setLastSalary(e.target.value)}
                      placeholder="e.g., 50000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="yearsOfService"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Years of Service
                    </label>
                    <input
                      id="yearsOfService"
                      type="number"
                      value={yearsOfService}
                      onChange={(e) => setYearsOfService(e.target.value)}
                      placeholder="e.g., 5"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateGratuity}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Gratuity
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {gratuityAmount !== null && !error && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Gratuity Amount: ₹{gratuityAmount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      The gratuity is calculated based on the formula: <br />
                      Gratuity = (Last Salary × Years of Service × 15) / 26. <br />
                      The 15 and 26 are fixed constants used in the calculation.
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
