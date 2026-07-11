import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
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
  Phone,
  MapPin,
  Building,
  Zap,
  Award,
  Check,
  Sparkles
} from 'lucide-react';

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  farmName: string;
  location: string;
  animalTypes: string[];
  acceptTerms: boolean;
  receiveUpdates: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  farmName?: string;
  location?: string;
  animalTypes?: string;
  acceptTerms?: string;
  general?: string;
}

const inputBase =
  "w-full min-h-12 rounded-xl border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors";

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    farmName: '',
    location: '',
    animalTypes: [],
    acceptTerms: false,
    receiveUpdates: true
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const animalOptions = [
    { value: 'cattle', label: "Cattle/Cows", icon: '🐄' },
    { value: 'buffalo', label: "Buffalo", icon: '🐃' },
    { value: 'goats', label: "Goats", icon: '🐐' },
    { value: 'sheep', label: "Sheep", icon: '🐑' },
    { value: 'pigs', label: "Pigs", icon: '🐷' },
    { value: 'chickens', label: "Chickens", icon: '🐔' },
    { value: 'horses', label: "Horses", icon: '🐎' },
    { value: 'other', label: "Other", icon: '🐾' }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "AI Health Monitoring",
      description: "Advanced AI algorithms to monitor your animals' health 24/7"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Alerts",
      description: "Get real-time notifications about health issues and emergencies"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Support",
      description: "Access to veterinarians and farming experts worldwide"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Your farm data is encrypted and completely secure"
    }
  ];

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.farmName.trim()) {
      newErrors.farmName = "Farm name is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (formData.animalTypes.length === 0) {
      newErrors.animalTypes = "Please select at least one animal type";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

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

  const handleAnimalTypeChange = (animalType: string) => {
    setFormData(prev => ({
      ...prev,
      animalTypes: prev.animalTypes.includes(animalType)
        ? prev.animalTypes.filter(type => type !== animalType)
        : [...prev.animalTypes, animalType]
    }));

    if (errors.animalTypes) {
      setErrors(prev => ({ ...prev, animalTypes: undefined }));
    }
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) return;

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      setTimeout(() => {
        setSignupSuccess(true);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setErrors({ general: "An error occurred. Please try again." });
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (_provider: string) => {
    // Implement social signup logic here
  };

  if (signupSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-card rounded-2xl border border-border shadow-elegant p-12 text-center animate-fade-up">
          <div className="bg-primary/10 p-6 rounded-full inline-block mb-8 animate-scale-in">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Welcome to Gopalan AI!</h2>
          <p className="text-muted-foreground mb-6">
            Your account has been created successfully. We've sent a verification email to{' '}
            <span className="font-semibold text-primary">{formData.email}</span>
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Please check your email and click the verification link to activate your account.
          </p>
          <div className="space-y-4">
            <Button className="w-full min-h-12 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground py-3 rounded-xl shadow-elegant transition-all duration-300 ease-smooth">
              Check Your Email
              <Mail className="h-5 w-5 ml-2" />
            </Button>
            <a
              href="/login"
              className="block text-primary hover:text-primary-glow font-medium transition-colors"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">

            {/* Left Side - Benefits & Information */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-12">
                <ScrollReveal variant="slide-left">
                  <span className="section-badge mb-6">
                    <Sparkles className="w-4 h-4" />
                    Grow With Gopalan AI
                  </span>
                  <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Join the Future of
                    <span className="gradient-text"> Smart Farming</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    Get started with Gopalan AI today and transform how you care for your animals. Join thousands of farmers who are already using our AI-powered platform.
                  </p>
                </ScrollReveal>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <ScrollReveal key={index} variant="slide-left" delay={index * 100}>
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

                {/* Features List */}
                <ScrollReveal variant="fade-in" delay={200}>
                  <div className="bg-card rounded-2xl border border-border p-8 shadow-card text-left">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">What you'll get:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-foreground/90">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>Free 30-day trial with all premium features</span>
                      </li>
                      <li className="flex items-center text-foreground/90">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>AI-powered health analysis for all your animals</span>
                      </li>
                      <li className="flex items-center text-foreground/90">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>24/7 emergency alert system</span>
                      </li>
                      <li className="flex items-center text-foreground/90">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>Access to veterinary experts</span>
                      </li>
                      <li className="flex items-center text-foreground/90">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>Mobile app for iOS and Android</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="order-1 lg:order-2">
              <ScrollReveal variant="slide-right">
                <div className="bg-card rounded-2xl border border-border shadow-elegant p-8 md:p-10 max-w-md mx-auto lg:mx-0">
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-primary to-primary-glow p-4 rounded-2xl inline-block mb-6 shadow-glow animate-float">
                      <User className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-2">Create Account</h2>
                    <p className="text-muted-foreground">Join Gopalan AI community today</p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex items-center">
                      <div className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold transition-all duration-500 ease-smooth ${
                        currentStep >= 1
                          ? 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow scale-105'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {currentStep > 1 ? <Check className="h-5 w-5" /> : '1'}
                      </div>
                      <div className="relative flex-1 h-1.5 mx-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 ease-smooth ${
                            currentStep >= 2 ? 'w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                      <div className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold transition-all duration-500 ease-smooth ${
                        currentStep >= 2
                          ? 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow scale-105'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        2
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-medium text-muted-foreground">
                      <span className={currentStep === 1 ? 'text-primary' : ''}>Your details</span>
                      <span className={currentStep === 2 ? 'text-primary' : ''}>Your farm</span>
                    </div>
                  </div>

                  <div key={currentStep} className="animate-fade-up">
                    {currentStep === 1 ? (
                      // Step 1: Personal Information
                      <form className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                          <p className="text-sm text-muted-foreground">Let's get to know you better</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {/* First Name */}
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className={`${inputBase} px-4 py-3 ${
                                errors.firstName ? 'border-red-500' : 'border-border'
                              }`}
                              placeholder="First name"
                            />
                            {errors.firstName && (
                              <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
                            )}
                          </div>

                          {/* Last Name */}
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className={`${inputBase} px-4 py-3 ${
                                errors.lastName ? 'border-red-500' : 'border-border'
                              }`}
                              placeholder="Last name"
                            />
                            {errors.lastName && (
                              <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
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
                              placeholder="Enter your email"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-600 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                            Phone Number (Optional)
                          </label>
                          <div className="relative">
                            <Phone className="h-5 w-5 text-muted-foreground absolute left-4 top-3.5" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className={`${inputBase} border-border pl-12 pr-4 py-3`}
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </div>

                        {/* Password */}
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
                              placeholder="Create a strong password"
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

                        {/* Confirm Password */}
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-foreground mb-2">
                            Confirm Password
                          </label>
                          <div className="relative">
                            <Lock className="h-5 w-5 text-muted-foreground absolute left-4 top-3.5" />
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              id="confirmPassword"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className={`${inputBase} pl-12 pr-12 py-3 ${
                                errors.confirmPassword ? 'border-red-500' : 'border-border'
                              }`}
                              placeholder="Confirm your password"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-4 top-3.5 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                          {errors.confirmPassword && (
                            <p className="text-red-600 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.confirmPassword}
                            </p>
                          )}
                        </div>

                        {/* Next Button */}
                        <Button
                          type="button"
                          onClick={handleNext}
                          className="w-full min-h-12 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground transition-all duration-300 ease-smooth transform hover:scale-[1.02] shadow-card hover:shadow-elegant"
                        >
                          Continue
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>

                        {/* Social Signup */}
                        <div className="flex items-center my-6">
                          <div className="flex-1 border-t border-border"></div>
                          <span className="px-4 text-sm text-muted-foreground bg-card">Or sign up with</span>
                          <div className="flex-1 border-t border-border"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => handleSocialSignup('google')}
                            className="flex items-center justify-center min-h-12 px-4 py-3 border border-border rounded-xl hover:bg-muted/60 transition-colors group"
                          >
                            <Chrome className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="ml-2 text-sm font-medium text-foreground">Google</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSocialSignup('facebook')}
                            className="flex items-center justify-center min-h-12 px-4 py-3 border border-border rounded-xl hover:bg-muted/60 transition-colors group"
                          >
                            <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="ml-2 text-sm font-medium text-foreground">Facebook</span>
                          </button>
                        </div>
                      </form>
                    ) : (
                      // Step 2: Farm Information
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-semibold text-foreground">Farm Information</h3>
                          <p className="text-sm text-muted-foreground">Tell us about your farm</p>
                        </div>

                        {/* Farm Name */}
                        <div>
                          <label htmlFor="farmName" className="block text-sm font-semibold text-foreground mb-2">
                            Farm Name
                          </label>
                          <div className="relative">
                            <Building className="h-5 w-5 text-muted-foreground absolute left-4 top-3.5" />
                            <input
                              type="text"
                              id="farmName"
                              name="farmName"
                              value={formData.farmName}
                              onChange={handleInputChange}
                              className={`${inputBase} pl-12 pr-4 py-3 ${
                                errors.farmName ? 'border-red-500' : 'border-border'
                              }`}
                              placeholder="Enter your farm name"
                            />
                          </div>
                          {errors.farmName && (
                            <p className="text-red-600 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.farmName}
                            </p>
                          )}
                        </div>

                        {/* Location */}
                        <div>
                          <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
                            Location
                          </label>
                          <div className="relative">
                            <MapPin className="h-5 w-5 text-muted-foreground absolute left-4 top-3.5" />
                            <input
                              type="text"
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              className={`${inputBase} pl-12 pr-4 py-3 ${
                                errors.location ? 'border-red-500' : 'border-border'
                              }`}
                              placeholder="City, State/Province, Country"
                            />
                          </div>
                          {errors.location && (
                            <p className="text-red-600 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.location}
                            </p>
                          )}
                        </div>

                        {/* Animal Types */}
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-3">
                            What animals do you raise? (Select all that apply)
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {animalOptions.map((animal) => (
                              <label
                                key={animal.value}
                                className={`flex items-center min-h-12 p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ease-smooth ${
                                  formData.animalTypes.includes(animal.value)
                                    ? 'border-primary bg-primary/10 text-primary shadow-card'
                                    : 'border-border hover:border-primary/40 hover:bg-accent/10'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.animalTypes.includes(animal.value)}
                                  onChange={() => handleAnimalTypeChange(animal.value)}
                                  className="sr-only"
                                />
                                <span className="text-lg mr-2">{animal.icon}</span>
                                <span className="text-sm font-medium">{animal.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.animalTypes && (
                            <p className="text-red-600 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.animalTypes}
                            </p>
                          )}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="space-y-4">
                          <label className="flex items-start cursor-pointer">
                            <input
                              type="checkbox"
                              name="acceptTerms"
                              checked={formData.acceptTerms}
                              onChange={handleInputChange}
                              className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-[hsl(var(--primary))] mt-1"
                            />
                            <span className="ml-3 text-sm text-muted-foreground">
                              I agree to the{' '}
                              <a href="#" className="text-primary hover:text-primary-glow font-medium transition-colors">
                                Terms of Service
                              </a>{' '}
                              and{' '}
                              <a href="#" className="text-primary hover:text-primary-glow font-medium transition-colors">
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                          {errors.acceptTerms && (
                            <p className="text-red-600 text-sm flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.acceptTerms}
                            </p>
                          )}

                          <label className="flex items-start cursor-pointer">
                            <input
                              type="checkbox"
                              name="receiveUpdates"
                              checked={formData.receiveUpdates}
                              onChange={handleInputChange}
                              className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-[hsl(var(--primary))] mt-1"
                            />
                            <span className="ml-3 text-sm text-muted-foreground">
                              I would like to receive updates, tips, and promotional emails from Gopalan AI
                            </span>
                          </label>
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

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button
                            type="button"
                            onClick={handleBack}
                            variant="outline"
                            className="flex-1 min-h-12 py-3 text-primary border-2 border-primary hover:bg-primary/5 rounded-xl transition-colors"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            disabled={isLoading}
                            className={`flex-1 min-h-12 py-3 text-lg font-semibold rounded-xl transition-all duration-300 ease-smooth transform hover:scale-[1.02] shadow-card hover:shadow-elegant ${
                              isLoading
                                ? 'bg-muted-foreground/40 cursor-not-allowed'
                                : 'bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground'
                            }`}
                          >
                            {isLoading ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 inline-block"></div>
                                Creating...
                              </>
                            ) : (
                              "Create Account"
                            )}
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>

                  {/* Login Link */}
                  <div className="text-center mt-6">
                    <p className="text-muted-foreground">
                      Already have an account?{' '}
                      <a href="/login" className="text-primary hover:text-primary-glow font-semibold transition-colors">
                        Sign in here
                      </a>
                    </p>
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

export default Signup;
