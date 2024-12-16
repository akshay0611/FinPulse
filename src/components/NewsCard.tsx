import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  source: string;
}

const NewsCard = ({ title, description, imageUrl, publishedAt, source }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Published At {publishedAt}</span>
          <span>Source: {source}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;