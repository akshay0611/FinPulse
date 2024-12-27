import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function DisclaimerPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Disclaimer</h1>
            <p className="text-xl mb-8">Last updated: December 21, 2024</p>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="prose max-w-none leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">1. General Information</h2>
              <p>
                The information provided on FinPulse is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
              <p>
                FinPulse is intended for users residing in regions where accessing our services complies with local laws and regulations. The availability of the website does not constitute an offer or solicitation in any jurisdiction where such activities are unlawful.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. No Financial Advice</h2>
              <p>
                The content on FinPulse is not intended to be a substitute for professional financial advice. Always seek the advice of your financial advisor or other qualified financial professional with any questions you may have regarding your financial situation. We do not provide specific investment, legal, or tax advice.
              </p>
              <p>
                The website is intended to offer general financial information and should not be considered as a recommendation for any specific product or service.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. Investment Risks</h2>
              <p>
                Investing in financial instruments involves risks, including the potential loss of principal. Past performance does not guarantee future results. FinPulse does not guarantee any specific outcome or profit. You should be aware of the real risk of loss in following any strategy or investment discussed on this website.
              </p>
              <p>
                Please note that investing in financial instruments such as equities, mutual funds, or cryptocurrencies carries inherent risks, including but not limited to liquidity risk, credit risk, and geopolitical risk. Users are encouraged to diversify their portfolios and perform their due diligence before making financial decisions.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by FinPulse. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p>
                FinPulse does not endorse or take responsibility for the accuracy or legality of any third-party content or services, and any interactions with third-party websites are done at your own risk.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. Accuracy and Completeness of Information</h2>
              <p>
                While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              </p>
              <p>
                Information provided on this website may have typographical errors or inaccuracies and is subject to change without notice. We are not liable for any errors or omissions in the content of the website.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Intellectual Property Rights</h2>
              <p>
                All content on FinPulse, including but not limited to text, graphics, logos, and images, is the property of FinPulse or its content providers and is protected by intellectual property laws. Unauthorized use or reproduction of any content on this website is prohibited.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Liability Disclaimer</h2>
              <p>
                To the fullest extent permitted by applicable law, FinPulse and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of the website, including but not limited to loss of profits, data, or business opportunities, even if we have been advised of the possibility of such damages.
              </p>
              <p>
                The website does not guarantee uninterrupted access or error-free operation. We are not liable for any temporary or permanent downtime of the website or any loss of data associated with it.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Jurisdiction-Specific Disclosures</h2>
              <p>
                Certain legal requirements may vary based on the user's country of residence. Users in jurisdictions where the content of this website is restricted or prohibited are advised not to use the services provided by FinPulse. By accessing the site, you agree to comply with all applicable local laws and regulations.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">9. User-Generated Content</h2>
              <p>
                If you submit content to the website, you retain the rights to your content. However, by submitting content, you grant FinPulse a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content in connection with the website's operations.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">10. Privacy and Security Disclaimer</h2>
              <p>
                We take reasonable measures to protect your personal information but cannot guarantee absolute security. Your use of the website is at your own risk, and you are responsible for maintaining the confidentiality of any account information, including passwords.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">11. Forward-Looking Statements</h2>
              <p>
                Any predictions, estimates, or forward-looking statements provided on FinPulse are based on our current understanding of market trends and economic conditions. These statements are subject to change and may not reflect future outcomes.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">12. Governing Law</h2>
              <p>
                This disclaimer is governed by the laws of the jurisdiction in which FinPulse operates. Any disputes arising from the use of this website shall be resolved in the courts located in that jurisdiction.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">13. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless FinPulse, its affiliates, and its employees from any and all claims, liabilities, damages, losses, or expenses arising from your use of the website, your violation of these terms, or your infringement of any intellectual property rights.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">14. Changes to Information</h2>
              <p>
                Information on this website is subject to change without notice. We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without prior notice.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">15. Contact Us</h2>
              <p>If you have any questions about this Disclaimer, please contact us at:</p>
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
