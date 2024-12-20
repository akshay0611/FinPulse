import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e8f5e9] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-6 mt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-extrabold text-[rgb(52,211,153)] mb-6 drop-shadow-lg">About Us</h1>
          <p className="text-2xl text-[#333333] leading-relaxed mx-auto max-w-3xl">
            FinPulse is your trusted companion for financial insights and information. We provide timely news, updates on government schemes, and investment ideas to empower individuals and businesses with the knowledge they need to make informed financial decisions.
          </p>
        </section>

        {/* Mission and Values Section */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/500" 
              alt="Our Team" 
              className="rounded-lg shadow-2xl hover:scale-110 transition-transform duration-500 max-w-full object-cover"
            />
          </div>
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 border-l-8 border-[rgb(52,211,153)] pl-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At FinPulse, our mission is to provide timely and accurate financial news, government schemes updates, and investment insights to help our users stay informed and make empowered financial decisions.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 border-l-8 border-[rgb(52,211,153)] pl-4">Our Values</h2>
              <ul className="space-y-6 text-lg text-gray-700">
                {['Transparency in sharing financial information.', 'Empowering our users with the latest financial trends.', 'Commitment to providing up-to-date news and insights.'].map((value, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[rgb(52,211,153)] text-3xl font-bold">&#10004;</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto text-center mt-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Board Of <span className="text-blue-600">Directors</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform relative overflow-hidden group"
              >
                <div className="flex justify-center mb-6">
                  <div className="rounded-tl-[50px] rounded-br-[50px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-500 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="absolute bottom-4 right-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="max-w-7xl mx-auto text-center mt-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">FinPulse <span className="text-green-500">Culture</span></h2>
          
          {/* Add Image Above */}
          <div className="mb-12">
            <img 
              src="https://cdn.fundsindia.com/prelogin/our-culture_24.png?auto=format&fit=max&w=828" 
              alt="Our Culture" 
              className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl"
            />
            
            {/* Text and Button Under the Image */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8 mt-8">
              A dynamic environment for a dynamic team. We pour our souls into our craft, but that doesn’t compromise on our ability to keep the work environment lively.
              We don’t juggle work and life; we handle it like the Pros we are!
            </p>

            {/* Styled 'Work With Us' Button */}
            <a 
              href="#"
              className="inline-block bg-[rgb(52,211,153)] text-white py-4 px-10 rounded-full text-xl font-semibold transform transition-all duration-300 hover:bg-[rgb(36,174,106)] hover:scale-105 hover:shadow-lg"
            >
              Work With Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

const teamMembers = [
  {
    name: 'Sandeep Singhal',
    position: 'Director',
    bio: 'Sandeep brings years of leadership and expertise to the board, helping FinPulse scale to new heights.',
    image: 'https://via.placeholder.com/500',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Deepak Ramineedi',
    position: 'Director',
    bio: 'Deepak provides strategic insights and ensures FinPulse remains aligned with client success.',
    image: 'https://via.placeholder.com/500',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Girirajan Murugan',
    position: 'Director & CEO',
    bio: 'Girirajan leads the company as CEO, driving innovation and financial solutions for our clients.',
    image: 'https://via.placeholder.com/500',
    linkedin: 'https://www.linkedin.com/',
  },
];

export default About;
