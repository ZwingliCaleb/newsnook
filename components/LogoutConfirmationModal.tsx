import React from 'react'

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
                <h2 className="text-lg font-semibold mb-4">Are you sure you want to logout?</h2>
                <div className="flex justify-end">
                    <button className="mr-2 px-4 py-2 bg-gray-200 rounded-lg" onClick={onClose}>Cancel</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={onLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}


export default LogoutConfirmationModal