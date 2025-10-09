import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  Facebook,
  Phone,
  MapPin,
  Building,
  Globe,
  Users,
  Star,
  Zap,
  Award
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

const Signup = () => {
  const { t } = useTranslation();
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
    { value: 'cattle', label: t('signup.animalTypes.cattle'), icon: '🐄' },
    { value: 'buffalo', label: t('signup.animalTypes.buffalo'), icon: '🐃' },
    { value: 'goats', label: t('signup.animalTypes.goats'), icon: '🐐' },
    { value: 'sheep', label: t('signup.animalTypes.sheep'), icon: '🐑' },
    { value: 'pigs', label: t('signup.animalTypes.pigs'), icon: '🐷' },
    { value: 'chickens', label: t('signup.animalTypes.chickens'), icon: '🐔' },
    { value: 'horses', label: t('signup.animalTypes.horses'), icon: '🐎' },
    { value: 'other', label: t('signup.animalTypes.other'), icon: '🐾' }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('signup.benefits.aiHealthMonitoring.title'),
      description: t('signup.benefits.aiHealthMonitoring.description')
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t('signup.benefits.instantAlerts.title'),
      description: t('signup.benefits.instantAlerts.description')
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t('signup.benefits.expertSupport.title'),
      description: t('signup.benefits.expertSupport.description')
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('signup.benefits.securePrivate.title'),
      description: t('signup.benefits.securePrivate.description')
    }
  ];

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = t('signup.validation.firstNameRequired');
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('signup.validation.lastNameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('signup.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('signup.validation.emailInvalid');
    }
    
    if (!formData.password) {
      newErrors.password = t('signup.validation.passwordRequired');
    } else if (formData.password.length < 8) {
      newErrors.password = t('signup.validation.passwordMinLength');
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = t('signup.validation.passwordComplexity');
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t('signup.validation.confirmPasswordRequired');
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('signup.validation.passwordsDoNotMatch');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.farmName.trim()) {
      newErrors.farmName = t('signup.validation.farmNameRequired');
    }
    
    if (!formData.location.trim()) {
      newErrors.location = t('signup.validation.locationRequired');
    }
    
    if (formData.animalTypes.length === 0) {
      newErrors.animalTypes = t('signup.validation.animalTypesRequired');
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = t('signup.validation.acceptTermsRequired');
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
      setErrors({ general: t('signup.validation.errorOccurred') });
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // Implement social signup logic here
  };

  if (signupSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="bg-green-100 p-6 rounded-full inline-block mb-8">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('signup.success.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('signup.success.message')}{' '}
            <span className="font-semibold text-green-600">{formData.email}</span>
          </p>
          <p className="text-sm text-gray-500 mb-8">
            {t('signup.success.checkEmail')}
          </p>
          <div className="space-y-4">
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl">
              {t('signup.success.checkYourEmail')}
              <Mail className="h-5 w-5 ml-2" />
            </Button>
            <a 
              href="http://localhost:8080/login" 
              className="block text-green-600 hover:text-green-700 font-medium"
            >
              {t('signup.success.backToLogin')}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            
            {/* Left Side - Benefits & Information */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  {t('signup.hero.title')}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> {t('signup.hero.titleHighlight')}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                  {t('signup.hero.description')}
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

                {/* Features List */}
                <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('signup.features.title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{t('signup.features.freeTrial')}</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{t('signup.features.aiAnalysis')}</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{t('signup.features.emergencySystem')}</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{t('signup.features.veterinaryAccess')}</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{t('signup.features.mobileApp')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 max-w-md mx-auto lg:mx-0">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl inline-block mb-6">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('signup.form.createAccount')}</h2>
                  <p className="text-gray-600">{t('signup.form.joinCommunity')}</p>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center mb-8">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    1
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    2
                  </div>
                </div>

                {currentStep === 1 ? (
                  // Step 1: Personal Information
                  <form className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-800">{t('signup.form.personalInfo')}</h3>
                      <p className="text-sm text-gray-600">{t('signup.form.personalInfoDesc')}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* First Name */}
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('signup.form.firstName')}
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder={t('signup.form.firstNamePlaceholder')}
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('signup.form.lastName')}
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder={t('signup.form.lastNamePlaceholder')}
                        />
                        {errors.lastName && (
                          <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('signup.form.email')}
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
                          placeholder={t('signup.form.emailPlaceholder')}
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
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('signup.form.phone')}
                      </label>
                      <div className="relative">
                        <Phone className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors"
                          placeholder={t('signup.form.phonePlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('signup.form.password')}
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
                          placeholder={t('signup.form.passwordPlaceholder')}
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

                    {/* Confirm Password */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('signup.form.confirmPassword')}
                      </label>
                      <div className="relative">
                        <Lock className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder={t('signup.form.confirmPasswordPlaceholder')}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
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
                      className="w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('signup.form.continue')}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>

                    {/* Social Signup */}
                    <div className="flex items-center my-6">
                      <div className="flex-1 border-t border-gray-200"></div>
                      <span className="px-4 text-sm text-gray-500 bg-white">{t('signup.form.orSignUpWith')}</span>
                      <div className="flex-1 border-t border-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => handleSocialSignup('google')}
                        className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <Chrome className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
                        <span className="ml-2 text-sm font-medium text-gray-700">{t('signup.form.google')}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSocialSignup('facebook')}
                        className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <Facebook className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
                        <span className="ml-2 text-sm font-medium text-gray-700">{t('signup.form.facebook')}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  // Step 2: Farm Information
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-800">{t('signup.form.farmInfo')}</h3>
                      <p className="text-sm text-gray-600">{t('signup.form.farmInfoDesc')}</p>
                    </div>

                    {/* Farm Name */}
                    <div>
                      <label htmlFor="farmName" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('signup.form.farmName')}
                      </label>
                      <div className="relative">
                        <Building className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                        <input
                          type="text"
                          id="farmName"
                          name="farmName"
                          value={formData.farmName}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors ${
                            errors.farmName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder={t('signup.form.farmNamePlaceholder')}
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
                      <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('signup.form.location')}
                      </label>
                      <div className="relative">
                        <MapPin className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors ${
                            errors.location ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder={t('signup.form.locationPlaceholder')}
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
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {t('signup.form.animalTypes')}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {animalOptions.map((animal) => (
                          <label
                            key={animal.value}
                            className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all hover:bg-green-50 ${
                              formData.animalTypes.includes(animal.value)
                                ? 'border-green-500 bg-green-50 text-green-700'
                                : 'border-gray-200 hover:border-green-300'
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
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500 mt-1"
                        />
                        <span className="ml-3 text-sm text-gray-600">
                          {t('signup.terms.acceptTerms')}{' '}
                          <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                            {t('signup.terms.termsOfService')}
                          </a>{' '}
                          {t('signup.terms.and')}{' '}
                          <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                            {t('signup.terms.privacyPolicy')}
                          </a>
                        </span>
                      </label>
                      {errors.acceptTerms && (
                        <p className="text-red-600 text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.acceptTerms}
                        </p>
                      )}

                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="receiveUpdates"
                          checked={formData.receiveUpdates}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500 mt-1"
                        />
                        <span className="ml-3 text-sm text-gray-600">
                          {t('signup.terms.receiveUpdates')}
                        </span>
                      </label>
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

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 py-3 text-green-600 border-2 border-green-600 hover:bg-green-50 rounded-xl"
                      >
                        {t('signup.form.back')}
                      </Button>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className={`flex-1 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                          isLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 inline-block"></div>
                            {t('signup.form.creating')}
                          </>
                        ) : (
                          t('signup.form.createAccountButton')
                        )}
                      </Button>
                    </div>
                  </form>
                )}

                {/* Login Link */}
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    {t('signup.form.alreadyHaveAccount')}{' '}
                    <a href="http://localhost:8080/login" className="text-green-600 hover:text-green-700 font-semibold">
                      {t('signup.form.signInHere')}
                    </a>
                  </p>
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

export default Signup;
