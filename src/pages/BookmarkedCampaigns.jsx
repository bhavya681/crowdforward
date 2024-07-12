import React, { useEffect, useState } from 'react';
import CampaignCard from '../components/CampaignCard';

const BookmarkedCampaigns = () => {
  const [bookmarkedCampaigns, setBookmarkedCampaigns] = useState([]);

  useEffect(() => {
    const bookmarkedCampaignIds = JSON.parse(localStorage.getItem('bookmarkedCampaigns')) || [];
    // Simulated API call to fetch bookmarked campaigns data
    const fetchedCampaigns = [
      { id: 1, title: 'Bookmarked Campaign 1', description: 'Description for Bookmarked Campaign 1', image: 'path/to/image1.jpg' },
      { id: 2, title: 'Bookmarked Campaign 2', description: 'Description for Bookmarked Campaign 2', image: 'path/to/image2.jpg' },
      // Add more campaigns as needed
    ].filter(campaign => bookmarkedCampaignIds.includes(campaign.id));

    setBookmarkedCampaigns(fetchedCampaigns);
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Bookmarked Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookmarkedCampaigns.map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default BookmarkedCampaigns;
