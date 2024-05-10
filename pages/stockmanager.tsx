import React from 'react';
import NextImage from 'next/image'; // Import Next.js Image component
import Sidebar from '@/components/Sidebar'; // Import Sidebar component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const StockManagerPage: React.FC = () => {
  // Dummy data for demonstration
  const publications = [
    {
      id: 1,
      title: "New York Times",
      image: "/images/new_york_times.jpg",
      copiesLeft: 20
    },
    {
      id: 2,
      title: "National Geographic",
      image: "/images/national_geographic.jpg",
      copiesLeft: 15
    },
    // Add more publications as needed
  ];

  return (
    <div className="flex h-screen border-2 p-2">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 ml-2">
        <h1 className="text-2xl font-semibold mb-4 ml-2">Manage Stock</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publication</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copies Left</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {publications.map((publication) => (
              <tr key={publication.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <NextImage src={publication.image} alt={publication.title} width={40} height={40} /> {/* Use Next.js Image component */}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{publication.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{publication.copiesLeft}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManagerPage;
