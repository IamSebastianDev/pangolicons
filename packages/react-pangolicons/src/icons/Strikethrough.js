
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
          className={['pangolicons pangolicons-strikethrough', className].join(" ")}
        >
          <path  d="M10.46,11.66c-.69-.31-3.85-2.03-3.85-4.75s2.41-4.92,5.38-4.92,5.38,2.2,5.38,4.92M2.77,11.83H21.23m-14.19,5.25c0,2.72,2.41,4.92,5.38,4.92s5.38-2.2,5.38-4.92-3.16-4.43-3.85-4.75"/>
        </svg>
      );
    };
    
	