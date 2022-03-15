
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
          className={['pangolicons pangolicons-phoneCall', className].join(" ")}
        >
          <path  d="M6.37,17.9C-1.02,9.71,3.2,2.07,3.2,2.07H7.42l1.06,4.22-2.11,2.11s-2.11,1.06,3.17,6.33m-3.17,3.17c8.38,7.17,15.63,2.58,15.63,2.58l-.11-4.22-4.25-.94-2.05,2.17s-.64,2.38-6.06-2.75m6.31-2.98c-1.38-2.61-3.53-3.53-3.53-3.53m7.44,1.88c-2.3-4.35-5.88-5.88-5.88-5.88"/>
        </svg>
      );
    };
    
	