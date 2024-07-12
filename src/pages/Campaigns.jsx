import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchCampaigns = () => {
      const storedCampaigns =
        JSON.parse(localStorage.getItem("campaigns")) || [];
      setCampaigns(storedCampaigns);
    };

    fetchCampaigns();
  }, []);

  const handleBookmark = (id) => {
    const campaignToBookmark = campaigns.find((campaign) => campaign.id === id);
    if (bookmarks.some((bookmark) => bookmark.id === id)) {
      // Remove bookmark if already bookmarked
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      setBookmarks(updatedBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } else {
      // Add bookmark if not already bookmarked
      const updatedBookmarks = [...bookmarks, campaignToBookmark];
      setBookmarks(updatedBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    }
  };

  return (
    <section id="campaigns" className="py-16 bg-black min-h-[30vh]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Explore Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 cursor-pointer">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 cursor-pointer">
                <Link to={`/manage-campaign/${campaign.id}`}>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{campaign.description}</p>
                </Link>

                <div className="mb-4 bg-gray-700 rounded-full">
                  <div
                    className="bg-purple-600 text-xs font-medium text-purple-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${67}%` }}
                  >
                    {67}%
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleBookmark(campaign.id)}
                    className={`text-center bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out mb-2 ${
                      bookmarks.some((bookmark) => bookmark.id === campaign.id)
                        ? "bg-purple-600"
                        : ""
                    }`}
                  >
                    {bookmarks.some(
                      (bookmark) => bookmark.id === campaign.id
                    ) ? (
                      <IoMdBookmark />
                    ) : (
                      <CiBookmark />
                    )}
                  </button>
                  <Link
                    to={"https://buy.stripe.com/test_5kA9C7aa69engyk7ss"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
