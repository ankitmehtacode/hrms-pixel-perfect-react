import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Clock, Users, TrendingUp, Calendar, LogIn, LogOut, Plane } from "lucide-react";
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
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const { toast } = useToast();

  const handleClockIn = () => {
    const now = new Date();
    setIsClockedIn(true);
    setClockInTime(now);
    toast({
      title: "Clocked In Successfully",
      description: `Time: ${now.toLocaleTimeString()}`,
    });
  };

  const handleClockOut = () => {
    const now = new Date();
    setIsClockedIn(false);
    toast({
      title: "Clocked Out Successfully",
      description: `Time: ${now.toLocaleTimeString()}`,
    });
    setClockInTime(null);
  };

  const handleLeaveRequest = () => {
    toast({
      title: "Leave Request Initiated",
      description: "Please fill out the leave request form",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Employees</h1>
          <p className="text-muted-foreground mt-1">Manage your workforce efficiently</p>
        </div>
        <Button className="btn-tesla">
          Add Employee
        </Button>
      </div>

      {/* Clock In/Out Section */}
      <Card className="card-gradient overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Time Tracking</h2>
                {isClockedIn && clockInTime ? (
                  <p className="text-muted-foreground">
                    Clocked in at <span className="font-semibold text-primary">{clockInTime.toLocaleTimeString()}</span>
                  </p>
                ) : (
                  <p className="text-muted-foreground">Ready to start your day?</p>
                )}
              </div>
            </div>
            
            <div className="flex gap-4">
              {!isClockedIn ? (
                <Button
                  onClick={handleClockIn}
                  size="lg"
                  className="btn-tesla group relative overflow-hidden px-8 py-6 text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
                  <LogIn className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Clock In</span>
                </Button>
              ) : (
                <Button
                  onClick={handleClockOut}
                  size="lg"
                  className="bg-gradient-to-r from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70 text-white shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-glow px-8 py-6 text-lg"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Clock Out
                </Button>
              )}
              
              <Button
                onClick={handleLeaveRequest}
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-glow px-8 py-6 text-lg"
              >
                <Plane className="mr-2 h-5 w-5" />
                Request Leave
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-gradient card-hover">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold text-foreground">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient card-hover">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-secondary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Avg Hours/Week</p>
                <p className="text-2xl font-bold text-foreground">42.5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient card-hover">
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-accent" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Performance</p>
                <p className="text-2xl font-bold text-foreground">94.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient card-hover">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">On Leave</p>
                <p className="text-2xl font-bold text-foreground">23</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time & Attendance Section */}
      <Card className="card-gradient">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl text-foreground">Time & Attendance Log & Review Your Hours</CardTitle>
            <Select defaultValue="All Departments">
              <SelectTrigger className="w-48 bg-surface-elevated border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-surface-elevated border-border">
                <SelectItem value="All Departments">All Departments</SelectItem>
                <SelectItem value="AI Engineering">AI Engineering</SelectItem>
                <SelectItem value="Robotics">Robotics</SelectItem>
                <SelectItem value="Management">Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-surface-elevated">
                  <TableHead className="text-foreground font-semibold">Employee</TableHead>
                  <TableHead className="text-foreground font-semibold">Job Title</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Mon</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Wed</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Thu</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Fri</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Sun</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeData.map((employee, index) => (
                  <TableRow key={index} className="hover:bg-surface-elevated/50 transition-colors">
                    <TableCell className="font-medium text-foreground">{employee.name}</TableCell>
                    <TableCell className="text-muted-foreground">{employee.jobTitle}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-foreground">{employee.hours.mon || '-'}</TableCell>
                    <TableCell className="text-center text-foreground">{employee.hours.wed || '-'}</TableCell>
                    <TableCell className="text-center text-foreground">{employee.hours.thu || '-'}</TableCell>
                    <TableCell className="text-center text-foreground">{employee.hours.fri || '-'}</TableCell>
                    <TableCell className="text-center text-foreground">{employee.hours.sun || '-'}</TableCell>
                    <TableCell className="text-center font-medium text-primary">
                      {Object.values(employee.hours).reduce((sum, hours) => sum + hours, 0)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline" className="border-border hover:bg-surface-elevated">
              Save Draft
            </Button>
            <Button className="btn-tesla">
              Submit for Approval
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-surface-elevated">
                  <TableHead className="text-foreground font-semibold">Employee</TableHead>
                  <TableHead className="text-foreground font-semibold">Score</TableHead>
                  <TableHead className="text-foreground font-semibold">Rating</TableHead>
                  <TableHead className="text-foreground font-semibold">Projects</TableHead>
                  <TableHead className="text-foreground font-semibold">Completion</TableHead>
                  <TableHead className="text-foreground font-semibold">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceData.map((employee, index) => (
                  <TableRow key={index} className="hover:bg-surface-elevated/50 transition-colors">
                    <TableCell className="font-medium text-foreground">{employee.name}</TableCell>
                    <TableCell className="text-foreground">{employee.score}</TableCell>
                    <TableCell className="text-foreground">{employee.rating}</TableCell>
                    <TableCell className="text-foreground">{employee.projects}</TableCell>
                    <TableCell className="text-foreground">{employee.completion}</TableCell>
                    <TableCell className="font-medium text-primary">{employee.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}