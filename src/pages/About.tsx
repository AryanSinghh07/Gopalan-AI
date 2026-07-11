import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroDecor from "@/components/HeroDecor";
import gopalanLogo from "@/assets/gopalan-logo.png";
import {
  Heart,
  Target,
  Star,
  Shield,
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
} from 'lucide-react';

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

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Animal Welfare First",
      description: "Every decision we make prioritizes the health and wellbeing of animals, ensuring they receive the best possible care."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation & Technology",
      description: "We use modern AI and computer vision to provide intelligent, data-driven tools for everyday livestock care."
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Farmer Partnership",
      description: "We work closely with farmers and veterinarians, understanding their challenges and building practical solutions."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Promoting sustainable farming practices that benefit animals, farmers, and the land for future generations."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Reliability",
      description: "Building trust through accurate information, reliable service, and honest, transparent communication."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Continuous Improvement",
      description: "Constantly improving our platform based on farmer feedback and advances in veterinary science."
    }
  ];

  const features = [
    {
      icon: <Brain className="h-7 w-7" />,
      title: "AI-Powered Analysis",
      description: "Computer vision measures your animal and scores body condition from a single photo."
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Made for Mobile",
      description: "Use it anywhere on your phone — built to work simply, even in the field."
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Breed & Health Library",
      description: "A growing library of Indian breeds, health conditions, treatments, and prevention tips."
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Emergency Guidance",
      description: "Quick access to emergency care steps and severity guidance when it matters most."
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

  const inputClasses =
    "w-full px-4 py-3 min-h-12 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/50 transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 bg-gradient-hero text-white overflow-hidden">
        <HeroDecor />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="bg-white/15 p-6 rounded-full backdrop-blur-sm animate-pulse-soft">
                <img src={gopalanLogo} alt="Gopalan AI logo" className="h-16 w-16 object-contain" loading="lazy" />
              </div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              About
              <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent"> Gopalan AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Helping Indian farmers care for their cattle and buffalo with simple,
              AI-powered tools — for healthier animals and stronger livelihoods.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container mx-auto px-6">

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <ScrollReveal variant="slide-left">
              <div className="rounded-2xl border border-border bg-card shadow-card p-8 md:p-10 h-full card-lift">
                <div className="flex items-center mb-6">
                  <div className="rounded-xl bg-primary/10 text-primary p-4 mr-5">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To give every farmer easy access to reliable livestock care — with intelligent,
                  affordable tools that anyone can use from their phone.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe every animal deserves proper care, no matter where its owner lives.
                  Our platform brings together traditional knowledge and modern technology.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right">
              <div className="rounded-2xl border border-border bg-card shadow-card p-8 md:p-10 h-full card-lift">
                <div className="flex items-center mb-6">
                  <div className="rounded-xl bg-accent/10 text-accent p-4 mr-5">
                    <Star className="h-8 w-8" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A future where every farmer has instant access to expert guidance — leading to
                  healthier animals, better breeding, and stronger rural livelihoods.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We support the goals of the Rashtriya Gokul Mission: conserving indigenous breeds
                  and improving productivity through science and technology.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="section-badge mb-4">🌱 What We Stand For</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                  Our <span className="gradient-text">Values</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={(index % 3) * 100}>
                  <div className="group rounded-2xl border border-border bg-card p-8 shadow-card card-lift h-full">
                    <div className="rounded-xl bg-primary/10 text-primary p-4 mb-5 inline-block group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Features Overview */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/60 to-background shadow-card p-8 md:p-12">
                <div className="text-center mb-12">
                  <span className="section-badge mb-4">⚡ Built for Farmers</span>
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                    What Makes Us Different
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Practical features designed for real farm life
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <ScrollReveal key={index} delay={(index % 2) * 120}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors group h-full">
                        <div className="rounded-xl bg-accent/10 text-accent p-3 group-hover:scale-110 transition-transform shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Feedback Form Section */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-card shadow-elegant p-8 md:p-12">
                <div className="text-center mb-10">
                  <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-glow p-5 inline-block mb-5 shadow-glow">
                    <MessageSquare className="h-9 w-9 text-white" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                    We'd Love to Hear From You
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Your feedback helps us improve and serve you better
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 animate-scale-in">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        Your feedback has been submitted successfully. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="min-h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white hover:scale-105 transition-all duration-300"
                      >
                        Submit Another Feedback
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text" id="name" name="name" value={formData.name}
                          onChange={handleInputChange} required
                          className={inputClasses} placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email" id="email" name="email" value={formData.email}
                          onChange={handleInputChange} required
                          className={inputClasses} placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel" id="phone" name="phone" value={formData.phone}
                          onChange={handleInputChange}
                          className={inputClasses} placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="feedbackType" className="block text-sm font-semibold text-foreground mb-2">
                          Feedback Type *
                        </label>
                        <select
                          id="feedbackType" name="feedbackType" value={formData.feedbackType}
                          onChange={handleInputChange} required className={inputClasses}
                        >
                          {feedbackTypes.map((type) => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text" id="subject" name="subject" value={formData.subject}
                        onChange={handleInputChange} required
                        className={inputClasses} placeholder="Brief subject of your feedback"
                      />
                    </div>

                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message" name="message" value={formData.message}
                        onChange={handleInputChange} required rows={6}
                        className={`${inputClasses} resize-none`}
                        placeholder="Please share your feedback, suggestions, or questions..."
                      />
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`min-h-14 px-12 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-card hover:shadow-elegant ${
                          isSubmitting
                            ? 'bg-muted-foreground cursor-not-allowed'
                            : 'bg-gradient-to-r from-primary to-primary-glow text-white'
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
            </ScrollReveal>
          </div>

          {/* Contact Information */}
          <ScrollReveal>
            <div className="relative py-16 px-6 bg-gradient-hero text-white overflow-hidden rounded-3xl">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              </div>

              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
                <p className="text-lg mb-12 text-white/85 max-w-2xl mx-auto leading-relaxed text-center">
                  Have questions? Need support? Want to partner with us? We're here to help.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    { icon: <MessageSquare className="h-10 w-10" />, title: "Message Us", lines: ["Use the feedback form above", "We read every message"] },
                    { icon: <Clock className="h-10 w-10" />, title: "Response Time", lines: ["We aim to reply", "within a few days"] },
                    { icon: <MapPin className="h-10 w-10" />, title: "Based At", lines: ["Galgotias University", "Uttar Pradesh, India"] },
                  ].map((c, index) => (
                    <ScrollReveal key={c.title} delay={index * 120}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors h-full">
                        <div className="text-white mx-auto mb-4 w-fit">{c.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                        {c.lines.map((line) => (
                          <p key={line} className="text-white/80">{line}</p>
                        ))}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
