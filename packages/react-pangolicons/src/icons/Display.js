
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
          className={['pangolicons pangolicons-display', className].join(" ")}
        >
          <path  d="M22,14.63c0,.96-.78,1.74-1.74,1.74H3.74c-.96,0-1.74-.78-1.74-1.74V4.37c0-.96,.78-1.74,1.74-1.74H20.26c.96,0,1.74,.78,1.74,1.74V14.63Zm-10,6.74h0Zm0-5v5"/>
        </svg>
      );
    };
    
	