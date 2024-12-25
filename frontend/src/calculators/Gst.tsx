import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Gst() {
  const [price, setPrice] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [gstAmount, setGstAmount] = useState<number | null>(null);
  const [error, setError] = useState('');

  // GST Calculation Logic
  const calculateGst = () => {
    const priceValue = parseFloat(price);
    const gstRateValue = parseFloat(gstRate);

    if (isNaN(priceValue) || isNaN(gstRateValue) || priceValue <= 0 || gstRateValue <= 0) {
      setError('Please enter valid values for price and GST rate.');
      return;
    }

    const gst = (priceValue * gstRateValue) / 100;
    const total = priceValue + gst;

    setGstAmount(gst);
    setTotalPrice(total);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">GST Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the Goods and Services Tax (GST) on your purchase based on the price and applicable GST rate.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate GST</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Price (₹)
                    </label>
                    <input
                      id="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter price"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gstRate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      GST Rate (%)
                    </label>
                    <input
                      id="gstRate"
                      type="number"
                      value={gstRate}
                      onChange={(e) => setGstRate(e.target.value)}
                      placeholder="Enter GST rate"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateGst}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate GST
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {totalPrice !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      GST Amount: ₹{gstAmount?.toFixed(2)}
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      Total Price (including GST): ₹{totalPrice?.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      The GST amount is calculated based on the price and the specified GST rate.
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
