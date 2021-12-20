
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
          stroke-width={strokeWidth}
          stroke-linecap={linecap}
          stroke-linejoin={linejoin}
          class="pangolicons pangolicons-guitar {className}"
        >
          <path  d="M13.37,11.47c1.09,1.41,1.84,3.34.42,4.77a4.78,4.78,0,0,1-1,.76,5.77,5.77,0,0,1-1.66,3.69c-2.63,2.64-5.86,1-8.15-2a4.38,4.38,0,0,1,.48-5.82A5.76,5.76,0,0,1,7,11.27a4.48,4.48,0,0,1,.76-1c1.41-1.43,3.35-.69,4.77.38m-.21,1.94,6.75-6.8a.24.24,0,0,0,0-.35l-.51-.51a.24.24,0,0,0-.35,0l-6.75,6.8a.3.3,0,0,0,0,.43l.44.43A.29.29,0,0,0,12.3,12.55ZM5.22,17.09,7,18.81m.87-4.34a1.22,1.22,0,1,0,1.68,0A1.2,1.2,0,0,0,7.82,14.47ZM19.94,5.72l1.89-1.9a.4.4,0,0,0,0-.57L20.67,2.1a.4.4,0,0,0-.57,0L18.21,4a.41.41,0,0,0,0,.57l1.15,1.15A.4.4,0,0,0,19.94,5.72Z"/>
        </svg>
      );
    };
    
	