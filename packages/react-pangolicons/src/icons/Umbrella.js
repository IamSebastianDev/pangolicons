
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
          className={['pangolicons pangolicons-umbrella', className].join(" ")}
        >
          <path  d="M2.59,11.41a9.41,9.41,0,0,1,18.82,0H2.59Z"/><path  d="M16.71,19.88A2.25,2.25,0,0,1,14.35,22,2.24,2.24,0,0,1,12,19.88V11.41"/>
        </svg>
      );
    };
    
	