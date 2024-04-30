import React from 'react'

interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const DropdownMenu: React.FC<DropdownProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="absolute top-0 right-0 mt-16 mr-4 bg-white p-4 rounded shadow-lg">
          <ul className="flex flex-col gap-4">
            <li><a href="/" className="hover:text-gray-300 text-lg font-semibold">Home</a></li>
            <li><a href="/login" className="hover:text-gray-300 text-lg font-semibold">Log in</a></li>
          </ul>
        </div>
      </div>  
    )
}

export default DropdownMenu
