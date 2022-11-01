import { Footer } from "../Footer";
import { Header } from "../Header";
import { NotificationSession } from "../NotificationSession";
import { SideBar } from "../SideBar";
import { background } from "../../constants";

export default function Layout({ children }: any) {
  return (
    <div className={`w-full h-full ${background}`}>
      <NotificationSession />
      <Header />
      <main className="flex relative">
        <SideBar />

        <div className="w-full">
          <div className="max-w-5xl mx-auto">
            {children}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
