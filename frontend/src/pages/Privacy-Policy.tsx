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
                <strong>FinPulse</strong> ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Personal information</span> (e.g., name, email address, phone number)</li>
                <li><span className="font-semibold">Financial information</span> (e.g., bank account details, investment preferences)</li>
                <li><span className="font-semibold">Usage data</span> (e.g., how you interact with our services)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. Sharing of Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Financial institutions with which we partner</li>
                <li>Legal and regulatory authorities, as required by applicable laws</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
