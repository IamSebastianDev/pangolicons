
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
          className={['pangolicons pangolicons-cloudMoon', className].join(" ")}
        >
          <path  d="M2,15.79c0-2.97,2.41-5.39,5.39-5.39,2.12,0,3.95,1.23,4.83,3.01,.45-.2,.94-.31,1.46-.31,1.98,0,3.59,1.61,3.59,3.59s-1.61,3.59-3.59,3.59H4.41c-1.45-.96-2.41-2.61-2.41-4.49ZM12.18,7.43c-.13,.47-.19,.96-.18,1.44m7.54,4.38c.67-.36,1.27-.89,1.74-1.55,.33-.47,.56-.98,.72-1.5-1.44,.99-3.41,1.05-4.93-.02-1.95-1.37-2.42-4.06-1.06-6.01,.11-.16,.24-.31,.37-.45-1.35,.19-2.61,.92-3.45,2.12-.35,.5-.6,1.04-.75,1.59"/>
        </svg>
      );
    };
    
	