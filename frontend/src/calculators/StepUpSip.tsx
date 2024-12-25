import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export function StepUpSip() {
  const [initialAmount, setInitialAmount] = useState('');
  const [stepUpAmount, setStepUpAmount] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [investmentYears, setInvestmentYears] = useState('');
  const [sipAmount, setSipAmount] = useState('');
  const [futureValue, setFutureValue] = useState<number | null>(null);
  const [totalInvestment, setTotalInvestment] = useState<number | null>(null);

  const calculateStepUpSip = () => {
    const P = parseFloat(initialAmount);
    const stepUp = parseFloat(stepUpAmount);
    const rate = parseFloat(rateOfReturn) / 100 / 12;
    const years = parseFloat(investmentYears);
    const months = years * 12;

    if (isNaN(P) || isNaN(stepUp) || isNaN(rate) || isNaN(years) || P <= 0 || stepUp < 0 || rate <= 0 || years <= 0) {
      return;
    }

    let totalSIPAmount = 0;
    let currentAmount = P;
    let totalInvested = 0;

    for (let month = 1; month <= months; month++) {
      totalInvested += currentAmount;
      totalSIPAmount += currentAmount * Math.pow(1 + rate, months - month);
      currentAmount += stepUp; // Increase SIP amount every year
    }

    setTotalInvestment(totalInvested);
    setFutureValue(totalSIPAmount);
    setSipAmount(currentAmount.toFixed(2));
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Step Up SIP Calculator</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Calculate the future value of your SIP with increasing contributions each year (Step Up SIP) based on your initial investment, step-up amount, and investment period.
            </p>
          </motion.div>
        </section>

        {/* Card Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Step Up SIP</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="initialAmount"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Initial SIP Amount (₹)
                    </label>
                    <input
                      id="initialAmount"
                      type="number"
                      value={initialAmount}
                      onChange={(e) => setInitialAmount(e.target.value)}
                      placeholder="e.g., 5000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="stepUpAmount"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Step Up Amount (₹)
                    </label>
                    <input
                      id="stepUpAmount"
                      type="number"
                      value={stepUpAmount}
                      onChange={(e) => setStepUpAmount(e.target.value)}
                      placeholder="e.g., 1000"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rateOfReturn"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Rate of Return (% p.a.)
                    </label>
                    <input
                      id="rateOfReturn"
                      type="number"
                      value={rateOfReturn}
                      onChange={(e) => setRateOfReturn(e.target.value)}
                      placeholder="e.g., 12"
                      className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="investmentYears"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Investment Period (Years)
                  </label>
                  <input
                    id="investmentYears"
                    type="number"
                    value={investmentYears}
                    onChange={(e) => setInvestmentYears(e.target.value)}
                    placeholder="e.g., 10"
                    className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
                  />
                </div>

                <button
                  onClick={calculateStepUpSip}
                  className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                  Calculate Step Up SIP
                </button>

                {futureValue !== null && totalInvestment !== null && (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-lg font-semibold text-gray-800">
                      Total Investment: ₹{totalInvestment.toLocaleString()}
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      Future Value: ₹{futureValue.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      The future value is calculated based on your initial SIP, step-up amount, rate of return, and the number of years you plan to invest.
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
