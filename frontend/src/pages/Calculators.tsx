import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import { Calculator, Coins, PiggyBank, BarChart3 } from 'lucide-react';

const calculators = [
  { title: 'Savings Calculator', description: 'Plan your savings and see how your money grows over time.', icon: PiggyBank, href: '/savings' },
  { title: 'Loan Calculator', description: 'Calculate EMI, total payment, and interest for your loans.', icon: Coins, href: '/loan' },
  { title: 'PPF Calculator', description: 'Calculate the maturity amount, total investment, and total interest for your PPF account.', icon: PiggyBank, href: '/ppf' },
  { title: 'Investment Calculator', description: 'Project the future value of your investments.', icon: BarChart3, href: '/investment' },
  { title: 'Tax Calculator', description: 'Estimate your income tax based on your earnings and age.', icon: Calculator, href: '/tax' },
];

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center relative z-10 mt-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Financial Calculators</h1>
            <p className="text-xl mb-8">Use our range of calculators to plan your financial future.</p>
          </motion.div>
        </section> 

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calculators.map((calc, index) => (
                <Link
                  to={calc.href}  // Use the Link component for navigation
                  key={index}
                  className="group block rounded-lg shadow-sm bg-white p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <calc.icon className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">{calc.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{calc.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
