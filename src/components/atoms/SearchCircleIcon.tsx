export default function SearchCircleIcon({ width = 36, height = 36, className = "" }) {
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
        d="M22 14.5C22 18.0899 19.0899 21 15.5 21C11.9101 21 9 18.0899 9 14.5C9 12.9658 9.49742 11.5326 10.3566 10.3566C11.4603 8.86492 13.2681 8 15.5 8C19.0899 8 22 10.9101 22 14.5Z"
        stroke="#F47920"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 26L21 21"
        stroke="#F47920"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
