export default function LocationIcon({ width = 36, height = 36, className = "" }) {
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
        d="M17.9994 9C22.0219 9 25.1528 12.6206 24.9942 16.6633C24.7317 23.4347 17.9994 28 17.9994 28M11 19.3632C11.0953 19.6581 11.2012 19.9478 11.3124 20.2321C13.2453 24.9874 18.0006 27.9996 18.0006 27.9996M18.0006 9C13.9781 9 10.8472 12.2642 11.0058 15.9091M19.7357 14.0665C20.7911 15.1169 20.7911 16.8199 19.7357 17.8703C18.6804 18.9206 16.9693 18.9206 15.9139 17.8703C14.8585 16.8199 14.8585 15.1169 15.9139 14.0665C16.9693 13.0162 18.6804 13.0162 19.7357 14.0665Z"
        stroke="#F47920"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
