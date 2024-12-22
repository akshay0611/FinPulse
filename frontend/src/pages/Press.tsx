import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowRight, Download } from 'lucide-react'

const pressReleases = [
  { title: "FinPulse Launches Revolutionary AI-Powered Investment Tool", date: "December 15, 2024", excerpt: "FinPulse introduces a groundbreaking AI-driven platform that personalizes investment strategies for individual users." },
  { title: "FinPulse Secures $50 Million in Series B Funding", date: "November 3, 2024", excerpt: "Leading fintech startup FinPulse raises $50 million to accelerate growth and expand its suite of financial tools." },
  { title: "FinPulse Partners with Major Banks to Enhance Financial Literacy", date: "October 12, 2024", excerpt: "FinPulse announces strategic partnerships with top banks to provide free financial education resources to millions." },
]

const mediaAppearances = [
  { outlet: "Financial Times", title: "FinPulse: Revolutionizing Personal Finance", date: "December 20, 2024", link: "#" },
  { outlet: "TechCrunch", title: "How FinPulse is Democratizing Investing", date: "November 15, 2024", link: "#" },
  { outlet: "Bloomberg", title: "FinPulse CEO Discusses the Future of Fintech", date: "October 5, 2024", link: "#" },
]

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl mb-8">Stay up-to-date with FinPulse's latest news, announcements, and media coverage.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{release.date}</p>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <a href="#" className="inline-flex items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Read Full Release
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8">Media Appearances</h2>
            <div className="space-y-6 mb-12">
              {mediaAppearances.map((appearance, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                  <div className="flex-shrink-0">
                    <img src="/placeholder.svg" alt={appearance.outlet} width={64} height={64} className="rounded" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{appearance.title}</h3>
                    <p className="text-sm text-gray-600">{appearance.outlet} • {appearance.date}</p>
                  </div>
                  <a href={appearance.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    View Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Media Kit</h2>
              <p className="text-gray-600 mb-6">Download our media kit for logos, brand guidelines, and executive bios.</p>
              <a href="#" className="inline-flex items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Download Media Kit
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
