// pages/profile.tsx
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import avatar from '../public/images/avatar.jpg';
import EditBioModal from '@/components/EditBioModal'; // Import the EditBioModal component

const Profile: React.FC = () => {
  const [isEditBioModalOpen, setIsEditBioModalOpen] = useState(false); // State for controlling modal visibility
  const [vendorName, setVendorName] = useState("John Doe");
  const [vendorEmail, setVendorEmail] = useState("john@example.com");
  const [vendorLocation, setVendorLocation] = useState("New York, USA");
  const [vendorPhone, setVendorPhone] = useState("+1 234 567 890");
  const [vendorBio, setVendorBio] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ac purus ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.");
  const [vendorBusiness, setVendorBusiness] = useState("NewsStand");
  const [vendorBusinessType, setVendorBusinessType] = useState("News Agency");
  const [vendorHours, setVendorHours] = useState("Mon-Fri: 9:00 AM - 5:00 PM");

  // Function to handle opening the edit bio modal
  const handleEditBioClick = () => {
    setIsEditBioModalOpen(true);
  };

  // Function to handle saving the edited bio
  const handleSaveBio = (newBio: string) => {
    setVendorBio(newBio);
    setIsEditBioModalOpen(false); // Close the modal after saving
  };

  return (
    <div className="p-2 flex h-screen border-2">
      <Sidebar />
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <div className="border-2 rounded-lg">
          <div className="rounded-full">
            <Image src={avatar} alt="Vendor Avatar" width={200} height={200} />
          </div>
          <div className="bg-blue-300 rounded shadow-md p-6">
            <p className="text-lg font-semibold">Name: {vendorName}</p>
            <p className="text-lg font-semibold">Email: {vendorEmail}</p>
            <p className="text-lg font-semibold">Location: {vendorLocation}</p>
            <p className="text-lg font-semibold">Phone: {vendorPhone}</p>
            <p className="text-lg font-semibold">Bio: {vendorBio}</p>
            <p className="text-lg font-semibold">Business: {vendorBusiness}</p>
            <p className="text-lg font-semibold">Business Type: {vendorBusinessType}</p>
            <p className="text-lg font-semibold">Hours: {vendorHours}</p>
            <button onClick={handleEditBioClick} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
              Edit Bio
            </button>
          </div>
        </div>
      </div>
      <EditBioModal isOpen={isEditBioModalOpen} initialBio={vendorBio} onClose={() => setIsEditBioModalOpen(false)} onSave={handleSaveBio} />
    </div>
  );
};

export default Profile;
