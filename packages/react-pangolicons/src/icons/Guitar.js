
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
          className={['pangolicons pangolicons-guitar', className].join(" ")}
        >
          <path  d="M13.37,11.47c1.08,1.41,1.83,3.34,.42,4.77-.31,.32-.67,.56-1.04,.76-.09,1.33-.63,2.65-1.67,3.69-2.63,2.64-5.85,1.01-8.15-2.02-1.32-1.75-1.17-4.25,.48-5.82,1.01-.97,2.28-1.48,3.56-1.58,.2-.37,.44-.73,.75-1.04,1.41-1.42,3.35-.69,4.77,.38m-.21,1.94l6.75-6.8c.1-.1,.1-.26,0-.35l-.51-.51c-.1-.1-.26-.1-.35,0l-6.75,6.8c-.12,.12-.12,.31,0,.43l.44,.44c.12,.12,.31,.12,.43,0Zm-7.09,4.54l1.73,1.72m.87-4.34c-.45,.45-.43,1.21,.05,1.68s1.23,.49,1.68,.04,.43-1.21-.05-1.68-1.23-.49-1.68-.04ZM19.94,5.72l1.89-1.9c.16-.16,.16-.41,0-.57l-1.16-1.15c-.16-.16-.41-.16-.57,0l-1.89,1.9c-.16,.16-.16,.41,0,.57l1.16,1.15c.16,.16,.41,.16,.57,0Z"/>
        </svg>
      );
    };
    
	