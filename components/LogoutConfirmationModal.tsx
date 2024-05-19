import React from 'react';

interface LogoutConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutConfirmationModal: React.FC<LogoutConfirmationModalProps> = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg text-gray-900 font-semibold mb-4">Are you sure you want to logout?</h2>
        <p className="text-gray-800 text-sm mb-4">Logging out will end your current session.</p>
        <div className="flex justify-end">
          <button className="mr-2 px-4 py-2 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
