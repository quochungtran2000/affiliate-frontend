import React, { useState } from "react";
import { Coupon } from "../../api/getCoupons";

type CouponCardProps = {
  item: Coupon;
};
import { lazadaLogo, shopeeLogo, tikiLogo } from "../../constants";
const merchantImages = {
  tiki: tikiLogo,
  shopee: shopeeLogo,
  lazada: lazadaLogo,
};

const getMerchantImage = (merchant: string) => {
  return (merchantImages as { [key: string]: string })?.[merchant];
};

export default function CouponCard({ item }: CouponCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const couponCode = item?.coupons?.[0].coupon_code || "";

  const getHiddenCoupon = (couponCode: string) => {
    return couponCode.replace(/[a-zA-Z0-9]/g, "*");
  };
  return (
    <div className="coupon-card w-full text-center px-2 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <img
          src={getMerchantImage(item.merchant) || item.image}
          alt={item.name}
          className="rounded-full w-12 mb-2 mx-auto flex-shrink-0"
        />
        <h3 className="text-xs sm:text-sm flex-grow text-gray-700 dark:text-gray-200 text-line-camp-2">
          {/* {`Giảm ${Number(
          item.discount_value
        ).toLocaleString("de-DE")}đ cho đơn hàng từ ${Number(
          item.min_spend
            ).toLocaleString("de-DE")}đ`} */}
          {item.name}
        </h3>
        <div className="coupon-row flex items-center justify-center my-2 mx-auto max-w-fit flex-shrink-0">
          <div className="coupon-code text-xs sm:text-sm px-4 py-2 border border-dashed text-gray-700 dark:text-gray-400">
            {/* {item?.coupons?.[0].coupon_code} */}
            {clicked ? couponCode : getHiddenCoupon(couponCode)}
          </div>
          <div
            className="coupon-btn text-xs sm:text-sm text-gray-700 dark:text-gray-200 px-4 py-2 border border-solid cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(couponCode);
              setTimeout(() => {
                window.open(item.aff_link, "_blank");
              }, 3000);
              setClicked(true);
            }}
          >
            COPY
          </div>
        </div>
        <p className="text-red-600 dark:text-red-700 flex-shrink-0 text-xs">
          Hết hạn vào ngày {new Date(item.end_time).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
