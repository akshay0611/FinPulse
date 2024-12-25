import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import sipImage from '../assets/sip.webp'; 
import lumpsumImage from '../assets/lumpsum.webp';
import swpImage from '../assets/swp.webp';
import mfImage from '../assets/mf.webp';
import ssyImage from '../assets/ssy.webp';
import ppfImage from '../assets/ppf.webp';
import epfImage from '../assets/epf.webp';
import fdImage from '../assets/fd.webp';
import rdImage from '../assets/rd.webp';
import npsImage from '../assets/nps.webp';
import hraImage from '../assets/hra.webp';
import retirementImage from '../assets/retirement.webp';
import emiImage from '../assets/emi.webp';
import carLoanImage from '../assets/car-loan-emi.webp';
import homeLoanImage from '../assets/home-loan-emi.webp';
import simpleInterestImage from '../assets/simple-interest.webp';
import compoundInterestImage from '../assets/compound-interest.webp';
import nscImage from '../assets/nsc.webp';
import stepUpSIPImage from '../assets/sip.webp';
import incomeTaxImage from '../assets/income-tax.webp';
import gratuityImage from '../assets/swp.webp';
import apyImage from '../assets/fd.webp';
import cagrImage from '../assets/retirement.webp';
import gstImage from '../assets/ssy.webp';
import flatVsReducingRateImage from '../assets/mf.webp';
import brokerageImage from '../assets/emi.webp';
import marginImage from '../assets/ppf.webp';
import tdsImage from '../assets/emi.webp';
import salaryImage from '../assets/nps.webp';
import inflationImage from '../assets/retirement.webp';
import postOfficeMISImage from '../assets/simple-interest.webp';
import scssImage from '../assets/retirement.webp';
import stockAverageImage from '../assets/emi.webp';

const calculators = [
  { 
    title: 'SIP', 
    description: 'Calculate how much you need to save or how much you will accumulate with your SIP.', 
    image: sipImage, 
    href: '/sip' 
  },
  { 
    title: 'Lumpsum', 
    description: 'Calculate returns for lumpsum investments to achieve your financial goals', 
    image: lumpsumImage,
    href: '/lumpsum' 
  },
  { 
    title: 'SWP', 
    description: 'Calculate your final amount with Systematic Withdrawal Plans (SWP)', 
    image: swpImage,
    href: '/swp' 
  },
  { 
    title: 'MF', 
    description: 'Calculate the returns on your mutual fund investments', 
    image: mfImage,
    href: '/mf' 
  },
  { 
    title: 'SSY', 
    description: 'Calculate returns for Sukanya Smariddhi Yojana (SSY) as per your investment', 
    image: ssyImage,
    href: '/ssy' 
  },
  { 
    title: 'PPF', 
    description: 'Calculate your returns on Public Provident Fund (PPF)', 
    image: ppfImage,
    href: '/ppf' 
  },
  { 
    title: 'EPF', 
    description: 'Calculate returns for your Employee’s Provident Fund (EPF)', 
    image: epfImage,
    href: '/epf' 
  },
  { 
    title: 'FD', 
    description: 'Check returns on your fixed deposits (FDs) without any hassle', 
    image: fdImage,
    href: '/fd' 
  },
  { 
    title: 'RD', 
    description: 'Check returns on your Recurring Deposit (RD) in just a few clicks', 
    image: rdImage,
    href: '/rd' 
  },
  { 
    title: 'NPS', 
    description: 'Calculate returns for your National Pension Scheme (NPS)', 
    image: npsImage,
    href: '/nps' 
  },
  { 
    title: 'HRA', 
    description: 'Calculate your House Rent Allowance (HRA)', 
    image: hraImage,
    href: '/hra' 
  },
  { 
    title: 'Retirement', 
    description: 'Calculate how much you need for a relaxed retirement', 
    image: retirementImage,
    href: '/retirement' 
  },
  { 
    title: 'EMI', 
    description: 'Calculate EMI on your loans – home loan, car loan or personal loan', 
    image: emiImage,
    href: '/emi' 
  },
  { 
    title: 'Car Loan EMI', 
    description: 'Calculate your car loan EMI', 
    image: carLoanImage,
    href: '/car-loan-emi' 
  },
  { 
    title: 'Home Loan EMI', 
    description: 'Calculate your home loan EMI', 
    image: homeLoanImage,
    href: '/home-loan-emi' 
  },
  { 
    title: 'Simple Interest', 
    description: 'Calculate simple interest on your loans and saving schemes investments', 
    image: simpleInterestImage,
    href: '/simple-interest' 
  },
  { 
    title: 'Compound Interest', 
    description: 'Calculate compound interest with ease', 
    image: compoundInterestImage,
    href: '/compound-interest' 
  },
  { 
    title: 'NSC', 
    description: 'Calculate your returns under National Savings Certificate scheme', 
    image: nscImage,
    href: '/nsc' 
  },
  { 
    title: 'Step Up SIP', 
    description: 'Calculate SIP Returns with an Yearly Raise', 
    image: stepUpSIPImage,
    href: '/step-up-sip' 
  },
  { 
    title: 'Income Tax', 
    description: 'Calculate your payable income tax with minimal effort', 
    image: incomeTaxImage,
    href: '/income-tax' 
  },
  { 
    title: 'Gratuity', 
    description: 'Calculate how much gratuity you will get when you retire', 
    image: gratuityImage,
    href: '/gratuity' 
  },
  { 
    title: 'APY', 
    description: 'Calculate your monthly investments under Atal Pension Yojana', 
    image: apyImage,
    href: '/apy' 
  },
  { 
    title: 'CAGR', 
    description: 'The simplest compound annual growth rate calculator', 
    image: cagrImage,
    href: '/cagr' 
  },
  { 
    title: 'GST', 
    description: 'Calculate your payable GST amount with a few clicks', 
    image: gstImage,
    href: '/gst' 
  },
  { 
    title: 'Flat vs Reducing rate', 
    description: 'Compare monthly EMI in Flat and Reducing balance interest rate schemes', 
    image: flatVsReducingRateImage,
    href: '/flat-vs-reducing-rate' 
  },
  { 
    title: 'Brokerage', 
    description: 'Calculate brokerage and other charges for your stock orders', 
    image: brokerageImage,
    href: '/brokerage' 
  },
  { 
    title: 'Margin', 
    description: 'Calculate margin for delivery and intraday based on your order details', 
    image: marginImage,
    href: '/margin' 
  },
  { 
    title: 'TDS', 
    description: 'Calculate your TDS deductions', 
    image: tdsImage,
    href: '/tds' 
  },
  { 
    title: 'Salary', 
    description: 'Calculate your net take home salary', 
    image: salaryImage,
    href: '/salary' 
  },
  { 
    title: 'Inflation', 
    description: 'Calculate inflation adjusted prices', 
    image: inflationImage,
    href: '/inflation' 
  },
  { 
    title: 'Post Office MIS', 
    description: 'Calculate post office monthly income scheme returns', 
    image: postOfficeMISImage,
    href: '/post-office-mis' 
  },
  { 
    title: 'SCSS Calculator', 
    description: 'Calculate senior citizens savings scheme returns', 
    image: scssImage,
    href: '/scss-calculator' 
  },
  { 
    title: 'Stock Average Calculator', 
    description: 'Calculate average price of your stock investments', 
    image: stockAverageImage,
    href: '/stock-average-calculator' 
  }
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Increased gap */}
      {calculators.map((calc, index) => (
        <Link
          to={calc.href} // Use the Link component for navigation
          key={index}
          className="group block rounded-lg shadow-lg bg-white p-8 transition-transform transform hover:scale-105 hover:shadow-xl relative" // Added `relative` for the card container
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600">{calc.title}</h3> {/* Increased font size */}
            <p className="text-base text-gray-600 mt-4" style={{ marginBottom: '80px' }}>{calc.description}</p> {/* Increased bottom margin */}
            <div 
              className="absolute" 
              style={{
                bottom: '-0.5px', // Lowered further using negative value
                right: '20px', // Positioned closer to the right edge
                width: '80px', 
                height: '80px', 
                overflow: 'hidden', 
                borderRadius: '12px',
                transition: 'all 0.3s ease-in-out' // Added transition for smooth effect
              }}
            >
              <img 
                src={calc.image} 
                alt={calc.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out' 
                }} 
                className="group-hover:filter-none filter blur-sm" 
              />
            </div>
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