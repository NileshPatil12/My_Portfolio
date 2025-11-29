import React, { useMemo } from "react";
/**
 * TechStack
 * - Lists TechCard components for each technology
 * - Uses `techItems` constants and memoizes the data to prevent re-renders
 */
import TechCard from "./TechCard";
import { techItems } from '../utils/constants';

function TechStack() {
  // Use constants; useMemo avoids recalculating on each render
  const cardItem = useMemo(() => techItems, []);

  return (
    <div
      name="Tech Stack"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-5 tracking-wide">
        Tech Stack
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
        Tools & Technologies</p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {cardItem.map(({ id, logo, name, brand }) => (
            <TechCard key={id} logo={logo} name={name} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
