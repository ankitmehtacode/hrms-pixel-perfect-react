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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Users, TrendingUp, Calendar, FileText, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const employeeData = [
  {
    name: "Jols Thids",
    jobTitle: "Job Title",
    status: "Active",
    hours: { mon: 8.0, wed: 8.0, thu: 7.5, fri: 5.0, sun: 8.0 }
  },
  {
    name: "Ava Chen",
    jobTitle: "Reporting Manager",
    status: "Active",
    hours: { mon: 8.0, wed: 7.0, thu: 7.5, fri: 7.5, sun: 5.0 }
  },
  {
    name: "Ben Carter",
    jobTitle: "Lead AI Engineer",
    status: "Active",
    hours: { mon: 8.0, wed: 6.0, thu: 0, fri: 0, sun: 0 }
  },
  {
    name: "Dhlod Davis",
    jobTitle: "Robotics Specialist",
    status: "Active",
    hours: { mon: 7.0, wed: 5.0, thu: 5.0, fri: 0, sun: 0 }
  }
];

const performanceData = [
  { name: "Henry King", score: "20.30", rating: "28.30", projects: "200.90", completion: "20/30", total: "261.30" },
  { name: "Emily White", score: "-", rating: "-", projects: "-", completion: "-", total: "-" },
  { name: "Frank Green", score: "-", rating: "-", projects: "-", completion: "-", total: "-" }
];

export function EmployeeDashboard() {
  const { toast } = useToast();
  const managerName = "Alex Thompson";

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Welcome Header - Swiss Grid */}
      <div className="mb-12">
        <h1 className="text-5xl font-semibold text-foreground mb-2 tracking-tight">
          Welcome back, {managerName}
        </h1>
        <p className="text-muted-foreground text-base font-normal mt-3">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Key Metrics Grid - Swiss 12 column layout */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        <Card className="col-span-12 md:col-span-3 card-swiss border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">Total Employees</p>
                <p className="text-4xl font-semibold text-foreground tracking-tight">1,247</p>
                <p className="text-xs text-muted-foreground mt-2">+12 this month</p>
              </div>
              <Users className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-3 card-swiss">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">Avg Hours/Week</p>
                <p className="text-4xl font-semibold text-foreground tracking-tight">42.5</p>
                <p className="text-xs text-muted-foreground mt-2">-2.3% from last week</p>
              </div>
              <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-3 card-swiss">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">Performance</p>
                <p className="text-4xl font-semibold text-foreground tracking-tight">94.2%</p>
                <p className="text-xs text-muted-foreground mt-2">+3.1% improvement</p>
              </div>
              <TrendingUp className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-3 card-swiss">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">On Leave</p>
                <p className="text-4xl font-semibold text-foreground tracking-tight">23</p>
                <p className="text-xs text-muted-foreground mt-2">5 pending approval</p>
              </div>
              <Calendar className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Requests Summary */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        <Card className="col-span-12 md:col-span-6 card-swiss">
          <CardHeader className="border-b border-border pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold tracking-tight">Pending Leave Requests</CardTitle>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-medium">5 Pending</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { name: "Sarah Mitchell", type: "Annual Leave", dates: "Mar 15-19, 2025", days: 5 },
                { name: "James Chen", type: "Sick Leave", dates: "Mar 12, 2025", days: 1 },
                { name: "Emma Davis", type: "Personal Leave", dates: "Mar 20-21, 2025", days: 2 },
              ].map((request, idx) => (
                <div key={idx} className="p-4 hover:bg-muted/30 transition-colors cursor-pointer flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground text-sm">{request.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{request.type} • {request.dates}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground">{request.days} days</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <Button variant="outline" className="w-full btn-swiss-outline text-sm font-medium">
                View All Requests
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-6 card-swiss">
          <CardHeader className="border-b border-border pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold tracking-tight">Pending Expense Reports</CardTitle>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-medium">3 Pending</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { name: "Michael Park", category: "Travel", amount: "$2,450", date: "Mar 10, 2025" },
                { name: "Lisa Anderson", category: "Equipment", amount: "$890", date: "Mar 11, 2025" },
                { name: "David Kim", category: "Training", amount: "$1,200", date: "Mar 12, 2025" },
              ].map((expense, idx) => (
                <div key={idx} className="p-4 hover:bg-muted/30 transition-colors cursor-pointer flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground text-sm">{expense.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{expense.category} • {expense.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">{expense.amount}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <Button variant="outline" className="w-full btn-swiss-outline text-sm font-medium">
                View All Expenses
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>


      {/* Time & Attendance Table - Clean minimalist layout */}
      <Card className="card-swiss mb-12">
        <CardHeader className="border-b border-border pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold tracking-tight">Time & Attendance</CardTitle>
            <Select defaultValue="All Departments">
              <SelectTrigger className="w-48 border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Departments">All Departments</SelectItem>
                <SelectItem value="AI Engineering">AI Engineering</SelectItem>
                <SelectItem value="Robotics">Robotics</SelectItem>
                <SelectItem value="Management">Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide">Employee</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide">Job Title</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide">Status</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide text-right">Mon</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide text-right">Wed</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide text-right">Thu</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide text-right">Fri</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide text-right">Sun</TableHead>
                <TableHead className="text-foreground font-medium text-xs uppercase tracking-wide text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeData.map((employee, index) => (
                <TableRow key={index} className="border-b border-border hover:bg-muted/20 transition-colors">
                  <TableCell className="font-medium text-foreground py-4">{employee.name}</TableCell>
                  <TableCell className="text-muted-foreground">{employee.jobTitle}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-0 font-medium text-xs"
                    >
                      {employee.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-foreground font-mono text-sm">{employee.hours.mon || '—'}</TableCell>
                  <TableCell className="text-right text-foreground font-mono text-sm">{employee.hours.wed || '—'}</TableCell>
                  <TableCell className="text-right text-foreground font-mono text-sm">{employee.hours.thu || '—'}</TableCell>
                  <TableCell className="text-right text-foreground font-mono text-sm">{employee.hours.fri || '—'}</TableCell>
                  <TableCell className="text-right text-foreground font-mono text-sm">{employee.hours.sun || '—'}</TableCell>
                  <TableCell className="text-right font-semibold text-primary font-mono text-sm">
                    {Object.values(employee.hours).reduce((sum, hours) => sum + hours, 0)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex justify-end items-center p-4 border-t border-border bg-muted/20">
            <div className="flex gap-3">
              <Button variant="outline" className="btn-swiss-outline text-sm">
                Export Report
              </Button>
              <Button className="btn-swiss text-sm">
                Submit for Approval
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Actions - Bottom aligned */}
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 md:col-span-4 card-swiss border-l-4 border-l-primary">
          <CardContent className="p-6">
            <FileText className="h-6 w-6 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-foreground text-base mb-2">Generate Report</h3>
            <p className="text-sm text-muted-foreground mb-4">Create detailed workforce analytics</p>
            <Button className="btn-swiss-outline w-full text-sm">
              Generate
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-4 card-swiss">
          <CardContent className="p-6">
            <Users className="h-6 w-6 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-foreground text-base mb-2">Manage Teams</h3>
            <p className="text-sm text-muted-foreground mb-4">Organize departments and roles</p>
            <Button className="btn-swiss-outline w-full text-sm">
              Manage
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-4 card-swiss">
          <CardContent className="p-6">
            <Calendar className="h-6 w-6 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-foreground text-base mb-2">Schedule Review</h3>
            <p className="text-sm text-muted-foreground mb-4">Plan upcoming team meetings</p>
            <Button className="btn-swiss-outline w-full text-sm">
              Schedule
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}