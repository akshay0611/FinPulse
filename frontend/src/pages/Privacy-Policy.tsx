import React from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
        <strong>FinPulse</strong> ("we", "our", or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you interact with our website and services. We encourage you to read this policy carefully to understand our practices regarding your data.
      </p>
      <p>
        By using our website and services, you consent to the practices described in this Privacy Policy. If you do not agree with the terms, please discontinue use of our website and services.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
      <p>
        We collect various types of information to provide and improve our services. This includes:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold">Personal information:</span> Information you provide directly, such as your name, email address, phone number, and any other details needed to create an account or use our services.
        </li>
        <li>
          <span className="font-semibold">Financial information:</span> Details required for transactions, including bank account details, credit card information, and investment preferences.
        </li>
        <li>
          <span className="font-semibold">Usage data:</span> Information about how you interact with our website and services, such as pages viewed, features used, and navigation paths.
        </li>
        <li>
          <span className="font-semibold">Device information:</span> Data about your device, including IP address, browser type, operating system, and unique device identifiers.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
      <p>
        We process the information we collect for the following purposes:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>To deliver, maintain, and enhance our services, ensuring an optimal user experience.</li>
        <li>To process transactions and send related notifications, such as confirmations and invoices.</li>
        <li>To provide customer support and respond to your inquiries, comments, or feedback.</li>
        <li>To personalize your experience by tailoring content and recommendations to your preferences.</li>
        <li>To communicate important updates, promotional offers, and information about new features or services.</li>
        <li>To detect, prevent, and address technical issues, fraudulent activities, and security risks.</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. Sharing of Information</h2>
      <p>
        We may share your information with third parties in the following circumstances:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold">Service providers:</span> Third-party vendors who assist us in delivering our services, such as payment processors, hosting providers, and analytics platforms.
        </li>
        <li>
          <span className="font-semibold">Business partners:</span> Financial institutions and other entities with which we collaborate to offer integrated services.
        </li>
        <li>
          <span className="font-semibold">Legal compliance:</span> When required to comply with applicable laws, regulations, or legal processes, or to protect our rights and interests.
        </li>
        <li>
          <span className="font-semibold">Corporate transactions:</span> In connection with mergers, acquisitions, or asset sales, your information may be transferred to the involved parties.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. Data Security</h2>
      <p>
        We take data security seriously and implement industry-standard measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Encryption of sensitive data during transmission.</li>
        <li>Regular security audits and vulnerability assessments.</li>
        <li>Restricted access to personal data on a need-to-know basis.</li>
      </ul>
      <p>
        However, please be aware that no method of data transmission or storage is entirely secure. While we strive to protect your data, we cannot guarantee absolute security.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the following rights regarding your personal information:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>The right to access the personal information we hold about you.</li>
        <li>The right to request corrections or updates to your information.</li>
        <li>The right to request deletion of your personal data, subject to legal obligations.</li>
        <li>The right to opt-out of certain data processing activities, such as direct marketing.</li>
      </ul>
      <p>
        To exercise these rights, please contact us using the details provided below. We will respond to your request within the timeframe required by law.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
      <p>
        We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. We encourage you to review this page regularly to stay informed about how we handle your data. Significant changes will be communicated through prominent notices on our website.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p><strong>FinPulse</strong></p>
        <p>123 Finance Street</p>
        <p>New York, NY 10001</p>
        <p>Email: <a href="mailto:privacy@finpulse.com" className="text-purple-700 hover:underline">privacy@finpulse.com</a></p>
        <p>Phone: <a href="tel:+15551234567" className="text-purple-700 hover:underline">(555) 123-4567</a></p>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
