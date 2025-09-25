import { useState } from "react";
import { 
  Users, 
  Clock, 
  DollarSign, 
  BarChart3, 
  Calendar, 
  FileText, 
  Settings,
  Home,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Employees", url: "/employees", icon: Users },
  { title: "Time & Attendance", url: "/attendance", icon: Clock },
  { title: "Payroll & Benefits", url: "/payroll", icon: DollarSign },
  { title: "Performance", url: "/performance", icon: BarChart3 },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function HRMSSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `group relative overflow-hidden transition-all duration-300 ${
      isActive 
        ? "bg-primary/20 text-primary border-r-2 border-primary" 
        : "hover:bg-surface-elevated text-muted-foreground hover:text-foreground"
    }`;

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} bg-surface border-r border-border`}>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? "hidden" : "block"} text-xs uppercase tracking-wider text-muted-foreground mb-4`}>
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {isActive(item.url) && (
                            <ChevronRight className="h-4 w-4 text-primary" />
                          )}
                        </>
                      )}
                      
                      {/* Tesla-style glow effect for active items */}
                      {isActive(item.url) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg"></div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Sidebar Toggle */}
        <div className="mt-auto p-2">
          <SidebarTrigger className="w-full btn-tesla text-sm" />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}