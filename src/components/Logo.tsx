import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 40, showText = true, className = '', ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`select-none ${className}`}
      {...props}
    >
      <defs>
        {/* Glowing gradients matching the official YDC branding */}
        <linearGradient id="ydcBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />  {/* Bright Sky Cyan */}
          <stop offset="100%" stopColor="#0052FF" /> {/* Premium Royal Blue */}
        </linearGradient>

        <linearGradient id="ydcDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1931" />   {/* Deep Space Navy */}
          <stop offset="100%" stopColor="#020813" />  {/* Near Black */}
        </linearGradient>

        <linearGradient id="ydcCGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />   {/* Bright Sky Cyan */}
          <stop offset="50%" stopColor="#0052FF" />  {/* Premium Royal Blue */}
          <stop offset="100%" stopColor="#051630" />  {/* Deep Midnight Blue */}
        </linearGradient>
      </defs>

      {/* Dark Circular Background with subtle tech border */}
      <circle 
        cx="100" 
        cy="100" 
        r="96" 
        fill="#020813" 
        stroke="rgba(56, 189, 248, 0.12)" 
        strokeWidth="1.5" 
      />

      {/* Stylized YDC Interconnected Monogram */}
      <g transform="translate(0, -10)">
        {/* Y - Left Arm & Stem (Seamless Single Path) */}
        <path
          d="M 19,60 L 41,60 L 63,92 L 63,140 L 45,140 L 45,102 L 19,65 Z"
          fill="url(#ydcBlueGrad)"
        />
        
        {/* Y - Right Arm */}
        <path
          d="M 63,92 L 89,60 L 107,60 L 73,102 Z"
          fill="url(#ydcBlueGrad)"
        />

        {/* D - Custom Curved Letter (Layered over Y with a crisp contrast border) */}
        <path
          d="M 81,60 L 109,60 C 134,60 151,76 151,100 C 151,124 134,140 109,140 L 81,140 Z M 97,76 L 97,124 L 109,124 C 122,124 133,115 133,100 C 133,85 122,76 109,76 Z"
          fill="url(#ydcDarkGrad)"
          stroke="rgba(56, 189, 248, 0.3)"
          strokeWidth="1"
          fillRule="evenodd"
        />

        {/* C - Smooth Outer Arch (Sweeps around D) */}
        <path
          d="M 129,60 C 164,60 181,76 181,100 C 181,124 164,140 137,140 L 147,124 C 163,124 163,115 163,100 C 163,85 163,76 147,76 Z"
          fill="url(#ydcCGrad)"
          stroke="rgba(56, 189, 248, 0.2)"
          strokeWidth="0.75"
        />
      </g>

      {/* Wordmark and Tagline */}
      {showText && (
        <>
          {/* Main Brand Title with multi-color highlights */}
          <text
            x="100"
            y="158"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10.5"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="1.2"
          >
            YOUR <tspan fill="#38bdf8">DIGITAL</tspan> CHOICES
          </text>

          {/* Symmetrical Tagline with subtle divider lines */}
          <g opacity="0.8">
            <line x1="20" y1="174" x2="48" y2="174" stroke="#0052FF" strokeWidth="1" />
            <text
              x="100"
              y="177"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="5.2"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.8"
            >
              BUILDING THE FUTURE WITH AI
            </text>
            <line x1="152" y1="174" x2="180" y2="174" stroke="#0052FF" strokeWidth="1" />
          </g>
        </>
      )}
    </svg>
  );
}

