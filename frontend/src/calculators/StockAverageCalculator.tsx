import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function StockAverageCalculator() {
  const [numShares, setNumShares] = useState('');
  const [pricePerShare, setPricePerShare] = useState('');
  const [totalShares, setTotalShares] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [averagePrice, setAveragePrice] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Calculate Stock Average Price
  const calculateStockAverage = () => {
    const shares = parseInt(numShares);
    const price = parseFloat(pricePerShare);

    if (isNaN(shares) || shares <= 0 || isNaN(price) || price <= 0) {
      setError('Please enter valid positive values for the number of shares and price per share.');
      return;
    }

    // Update the total shares and total amount
    const newTotalShares = totalShares + shares;
    const newTotalAmount = totalAmount + shares * price;

    setTotalShares(newTotalShares);
    setTotalAmount(newTotalAmount);

    // Calculate new average price
    const newAveragePrice = newTotalAmount / newTotalShares;
    setAveragePrice(newAveragePrice);

    // Clear error
    setError('');
    // Reset individual entry values
    setNumShares('');
    setPricePerShare('');
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Stock Average Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the average cost price of your stock based on multiple purchases of shares at different prices.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Stock Average Price Calculator</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="numShares" className="block text-lg font-medium text-gray-700">
                      Number of Shares
                    </label>
                    <input
                      id="numShares"
                      type="number"
                      value={numShares}
                      onChange={(e) => setNumShares(e.target.value)}
                      placeholder="Enter number of shares"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label htmlFor="pricePerShare" className="block text-lg font-medium text-gray-700">
                      Price per Share (₹)
                    </label>
                    <input
                      id="pricePerShare"
                      type="number"
                      value={pricePerShare}
                      onChange={(e) => setPricePerShare(e.target.value)}
                      placeholder="Enter price per share"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateStockAverage}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Average Price
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {averagePrice !== null && !error && (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Average Price per Share: ₹{averagePrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      This is the average price of all your shares purchased so far.
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Shares: {totalShares} | Total Investment: ₹{totalAmount.toFixed(2)}
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
