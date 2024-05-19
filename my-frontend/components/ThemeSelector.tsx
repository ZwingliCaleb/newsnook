// components/ThemeSelector.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <label htmlFor="theme-toggle" className="mr-2">Theme:</label>
      <button id="theme-toggle" onClick={toggleTheme} className="p-2 bg-sky-700 text-white rounded-lg shadow-md hover:bg-sky-900">
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeSelector;
