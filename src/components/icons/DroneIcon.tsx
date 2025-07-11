import React from 'react';
const DroneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
    <g>
      <path d="M256 128v256" />
      <rect x="192" y="128" width="128" height="256" rx="64" />
      <circle cx="80" cy="80" r="32" />
      <circle cx="432" cy="80" r="32" />
      <circle cx="80" cy="432" r="32" />
      <circle cx="432" cy="432" r="32" />
      <line x1="80" y1="80" x2="192" y2="192" />
      <line x1="432" y1="80" x2="320" y2="192" />
      <line x1="80" y1="432" x2="192" y2="320" />
      <line x1="432" y1="432" x2="320" y2="320" />
    </g>
  </svg>
);
export default DroneIcon; 