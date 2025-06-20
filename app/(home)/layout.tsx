import { DarkMode } from "@/components/DarkMode";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b">
        <nav className="flex items-center justify-between py-2 max-w-7xl mx-auto">
          <Logo />
          <div className="flex items-center justify-between gap-2">
            <Button variant={"link"}>Dashboard</Button>
            <UserButton/>
            <DarkMode/>
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
}

export default layout;
