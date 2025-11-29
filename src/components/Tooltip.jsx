import React, { useId } from 'react';

// Small accessible tooltip using aria-describedby and CSS group hover/focus
export default function Tooltip({ label, children, className = '', placement = 'top' }) {
  const id = useId();

  // Simple placement handling: top or bottom (future: left/right)
  const posClass = placement === 'top' ? '-top-8 left-1/2 -translate-x-1/2' : 'top-10 left-1/2 -translate-x-1/2';

  return (
    <div className={`relative inline-block group ${className}`}>
      {React.cloneElement(children, { 'aria-describedby': id, tabIndex: 0 })}
      <div
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute z-50 ${posClass} invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap`}
      >
        {label}
      </div>
    </div>
  );
}
