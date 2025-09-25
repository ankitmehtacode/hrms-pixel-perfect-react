import { useState } from "react";
import { Bell, Search, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import sunLogo from "@/assets/sun-robotics-logo.png";

export function HRMSHeader() {
  return (
    <header className="h-16 border-b border-border bg-surface/50 backdrop-blur-sm flex items-center justify-between px-6">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-3">
        <img 
          src={sunLogo} 
          alt="Sun Robotics & AI" 
          className="h-8 w-8 object-contain"
        />
        <div>
          <h1 className="text-lg font-semibold text-foreground">SUN ROBOTICS AND AI</h1>
        </div>
      </div>

      {/* Search and User Actions */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search employees, projects..."
            className="pl-10 bg-surface-elevated border-border input-glow"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full animate-pulse"></span>
        </Button>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 hover:bg-surface-elevated">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Anugrah Purohit" />
                <AvatarFallback className="bg-primary text-primary-foreground">AP</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium">Anugrah Purohit</p>
                <p className="text-xs text-muted-foreground">Lead AI Engineer</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-surface-elevated border-border">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}