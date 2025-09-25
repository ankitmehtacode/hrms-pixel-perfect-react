import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HRMSLayout } from "@/components/HRMSLayout";
import Index from "./pages/Index";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={
            <HRMSLayout>
              <Employees />
            </HRMSLayout>
          } />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/attendance" element={
            <HRMSLayout>
              <div className="p-6"><h1 className="text-2xl font-bold">Attendance Management</h1><p className="text-muted-foreground">Track employee attendance and schedules</p></div>
            </HRMSLayout>
          } />
          <Route path="/performance" element={
            <HRMSLayout>
              <div className="p-6"><h1 className="text-2xl font-bold">Performance Analytics</h1><p className="text-muted-foreground">Monitor team performance metrics</p></div>
            </HRMSLayout>
          } />
          <Route path="/calendar" element={
            <HRMSLayout>
              <div className="p-6"><h1 className="text-2xl font-bold">Calendar & Events</h1><p className="text-muted-foreground">Manage schedules and company events</p></div>
            </HRMSLayout>
          } />
          <Route path="/reports" element={
            <HRMSLayout>
              <div className="p-6"><h1 className="text-2xl font-bold">Reports & Analytics</h1><p className="text-muted-foreground">Generate comprehensive HR reports</p></div>
            </HRMSLayout>
          } />
          <Route path="/settings" element={
            <HRMSLayout>
              <div className="p-6"><h1 className="text-2xl font-bold">System Settings</h1><p className="text-muted-foreground">Configure HRMS preferences</p></div>
            </HRMSLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
