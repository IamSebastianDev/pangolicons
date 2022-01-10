
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
          className={['pangolicons pangolicons-fnOption', className].join(" ")}
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><polyline  points="6.12 10.82 10.16 10.82 14.2 15.53 17.88 15.53"/><line  x1="17.88" y1="10.82" x2="13.9" y2="10.82"/>
        </svg>
      );
    };
    
	