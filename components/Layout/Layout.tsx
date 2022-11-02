import { Footer } from "../Footer";
import { Header } from "../Header";
import { NotificationSession } from "../NotificationSession";
import { WebsiteSideBar } from "../SideBar";
import { background, text } from "../../constants";
import { ReactElement } from "react";
import { BannerAds } from "../Ads";

type LayoutProps = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`w-full h-full ${background}`}>
      {/** Notification Session */}
      <NotificationSession />

      <Header />

      <main className="flex relative">
        {/** SideBar */}
        <WebsiteSideBar />

        <div className="w-full">
          <div className="max-w-5xl mx-auto px-2 sm:px-4 xl:px-0">
            <BannerAds />
            {children}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
