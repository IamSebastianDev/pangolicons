
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
          className={['pangolicons pangolicons-cloud', className].join(" ")}
        >
          <path  d="M5.16,18.47H17.29a4.71,4.71,0,1,0-1.91-9,7.05,7.05,0,1,0-10.22,9Z"/>
        </svg>
      );
    };
    
	