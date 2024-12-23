import React from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function TermsOfServicePage() {
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
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
    <p className="text-xl mb-8">
      Last updated: December 21, 2024
    </p>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section>


        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="prose max-w-none leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the FinPulse website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. Description of Service</h2>
              <p>
                FinPulse provides financial information, analysis tools, and investment services. We do not provide personalized financial advice, and our services should not be construed as such.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. User Accounts</h2>
              <p>
                To access certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. User Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use our services for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of our services</li>
                <li>Interfere with or disrupt the operation of our services</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. Intellectual Property</h2>
              <p>
                All content and materials available on FinPulse, including but not limited to text, graphics, website name, code, images, and logos, are the intellectual property of FinPulse and are protected by applicable copyright and trademark law.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" without any warranties, expressed or implied. We do not guarantee the accuracy, completeness, or usefulness of any information on our website or services.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, FinPulse shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Modifications to Service</h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, our service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the service.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p><strong>FinPulse</strong></p>
                <p>123 Finance Street</p>
                <p>New York, NY 10001</p>
                <p>Email: <a href="mailto:terms@finpulse.com" className="text-purple-700 hover:underline">terms@finpulse.com</a></p>
                <p>Phone: <a href="tel:+15551234567" className="text-purple-700 hover:underline">(555) 123-4567</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
