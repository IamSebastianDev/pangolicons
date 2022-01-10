
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
          className={['pangolicons pangolicons-bookClosed', className].join(" ")}
        >
          <path  d="M4.67,20V4a2,2,0,0,1,2-2H19.33V22H6.67A2,2,0,0,1,4.67,20Zm14.66-3.33h-12a2.66,2.66,0,0,0-2.66,2.66"/>
        </svg>
      );
    };
    
	