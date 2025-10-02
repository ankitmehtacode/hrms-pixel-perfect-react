import { HRMSLayout } from "@/components/HRMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download,
  Calendar,
  FileText,
  Users,
  DollarSign
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Reports = () => {
  return (
    <HRMSLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-2 text-base">
              Comprehensive insights and data visualization
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border hover:bg-surface-elevated transition-all duration-200">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
            <Button className="btn-tesla shadow-glow">
              <Download className="mr-2 h-4 w-4" />
              Export All
            </Button>
          </div>
        </div>

        {/* Report Type Selection */}
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select defaultValue="monthly">
                <SelectTrigger className="bg-surface-elevated border-border">
                  <SelectValue placeholder="Report Period" />
                </SelectTrigger>
                <SelectContent className="bg-surface-elevated border-border">
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="bg-surface-elevated border-border">
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

              <Select defaultValue="overview">
                <SelectTrigger className="bg-surface-elevated border-border">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent className="bg-surface-elevated border-border">
                  <SelectItem value="overview">Overview</SelectItem>
                  <SelectItem value="attendance">Attendance</SelectItem>
                  <SelectItem value="payroll">Payroll</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Report Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-gradient card-hover cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Attendance Report</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Track employee attendance patterns
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full border-border hover:bg-surface-elevated">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Payroll Summary</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Comprehensive payroll breakdown
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full border-border hover:bg-surface-elevated">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Performance Analytics</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Employee performance metrics
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full border-border hover:bg-surface-elevated">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Headcount Report</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Employee distribution analysis
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full border-border hover:bg-surface-elevated">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Monthly Attendance - September 2025", date: "Sep 30, 2025", type: "Attendance", size: "2.4 MB" },
                { name: "Q3 Payroll Summary 2025", date: "Sep 28, 2025", type: "Payroll", size: "5.1 MB" },
                { name: "Performance Review - Q3 2025", date: "Sep 25, 2025", type: "Performance", size: "3.2 MB" },
                { name: "Department Headcount August 2025", date: "Aug 31, 2025", type: "Headcount", size: "1.8 MB" },
              ].map((report, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-surface-elevated hover:bg-surface-elevated/80 transition-all duration-200 border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{report.name}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-muted-foreground">{report.date}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{report.type}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="hover:bg-surface">
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-surface">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">Reports Generated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-foreground">127</p>
              <p className="text-sm text-primary mt-2">+18% from last month</p>
            </CardContent>
          </Card>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">Total Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-foreground">892</p>
              <p className="text-sm text-secondary mt-2">Across all departments</p>
            </CardContent>
          </Card>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-foreground">15</p>
              <p className="text-sm text-accent mt-2">Automated monthly reports</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </HRMSLayout>
  );
};

export default Reports;
