import { HRMSLayout } from "@/components/HRMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
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
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Download,
  Filter,
  Calendar as CalendarIcon,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

const attendanceData = [
  {
    date: "Oct 01",
    status: "Present",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    hours: "9h 00m",
    overtime: "0h"
  },
  {
    date: "Oct 02",
    status: "Present",
    checkIn: "08:45 AM",
    checkOut: "05:50 PM",
    hours: "9h 05m",
    overtime: "0h"
  },
  {
    date: "Oct 03",
    status: "Late",
    checkIn: "10:15 AM",
    checkOut: "06:30 PM",
    hours: "8h 15m",
    overtime: "0h"
  },
  {
    date: "Oct 04",
    status: "Present",
    checkIn: "08:55 AM",
    checkOut: "07:00 PM",
    hours: "10h 05m",
    overtime: "1h"
  },
  {
    date: "Oct 05",
    status: "Absent",
    checkIn: "-",
    checkOut: "-",
    hours: "0h",
    overtime: "0h"
  },
];

const Attendance = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const presentDays = attendanceData.filter(d => d.status === "Present").length;
  const lateDays = attendanceData.filter(d => d.status === "Late").length;
  const absentDays = attendanceData.filter(d => d.status === "Absent").length;
  const totalHours = attendanceData.reduce((sum, d) => {
    const hours = parseFloat(d.hours.replace('h', ''));
    return sum + (isNaN(hours) ? 0 : hours);
  }, 0);

  return (
    <HRMSLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Time & Attendance</h1>
            <p className="text-muted-foreground mt-2 text-base">
              Track and manage employee attendance records
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border hover:bg-surface-elevated transition-all duration-200">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button className="btn-tesla shadow-glow">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Present Days</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{presentDays}</p>
                  <p className="text-xs text-primary mt-1">This month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Late Arrivals</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{lateDays}</p>
                  <p className="text-xs text-accent mt-1">Need attention</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Absent Days</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{absentDays}</p>
                  <p className="text-xs text-destructive mt-1">Unauthorized</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Hours</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{totalHours.toFixed(0)}h</p>
                  <p className="text-xs text-secondary mt-1">Worked this month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Calendar and Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="card-gradient lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Calendar View</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border border-border pointer-events-auto"
              />
            </CardContent>
          </Card>

          <Card className="card-gradient lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-surface-elevated">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Attendance Rate</p>
                      <p className="text-sm text-muted-foreground">Overall performance</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">95.2%</p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-surface-elevated">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Avg. Work Hours</p>
                      <p className="text-sm text-muted-foreground">Per day this month</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-secondary">8.5h</p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-surface-elevated">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Overtime Hours</p>
                      <p className="text-sm text-muted-foreground">Additional work time</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-accent">12h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Records Table */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Recent Attendance Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-surface-elevated">
                    <TableHead className="text-foreground font-semibold">Date</TableHead>
                    <TableHead className="text-foreground font-semibold">Status</TableHead>
                    <TableHead className="text-foreground font-semibold">Check In</TableHead>
                    <TableHead className="text-foreground font-semibold">Check Out</TableHead>
                    <TableHead className="text-foreground font-semibold">Total Hours</TableHead>
                    <TableHead className="text-foreground font-semibold">Overtime</TableHead>
                    <TableHead className="text-foreground font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData.map((record, index) => (
                    <TableRow key={index} className="hover:bg-surface-elevated/50 transition-colors">
                      <TableCell className="font-medium text-foreground">{record.date}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="secondary" 
                          className={
                            record.status === "Present" 
                              ? "bg-primary/20 text-primary border-primary/30"
                              : record.status === "Late"
                              ? "bg-accent/20 text-accent border-accent/30"
                              : "bg-destructive/20 text-destructive border-destructive/30"
                          }
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-foreground">{record.checkIn}</TableCell>
                      <TableCell className="text-foreground">{record.checkOut}</TableCell>
                      <TableCell className="font-medium text-foreground">{record.hours}</TableCell>
                      <TableCell className="text-accent">{record.overtime}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="hover:bg-surface-elevated">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing last 5 attendance records
              </p>
              <Button variant="outline" className="border-border hover:bg-surface-elevated transition-all duration-200">
                View All Records
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </HRMSLayout>
  );
};

export default Attendance;
