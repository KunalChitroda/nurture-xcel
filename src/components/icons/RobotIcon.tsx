import React from 'react';
const RobotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
    <g>
      <rect x="96" y="160" width="320" height="192" rx="48" />
      <rect x="176" y="352" width="32" height="64" />
      <rect x="304" y="352" width="32" height="64" />
      <circle cx="176" cy="224" r="16" />
      <circle cx="336" cy="224" r="16" />
      <line x1="256" y1="96" x2="256" y2="160" />
      <circle cx="256" cy="80" r="16" />
    </g>
  </svg>
);
export default RobotIcon; 