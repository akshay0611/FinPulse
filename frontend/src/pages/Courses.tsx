import Navbar from '../components/Navbar';
import { useState } from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "Introduction to Finance",
    description: "Learn the fundamental concepts of finance and how they apply to personal and business decisions.",
    videoUrl: "https://www.youtube.com/watch?v=ZZY-6_GeZ_g"
  },
  {
    title: "Introduction to Financial Statements",
    description: "Understand the key components of financial statements and how to interpret them.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder1"
  },
  {
    title: "Understanding Cash Flow",
    description: "Dive into the importance of cash flow and learn how to manage it effectively.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder2"
  },
  {
    title: "Understanding Stock Market",
    description: "Explore the basics of the stock market, including how it works and key investment strategies.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder3"
  },
  {
    title: "Personal Finance Management",
    description: "Learn practical skills for managing your personal finances, budgeting, and saving.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder4"
  },
  {
    title: "Investment Basics",
    description: "Get started with investing by understanding different investment vehicles and strategies.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder5"
  }
];

function YouTubeEmbed({ videoUrl }: { videoUrl: string }) {
  const videoId = videoUrl.split('v=')[1];
  return (
    <div className="aspect-w-16 aspect-h-9 h-[400px]">
      <iframe
  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full rounded-lg"
/>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 relative z-10 mt-12"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">FinPulse Courses</h1>
    <p className="text-xl mb-8 max-w-3xl">
    Empower yourself with financial knowledge through our curated courses.
    </p>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                    <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                    <YouTubeEmbed videoUrl={course.videoUrl} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
