const MenuIcon = ({ width = 23, height = 17, stroke = "#F47920", className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 15H21"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8.5H21"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2H21"
        stroke={stroke}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
