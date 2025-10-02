import { HRMSLayout } from "@/components/HRMSLayout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  UserPlus, 
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar
} from "lucide-react";

const employeesData = [
  {
    id: "EMP001",
    name: "Jols Thids",
    email: "jols.thids@sunrobotics.ai",
    phone: "+1 234 567 8901",
    department: "AI Engineering",
    position: "Senior Engineer",
    location: "San Francisco, CA",
    status: "Active",
    joinDate: "Jan 15, 2023",
    avatar: "JT"
  },
  {
    id: "EMP002",
    name: "Ava Chen",
    email: "ava.chen@sunrobotics.ai",
    phone: "+1 234 567 8902",
    department: "Management",
    position: "Reporting Manager",
    location: "New York, NY",
    status: "Active",
    joinDate: "Mar 22, 2022",
    avatar: "AC"
  },
  {
    id: "EMP003",
    name: "Ben Carter",
    email: "ben.carter@sunrobotics.ai",
    phone: "+1 234 567 8903",
    department: "AI Engineering",
    position: "Lead AI Engineer",
    location: "Austin, TX",
    status: "Active",
    joinDate: "Jul 08, 2021",
    avatar: "BC"
  },
  {
    id: "EMP004",
    name: "Dhlod Davis",
    email: "dhlod.davis@sunrobotics.ai",
    phone: "+1 234 567 8904",
    department: "Robotics",
    position: "Robotics Specialist",
    location: "Seattle, WA",
    status: "Active",
    joinDate: "Nov 30, 2022",
    avatar: "DD"
  },
  {
    id: "EMP005",
    name: "Emily White",
    email: "emily.white@sunrobotics.ai",
    phone: "+1 234 567 8905",
    department: "HR",
    position: "HR Manager",
    location: "Boston, MA",
    status: "Active",
    joinDate: "Feb 14, 2023",
    avatar: "EW"
  },
];

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  return (
    <HRMSLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Employee Directory</h1>
            <p className="text-muted-foreground mt-2 text-base">
              Manage and view all employee information
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border hover:bg-surface-elevated transition-all duration-200">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="btn-tesla shadow-glow">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                  <p className="text-3xl font-bold text-foreground mt-2">1,247</p>
                  <p className="text-xs text-primary mt-1">+12% from last month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Departments</p>
                  <p className="text-3xl font-bold text-foreground mt-2">8</p>
                  <p className="text-xs text-secondary mt-1">Across 5 locations</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">New This Month</p>
                  <p className="text-3xl font-bold text-foreground mt-2">24</p>
                  <p className="text-xs text-accent mt-1">Recent hires</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Tenure</p>
                  <p className="text-3xl font-bold text-foreground mt-2">2.4y</p>
                  <p className="text-xs text-primary mt-1">Employee retention</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees by name, email, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-surface-elevated border-border focus:border-primary transition-all duration-200"
                />
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-full md:w-48 bg-surface-elevated border-border">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent className="bg-surface-elevated border-border">
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="ai">AI Engineering</SelectItem>
                  <SelectItem value="robotics">Robotics</SelectItem>
                  <SelectItem value="management">Management</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Employees List */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">All Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-surface-elevated">
                    <TableHead className="text-foreground font-semibold">Employee</TableHead>
                    <TableHead className="text-foreground font-semibold">Contact</TableHead>
                    <TableHead className="text-foreground font-semibold">Department</TableHead>
                    <TableHead className="text-foreground font-semibold">Location</TableHead>
                    <TableHead className="text-foreground font-semibold">Join Date</TableHead>
                    <TableHead className="text-foreground font-semibold">Status</TableHead>
                    <TableHead className="text-foreground font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeesData.map((employee) => (
                    <TableRow key={employee.id} className="hover:bg-surface-elevated/50 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                            {employee.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{employee.name}</p>
                            <p className="text-sm text-muted-foreground">{employee.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {employee.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {employee.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">{employee.department}</p>
                          <p className="text-sm text-muted-foreground">{employee.position}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {employee.location}
                        </div>
                      </TableCell>
                      <TableCell className="text-foreground">{employee.joinDate}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" className="hover:bg-surface-elevated">
                            View
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:bg-surface-elevated">
                            Edit
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">1-5</span> of <span className="font-medium text-foreground">1,247</span> employees
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-border hover:bg-surface-elevated">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary/20 border-primary/30 text-primary">
                  1
                </Button>
                <Button variant="outline" size="sm" className="border-border hover:bg-surface-elevated">
                  2
                </Button>
                <Button variant="outline" size="sm" className="border-border hover:bg-surface-elevated">
                  3
                </Button>
                <Button variant="outline" size="sm" className="border-border hover:bg-surface-elevated">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </HRMSLayout>
  );
};

export default Employees;
