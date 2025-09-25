import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { HRMSSidebar } from "./HRMSSidebar";
import { HRMSHeader } from "./HRMSHeader";

interface HRMSLayoutProps {
  children: React.ReactNode;
}

export function HRMSLayout({ children }: HRMSLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <HRMSSidebar />
        <div className="flex-1 flex flex-col">
          <HRMSHeader />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}