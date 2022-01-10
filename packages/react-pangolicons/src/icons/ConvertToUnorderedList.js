
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
          className={['pangolicons pangolicons-convertToUnorderedList', className].join(" ")}
        >
          <line  x1="8.67" y1="12" x2="22" y2="12"/><line  x1="2" y1="5.33" x2="22" y2="5.33"/><line  x1="8.67" y1="18.67" x2="22" y2="18.67"/><line  x1="3.65" y1="12" x2="3.67" y2="12"/><line  x1="3.65" y1="18.67" x2="3.67" y2="18.67"/>
        </svg>
      );
    };
    
	