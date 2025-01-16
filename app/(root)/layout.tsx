import LeftSideNav from "@/components/navigartion/LeftSideNav";
import Navbar from "@/components/navigartion/navbar";
import RightSidebar from "@/components/navigartion/RightSidebar";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex pt-28">
        <LeftSideNav />

        <section className="flex flex-col min-h-screen flex-1">
          <div className="w-full max-w-5xl mx-auto px-7">{children}</div>
        </section>

        <RightSidebar />
      </div>


    </main>
  );
};

export default RootLayout;
