
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
          className={['pangolicons pangolicons-twitter', className].join(" ")}
        >
          <path  d="M10.68,15.64C3.36,13.81,2.86,8,2.86,6.53c0-.77,.21-1.5,.57-2.12,2.08,2.55,5.19,4.24,8.7,4.41-.07-.31-.11-.63-.11-.96,0-2.33,1.89-4.22,4.22-4.22,1.21,0,2.3,.51,3.08,1.33,.96-.19,2.68-.75,2.68-.75l-1.53,4.13c0,5.57-4.25,12.01-12.01,12.01-2.38,0-4.6-.7-6.46-1.88,.33,.04,.67,.06,1,.06,1.98,0,6.23-1.76,7.68-2.9"/>
        </svg>
      );
    };
    
	