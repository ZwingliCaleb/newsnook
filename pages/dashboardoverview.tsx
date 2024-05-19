import React from 'react';
import Sidebar from '@/components/Sidebar'; // Assuming you have a Sidebar component
import Avatar from '@/components/Avatar'; // Assuming you have an Avatar component
import Link from 'next/link';
import DashboardLayout from '@/layouts/DashboardLayouts';

const DashboardOverview: React.FC = () => {
  // Mock vendor information
  const vendorName = "John Doe"; // Replace with actual vendor name
  const avatarUrl = "/images/avatar.jpg"; // Replace with actual avatar URL

  return (
    <DashboardLayout>
      <div className="p-2 flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-gray-100">
        {/* Top Header */}
        <div className="flex justify-between items-center bg-white px-4 py-2 border-b">
          <h1 className="text-xl font-semibold">Dashboard Overview</h1>
          <div className="flex items-center">
            <p className="text-gray-600 mr-2">Welcome, {vendorName}</p>
            <Avatar src={avatarUrl} alt="Vendor Avatar" size="small" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Profile Card */}
            <div className="bg-slate-300 rounded-lg shadow-md flex flex-col p-6 relative">
              <div>
                <h2 className="text-lg font-semibold mb-2">Profile</h2>
                <p>View and edit your profile information.</p>
              </div>
              <div className="bottom-4 right-4 mt-4 ml-auto">
                <Link href="/profile">
                  <button className="p-2 bg-sky-500 font-semibold rounded-lg shadow-md text-gray-100 hover:bg-sky-900">Profile</button>
                </Link>
              </div>
            </div>

            {/* Stock Management Card */}
            <div className="bg-slate-300 rounded-lg shadow-md flex flex-col p-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Stock Management</h2>
                <p>Add, edit, or delete newspapers and their details.</p>
              </div>
              <div className="bottom-4 right-4 mt-4 ml-auto">
                <Link href="/stockmanager">
                  <button className="p-2 bg-sky-500 font-semibold rounded-lg shadow-md text-gray-100 hover:bg-sky-900">Manage Stock</button>
                </Link>
              </div>
            </div>

            {/* Sales Analytics Card */}
            <div className="bg-slate-300 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-2">Sales Analytics</h2>
              <p>View insights and analytics on your sales.</p>
              {/* Add a button to navigate to the Sales Analytics page */}
            </div>

            {/* Other Cards can be added here */}
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
  );
};

export default DashboardOverview;
