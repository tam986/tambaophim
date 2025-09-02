import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style/navSidebar.css";
import NavSidebar from "./components/navSidebar";
import UserSuccess from "./components/userSuccess";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TamBaoFilms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white">
        <section className="flex flex-row h-screen">
          <nav className="basis-1/6 h-screen border-r border-[color:var(--border-bottom-color)] overflow-y-auto">
            <div className="border-b  border-[color:var(--border-bottom-color)] p-8">
              <h2>
                TamBao<span className="text-[#5781EB]">Movies</span>
              </h2>
            </div>
            <div className="border-b border-[color:var(--border-bottom-color)] p-8">
              {" "}
              <UserSuccess />{" "}
            </div>
            <div className="p-2 ">
              {" "}
              <NavSidebar />{" "}
            </div>
          </nav>
          <main className="basis-5/6 h-screen">
            <div> {children}</div>
          </main>
        </section>
      </body>
    </html>
  );
}
