import React from "react";
import { shadow } from "../../constants";

export default function SideBarCoupon() {
  return (
    <a
      href="#"
      className={`w-full hover:bg-gray-50 border border-gray-200 dark:border-gray-700 rounded-lg`}
    >
      {/* <div className="grid grid-cols-6 p-2 gap-y-2">
        <div>
          <img
            src="https://picsum.photos/seed/2/200/200"
            className="max-w-16 max-h-16"
          />
        </div>

        <div className="col-span-5 md:col-span-4 ml-4">
          <p className="text-gray-800 font-medium text-sm ">
            Shopee siêu sale tháng 11/2022
          </p>

          <p className="text-gray-600 text-sm ">Fri, Mar 11 . 8:00 - 9:30 AM</p>

          <p className="text-gray-400 text-sm "> Beginner speakers </p>
        </div>

        <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
          <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm  w-fit h-fit">
            TIN KHUYẾN MÃI
          </p>
        </div>
      </div> */}
      <div className="flex flex-col">
        <img
          src="https://res.cloudinary.com/hunghamhoc/image/upload/c_scale,w_300/v1667232034/affiliate/highland_ki5bje.jpg"
          alt=""
          className="w-full rounded-t-lg"
        />
        <p className="p-2 rounded-b-lg">Ưu đãi tháng 11 Highlands coffee mua 1 tặng 1</p>
      </div>
    </a>
  );
}
