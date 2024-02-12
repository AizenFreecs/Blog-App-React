import React, { useId } from "react";

function NmSelect({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && 
        <label htmlFor={id} className="text-primary-500">
          {label}
        </label>
      }
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded bg-primary-50 drop-shadow-lg shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] text-primary-700 outline-none focus:bg-primary-100 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="bg-primary-100 text-primary-500">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(NmSelect);
