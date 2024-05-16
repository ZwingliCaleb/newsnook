import Sidebar from '@/components/Sidebar';
import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="flex h-screen p-2">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-4">Settings</h1>
        <div className="bg-slate-200 p-6 rounded-lg shadow-md">
          {/* Account Settings */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
            {/* Change Password Component */}
            <div className="mb-4">
              {/* Change Password Form */}
              <label className="block text-sm font-medium text-gray-700">Change Password</label>
              <input type="password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter new password"/>
            </div>
            <div className="mb-4">
              {/* confirm Change Password Form */}
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Confirm new password"/>
            </div>
            {/* Update Email Component */}
            <div>
              {/* Update Email Form */}
              <label className="block text-sm font-medium text-gray-700">Update Email Adress</label>
              <input type="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter new email"/>
            </div>
          </div>
          
          {/* Appearance Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Appearance Settings</h2>
            {/* Theme Selection Component */}
            <div className="mb-4">
              {/* Theme Selection Dropdown */}
              <label className="block text-sm font-medium text-gray-700">Theme</label>
              <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
            {/* Font Size Adjustment Component */}
            <div>
              {/* Font Size Adjustment Slider */}
              <label className="block text-sm font-medium text-gray-700">Font Size</label>
              <input type="range" min="12" max="24" className="mt-1 p-2 block w-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
