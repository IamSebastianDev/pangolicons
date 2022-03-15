
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
          className={['pangolicons pangolicons-bellOff', className].join(" ")}
        >
          <path  d="M8.75,3.24c.86-.77,2-1.24,3.25-1.24m.12,15.85H2.99c2.36-.66,3.5-3.88,3.95-6.68M12,2c2.7,0,4.89,2.19,4.89,4.89,0,0-.04,2.96,.64,5.83m-8.67,8.64s3.14,1.46,6.29,0M2.62,2.62L21.38,21.38"/>
        </svg>
      );
    };
    
	