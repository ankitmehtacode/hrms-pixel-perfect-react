import { HRMSLayout } from "@/components/HRMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  Award,
  Star,
  Download,
  Users,
  BarChart3
} from "lucide-react";

const performanceMetrics = [
  {
    employee: "Jols Thids",
    role: "Senior Engineer",
    overall: 92,
    quality: 95,
    productivity: 90,
    teamwork: 88,
    innovation: 94,
    rating: "Excellent"
  },
  {
    employee: "Ava Chen",
    role: "Reporting Manager",
    overall: 96,
    quality: 98,
    productivity: 95,
    teamwork: 97,
    innovation: 92,
    rating: "Outstanding"
  },
  {
    employee: "Ben Carter",
    role: "Lead AI Engineer",
    overall: 90,
    quality: 92,
    productivity: 88,
    teamwork: 89,
    innovation: 91,
    rating: "Excellent"
  },
];

const Performance = () => {
  return (
    <HRMSLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Performance Analytics</h1>
            <p className="text-muted-foreground mt-2 text-base">
              Monitor and evaluate team performance metrics
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border hover:bg-surface-elevated transition-all duration-200">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="btn-tesla shadow-glow">
              <BarChart3 className="mr-2 h-4 w-4" />
              New Review
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Team Average</p>
                  <p className="text-3xl font-bold text-foreground mt-2">93.2%</p>
                  <p className="text-xs text-primary mt-1">+5.2% from Q2</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Top Performers</p>
                  <p className="text-3xl font-bold text-foreground mt-2">24</p>
                  <p className="text-xs text-secondary mt-1">Excellence rating</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Goals Achieved</p>
                  <p className="text-3xl font-bold text-foreground mt-2">87%</p>
                  <p className="text-xs text-accent mt-1">Quarterly targets</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reviews Done</p>
                  <p className="text-3xl font-bold text-foreground mt-2">142</p>
                  <p className="text-xs text-primary mt-1">This quarter</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {performanceMetrics.map((employee, index) => (
            <Card key={index} className="card-gradient card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-foreground">{employee.employee}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{employee.role}</p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={
                      employee.rating === "Outstanding"
                        ? "bg-primary/20 text-primary border-primary/30"
                        : "bg-secondary/20 text-secondary border-secondary/30"
                    }
                  >
                    {employee.rating}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Overall Score</span>
                  <span className="text-2xl font-bold text-primary">{employee.overall}%</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Quality</span>
                      <span className="text-foreground font-medium">{employee.quality}%</span>
                    </div>
                    <Progress value={employee.quality} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Productivity</span>
                      <span className="text-foreground font-medium">{employee.productivity}%</span>
                    </div>
                    <Progress value={employee.productivity} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Teamwork</span>
                      <span className="text-foreground font-medium">{employee.teamwork}%</span>
                    </div>
                    <Progress value={employee.teamwork} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Innovation</span>
                      <span className="text-foreground font-medium">{employee.innovation}%</span>
                    </div>
                    <Progress value={employee.innovation} className="h-2" />
                  </div>
                </div>

                <Button variant="outline" className="w-full border-border hover:bg-surface-elevated transition-all duration-200">
                  View Full Review
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Department Performance */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Department Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { dept: "AI Engineering", score: 94, trend: "+6.2%", members: 45 },
                { dept: "Robotics", score: 91, trend: "+4.8%", members: 38 },
                { dept: "Management", score: 96, trend: "+2.1%", members: 12 },
                { dept: "Human Resources", score: 89, trend: "+3.5%", members: 8 },
              ].map((dept, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-surface-elevated border border-border hover:bg-surface-elevated/80 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{dept.dept}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{dept.members} team members</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">{dept.score}%</p>
                      <p className="text-xs text-primary mt-1">{dept.trend}</p>
                    </div>
                  </div>
                  <Progress value={dept.score} className="h-3" />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="text-sm text-muted-foreground">High Performance</span>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:bg-surface">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </HRMSLayout>
  );
};

export default Performance;
