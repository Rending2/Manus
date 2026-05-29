import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Code2, 
  Zap, 
  Globe, 
  Smartphone,
  BarChart3,
  Lock,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/linkmycraft_portfolio_1-Q3gsE4F6VAVrz6Tfan2UNL.webp",
      description: "Modern furniture e-commerce site with advanced filtering and checkout flow"
    },
    {
      id: 2,
      title: "Business Dashboard",
      category: "Web Application",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/linkmycraft_portfolio_2-KY7UB2joyTvFdNPZLJ6Abd.webp",
      description: "Real-time analytics dashboard with data visualization and reporting"
    },
    {
      id: 3,
      title: "Creative Agency Site",
      category: "Brand Website",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/linkmycraft_portfolio_3-YcXTHN6ehb9MMX3hSpUs3U.webp",
      description: "Bold, modern portfolio website with smooth animations and interactions"
    }
  ];

  const services: ServiceItem[] = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Bespoke websites and applications built with modern technologies and best practices"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that look stunning on all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast load times and optimized performance for better user experience"
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment processing and inventory management"
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      description: "Integrated analytics to measure performance and user behavior"
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise-grade security, SSL, and compliance with industry standards"
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We understand your business goals, target audience, and competitive landscape"
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Wireframes, mockups, and detailed project planning before development begins"
    },
    {
      number: "03",
      title: "Development",
      description: "Clean, scalable code built with modern frameworks and best practices"
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous testing, optimization, and smooth deployment to production"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" as any }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.12
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
        <div className="container py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
              LM
            </div>
            <span className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              LinkMyCraft
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Portfolio", "Process", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 font-medium hover-lift btn-active-press"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/80 text-foreground transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border/30"
          >
            <div className="container py-6 flex flex-col gap-6">
              {["Services", "Portfolio", "Process", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button 
                className="w-full rounded-lg bg-primary text-primary-foreground"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden">
          {/* Ambient Background */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" as any }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 w-fit">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Modern Web Development</span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-foreground">
                Build Your Digital <span className="gradient-text">Presence</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg font-light leading-relaxed">
                We create stunning, high-performance websites and applications that help your business grow. From concept to launch, we handle it all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 font-medium hover-lift btn-active-press"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start Your Project
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-lg border-border bg-transparent text-foreground hover:bg-secondary/50 px-8 py-6 font-medium hover-lift btn-active-press"
                  onClick={() => {
                    const portfolioSection = document.getElementById("portfolio");
                    portfolioSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Our Work
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="font-display text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-accent">98%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" as any, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-secondary">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/linkmycraft_hero-V2ftc5sgU8wZz9GTV9q6D9.webp" 
                  alt="Web Development" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-secondary/30 border-y border-border/30">
          <div className="container">
            <motion.div 
              {...fadeInUp}
              className="max-w-3xl mb-16"
            >
              <span className="text-sm font-bold tracking-wider text-accent uppercase">Our Services</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Everything You Need to Succeed Online</h2>
              <p className="text-muted-foreground mt-4 font-light text-lg">
                Comprehensive web development services tailored to your business needs
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="group"
                  >
                    <Card className="rounded-xl border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300 h-full hover-lift">
                      <CardContent className="p-8 flex flex-col gap-4">
                        <div className="h-12 w-12 rounded-lg bg-accent/15 text-accent flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-24 bg-background">
          <div className="container">
            <motion.div 
              {...fadeInUp}
              className="max-w-3xl mb-16"
            >
              <span className="text-sm font-bold tracking-wider text-accent uppercase">Featured Work</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Projects We're Proud Of</h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {portfolioItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0, transition: { duration: 0.7 } }
                  }}
                  className="group flex flex-col gap-4 cursor-pointer"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-border/30 bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 h-10 w-10 rounded-lg bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <ArrowUpRight className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">{item.category}</p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="py-24 bg-secondary/20 border-y border-border/30">
          <div className="container">
            <motion.div 
              {...fadeInUp}
              className="max-w-3xl mb-16"
            >
              <span className="text-sm font-bold tracking-wider text-accent uppercase">Our Process</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">How We Work</h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="relative"
                >
                  <div className="flex flex-col gap-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-display font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 -right-3 w-6 h-[2px] bg-gradient-to-r from-accent to-transparent" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
          
          <motion.div 
            {...fadeInUp}
            className="container max-w-3xl relative z-10 text-center flex flex-col items-center gap-8"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-xl">
              Let's discuss your project and create something amazing together.
            </p>
            <Button 
              size="lg" 
              className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 font-medium hover-lift btn-active-press"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Your Free Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-28 bg-secondary/30 border-t border-border/30">
          <div className="container max-w-4xl">
            <motion.div 
              {...fadeInUp}
              className="text-center mb-16 flex flex-col items-center gap-4"
            >
              <span className="text-sm font-bold tracking-wider text-accent uppercase">Contact Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Let's Get Started</h2>
              <p className="text-muted-foreground font-light max-w-lg">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card/75 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Your Name</label>
                    <Input 
                      type="text" 
                      placeholder="John Doe" 
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="rounded-lg border-border/60 bg-background/50 focus-visible:ring-primary/40 py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="rounded-lg border-border/60 bg-background/50 focus-visible:ring-primary/40 py-6"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Tell us about your project</label>
                  <Textarea 
                    rows={5} 
                    placeholder="Describe your project, goals, and timeline..." 
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="rounded-lg border-border/60 bg-background/50 focus-visible:ring-primary/40 p-4 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium hover-lift btn-active-press"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-foreground/5 border-t border-border/30 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1 - Brand */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <a href="#" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
                  LM
                </div>
                <span className="font-display text-lg font-bold text-foreground">
                  LinkMyCraft
                </span>
              </a>
              <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
                Professional web development agency creating stunning digital experiences for businesses worldwide.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, label: "GitHub" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <button 
                      key={idx}
                      className="h-10 w-10 rounded-lg border border-border/60 flex items-center justify-center hover:bg-secondary text-foreground/70 hover:text-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold tracking-wider text-accent uppercase">Navigation</h4>
              <div className="flex flex-col gap-2.5">
                {["Services", "Portfolio", "Process", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 - Contact Info */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold tracking-wider text-accent uppercase">Contact</h4>
              <div className="flex flex-col gap-2.5 text-sm text-muted-foreground font-light">
                <p>hello@linkmycraft.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Available 24/7</p>
              </div>
            </div>

          </div>

          <div className="h-[1px] bg-border/40 my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground font-light">
            <p>© 2026 LinkMyCraft. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:underline">Privacy Policy</button>
              <button className="hover:underline">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
