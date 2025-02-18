export default function UserIcon({ width = 36, height = 36, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="36" height="36" rx="18" fill="#F8F3EC" />
      <path
        d="M21.1088 17.1088C22.9637 15.2538 22.9637 12.2462 21.1088 10.3912C19.2538 8.53625 16.2462 8.53625 14.3912 10.3912C12.5363 12.2462 12.5363 15.2538 14.3912 17.1088C16.2462 18.9637 19.2538 18.9637 21.1088 17.1088Z"
        stroke="#F47920"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9995 22C22.022 22 25 24 24.9943 27M18.0007 22C13.9782 22 11 24 11.0059 27"
        stroke="#F47920"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
