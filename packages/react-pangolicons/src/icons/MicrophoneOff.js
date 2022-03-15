
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
          className={['pangolicons pangolicons-microphoneOff', className].join(" ")}
        >
          <path  d="M9.86,9.67V3.87c0-1.04,.84-1.87,1.87-1.87h.54c1.04,0,1.87,.84,1.87,1.87m-2.14,13.13c3.16,0,5.71-2.56,5.71-5.71m-11.43,0c0,.49,.06,.96,.18,1.42m5.54,4.3v4.94m2.14,.06h-4.29m-5.36-2.5L19.5,4.5"/>
        </svg>
      );
    };
    
	