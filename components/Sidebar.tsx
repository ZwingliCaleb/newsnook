// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className=" bg-gray-800 text-white h-full p-4">
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-grey-700">Dashboard</Link>
        </li>
        <li>
          <Link href="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
