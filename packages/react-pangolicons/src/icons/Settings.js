
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
          className={['pangolicons pangolicons-settings', className].join(" ")}
        >
          <path  d="M8,6c0,.37-.3,.67-.67,.67s-.67-.3-.67-.67,.3-.67,.67-.67,.67,.3,.67,.67Zm13.33,.6v-1.2c0-1.88-1.52-3.4-3.4-3.4H6.07c-1.88,0-3.4,1.52-3.4,3.4v1.2c0,1.88,1.52,3.4,3.4,3.4h11.87c1.88,0,3.4-1.52,3.4-3.4Zm-5.33,11.4c0,.37,.3,.67,.67,.67s.67-.3,.67-.67-.3-.67-.67-.67-.67,.3-.67,.67Zm-9.93,4h11.87c1.88,0,3.4-1.52,3.4-3.4v-1.2c0-1.88-1.52-3.4-3.4-3.4H6.07c-1.88,0-3.4,1.52-3.4,3.4v1.2c0,1.88,1.52,3.4,3.4,3.4Z"/>
        </svg>
      );
    };
    
	