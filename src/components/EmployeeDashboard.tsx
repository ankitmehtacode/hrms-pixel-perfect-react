import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Clock, 
  Users, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  FileText,
  UserPlus,
  ChevronRight,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const pendingApprovals = [
  { id: 1, type: "Leave Request", employee: "Sarah Mitchell", detail: "Annual Leave • Mar 15-19", status: "urgent", days: "5 days" },
  { id: 2, type: "Leave Request", employee: "James Chen", detail: "Sick Leave • Mar 12", status: "pending", days: "1 day" },
  { id: 3, type: "Expense", employee: "Michael Park", detail: "Travel • $2,450", status: "pending", amount: "$2,450" },
  { id: 4, type: "Leave Request", employee: "Emma Davis", detail: "Personal Leave • Mar 20-21", status: "pending", days: "2 days" },
];

const upcomingEvents = [
  { date: "Mar 15", time: "10:00 AM", title: "Quarterly Review Meeting", attendees: 12 },
  { date: "Mar 18", time: "2:30 PM", title: "New Hire Onboarding", attendees: 5 },
  { date: "Mar 22", time: "9:00 AM", title: "Department Sync", attendees: 8 },
];

const recentActivity = [
  { action: "approved", employee: "Lisa Anderson", detail: "Expense report - $890", time: "2h ago" },
  { action: "added", employee: "David Kim", detail: "New employee record", time: "5h ago" },
  { action: "updated", employee: "Rachel Torres", detail: "Performance review", time: "1d ago" },
];

export function EmployeeDashboard() {
  const { toast } = useToast();
  const managerName = "Director Thompson";

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-10">
      {/* Elegant Header with Serif Typography */}
      <div className="mb-12 pb-8 border-b border-primary/20">
        <h1 className="text-6xl font-serif font-semibold text-foreground mb-3 tracking-tight">
          Welcome back, {managerName}
        </h1>
        <p className="text-muted-foreground text-base font-light tracking-wide">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Zone 1: Pending Approvals (Task-Oriented - Spool & Garrett) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h2 className="text-2xl font-semibold text-foreground tracking-tight">Pending Approvals</h2>
          </div>
          <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-[0_0_16px_rgba(212,175,55,0.3)]">
            {pendingApprovals.length} Requires Action
          </Badge>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {pendingApprovals.map((item) => (
            <Card 
              key={item.id} 
              className={`col-span-12 md:col-span-6 lg:col-span-3 card-classic cursor-pointer group ${
                item.status === 'urgent' ? 'card-classic-gold' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{item.type}</p>
                    <h3 className="text-base font-semibold text-foreground mb-1">{item.employee}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1 btn-classic text-xs py-2">
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 btn-classic-secondary text-xs py-2">
                    Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="divider-gold mb-8"></div>

      {/* Zone 2: Key Headcount Metrics (Von Restorff Effect - Yablonski) */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-6">Key Headcount Metrics</h2>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Primary Focus: New Applicants - Von Restorff Effect */}
          <Card className="col-span-12 md:col-span-4 card-classic-gold group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <UserPlus className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <Badge className="bg-primary/20 text-primary border-primary/40 border">Active</Badge>
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">New Applicants</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-6xl font-bold text-primary tracking-tight">47</p>
                <span className="text-sm text-muted-foreground">this week</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> +23% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-12 md:col-span-4 card-classic group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <Users className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Total Employees</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-5xl font-bold text-foreground tracking-tight">1,247</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">+12 hired this month</p>
            </CardContent>
          </Card>

          <Card className="col-span-12 md:col-span-4 card-classic group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <CheckCircle2 className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Active Staff</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-5xl font-bold text-foreground tracking-tight">1,224</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">23 currently on leave</p>
            </CardContent>
          </Card>

          <Card className="col-span-12 md:col-span-6 card-classic group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <Clock className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Average Hours/Week</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-5xl font-bold text-foreground tracking-tight">42.5</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">-2.3% from last week</p>
            </CardContent>
          </Card>

          <Card className="col-span-12 md:col-span-6 card-classic group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <TrendingUp className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Performance Rating</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-5xl font-bold text-foreground tracking-tight">94.2<span className="text-2xl">%</span></p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">+3.1% improvement this quarter</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="divider-gold mb-8"></div>

      {/* Zone 3: Upcoming Team Events (Law of Proximity - Yablonski) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h2 className="text-2xl font-semibold text-foreground tracking-tight">Upcoming Team Events</h2>
          </div>
          <Button variant="outline" className="btn-classic-outline text-sm">
            View Calendar
          </Button>
        </div>

        <Card className="card-classic">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {upcomingEvents.map((event, idx) => (
                <div 
                  key={idx} 
                  className="p-6 hover:bg-surface-elevated/50 transition-all duration-300 cursor-pointer group flex items-center gap-6"
                >
                  <div className="flex flex-col items-center justify-center w-20 h-20 border border-primary/30 rounded-md bg-surface group-hover:border-primary transition-all">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{event.date.split(' ')[0]}</p>
                    <p className="text-2xl font-bold text-primary">{event.date.split(' ')[1]}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-base mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.time} • {event.attendees} attendees</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="divider-gold mb-8"></div>

      {/* Recent Activity - Emotional Resonance (Cespedes & Buxton) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <h2 className="text-2xl font-semibold text-foreground tracking-tight">Recent Activity</h2>
          </div>
        </div>

        <Card className="card-classic">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="p-5 hover:bg-surface-elevated/50 transition-all duration-300 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.5)]"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-primary capitalize">{activity.action}</span> {activity.employee}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.detail}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions - Frictionless Design (Spool & Garrett) */}
      <div className="grid grid-cols-12 gap-4">
        <Button className="col-span-12 md:col-span-4 btn-classic h-14 text-base">
          <FileText className="mr-2 h-5 w-5" strokeWidth={1.5} />
          Generate Report
        </Button>
        <Button className="col-span-12 md:col-span-4 btn-classic-outline h-14 text-base">
          <Users className="mr-2 h-5 w-5" strokeWidth={1.5} />
          Manage Teams
        </Button>
        <Button className="col-span-12 md:col-span-4 btn-classic-secondary h-14 text-base">
          <Calendar className="mr-2 h-5 w-5" strokeWidth={1.5} />
          Schedule Meeting
        </Button>
      </div>
    </div>
  );
}
