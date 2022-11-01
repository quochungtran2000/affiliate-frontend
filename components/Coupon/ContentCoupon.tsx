import React from "react";

export default function ContentCoupon() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <span className="material-icons text-xs sm:text-sm">fingerprint</span>
        </span>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-xs sm:text-sm font-medium tracking-tight">
        Writes Upside-Down
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-xs sm:text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
  );
}
