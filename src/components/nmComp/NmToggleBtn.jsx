import React from "react";

function NmToggleBtn({ label }) {
  
  return (
    <div class="relative rounded-full max-w-fit ">
      {label && (
        <label className="inline-block mb-1 pl-1 text-primary-500" >
          {label}
        </label>
      )}
      <label class="relative block h-8 w-20">
        <input
          type="checkbox"
          className="peer absolute inset-0 appearance-none border-none shadow-none outline-none hidden"
        />
        <div className="bg-radial pointer-events-none absolute inset-0 overflow-hidden rounded-full shadow-inner shadow-black/40 after:absolute after:inset-0 after:transform-gpu after:rounded-full after:bg-accent-500 after:opacity-0 after:mix-blend-color after:transition-opacity after:will-change-opacity peer-checked:after:opacity-100"></div>
        <div className="pointer-events-none absolute top-1/2 left-0 h-8 w-8 -translate-x-0 -translate-y-1/2 rounded-full bg-gradient-to-b from-white to-primary-200 drop-shadow-lg transition-transform ease-out-back will-change-transform after:absolute after:inset-1.5 after:rounded-xl after:bg-gradient-to-b after:from-primary-100 after:to-primary-50 peer-checked:translate-x-12"></div>
      </label>
    </div>
  );
}

export default NmToggleBtn;
