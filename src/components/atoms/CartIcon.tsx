export default function CartIcon({ width = 36, height = 36, className = "" }) {
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
        d="M8 11H9.93032C10.6836 11 11.3271 11.6 11.4735 12.4293L12.7866 20.0702C12.9278 20.8996 13.5765 21.4995 14.3298 21.4995L23.2295 21.5C23.9828 21.5 24.6263 20.9 24.7727 20.0707L25.9707 13.1004C26.159 12.0122 25.4162 11.0005 24.4275 11.0005H15"
        stroke="#F47920"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3647 28C23.4693 28 24.3647 27.1046 24.3647 26C24.3647 24.8954 23.4693 24 22.3647 24C21.2602 24 20.3647 24.8954 20.3647 26C20.3647 27.1046 21.2602 28 22.3647 28Z"
        fill="#F47920"
      />
      <path
        d="M15 28C16.1046 28 17 27.1046 17 26C17 24.8954 16.1046 24 15 24C13.8954 24 13 24.8954 13 26C13 27.1046 13.8954 28 15 28Z"
        fill="#F47920"
      />
    </svg>
  );
}
