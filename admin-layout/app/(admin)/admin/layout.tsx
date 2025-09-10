"use client";
import React from "react";
import NavSidebar from "../components/navSidebar";
import UserSuccess from "../components/userSuccess";
import PageLayout from "../components/pageLayout";
import { usePathname } from "next/navigation";

export default function AdminPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const getPageTitle = () => {
    switch (pathname) {
      case "/admin":
        return "Dashboard";
      case "/admin/genres":
        return "Genres";
      case "/admin/movies":
        return "Movies";
      case "/admin/genres":
        return "Genres";
      case "/admin/formats":
        return "Formats";
      case "/admin/countries":
        return "Countries";
      case "/admin/directors":
        return "Directors";
      case "/admin/actors":
        return "Actors";
      case "/admin/comments":
        return "Comments";
      case "/admin/list-user":
        return "Users";
      case "/admin/directors":
        return "Directors";
      case "/admin/movies/episodes":
        return "Episodes";
      default:
        return "Admin Home";
    }
  };

  return (
    <>
      {" "}
      <section className="flex flex-row w-full h-screen">
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
        <main className="basis-5/6 h-screen overflow-y-auto">
          <header></header>
          <PageLayout title={getPageTitle()}>{children}</PageLayout>
        </main>
      </section>
    </>
  );
}
