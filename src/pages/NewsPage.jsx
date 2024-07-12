import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://newsapi.org/v2/top-headlines',
          params: {
            country: 'us',
            category: 'business',
            apiKey: '6a2ce03436f44cb992c55245e839694f'
          }
        });

        setCampaigns(response.data.articles);
      } catch (error) {
        console.error('Error fetching campaigns:', error.response ? error.response.data : error.message);
        setError('Failed to fetch campaigns. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section id="donation-campaigns" className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
        Trending News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 cursor-pointer">
              {campaign.urlToImage ? (
                <img
                  src={campaign.urlToImage}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {campaign.description ? campaign.description : 'No description available.'}
              </p>
              <a
                href={campaign.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
