import { HRMSLayout } from "@/components/HRMSLayout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Download,
  Send,
  FileText,
  CheckCircle,
  Clock,
  Search,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const payrollData = [
  {
    id: "PAY001",
    employeeName: "Jols Thids",
    employeeId: "EMP001",
    basicSalary: 8500,
    allowances: 1500,
    deductions: 850,
    netPay: 9150,
    status: "Processed",
    payDate: "Oct 31, 2025"
  },
  {
    id: "PAY002",
    employeeName: "Ava Chen",
    employeeId: "EMP002",
    basicSalary: 12000,
    allowances: 2000,
    deductions: 1200,
    netPay: 12800,
    status: "Processed",
    payDate: "Oct 31, 2025"
  },
  {
    id: "PAY003",
    employeeName: "Ben Carter",
    employeeId: "EMP003",
    basicSalary: 15000,
    allowances: 2500,
    deductions: 1500,
    netPay: 16000,
    status: "Pending",
    payDate: "Oct 31, 2025"
  },
  {
    id: "PAY004",
    employeeName: "Dhlod Davis",
    employeeId: "EMP004",
    basicSalary: 9500,
    allowances: 1800,
    deductions: 950,
    netPay: 10350,
    status: "Pending",
    payDate: "Oct 31, 2025"
  },
];

const Payroll = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  const handleProcessPayroll = () => {
    toast({
      title: "Payroll Processing Started",
      description: "Processing payroll for all pending employees...",
    });
  };

  const handleSendPayslips = () => {
    toast({
      title: "Payslips Sent",
      description: "Email notifications sent to all employees",
    });
  };

  const totalPayroll = payrollData.reduce((sum, pay) => sum + pay.netPay, 0);
  const processedCount = payrollData.filter(p => p.status === "Processed").length;
  const pendingCount = payrollData.filter(p => p.status === "Pending").length;

  return (
    <HRMSLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Payroll Management</h1>
            <p className="text-muted-foreground mt-2 text-base">
              Process and manage employee compensation
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="border-border hover:bg-surface-elevated transition-all duration-200"
              onClick={handleSendPayslips}
            >
              <Send className="mr-2 h-4 w-4" />
              Send Payslips
            </Button>
            <Button 
              className="btn-tesla shadow-glow"
              onClick={handleProcessPayroll}
            >
              <FileText className="mr-2 h-4 w-4" />
              Process Payroll
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Payroll</p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    ${totalPayroll.toLocaleString()}
                  </p>
                  <p className="text-xs text-primary mt-1">This month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Processed</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{processedCount}</p>
                  <p className="text-xs text-primary mt-1">Employees paid</p>
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
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{pendingCount}</p>
                  <p className="text-xs text-accent mt-1">Awaiting processing</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Salary</p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    ${Math.round(totalPayroll / payrollData.length).toLocaleString()}
                  </p>
                  <p className="text-xs text-secondary mt-1">Per employee</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="h-auto py-6 flex-col gap-2 border-border hover:bg-surface-elevated transition-all duration-200"
              >
                <Download className="h-6 w-6 text-primary" />
                <span className="font-medium">Export Reports</span>
                <span className="text-xs text-muted-foreground">Download payroll data</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex-col gap-2 border-border hover:bg-surface-elevated transition-all duration-200"
              >
                <Calendar className="h-6 w-6 text-secondary" />
                <span className="font-medium">Schedule Payment</span>
                <span className="text-xs text-muted-foreground">Set payment dates</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto py-6 flex-col gap-2 border-border hover:bg-surface-elevated transition-all duration-200"
              >
                <FileText className="h-6 w-6 text-accent" />
                <span className="font-medium">Generate Payslips</span>
                <span className="text-xs text-muted-foreground">Create PDF payslips</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by employee name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-surface-elevated border-border focus:border-primary transition-all duration-200"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48 bg-surface-elevated border-border">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-surface-elevated border-border">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="processed">Processed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Payroll Table */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Payroll Records - October 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-surface-elevated">
                    <TableHead className="text-foreground font-semibold">Employee</TableHead>
                    <TableHead className="text-foreground font-semibold text-right">Basic Salary</TableHead>
                    <TableHead className="text-foreground font-semibold text-right">Allowances</TableHead>
                    <TableHead className="text-foreground font-semibold text-right">Deductions</TableHead>
                    <TableHead className="text-foreground font-semibold text-right">Net Pay</TableHead>
                    <TableHead className="text-foreground font-semibold">Pay Date</TableHead>
                    <TableHead className="text-foreground font-semibold">Status</TableHead>
                    <TableHead className="text-foreground font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollData.map((payroll) => (
                    <TableRow key={payroll.id} className="hover:bg-surface-elevated/50 transition-colors">
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">{payroll.employeeName}</p>
                          <p className="text-sm text-muted-foreground">{payroll.employeeId}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right text-foreground">
                        ${payroll.basicSalary.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-primary">
                        +${payroll.allowances.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-destructive">
                        -${payroll.deductions.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-semibold text-foreground text-lg">
                        ${payroll.netPay.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-foreground">{payroll.payDate}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="secondary" 
                          className={
                            payroll.status === "Processed" 
                              ? "bg-primary/20 text-primary border-primary/30"
                              : "bg-accent/20 text-accent border-accent/30"
                          }
                        >
                          {payroll.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" className="hover:bg-surface-elevated">
                            View
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:bg-surface-elevated">
                            Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">4</span> payroll records
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Total disbursement: <span className="font-semibold text-primary">${totalPayroll.toLocaleString()}</span>
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-border hover:bg-surface-elevated transition-all duration-200">
                  Export to CSV
                </Button>
                <Button className="btn-tesla shadow-glow">
                  Approve All Pending
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </HRMSLayout>
  );
};

export default Payroll;
