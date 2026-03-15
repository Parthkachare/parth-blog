import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { ScrollProgress } from "../components/scroll-progress";
import { CursorGlow } from "../components/cursor-glow";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}