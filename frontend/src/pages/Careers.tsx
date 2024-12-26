import React from 'react';
import Navbar from '../components/Navbar';
import { Briefcase, Users, Zap, Heart, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';


const jobOpenings = [
  { title: "Senior Financial Analyst", department: "Finance", location: "New York, NY", type: "Full-time", salary: "$90k - $120k", responsibilities: ["Analyze financial data", "Develop reports", "Collaborate with teams"] },
  { title: "Software Engineer", department: "Technology", location: "San Francisco, CA", type: "Full-time", salary: "$100k - $140k", responsibilities: ["Write clean, scalable code", "Collaborate on projects", "Maintain systems"] },
  { title: "Content Writer", department: "Marketing", location: "Remote", type: "Contract", salary: "$30/hr", responsibilities: ["Create engaging content", "Manage blogs", "Collaborate with SEO team"] },
  { title: "UX/UI Designer", department: "Product", location: "London, UK", type: "Full-time", salary: "$70k - $90k", responsibilities: ["Design user interfaces", "Conduct user research", "Optimize user experience"] },
  { title: "Data Scientist", department: "Analytics", location: "Boston, MA", type: "Full-time", salary: "$110k - $150k", responsibilities: ["Analyze large datasets", "Develop predictive models", "Collaborate with stakeholders"] },
  { title: "Customer Support Specialist", department: "Operations", location: "Remote", type: "Part-time", salary: "$20/hr", responsibilities: ["Resolve customer issues", "Provide technical support", "Document feedback"] },
];

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <Icon className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const JobCard = ({ title, department, location, type, salary, responsibilities }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{department}</p>
    <p className="text-sm text-gray-600 mb-4">{location} • {type}</p>
    <p className="text-sm text-gray-600 mb-4 font-bold">Salary: {salary}</p>
    <h4 className="text-md font-medium mb-2">Key Responsibilities:</h4>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <a href="#" className="inline-flex items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
      View Details
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  </div>
);

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10 mt-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl mb-8 max-w-3xl">
              Shape the future of finance with FinPulse. Explore exciting career opportunities and grow with us.
            </p>
            <p className="text-lg">Over 500 employees, 1M+ customers served worldwide.</p>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-black">Why Work With Us</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Briefcase, title: "Career Growth", description: "Opportunities for professional development and advancement." },
                { icon: Users, title: "Collaborative Culture", description: "Work with talented individuals in a supportive environment." },
                { icon: Zap, title: "Innovative Projects", description: "Be at the forefront of fintech innovation and make a real impact." },
                { icon: Heart, title: "Employee Wellness", description: "Comprehensive health and wellness programs for our team." },
                { icon: Globe, title: "Global Impact", description: "Join a team making a difference across the world." },
              ].map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center dark:text-black">Current Openings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Life at FinPulse</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover a workplace where creativity thrives and innovation leads the way.
            </p>
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1735223589~exp=1735227189~hmac=453608a12144085cfd9a29bae2899bd8d8db05c6d255f5e3c8296b191ae88170&w=1800"
                alt="Team at FinPulse"
                className="rounded-lg shadow-lg w-full max-w-4xl"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Employee Testimonial</h2>
            <blockquote className="text-lg text-gray-600 italic border-l-4 border-purple-600 pl-4">
              "The best career decision I ever made was joining FinPulse. The collaborative culture and opportunities for growth have been phenomenal."
            </blockquote>
            <p className="mt-4 text-gray-700">- A Happy FinPulse Employee</p>
          </div>
        </section>
      </main>
    </div>
  );
}
