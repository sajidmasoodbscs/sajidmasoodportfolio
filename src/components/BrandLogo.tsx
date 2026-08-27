import { useId } from 'react';

type BrandLogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: { mark: 28, text: 'text-base md:text-lg' },
  md: { mark: 36, text: 'text-lg md:text-xl' },
  lg: { mark: 44, text: 'text-xl md:text-2xl' },
};

const BrandLogo = ({ className = '', showWordmark = true, size = 'md' }: BrandLogoProps) => {
  const uid = useId().replace(/:/g, '');
  const bgId = `sm-bg-${uid}`;
  const sheenId = `sm-sheen-${uid}`;
  const { mark, text } = sizeMap[size];

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl ${className}`}
      aria-label="Sajid Masood — Home"
    >
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 rounded-[0.65rem] shadow-sm transition-transform duration-300 group-hover:scale-105"
        aria-hidden
      >
        <defs>
          <linearGradient id={bgId} x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1d4ed8" />
            <stop offset="0.55" stopColor="#0284c7" />
            <stop offset="1" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id={sheenId} x1="12" y1="8" x2="40" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill={`url(#${bgId})`} />
        <path
          d="M10 16c12-8 30-6 40 4"
          fill="none"
          stroke={`url(#${sheenId})`}
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.5"
        />
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Inter, Segoe UI, system-ui, sans-serif"
          fontSize="24"
          fontWeight="800"
          letterSpacing="-1.5"
        >
          SM
        </text>
      </svg>

      {showWordmark && (
        <span
          className={`font-bold tracking-tight primary-gradient bg-clip-text text-transparent whitespace-nowrap ${text}`}
        >
          Sajid Masood
        </span>
      )}
    </a>
  );
};

export default BrandLogo;
