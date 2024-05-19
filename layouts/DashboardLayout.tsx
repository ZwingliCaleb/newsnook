import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
