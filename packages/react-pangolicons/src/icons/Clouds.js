
    import React from "react";

    export default ({
      size = "24",
      color = "currentColor",
      strokeWidth = "1.5",
      linecap = "round",
      linejoin = "round",
      className = ""
    }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={linecap}
          strokeLinejoin={linejoin}
          className={['pangolicons pangolicons-clouds', className].join(" ")}
        >
          <path  d="M2,14c0-3.79,3.07-6.86,6.86-6.86,2.7,0,5.03,1.56,6.15,3.83,.57-.25,1.19-.4,1.85-.4,2.52,0,4.57,2.05,4.57,4.57s-2.05,4.57-4.57,4.57H5.07c-1.85-1.23-3.07-3.33-3.07-5.71Zm20-4c0-3.16-2.81-5.71-6.29-5.71-1.14,0-2.21,.28-3.13,.76"/>
        </svg>
      );
    };
    
	