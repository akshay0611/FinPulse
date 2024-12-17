import React from 'react';

export const schemesData = [
  {
    title: "National Family Benefit Scheme (NFBS)",
    description: "This scheme provides lump sum financial assistance of Rs. 20,000 in case of the death of a primary breadwinner in a BPL family between the ages of 18 to 59.",
    imageUrl: "/src/assets/National Family Benefit Scheme.png", 
    exploreUrl: "https://www.example.com",
  },
  {
    title: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    description: "Persons aged 65 and above from BPL families receive a pension of Rs. 200 from the Government of India and Rs. 400 from the Government of Maharashtra.",
    imageUrl: "/src/assets/Indira Gandhi National Old Age Pension Scheme.jpeg", 
    exploreUrl: "https://www.example.com",
  },
  {
    title: "Indira Gandhi National Disability Pension Scheme",
    description: "This scheme provides Rs. 200 per month for persons with 80% disability between the ages of 18 to 65 years.",
    imageUrl: "/src/assets/Indira Gandhi National Disability Pension Scheme.jpeg", 
    exploreUrl: "https://www.example.com",
  },
  {
    title: "Aam Aadmi Bima Yojana",
    description: "This scheme is for landless laborers in rural areas aged 18 to 59, with a premium of Rs. 200 per year, 50% of which is subsidized.",
    imageUrl: "/src/assets/Aam Aadmi Bima Yojana.png", 
    exploreUrl: "https://www.example.com",
  },
  {
    title: "Sanjay Gandhi Niradhar Yojana",
    description: "This scheme provides assistance to destitute persons under 65 years, orphans, handicapped individuals, and those suffering from critical illnesses.",
    imageUrl: "/src/assets/Sanjay Gandhi Niradhar Anudan Yojana.jpeg", 
    exploreUrl: "https://www.example.com",
  },
  {
    title: "Shravan Bal Seva Rajya Nivruttivetan Yojana",
    description: "This scheme provides a pension of Rs. 1000 per month for destitute persons aged 65 and above belonging to BPL families in Maharashtra.",
    imageUrl: "/src/assets/Shravanbal Seva Rajya Nivruttivetan Yojana.png", 
    exploreUrl: "https://www.example.com",
  }
];

const Schemes = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mt-16 mb-6 text-gray-900">Available Schemes</h1>
        <p className="text-lg mb-8 text-gray-700">Explore the various schemes that can help you achieve your goals across various sectors.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemesData.map((scheme, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 flex flex-col justify-between h-full group"
            >
              {scheme.imageUrl && (
                <img
                  src={scheme.imageUrl}
                  alt={scheme.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform group-hover:scale-105 group-hover:opacity-90"
                />
              )}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{scheme.title}</h2>
                <p className="text-gray-600 mb-4">{scheme.description}</p>
              </div>
              <a
                href={scheme.exploreUrl}
                className="inline-block bg-emerald-500 text-white hover:bg-emerald-600 font-bold py-2 px-6 rounded-lg transition-all mt-auto max-w-xs w-full text-center"
              >
                Explore More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
