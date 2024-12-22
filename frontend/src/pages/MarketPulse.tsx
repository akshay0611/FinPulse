'use client';

import Navbar from '../components/Navbar';
import { Heatmap } from '../components/heatmap';
import { Tickers } from '../components/tickers';
import { InteractiveCharts } from '../components/interactive-charts';
import { EconomicCalendar } from '../components/economic-calendar';

export default function MarketPulsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">Market Pulse</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Stay updated with real-time market insights, sector performance, and economic trends.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Market Heatmap */}
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Market Heatmap</h2>
                <div className="h-[600px]">
                  <Heatmap />
                </div>
              </div>

              {/* Live Tickers */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Live Tickers</h2>
                <Tickers />
              </div>

              {/* Interactive Charts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Interactive Charts</h2>
                <InteractiveCharts />
              </div>

              {/* Economic Calendar */}
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Economic Calendar</h2>
                <EconomicCalendar />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
