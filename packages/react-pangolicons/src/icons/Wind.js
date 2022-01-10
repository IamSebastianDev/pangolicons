
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
          className={['pangolicons pangolicons-wind', className].join(" ")}
        >
          <path  d="M8.33,2.57a3.12,3.12,0,1,1,1.79,5.68H2"/><path  d="M17.08,6.32A3.12,3.12,0,1,1,18.87,12H2"/><path  d="M12.08,21.43a3.12,3.12,0,1,0,1.79-5.68H2"/>
        </svg>
      );
    };
    
	