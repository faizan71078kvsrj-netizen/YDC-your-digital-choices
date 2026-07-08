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
        {/* Gradients */}
        <linearGradient id="logoBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        
        <linearGradient id="logoCyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>

        <linearGradient id="logoOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>

        {/* Compound Gradient for C to blend Cyan to Orange */}
        <linearGradient id="logoCGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="45%" stopColor="#0ea5e9" />
          <stop offset="75%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>

      {/* Dark Circular Background */}
      <circle cx="100" cy="100" r="96" fill="#040e21" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* Stylized YDC Graphic */}
      <g transform="translate(0, 5)">
        {/* Y - Left Arm */}
        <path
          d="M 50 75 L 70 95"
          stroke="url(#logoBlueGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Y - Stem */}
        <path
          d="M 70 95 L 70 115"
          stroke="url(#logoBlueGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Y - Right Arm with Arrow Shaft */}
        <path
          d="M 70 95 L 88 68"
          stroke="url(#logoCyanGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Y - Arrow Head (Points top-right) */}
        <path
          d="M 79 59 L 93 61 L 91 75 Z"
          fill="url(#logoCyanGrad)"
          stroke="url(#logoCyanGrad)"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* D - Letter (Perfect positioning, non-overlapping) */}
        <path
          d="M 104 75 L 104 115 M 104 75 C 118 75 128 82 128 95 C 128 108 118 115 104 115"
          stroke="url(#logoCyanGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* C - Letter (Smooth, non-overlapping with D) */}
        <path
          d="M 160 83 C 155 77 147 75 142 75 C 132 75 133 95 133 95 C 133 95 132 115 142 115 C 147 115 155 113 160 107"
          stroke="url(#logoCGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Wordmark and Tagline */}
      {showText && (
        <>
          <text
            x="100"
            y="146"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="12.5"
            fontWeight="bold"
            fontFamily="'Inter', sans-serif"
            letterSpacing="0.2"
          >
            Your Digital <tspan fill="#f97316">Choices</tspan>
          </text>
          <text
            x="100"
            y="164"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="7"
            fontWeight="600"
            fontFamily="'Inter', sans-serif"
            letterSpacing="0.8"
            opacity="0.9"
          >
            Smart Choice. Digital Future.
          </text>
        </>
      )}
    </svg>
  );
}
