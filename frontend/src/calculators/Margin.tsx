import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function Margin() {
  const [stockPrice, setStockPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [marginPercentage, setMarginPercentage] = useState('');
  const [marginAmount, setMarginAmount] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Margin Calculation Logic
  const calculateMargin = () => {
    const price = parseFloat(stockPrice);
    const qty = parseInt(quantity);
    const margin = parseFloat(marginPercentage);

    if (isNaN(price) || isNaN(qty) || isNaN(margin) || price <= 0 || qty <= 0 || margin <= 0) {
      setError('Please enter valid values for stock price, quantity, and margin percentage.');
      return;
    }

    const totalValue = price * qty;
    const marginRequired = (totalValue * margin) / 100;

    setMarginAmount(marginRequired);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Equity Margin Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the margin required for trading equity based on stock price, quantity, and margin percentage.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Equity Margin</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="stockPrice"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Stock Price (₹)
                    </label>
                    <input
                      id="stockPrice"
                      type="number"
                      value={stockPrice}
                      onChange={(e) => setStockPrice(e.target.value)}
                      placeholder="Enter stock price"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Quantity
                    </label>
                    <input
                      id="quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Enter quantity"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="marginPercentage"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Margin Percentage (%)
                    </label>
                    <input
                      id="marginPercentage"
                      type="number"
                      value={marginPercentage}
                      onChange={(e) => setMarginPercentage(e.target.value)}
                      placeholder="Enter margin percentage"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateMargin}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Margin
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {marginAmount !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Margin Amount: ₹{marginAmount?.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      The margin required for your equity trade is based on the stock price, quantity, and margin percentage.
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