import React, { useState, useEffect } from 'react';

const Rating = ({ rating }) => {
  return (
    <div className="mb-4 flex justify-center space-x-1" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-all duration-300 transform ${
            index < rating ? 'text-[#4ade80] scale-110' : 'text-[#d1d5db]'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.553 3.268 1.07-6.26L.868 6.732l6.278-.91L10 0l2.784 5.83 6.278.91-4.649 5.276 1.07 6.26L10 15z"
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Investor',
      message:
        'FinPulse provides me with valuable insights on market trends and government schemes. It has made managing my investments so much easier!',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      rating: 5,
      location: 'New York, USA',
      industry: 'Finance',
    },
    {
      name: 'Jane Smith',
      role: 'Startup Founder',
      message:
        'The startup insights section is a game-changer! It keeps me updated on new opportunities in the startup ecosystem.',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      rating: 4,
      location: 'San Francisco, USA',
      industry: 'Technology',
    },
    {
      name: 'Riya Patel',
      role: 'Financial Analyst',
      message:
        'I rely on FinPulse for the latest financial news and investment ideas. It’s a must-have resource for anyone in the finance industry.',
      image: 'https://randomuser.me/api/portraits/women/91.jpg',
      rating: 5,
      location: 'Mumbai, India',
      industry: 'Finance',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleChangeTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section
      className="relative bg-gradient-to-br from-[#f3f4f6] via-[#ffffff] to-[#f3f4f6] px-8 py-20 mt-12 transition-all duration-500 ease-in-out"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2
            id="testimonial-heading"
            className="text-5xl font-semibold text-[#000000] mb-6"
          >
            What Our Users Are{' '}
            <span className="text-[#4ade80]">Saying</span>
          </h2>
          <p className="text-lg text-[#000000]">
            Hear from our satisfied users and how FinPulse is making a difference!
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row md:space-x-16 justify-center transition-transform duration-500 ease-in-out">
          <div
            className="w-full mx-auto bg-[#ffffff] p-8 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ maxWidth: '450px', minWidth: '300px' }} // Custom card size
          >
            <div className="flex justify-center mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={`Avatar of ${testimonials[currentTestimonial].name}`}
                className="rounded-full object-cover shadow-lg ring-4 ring-[#4ade80] transform hover:scale-105 transition-transform duration-300"
                style={{ width: '120px', height: '120px' }} // Custom image size
                loading="lazy"
              />
            </div>
            <p className="text-xl italic text-[#4b5563] mb-6">
              "{testimonials[currentTestimonial].message}"
            </p>
            <Rating rating={testimonials[currentTestimonial].rating} />
            <h3 className="font-semibold text-2xl text-[#000000]">
              {testimonials[currentTestimonial].name}
            </h3>
            <p className="text-[#6b7280]">{testimonials[currentTestimonial].role}</p>
            <p className="text-sm text-[#9ca3af]">
              {testimonials[currentTestimonial].location} |{' '}
              {testimonials[currentTestimonial].industry}
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleChangeTestimonial(index)}
              className={`w-4 h-4 rounded-full ${
                currentTestimonial === index
                  ? 'bg-[#4ade80] shadow-lg transform scale-125'
                  : 'bg-[#d1d5db]'
              } transition-all duration-300`}
              aria-label={`View testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
