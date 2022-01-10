
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
          className={['pangolicons pangolicons-camera', className].join(" ")}
        >
          <path  d="M17.73,6.38h2.39A1.88,1.88,0,0,1,22,8.25v10a1.88,1.88,0,0,1-1.88,1.87H3.88A1.88,1.88,0,0,1,2,18.25v-10A1.88,1.88,0,0,1,3.88,6.38H6.27L10,3.88h4l3.73,2.5"/><circle  cx="12" cy="12.63" r="3.13"/>
        </svg>
      );
    };
    
	