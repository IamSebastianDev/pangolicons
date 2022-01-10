
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
          className={['pangolicons pangolicons-code', className].join(" ")}
        >
          <polyline  points="7.83 6.67 2.5 12 7.83 17.33"/><polyline  points="17.17 6.67 22.5 12 17.17 17.33"/>
        </svg>
      );
    };
    
	