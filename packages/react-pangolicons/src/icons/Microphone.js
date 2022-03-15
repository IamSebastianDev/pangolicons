
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
          className={['pangolicons pangolicons-microphone', className].join(" ")}
        >
          <path  d="M12.64,13.43h-1.29c-.83,0-1.5-.67-1.5-1.5V3.5c0-.83,.67-1.5,1.5-1.5h1.29c.83,0,1.5,.67,1.5,1.5V11.93c0,.83-.67,1.5-1.5,1.5Zm-6.36-2.14c0,3.16,2.56,5.71,5.71,5.71s5.71-2.56,5.71-5.71m-5.71,5.71v4.94m2.14,.06h-4.29"/>
        </svg>
      );
    };
    
	