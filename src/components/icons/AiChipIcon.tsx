import React from 'react';
const AiChipIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
    <g>
      <rect x="112" y="112" width="288" height="288" rx="48" />
      <rect x="192" y="192" width="128" height="128" rx="32" />
      <line x1="256" y1="32" x2="256" y2="80" />
      <line x1="256" y1="432" x2="256" y2="480" />
      <line x1="32" y1="256" x2="80" y2="256" />
      <line x1="432" y1="256" x2="480" y2="256" />
      <line x1="96" y1="96" x2="64" y2="64" />
      <line x1="416" y1="96" x2="448" y2="64" />
      <line x1="96" y1="416" x2="64" y2="448" />
      <line x1="416" y1="416" x2="448" y2="448" />
    </g>
  </svg>
);
export default AiChipIcon; 