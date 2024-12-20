import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'; // Clock icon
import { FaExternalLinkAlt } from 'react-icons/fa'; // External link icon

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  source: string;
}

const NewsCard = ({ title, description, imageUrl, publishedAt, source }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-emerald-500">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <AiOutlineClockCircle className="h-4 w-4 text-gray-500" /> {/* Clock icon */}
            <span>{publishedAt}</span>
          </div>
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">{source}</span>
        </div>
        <button className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors mt-4">
          Read More <FaExternalLinkAlt className="h-4 w-4" /> {/* External link icon */}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
