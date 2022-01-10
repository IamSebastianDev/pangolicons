
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
          className={['pangolicons pangolicons-volumeMute', className].join(" ")}
        >
          <rect  x="2" y="8.46" width="4.25" height="7.08"/><polygon  points="11.91 2.79 6.25 8.46 6.25 15.54 11.91 21.21 11.91 2.79"/><line  x1="15.99" y1="15" x2="22" y2="9"/><line  x1="15.99" y1="9" x2="22" y2="15"/>
        </svg>
      );
    };
    
	