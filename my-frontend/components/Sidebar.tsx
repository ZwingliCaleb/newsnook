// components/Sidebar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import LogoutConfirmationModal from './LogoutConfirmationModal';
import { useRouter } from 'next/router';
import { useTheme } from '@/context/ThemeContext';

const Sidebar = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    router.push('/');
  };

  return (
    <div className={`bg-${theme === 'light' ? 'gray-900' : 'gray-800'} text-lg font-semibold text-white h-full rounded-r-lg p-10 relative flex flex-col justify-between`}>
      <div>
        <div className="flex items-center">
          <Image src="/icons/NewsnookLogoDark.svg" alt="logo" height={60} width={60} />
          <p className="text-md ml-2">Newsnook</p>
        </div>
        <ul className="mt-4 space-y-4">
          <li>
            <Link href="/dashboardoverview" className="block text-xl py-2 px-4 rounded hover:bg-grey-700">Dashboard</Link>
          </li>
          <li>
            <Link href="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
          </li>
          <li>
            <Link href="/stockmanager" className="block py-2 px-4 rounded hover:bg-gray-700">Stock</Link>
          </li>
          <li>
            <Link href="/settingspage" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto flex items-center hover:bg-gray-800 py-2 px-2 m-2 rounded">
        <FontAwesomeIcon icon={faSignOutAlt} className="text-white hover:text-gray-400 mr-2" />
        <button onClick={() => setIsLogoutModalOpen(true)} className="text-white hover:text-gray-400">Log out</button>
      </div>
      <LogoutConfirmationModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Sidebar;
