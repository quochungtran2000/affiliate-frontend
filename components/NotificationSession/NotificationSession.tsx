import React, { useState } from "react";

export default function NotificationSession() {
  const [showNoti, setShowNoti] = useState<boolean>(true);

  const handleCloseNoti = () => setShowNoti(false);

  return (
    <section
      className={`flex justify-center bg-sky-100 shadow-[#e6e6e6] shadow mb-px ${
        !showNoti && "hidden"
      }`}
    >
      <div className="w-full px-4 py-2">
        <div className="flex flex-row items-center">
          <div className="text-center w-full pr-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            accusantium.
          </div>
          <div onClick={handleCloseNoti}>
            <span className="material-symbols-outlined text-sm">close</span>
          </div>
        </div>
      </div>
    </section>
  );
}
