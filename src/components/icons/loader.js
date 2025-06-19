import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img">
    <title>Loader Logo</title>
    <g>
      {/* Centered, bold "V" */}
      <text
        x="50%"
        y="55%"
        fontSize="40"
        fontFamily="Arial"
        fontWeight="bold"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        textAnchor="middle"
        dominantBaseline="middle">
        V
      </text>

      {/* Hexagonal border */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
