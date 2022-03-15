
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
          className={['pangolicons pangolicons-github', className].join(" ")}
        >
          <path  d="M9.75,22c.12-.87,.04-5.83,.43-6.16-2.98-.34-6.12-1.49-6.12-6.64,0-1.47,.52-2.67,1.38-3.61-.14-.34-.6-1.71,.13-3.56,0,0,1.13-.36,3.7,1.38,1.07-.3,2.22-.45,3.36-.45,1.14,0,2.29,.15,3.36,.45,2.57-1.74,3.69-1.38,3.69-1.38,.73,1.85,.27,3.22,.13,3.56,.86,.94,1.38,2.14,1.38,3.61,0,5.16-3.14,6.3-6.14,6.63,.48,.41,.91,1.24,.91,2.49,0,1.8-.02,3.25-.02,3.69h-6.66c0-.32-.01-1.16-.02-2.29-3.74,.81-4.53-1.8-4.53-1.8-.61-1.55-1.49-1.97-1.49-1.97"/>
        </svg>
      );
    };
    
	