import React from "react";

function NmButton({ children,
  type = 'button',
  className = '',
  ...props }) {
  return (
    
    <button className={`group relative rounded-xl bg-gradient-to-b from-white to-primary-200 px-4 py-2 ${className} drop-shadow-lg after:absolute after:inset-2.5 after:rounded-xl after:bg-gradient-to-b after:from-primary-100 after:to-primary-50 active:drop-shadow-sm active:after:inset-1 active:after:from-primary-200 active:after:to-primary-100 focus:outline-none`} {...props}>
        <div className="relative z-1 flex items-center justify-center gap-2 group-active:text-primary-700 font-sans text-l font-medium text-primary-600">      
          {children}
        </div>
      </button>
    
  );
}

export default NmButton;
