
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
          className={['pangolicons pangolicons-bold', className].join(" ")}
        >
          <path  d="M5.08,2.71c0-.39,.31-.71,.69-.71h7.83c2.35,0,4.26,2.24,4.26,5s-1.91,5-4.26,5H5.08V2.71Zm0,18.58c0,.39,.31,.71,.69,.71H14.66c2.35,0,4.26-2.24,4.26-5s-1.91-5-4.26-5H5.76c-.38,0-.69,.32-.69,.71v8.58Z"/>
        </svg>
      );
    };
    
	