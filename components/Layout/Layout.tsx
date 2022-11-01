import { Footer } from "../Footer";
import { Header } from "../Header";
import { NotificationSession } from "../NotificationSession";
import { SideBar } from "../SideBar";
import { background } from "../../constants";

export default function Layout({ children }: any) {
  return (
    <div className={`w-full h-full ${background} text-xs sm:text-sm `}>
      <NotificationSession />
      <Header />
      <main className="flex relative">
        <SideBar />

        <div className="w-full">
          <div className="max-w-5xl mx-auto px-2 sm:px-4 xl:px-0">
            {children}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
