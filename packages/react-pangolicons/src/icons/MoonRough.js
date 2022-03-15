
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
          className={['pangolicons pangolicons-moonRough', className].join(" ")}
        >
          <path  d="M22,12c0,1.27-.25,2.49-.68,3.61-.16-.05-.32-.08-.49-.08-.97,0-1.76,.79-1.76,1.76,0,.48,.19,.92,.51,1.23-1.83,2.12-4.54,3.47-7.56,3.47,0-.97-.79-1.76-1.76-1.76-.76,0-1.4,.48-1.65,1.15-1.94-.7-3.59-1.99-4.76-3.64,.69-.74,1.12-1.72,1.12-2.8,0-1.84-1.22-3.39-2.89-3.91,.23-2.41,1.32-4.57,2.96-6.18,.17,.05,.34,.09,.52,.09,.97,0,1.76-.79,1.76-1.76,1.4-.75,3-1.18,4.71-1.18,2.22,0,4.27,.73,5.93,1.96-.03,.13-.05,.26-.05,.39,0,.97,.79,1.76,1.76,1.76,.14,0,.27-.02,.39-.05,1.23,1.66,1.96,3.71,1.96,5.93Z"/>
        </svg>
      );
    };
    
	