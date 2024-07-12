import React from 'react';
import { useParams } from 'react-router-dom';
import CampaignForm from '../components/CampaignForm';

const UpdateCampaign = () => {
  const { id } = useParams();

  const handleSubmit = (formData) => {
    // Handle form submission for updating campaign with ID `id`
    console.log(`Updated campaign ${id} with data:`, formData);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Update Campaign</h1>
      <CampaignForm onSubmit={handleSubmit} />
    </div>
  );
};

export default UpdateCampaign;
