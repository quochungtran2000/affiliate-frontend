import React, { useState } from "react";
import ContentCoupon from "../Coupon/ContentCoupon";

export default function CouponTabs() {
  const [tab, setTab] = useState<number>(1);

  const handleClick = (number: number) => setTab(number);
  const activeClass =
    "inline-block p-2 sm:p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500";
  const unactiveClass =
    "inline-block p-2 sm:p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700";

  return (
    <div className="mb-8">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-xs sm:text-sm font-medium text-center">
          <li className="mr-2" onClick={() => handleClick(1)}>
            <button className={tab === 1 ? activeClass : unactiveClass}>
              Phổ biến nhất
            </button>
          </li>
          <li className="mr-2" onClick={() => handleClick(2)}>
            <button className={tab === 2 ? activeClass : unactiveClass}>
              Sắp diễn ra
            </button>
          </li>
          <li className="mr-2" onClick={() => handleClick(3)}>
            <button className={tab === 3 ? activeClass : unactiveClass}>
              Mới nhất
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div
          className={`grid-cols-1 md:grid-cols-2 gap-4 w-full ${
            tab === 1 ? "grid" : "hidden"
          }`}
        >
          <ContentCoupon />
          <ContentCoupon />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full ${
            tab === 2 ? "grid" : "hidden"
          }`}
        >
          <ContentCoupon />
          <ContentCoupon />
          <ContentCoupon />
          <ContentCoupon />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full ${
            tab === 3 ? "grid" : "hidden"
          }`}
        >
          <ContentCoupon />
          <ContentCoupon />
          <ContentCoupon />
          <ContentCoupon />
          <ContentCoupon />
          <ContentCoupon />
        </div>
      </div>
    </div>
  );
}
