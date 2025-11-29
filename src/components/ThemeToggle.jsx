import React, { useContext, useCallback } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle({ className }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // stable handler for performance
  const onToggle = useCallback(() => toggleTheme(), [toggleTheme]);

  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-md flex items-center justify-center shadow-sm hover:opacity-90 transition ${className || ''}`}
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun size={18} className="text-yellow-400" />
      ) : (
        <FaMoon size={18} className="text-gray-700" />
      )}
    </button>
  );
}

export default React.memo(ThemeToggle);
