// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className=" bg-gray-800 text-lg font-semibold font-Lato text-white h-full rounded-r-lg p-10 justify-center relative">
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="block text-xl py-2 px-4 rounded hover:bg-grey-700">Dashboard</Link>
        </li>
        <li>
          <Link href="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
        </li>
        <li>
          <Link href="/stock" className="block py-2 px-4 rounded hover:bg-gray-700">Stock</Link>
        </li>
        <li>
          <Link href="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</Link>
        </li>
        <li>
          <Link href="/logout" className="block justify-end py-2 px-4 rounded hover:bg-gray-700">Logout</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
