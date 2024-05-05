// pages/profile.tsx
import React from 'react';
import Sidebar from '@/components/Sidebar'; // Assuming you have a Sidebar component

const Profile: React.FC = () => {
  // Mock vendor information
  const vendorName = "John Doe"; // Replace with actual vendor name
  const vendorEmail = "john@example.com"; // Replace with actual vendor email
  const vendorLocation = "New York, USA"; // Replace with actual vendor location

  return (
    <div className="p-2 flex h-screen border-2">
    
    <Sidebar/>
    <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="bg-blue-300 rounded-lg shadow-md p-6">
        <p className="text-lg font-semibold">Name: {vendorName}</p>
        <p className="text-lg font-semibold">Email: {vendorEmail}</p>
        <p className="text-lg font-semibold">Location: {vendorLocation}</p>
        {/* Add more vendor details as needed */}
      </div>
    </div>
     
    </div>
  );
};

export default Profile;
