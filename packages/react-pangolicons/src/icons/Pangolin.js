
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
          className={['pangolicons pangolicons-pangolin', className].join(" ")}
        >
          <path  d="M6.44,4.22s6.67,1.11,3.33,3.33L2,12C2,6.48,6.48,2,12,2s10,4.48,10,10-4.48,10-10,10H6.44l10-5.56m-4.44-6.67s-4.44,3.33-3.33,5.56c0,0,3.33-2.22,5.56-1.11"/>
        </svg>
      );
    };
    
	