import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export function PayrollLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md card-gradient card-hover">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/20">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">Payroll & Benefits</CardTitle>
          <p className="text-muted-foreground">Secure access to payroll system</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email/Username Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Username or Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email or username"
                  className="pl-10 bg-surface-elevated border-border input-glow"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10 bg-surface-elevated border-border input-glow"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full btn-tesla text-base font-semibold py-3">
              LOG IN
            </Button>
          </form>

          {/* Additional Links */}
          <div className="text-center space-y-3">
            <Link 
              to="/forgot-password"
              className="text-sm text-primary hover:text-primary/80 transition-colors underline"
            >
              Forgot Password?
            </Link>
            
            <div className="text-sm text-muted-foreground">
              Need access?{" "}
              <Link 
                to="/request-access"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                Request Access
              </Link>
            </div>
          </div>

          {/* Employee Details Section */}
          <div className="pt-6 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">Employee Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Start Date:</span>
                <span className="text-foreground font-medium">Jan 15, 2020</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Employee ID:</span>
                <span className="text-foreground font-medium">SR-007AI</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}