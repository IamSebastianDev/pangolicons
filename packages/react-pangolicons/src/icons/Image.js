
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
          className={['pangolicons pangolicons-image', className].join(" ")}
        >
          <path  d="M20.6,20.75H3.4c-.77,0-1.4-.62-1.4-1.4V4.65c0-.77,.62-1.4,1.4-1.4H20.6c.77,0,1.4,.62,1.4,1.4v14.71c0,.77-.62,1.4-1.4,1.4ZM6.29,7h0m-1.43,13.75l8.57-7.5m7.14,6.25l-7.14-6.25"/>
        </svg>
      );
    };
    
	