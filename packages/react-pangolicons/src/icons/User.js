
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
          className={['pangolicons pangolicons-user', className].join(" ")}
        >
          <path  d="M4.5,20.23v-2.91c0-1.1,.78-2.01,1.74-2.01h11.53c.96,0,1.74,.9,1.74,2.01v2.91M12,3.77c-2.23,0-4.04,1.81-4.04,4.04s1.81,4.04,4.04,4.04,4.04-1.81,4.04-4.04-1.81-4.04-4.04-4.04Z"/>
        </svg>
      );
    };
    
	