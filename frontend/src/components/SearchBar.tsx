import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const navigate = useNavigate();

  // Define the pages array inside the SearchBar component
  const pages = [
    'About', 
    'News',
    'Schemes',
    'Investments',
    'Blog', 
    'Market Pulse',
    'Calculators',
    'Courses',
    'Quiz',
    'Contact', 
    'Careers', 
    'Press', 
    'Feedback', 
    'Guides', 
    'Help Center', 
    'Privacy Policy', 
    'Terms of Service', 
    'Cookie-Policy', 
    'Disclaimer'
  ];

  // Handle input change and filter results
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filteredResults = pages.filter(page => page.toLowerCase().includes(query));
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result: string) => {
    setSearchQuery(result); // Set the search query to the clicked result
    setSearchResults([]); // Clear results after selection

    // Mapping specific page names to their route paths
    const routeMapping: { [key: string]: string } = {
      'Help Center': '/helpcenter',
      'Privacy Policy': '/privacy-policy',
      'Terms of Service': '/terms-of-service',
      'Cookie-Policy': '/cookie-policy',
    };

    // Check if the result has a mapped route, otherwise format as before
    const formattedResult = routeMapping[result] || `/${result.toLowerCase().replace(/\s+/g, '-')}`;

    // Navigate to the corresponding page
    navigate(formattedResult);
  };

  return (
    <div className="flex-1 max-w-sm mx-auto hidden lg:block">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full bg-indigo-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />

        {/* Dropdown container for search results */}
        {searchResults.length > 0 && (
          <div className="absolute w-full bg-indigo-800 text-white rounded-lg shadow-lg mt-2 z-50">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-indigo-700 cursor-pointer"
                onClick={() => handleResultClick(result)}
              >
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
