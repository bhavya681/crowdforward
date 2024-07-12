import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";


const ManageCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    image: "",
    progress: 30, // Default progress set to 30
  });

  useEffect(() => {
    const fetchCampaigns = () => {
      const storedCampaigns =
        JSON.parse(localStorage.getItem("campaigns")) || [];
      setCampaigns(storedCampaigns);
    };

    fetchCampaigns();
  }, []);

  const handleEdit = (campaign) => {
    setEditingCampaign(campaign);
    setFormData(campaign);
  };

  const handleDelete = (id) => {
    const updatedCampaigns = campaigns.filter(
      (campaign) => campaign.id !== id
    );
    setCampaigns(updatedCampaigns);
    localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCampaigns = campaigns.map((campaign) =>
      campaign.id === editingCampaign.id
        ? { ...formData, id: campaign.id }
        : campaign
    );
    setCampaigns(updatedCampaigns);
    localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
    setEditingCampaign(null);
    setFormData({
      title: "",
      description: "",
      goalAmount: "",
      image: "",
      progress: 0, // Reset progress to default 0
    });
  };

  return (
    <section id="manage-campaigns" className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Manage Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {campaign.title}
                </h3>
                <p className="text-gray-400 mb-4">{campaign.description}</p>
                <div className="mb-4 bg-gray-700 rounded-full">
                  <div
                    className="bg-purple-600 text-xs font-medium text-purple-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${campaign.progress}%` }}
                  >
                    {campaign.progress}%
                  </div>
                </div>
                <button
                  onClick={() => handleEdit(campaign)}
                  className="block text-center bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out mb-2"
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() => handleDelete(campaign.id)}
                  className="block text-center bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-2"
                >
                  <MdDeleteOutline />
                </button>
                <Link to={"/"}
                  className="block text-center  text-white py-2 pl-2 rounded-full transition duration-300 ease-in-out"
                >
                  <IoMdArrowBack size={"33"} className="bg-green-600 p-2 rounded-full  hover:bg-green-700"/>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {editingCampaign && (
          <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-6">Edit Campaign</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="goalAmount"
                  className="block text-sm font-medium text-gray-300"
                >
                  Goal Amount ($)
                </label>
                <input
                  type="number"
                  id="goalAmount"
                  name="goalAmount"
                  value={formData.goalAmount}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-300"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-900 text-white"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out"
                >
                  <FaRegSave className="mr-2 inline-block align-middle" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageCampaigns;
