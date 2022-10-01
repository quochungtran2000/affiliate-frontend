import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { NotificationSession } from "../NotificationSession";
import { SideBar } from "../SideBar";
import { background, shadow } from "../../constants";

export default function Layout({ children }: any) {
  return (
    <div className={`w-full h-full ${background}`}>
      <NotificationSession />
      <Header />
      <main className="flex relative">
        <SideBar />

        {/* <div className="shrink-0 relative w-64 bg-white shadow-[#e6e6e6] dark:shadow-[#333] shadow dark:bg-gray-800 dark:text-gray-100"> */}
        {/* <div className="flex justify-center items-center sticky top-50 bg-white shadow-[#e6e6e6] dark:shadow-white shadow dark:bg-gray-800 dark:text-gray-100">
            SideBar
          </div> */}
        {/* </div> */}
        {/* <div className={`${background}`}> */}
        <div className="mt-2 md:mt-8 w-full">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}
