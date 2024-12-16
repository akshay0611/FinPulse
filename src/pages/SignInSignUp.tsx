import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const toggleForm = () => setIsSignUp(!isSignUp);

  // Handle password strength calculation
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    calculatePasswordStrength(passwordValue);
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length > 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  // Handle submit for login and registration
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Handle form submission logic here (e.g., API call)
    }
  };

  // Handle forgot password functionality
  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`A password reset link has been sent to ${email}`);
    setShowForgotPassword(false); // Hide forgot password form after submission
  };

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />

      <section className="py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[rgb(52,211,153)] mb-6">
            {isSignUp ? 'Create Your Account' : 'Sign In to FinPulse'}
          </h1>
          <p className="text-xl text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
            {isSignUp
              ? 'Join FinPulse today to take control of your financial future and stay informed.'
              : 'Sign in to access your personalized dashboard, financial insights, and more.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {showForgotPassword ? (
            <form onSubmit={handleForgotPassword}>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Forgot Password</h2>
              <div className="mb-6">
                <label htmlFor="forgotEmail" className="block text-lg text-gray-700 mb-2">
                  Enter your email address to receive a password reset link:
                </label>
                <input
                  type="email"
                  id="forgotEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
                  required
                />
              </div>

              <div className="mb-6 flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-emerald-400 py-3 rounded-lg text-white font-semibold hover:bg-emerald-500 transition-colors duration-300"
                >
                  Send Reset Link
                </button>
              </div>

              <div className="text-center">
                <p className="text-gray-600">
                  <button
                    onClick={() => setShowForgotPassword(false)}
                    className="text-emerald-400 font-semibold hover:text-emerald-500"
                  >
                    Back to Sign In
                  </button>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-lg text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
                  required
                />
                {password && (
                  <div className="mt-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Strength:</span>
                      <span className={`font-bold ${passwordStrength < 3 ? 'text-red-500' : 'text-green-500'}`}>
                        {passwordStrength === 0 ? 'Very Weak' : passwordStrength === 1 ? 'Weak' : passwordStrength === 2 ? 'Medium' : 'Strong'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                      <div
                        className={`h-2 rounded-full ${passwordStrength < 3 ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {isSignUp && (
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-lg text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
                    required
                  />
                </div>
              )}

              {error && (
                <div className="mb-6 text-red-500">
                  <p>{error}</p>
                </div>
              )}

              <div className="mb-6 flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-emerald-400 py-3 rounded-lg text-white font-semibold hover:bg-emerald-500 transition-colors duration-300"
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </button>
              </div>
            </form>
          )}

          <div className="text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={toggleForm}
                className="text-emerald-400 font-semibold hover:text-emerald-500"
              >
                {isSignUp ? 'Sign In' : 'Create one'}
              </button>
            </p>
            {!isSignUp && (
              <p className="text-gray-600 mt-4">
                <button
                  onClick={() => setShowForgotPassword(true)}
                  className="text-emerald-400 font-semibold hover:text-emerald-500"
                >
                  Forgot Password?
                </button>
              </p>
            )}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default SignInSignUp;
