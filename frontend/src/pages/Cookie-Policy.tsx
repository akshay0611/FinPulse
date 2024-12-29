import React from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 text-center relative z-10 mt-12"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
    <p className="text-xl mb-8">
      Last updated: December 21, 2024
    </p>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>

<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="prose max-w-none leading-relaxed">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Introduction</h2>
      <p>
        This Cookie Policy explains how FinPulse ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website (the "Service"). It details what these technologies are, why we use them, and your rights to control our use of these technologies. Our goal is to be transparent and help you make informed decisions about your online privacy.
      </p>
      <p>
        By accessing and using our Service, you consent to our use of cookies as described in this Cookie Policy. If you have any concerns, please contact us for clarification.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. What are cookies?</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are commonly used to enable websites to function, improve user experience, and provide analytical data. Cookies help websites remember your preferences and actions over a period of time, making your next visit smoother and more personalized.
      </p>
      <p>
        Cookies may contain information such as your browsing behavior, login details, and preferences, but they do not typically identify you personally.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. Why do we use cookies?</h2>
      <p>
        We use cookies for a variety of purposes to enhance your experience and improve the functionality of our website. Specifically, cookies help us:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Provide essential features and functionalities of the Service, such as user authentication and session management.</li>
        <li>Analyze website performance and understand user behavior to improve our Service.</li>
        <li>Store your preferences, such as language settings, to provide a personalized experience.</li>
        <li>Deliver targeted advertisements and measure their effectiveness.</li>
        <li>Ensure security and prevent fraudulent activity.</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. Types of cookies we use</h2>
      <p>
        Our website uses the following types of cookies:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Essential Cookies:</strong> These cookies are necessary for the operation of our website and enable core functionalities like security and access control.</li>
        <li><strong>Performance Cookies:</strong> These cookies collect information about how users interact with our website, helping us identify areas for improvement.</li>
        <li><strong>Functional Cookies:</strong> These cookies allow us to remember your preferences and choices, enhancing your overall experience.</li>
        <li><strong>Advertising Cookies:</strong> These cookies are used to deliver ads that are relevant to you and measure their performance.</li>
        <li><strong>Third-Party Cookies:</strong> These cookies are set by third-party providers for analytics, advertising, and other purposes.</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. How to control cookies</h2>
      <p>
        You have the right to control how cookies are used on your device. Most web browsers allow you to:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Accept or reject cookies through browser settings.</li>
        <li>Delete cookies stored on your device at any time.</li>
        <li>Receive notifications when cookies are being placed on your device.</li>
      </ul>
      <p>
        Please note that disabling cookies may impact the functionality of our website and restrict access to certain features. For detailed instructions on managing cookies, consult your browser’s help documentation.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Third-Party Cookies</h2>
      <p>
        We work with third-party service providers who may set their own cookies to help us:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Analyze website traffic and user behavior.</li>
        <li>Deliver advertisements tailored to your interests.</li>
        <li>Provide social media integration and sharing features.</li>
      </ul>
      <p>
        These third-party providers have their own privacy policies, and we encourage you to review them to understand how they handle your data.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Updates to this policy</h2>
      <p>
        We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or our business operations. We encourage you to revisit this page regularly to stay informed about our use of cookies and your choices.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Contact us</h2>
      <p>
        If you have any questions, concerns, or feedback about this Cookie Policy or our use of cookies, please contact us at:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p><strong>FinPulse</strong></p>
        <p>123 Finance Street</p>
        <p>New York, NY 10001</p>
        <p>Email: <a href="mailto:cookies@finpulse.com" className="text-purple-700 hover:underline">cookies@finpulse.com</a></p>
        <p>Phone: <a href="tel:+15551234567" className="text-purple-700 hover:underline">(555) 123-4567</a></p>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
