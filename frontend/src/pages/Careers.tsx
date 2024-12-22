import React from 'react';
import Navbar from '../components/Navbar';
import { Briefcase, Users, Zap, ArrowRight } from 'lucide-react'

const jobOpenings = [
  { title: "Senior Financial Analyst", department: "Finance", location: "New York, NY", type: "Full-time" },
  { title: "Software Engineer", department: "Technology", location: "San Francisco, CA", type: "Full-time" },
  { title: "Content Writer", department: "Marketing", location: "Remote", type: "Contract" },
  { title: "UX/UI Designer", department: "Product", location: "London, UK", type: "Full-time" },
  { title: "Data Scientist", department: "Analytics", location: "Boston, MA", type: "Full-time" },
  { title: "Customer Support Specialist", department: "Operations", location: "Remote", type: "Part-time" },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl mb-8">Shape the future of finance with FinPulse. Explore exciting career opportunities.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-black">Why Work With Us</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Briefcase, title: "Career Growth", description: "Opportunities for professional development and advancement." },
                { icon: Users, title: "Collaborative Culture", description: "Work with talented individuals in a supportive environment." },
                { icon: Zap, title: "Innovative Projects", description: "Be at the forefront of fintech innovation and make a real impact." },
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <benefit.icon className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center dark:text-black">Current Openings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{job.department}</p>
                  <p className="text-sm text-gray-600 mb-4">{job.location} • {job.type}</p>
                  <a href="#" className="inline-flex items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
