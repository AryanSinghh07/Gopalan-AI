import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Heart,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Chrome,
  Facebook,
  Globe,
  Users,
  Star,
  Sparkles
} from 'lucide-react';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

const inputBase =
  "w-full min-h-12 rounded-xl border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors";

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Animal Health Monitoring",
      description: "Track your animals' health with AI-powered insights"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Emergency Alerts",
      description: "Get instant notifications for health emergencies"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Community",
      description: "Connect with veterinarians and fellow farmers"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Features",
      description: "Access advanced analytics and personalized recommendations"
    }
  ];

  const stats = [
    { end: 100, suffix: "K+", decimals: 0, label: "Active Users" },
    { end: 500, suffix: "K+", decimals: 0, label: "Animals Monitored" },
    { end: 99.2, suffix: "%", decimals: 1, label: "Uptime" },
    { end: 24, suffix: "/7", decimals: 0, label: "Support" }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear errors when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      setTimeout(() => {
        // Mock successful login
        if (formData.email === 'demo@example.com' && formData.password === 'password') {
          setLoginSuccess(true);
          setIsLoading(false);
        } else {
          setErrors({ general: "Invalid email or password. Try demo@example.com / password" });
          setIsLoading(false);
        }
      }, 2000);
    } catch (error) {
      setErrors({ general: "An error occurred. Please try again." });
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (_provider: string) => {
    // Implement social login logic here
  };

  if (loginSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-card rounded-2xl border border-border shadow-elegant p-12 text-center animate-fade-up">
          <div className="bg-primary/10 p-6 rounded-full inline-block mb-8 animate-scale-in">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">Welcome Back!</h2>
          <p className="text-muted-foreground mb-8">You have successfully logged into Gopalan AI.</p>
          <Button className="w-full min-h-12 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground py-3 rounded-xl shadow-elegant transition-all duration-300 ease-smooth">
            Go to Dashboard
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Left Side - Login Form */}
            <div className="order-2 lg:order-1">
              <ScrollReveal variant="slide-left">
                <div className="bg-card rounded-2xl border border-border shadow-elegant p-8 md:p-10 max-w-md mx-auto lg:mx-0">
                  <div className="text-center mb-10">
                    <div className="bg-gradient-to-r from-primary to-primary-glow p-4 rounded-2xl inline-block mb-6 shadow-glow animate-float">
                      <User className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h1 className="font-playfair text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to your Gopalan AI account</p>
                  </div>

                  {/* Demo Credentials Notice */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-primary font-medium">Demo Credentials:</p>
                        <p className="text-foreground/80">Email: demo@example.com</p>
                        <p className="text-foreground/80">Password: password</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="h-5 w-5 text-muted-foreground absolute left-4 top-3.5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`${inputBase} pl-12 pr-4 py-3 ${
                            errors.email ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="Enter your email address"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="h-5 w-5 text-muted-foreground absolute left-4 top-3.5" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`${inputBase} pl-12 pr-12 py-3 ${
                            errors.password ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-3.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                          className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-[hsl(var(--primary))]"
                        />
                        <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-primary hover:text-primary-glow font-medium transition-colors">
                        Forgot password?
                      </a>
                    </div>

                    {/* General Error */}
                    {errors.general && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 animate-wiggle">
                        <p className="text-red-600 text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          {errors.general}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full min-h-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ease-smooth transform hover:scale-[1.02] shadow-card hover:shadow-elegant ${
                        isLoading
                          ? 'bg-muted-foreground/40 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3 inline-block"></div>
                          Signing In...
                        </>
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="h-5 w-5 ml-2 inline-block" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Divider */}
                  <div className="flex items-center my-8">
                    <div className="flex-1 border-t border-border"></div>
                    <span className="px-4 text-sm text-muted-foreground bg-card">Or continue with</span>
                    <div className="flex-1 border-t border-border"></div>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                      onClick={() => handleSocialLogin('google')}
                      className="flex items-center justify-center min-h-12 px-4 py-3 border border-border rounded-xl hover:bg-muted/60 transition-colors group"
                    >
                      <Chrome className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="ml-2 text-sm font-medium text-foreground">Google</span>
                    </button>
                    <button
                      onClick={() => handleSocialLogin('facebook')}
                      className="flex items-center justify-center min-h-12 px-4 py-3 border border-border rounded-xl hover:bg-muted/60 transition-colors group"
                    >
                      <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="ml-2 text-sm font-medium text-foreground">Facebook</span>
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <p className="text-muted-foreground">
                      Don't have an account?{' '}
                      <a href="/signup" className="text-primary hover:text-primary-glow font-semibold transition-colors">
                        Sign up for free
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side - Benefits & Information */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="mb-12">
                <ScrollReveal>
                  <span className="section-badge mb-6">
                    <Sparkles className="w-4 h-4" />
                    Smart Dairy Farming
                  </span>
                  <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Revolutionize Your
                    <span className="gradient-text"> Farm Management</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    Join thousands of farmers who trust Gopalan AI to monitor their animals' health, prevent diseases, and optimize their farm operations with intelligent insights.
                  </p>
                </ScrollReveal>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {stats.map((stat, index) => (
                    <ScrollReveal key={index} variant="zoom" delay={index * 100}>
                      <div className="bg-card rounded-2xl border border-border p-6 shadow-card card-lift h-full">
                        <div className="text-3xl font-bold gradient-text mb-1">
                          <AnimatedCounter end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                        </div>
                        <div className="text-muted-foreground text-sm">{stat.label}</div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <ScrollReveal key={index} variant="slide-right" delay={index * 100}>
                      <div className="bg-card rounded-2xl border border-border p-6 shadow-card card-lift group h-full">
                        <div className={`p-3 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300 ease-smooth ${
                          index % 2 === 0
                            ? 'bg-gradient-to-br from-primary to-primary-glow text-primary-foreground'
                            : 'bg-gradient-to-br from-accent to-orange-500 text-accent-foreground'
                        }`}>
                          {benefit.icon}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <ScrollReveal variant="fade-in" delay={200}>
                <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                    <div className="flex items-center">
                      <Shield className="h-8 w-8 text-primary mr-3" />
                      <div className="text-left">
                        <div className="text-lg font-bold text-foreground">Secure & Reliable</div>
                        <div className="text-sm text-muted-foreground">Bank-level security</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-8 w-8 text-accent mr-3" />
                      <div className="text-left">
                        <div className="text-lg font-bold text-foreground">Global Reach</div>
                        <div className="text-sm text-muted-foreground">25+ countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
