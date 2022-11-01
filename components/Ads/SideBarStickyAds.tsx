import React from "react";
import { shadow, background } from "../../constants";

export default function SideBarStickyAds() {
  return (
    <div className={`blog-ads h-32 w-full mb-8 sticky top-[51px] z-10`}>
      <div
        className={`w-full h-full flex justify-center items-center ${shadow} ${background}`}
      >
        {/* Quảng cáo sẽ hiện ở đây */}
        {"                           "}
      </div>
    </div>
  );
}
