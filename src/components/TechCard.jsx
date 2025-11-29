import React from 'react';
/**
 * TechCard:
 * - Reusable card component that displays a technology logo + name
 * - Uses `--brand` CSS var to customize the hover/focus color for each tech
 * - Memoized to avoid unnecessary re-renders when parent changes
 */
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/**
 * TechCard - a small, memoized card that shows tech logo and name
 * props:
 * - logo: image src
 * - name: display name
 * - brand: color string (used for hover/focus)
 * - alt?: alt text
 */
const TechCard = React.memo(function TechCard({ logo, name, brand = '#10B981', alt }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <div
      className={`flex flex-col items-center justify-center border-2 border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-xl transition-all duration-500 ${prefersReducedMotion ? '' : 'transform hover:scale-105'} hover:shadow-2xl hover:border-[var(--brand)] cursor-pointer bg-white dark:bg-gray-800 hover:bg-[var(--card-hover-bg)] dark:hover:bg-[var(--card-hover-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]`}
      style={{ ['--brand']: brand }}
      tabIndex={0}
      role="group"
      aria-label={name}
    >
      <img src={logo} alt={alt || name} className={`w-24 h-24 rounded-full object-cover mb-4 transition-all duration-500 ${prefersReducedMotion ? '' : 'transform hover:scale-110'}`} />
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-[var(--brand)]">{name}</h3>
    </div>
  );
});

export default TechCard;
