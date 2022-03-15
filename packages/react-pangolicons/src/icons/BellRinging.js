
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
          className={['pangolicons pangolicons-bellRinging', className].join(" ")}
        >
          <path  d="M12,3.18c2.54,0,4.6,2.06,4.6,4.6,0,0-.12,9.2,3.88,10.32H3.52c4-1.12,3.88-10.32,3.88-10.32,0-2.54,2.06-4.6,4.6-4.6m-2.96,18.21s2.96,1.38,5.92,0m5.28-13.51c0-2.35-1.18-4.71-2.35-5.88M3.94,7.89c-.17-2.36,1-4.71,2.35-5.88"/>
        </svg>
      );
    };
    
	