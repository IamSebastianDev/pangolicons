
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
          className={['pangolicons pangolicons-phoneMissed', className].join(" ")}
        >
          <path  d="M6.37,17.9C-1,9.71,3.2,2.07,3.2,2.07H7.42L8.48,6.29,6.37,8.4S4.26,9.46,9.53,14.73M6.37,17.9C14.75,25.07,22,20.48,22,20.48l-.11-4.22-4.25-.94-2.05,2.17S15,19.87,9.53,14.73"/><line  x1="13.03" y1="10.97" x2="18.03" y2="5.97"/><line  x1="13.03" y1="5.97" x2="18.03" y2="10.97"/>
        </svg>
      );
    };
    
	