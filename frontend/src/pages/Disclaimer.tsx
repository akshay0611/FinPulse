import React from 'react';
import Navbar from '../components/Navbar';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <section className="py-20 bg-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Disclaimer</h1>
            <p className="text-lg md:text-xl">Last updated: December 21, 2024</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="prose max-w-none leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">1. General Information</h2>
              <p>
                The information provided on FinPulse is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. No Financial Advice</h2>
              <p>
                The content on FinPulse is not intended to be a substitute for professional financial advice. Always seek the advice of your financial advisor or other qualified financial professional with any questions you may have regarding your financial situation.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. Investment Risks</h2>
              <p>
                Investing in financial instruments involves risks, including the potential loss of principal. Past performance does not guarantee future results. FinPulse does not guarantee any specific outcome or profit. You should be aware of the real risk of loss in following any strategy or investment discussed on this website.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by FinPulse. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. Accuracy of Information</h2>
              <p>
                While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Changes to Information</h2>
              <p>
                Information on this website is subject to change without notice. We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without prior notice.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Use at Your Own Risk</h2>
              <p>
                Your use of this website and reliance on any information on the website is solely at your own risk. We shall not be liable for any losses and/or damages in connection with the use of our website.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p><strong>FinPulse</strong></p>
                <p>123 Finance Street</p>
                <p>New York, NY 10001</p>
                <p>Email: <a href="mailto:disclaimer@finpulse.com" className="text-purple-700 hover:underline">disclaimer@finpulse.com</a></p>
                <p>Phone: <a href="tel:+15551234567" className="text-purple-700 hover:underline">(555) 123-4567</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
