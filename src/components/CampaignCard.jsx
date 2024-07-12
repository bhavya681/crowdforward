import React from 'react';
import { Link } from 'react-router-dom';
import BookmarkButton from './BookmarkButton';

const CampaignCard = ({ id, title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <Link to={`/update-campaign/${id}`} className="text-blue-500">Edit</Link>
        <BookmarkButton id={id} />
      </div>
    </div>
  );
};

export default CampaignCard;
