
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
          className={['pangolicons pangolicons-pieChart', className].join(" ")}
        >
          <path  d="M9.16,2.41m12.84,9.59c0-5.52-4.48-10-10-10m10,10-.45,2.97M9.16,2.41C5.02,3.64,2,7.47,2,12c0,5.52,4.48,10,10,10,4.49,0,8.28-2.96,9.55-7.03M12,2V12h10"/>
        </svg>
      );
    };
    
	