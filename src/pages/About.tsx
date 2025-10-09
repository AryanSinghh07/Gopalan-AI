import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Handshake,
  Clock,
  Leaf,
  Brain,
  Smartphone,
  Database,
  AlertTriangle,
  User,
  Building,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  feedbackType: string;
}

const About = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    feedbackType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const teamMembers: TeamMember[] = [


  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "100,000+", label: "Farmers Served", color: "text-blue-600" },
    { icon: <Heart className="h-8 w-8" />, value: "500,000+", label: "Animals Helped", color: "text-green-600" },
    { icon: <Globe className="h-8 w-8" />, value: "25+", label: "Countries Reached", color: "text-purple-600" },
    { icon: <Award className="h-8 w-8" />, value: "99.2%", label: "User Satisfaction", color: "text-yellow-600" },
  ];

  const values = [
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Animal Welfare First",
      description: "Every decision we make prioritizes the health and wellbeing of animals, ensuring they receive the best possible care.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Innovation & Technology",
      description: "We leverage cutting-edge AI and technology to provide intelligent, data-driven solutions for modern veterinary care.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Farmer Partnership",
      description: "We work closely with farmers and veterinarians, understanding their challenges and developing practical solutions.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Sustainability",
      description: "Promoting sustainable farming practices that benefit animals, farmers, and the environment for future generations.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Trust & Reliability",
      description: "Building trust through accurate information, reliable service, and transparent communication with our users.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Continuous Improvement",
      description: "Constantly evolving our platform based on user feedback and the latest advances in veterinary science.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms help identify symptoms and suggest appropriate treatments."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Access critical information anywhere, anytime, with our responsive mobile-friendly platform."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Comprehensive Database",
      description: "Extensive library of animal health conditions, treatments, and preventive care information."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Emergency Support",
      description: "Round-the-clock access to emergency protocols and veterinary contact information."
    }
  ];

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        feedbackType: 'general'
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-20 bg-gradient-to-br from-green-800 via-emerald-700 to-green-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="bg-white bg-opacity-20 p-6 rounded-full backdrop-blur-sm animate-pulse">
                <img
                  src="src\assets\Gopalan Logo.png"
                  alt="Gopalan AI Logo"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              About
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Gopalan AI</span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionizing animal healthcare through innovative AI technology, compassionate care, 
              and sustainable farming practices for a better tomorrow.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          
          {/* Mission & Vision */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl mr-6">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  To democratize access to high-quality veterinary care by providing farmers and animal caretakers 
                  with intelligent, accessible, and reliable health management tools powered by artificial intelligence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe every animal deserves proper healthcare, regardless of location or economic constraints. 
                  Our platform bridges the gap between traditional veterinary knowledge and modern technology.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-2xl mr-6">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  To create a world where every farmer has instant access to expert veterinary guidance, 
                  leading to healthier animals, more sustainable farming practices, and improved food security globally.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a future where AI-powered healthcare transforms animal welfare, reduces preventable 
                  diseases, and empowers farmers with the knowledge they need to succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
                <p className="text-xl text-gray-600">How Gopalan AI came to life</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                  <p className="text-xl mb-6">
                    Gopalan AI was born from a simple observation: millions of farmers worldwide lack immediate access 
                    to veterinary expertise when their animals fall ill. What started as a conversation between 
                    Dr. Sarah Johnson, a rural veterinarian, and Michael Chen, an AI engineer, has evolved into 
                    a comprehensive platform serving farmers across the globe.
                  </p>
                  
                  <p className="text-lg mb-6">
                    Dr. Johnson witnessed firsthand how delayed veterinary intervention often led to preventable animal 
                    deaths and significant economic losses for farming families. Meanwhile, Michael recognized the 
                    potential of AI to analyze symptoms, predict health issues, and provide instant guidance.
                  </p>
                  
                  <p className="text-lg mb-6">
                    In 2020, they combined their expertise to create the first prototype of Gopalan AI. The platform 
                    launched with basic symptom analysis for cattle and has since expanded to include comprehensive 
                    health management for multiple animal species, preventive care protocols, and emergency response systems.
                  </p>
                  
                  <p className="text-lg">
                    Today, Gopalan AI serves over 100,000 farmers worldwide, has helped save hundreds of thousands 
                    of animals, and continues to evolve based on user feedback and the latest advances in veterinary 
                    science and artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:scale-105">
                  <div className={`bg-gradient-to-r ${value.color} p-4 rounded-2xl mb-6 inline-block group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Overview */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Different</h2>
                <p className="text-xl text-gray-600">Advanced features designed for modern animal healthcare</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback Form Section */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <div className="text-center mb-12">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-2xl inline-block mb-6">
                  <MessageSquare className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">We'd Love to Hear From You</h2>
                <p className="text-xl text-gray-600">Your feedback helps us improve and serve you better</p>
              </div>

              {isSubmitted ? (
                <div className="max-w-2xl mx-auto text-center">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                    <p className="text-green-700 text-lg">
                      Your feedback has been submitted successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl"
                    >
                      Submit Another Feedback
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="feedbackType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Feedback Type *
                      </label>
                      <select
                        id="feedbackType"
                        name="feedbackType"
                        value={formData.feedbackType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors"
                      >
                        {feedbackTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors"
                      placeholder="Brief subject of your feedback"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors resize-none"
                      placeholder="Please share your detailed feedback, suggestions, or questions..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3 inline-block"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-3 inline-block" />
                          Send Feedback
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="relative pt-20 pb-20 bg-gradient-to-br from-green-800 via-emerald-700 to-green-900 text-white overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 opacity-20 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300 opacity-15 rounded-full animate-pulse delay-700"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
              <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Have questions? Need support? Want to partner with us? We're here to help and would love to connect with you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <Mail className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-center">Email Us</h3>
                  <p className="text-blue-100 text-center">support@gopalanai.com</p>
                  <p className="text-blue-100 text-center">partnership@gopalanai.com</p>
                </div>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <Phone className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-center">Call Us</h3>
                  <p className="text-blue-100 text-center">+1 (555) 123-4567</p>
                  <p className="text-blue-100 text-sm text-center">Mon-Fri, 9 AM - 6 PM</p>
                </div>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <MapPin className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-center">Visit Us</h3>
                  <p className="text-blue-100 text-center">Galgotias University</p>
                  <p className="text-blue-100 text-center">Uttar Pradesh, India</p>
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

export default About;
