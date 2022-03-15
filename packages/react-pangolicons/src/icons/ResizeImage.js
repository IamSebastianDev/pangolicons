
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
          className={['pangolicons pangolicons-resizeImage', className].join(" ")}
        >
          <path  d="M20.6,22H3.4c-.77,0-1.4-.62-1.4-1.4V3.4c0-.77,.62-1.4,1.4-1.4H20.6c.77,0,1.4,.62,1.4,1.4V20.6c0,.77-.62,1.4-1.4,1.4ZM10.57,6.29H6.29v4.29m7.14,7.14h4.29v-4.29"/>
        </svg>
      );
    };
    
	