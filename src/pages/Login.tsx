import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Github,
  Facebook,
  Apple,
  Smartphone,
  Globe,
  Users,
  Star
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
    { value: "100K+", label: "Active Users" },
    { value: "500K+", label: "Animals Monitored" },
    { value: "99.2%", label: "Uptime" },
    { value: "24/7", label: "Support" }
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="bg-green-100 p-6 rounded-full inline-block mb-8">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-8">You have successfully logged into Gopalan AI.</p>
          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl">
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

      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Left Side - Login Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 max-w-md mx-auto lg:mx-0">
                <div className="text-center mb-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl inline-block mb-6">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                  <p className="text-gray-600">Sign in to your Gopalan AI account</p>
                </div>

                {/* Demo Credentials Notice */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-green-800 font-medium">Demo Credentials:</p>
                      <p className="text-green-700">Email: demo@example.com</p>
                      <p className="text-green-700">Password: password</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
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
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors ${
                          errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
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
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                      Forgot password?
                    </a>
                  </div>

                  {/* General Error */}
                  {errors.general && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3">
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
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
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
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="px-4 text-sm text-gray-500 bg-white">Or continue with</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button
                    onClick={() => handleSocialLogin('google')}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <Chrome className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
                    <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
                  </button>
                  <button
                    onClick={() => handleSocialLogin('facebook')}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <Facebook className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
                    <span className="ml-2 text-sm font-medium text-gray-700">Facebook</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-green-600 hover:text-green-700 font-semibold">
                      Sign up for free
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits & Information */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Revolutionize Your
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Farm Management</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                  Join thousands of farmers who trust Gopalan AI to monitor their animals' health, prevent diseases, and optimize their farm operations with intelligent insights.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <div className="text-lg font-bold text-gray-800">Secure & Reliable</div>
                      <div className="text-sm text-gray-600">Bank-level security</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <div className="text-lg font-bold text-gray-800">Global Reach</div>
                      <div className="text-sm text-gray-600">25+ countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
