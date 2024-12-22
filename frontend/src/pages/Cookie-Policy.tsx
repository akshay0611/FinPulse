import React from 'react';
import Navbar from '../components/Navbar';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <section className="py-20 bg-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Cookie Policy</h1>
            <p className="text-lg md:text-xl">Last updated: December 21, 2024</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="prose max-w-none leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how FinPulse ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. What are cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. Why do we use cookies?</h2>
              <p>
                We use cookies for several reasons:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To enable certain functions of the service</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
                <li>To enable ad delivery and behavioral advertising</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. Types of cookies we use</h2>
              <p>
                We use both session and persistent cookies on our website. Session cookies are temporary cookies that are stored on your device until you leave the website. Persistent cookies remain on your device for a set period of time or until you delete them.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. How to control cookies</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Updates to this policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Contact us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
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
