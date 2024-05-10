// components/EditBioModal.tsx
import React, { useState } from 'react';

interface EditBioModalProps {
  isOpen: boolean;
  initialBio: string;
  onClose: () => void;
  onSave: (newBio: string) => void;
}

const EditBioModal: React.FC<EditBioModalProps> = ({ isOpen, initialBio, onClose, onSave }) => {
  const [bio, setBio] = useState(initialBio);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(bio);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Bio</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-4"
            rows={6}
          ></textarea>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBioModal;
