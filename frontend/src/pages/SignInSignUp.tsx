import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Facebook, Github, Loader2 } from 'lucide-react';

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    if (activeTab === 'signup') {
      if (!formData.fullName) {
        newErrors.fullName = 'Full Name is required.';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password.';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (!validateForm()) return; // Stop if form validation fails

    setIsLoading(true);

    // Simulate API request for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      console.log('Form Submitted:', formData); // Here you can handle API calls
    }, 3000);
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
          <div className="w-full mb-6">
            <div className="grid w-full grid-cols-2 gap-4">
              <button
                onClick={() => setActiveTab('signin')}
                className={`py-2 px-4 font-semibold text-lg rounded-lg ${activeTab === 'signin' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800'}`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`py-2 px-4 font-semibold text-lg rounded-lg ${activeTab === 'signup' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800'}`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === 'signin' ? (
              <form onSubmit={onSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="m@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-emerald-400 shadow-sm transition-all duration-200 ease-in-out focus:outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-emerald-400 shadow-sm transition-all duration-200 ease-in-out focus:outline-none"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-all duration-200 ease-in-out disabled:bg-emerald-300"
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-emerald-400 shadow-sm transition-all duration-200 ease-in-out focus:outline-none"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="m@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-emerald-400 shadow-sm transition-all duration-200 ease-in-out focus:outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-emerald-400 shadow-sm transition-all duration-200 ease-in-out focus:outline-none"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:ring-2 focus:ring-emerald-400 shadow-sm transition-all duration-200 ease-in-out focus:outline-none"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-all duration-200 ease-in-out disabled:bg-emerald-300"
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign Up
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-4 flex space-x-4">
            <button className="w-full py-3 px-4 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-all duration-200 ease-in-out">
              <Github className="mr-2 h-4 w-4" />
              Github
            </button>
            <button className="w-full py-3 px-4 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-all duration-200 ease-in-out">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
