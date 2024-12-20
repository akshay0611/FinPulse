import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('Form submitted:', formData);
    setSubmissionStatus('Thank you! Your message has been sent.');
    setTimeout(() => setSubmissionStatus(''), 5000); // Clear the message after 5 seconds
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[rgb(52,211,153)] mb-6">Contact Us</h1>
          <p className="text-xl text-[#333333] mb-8 max-w-3xl mx-auto leading-relaxed">
            We’d love to assist you! Whether you have a question or feedback, feel free to reach out. You can either fill out the form below, or use the contact details to get in touch with us directly. We’ll get back to you as soon as possible.
          </p>

          {/* Two-Column Layout for Helpdesk and Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Helpdesk Contact Information Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
              <p className="text-lg text-gray-600 mb-6">
                Feel free to reach out to us using any of the contact methods below:
              </p>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    <FaEnvelope className="inline-block mr-2 text-[rgb(52,211,153)]" />
                    Email
                  </h3>
                  <p className="text-lg text-gray-600">
                    For general inquiries or support, email us at:
                    <a href="mailto:support@finpulse.com" className="text-[rgb(52,211,153)] hover:underline">
                      support@finpulse.com
                    </a>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    <FaPhoneAlt className="inline-block mr-2 text-[rgb(52,211,153)]" />
                    Phone
                  </h3>
                  <p className="text-lg text-gray-600">
                    For immediate support, give us a call at: 
                    <a href="tel:+1234567890" className="text-[rgb(52,211,153)] hover:underline"> +1 (234) 567-890</a>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    <FaMapMarkerAlt className="inline-block mr-2 text-[rgb(52,211,153)]" />
                    Location
                  </h3>
                  <p className="text-lg text-gray-600">
                    Visit us at: 
                    <span className="text-[rgb(52,211,153)]"> 123 FinPulse Street, Suite 500, New York, NY 10001</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-left text-gray-700 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-2">{errors.name}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-left text-gray-700 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-left text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    rows={5}
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-2">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg w-full hover:bg-emerald-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
              {submissionStatus && (
                <p className="text-emerald-600 mt-6">{submissionStatus}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
