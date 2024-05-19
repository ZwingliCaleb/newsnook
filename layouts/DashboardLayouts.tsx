// layouts/DashboardLayout.tsx
import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Sidebar from '@/components/Sidebar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex h-screen p-2">
        <Sidebar/>
        <div className="flex-1 p-2">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
