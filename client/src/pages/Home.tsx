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
  Sparkles, 
  Compass, 
  Layers, 
  Heart, 
  Instagram, 
  Twitter, 
  Linkedin,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom type definitions
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // High-quality generated assets
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Symphony of Clay",
      category: "Sculpture & Art Direction",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/portfolio_1-gMSVCkEZdmYEtpBK2tTEuG.webp",
      year: "2025"
    },
    {
      id: 2,
      title: "Aurea Botanical Atelier",
      category: "Luxury Identity & Print",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/portfolio_2-ZgxUWcbASCAFELtC7W466m.webp",
      year: "2026"
    },
    {
      id: 3,
      title: "Silent Archways",
      category: "Spatial & Architectural Design",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/portfolio_3-SuTPJw2NXJSRmFd3tjmc8N.webp",
      year: "2026"
    }
  ];

  const services: ServiceItem[] = [
    {
      icon: Compass,
      title: "Brand Strategy & Direction",
      description: "Unearthing your core narrative and translating it into a deliberate, high-end identity that resonates across touchpoints."
    },
    {
      icon: Layers,
      title: "Creative Art Direction",
      description: "Curating refined visual aesthetics, bespoke photography direction, and editorial design that tells a sensory story."
    },
    {
      icon: Sparkles,
      title: "Digital & Spatial Design",
      description: "Crafting poetic web experiences and physical atmospheres where minimalism, warmth, and intuitive interactions meet."
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
      toast.success("Thank you! Your message has been received by our studio.");
      setContactName("");
      setContactContactEmail("");
      setContactMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const handlePlaceholderClick = (name: string) => {
    toast.info(`"${name}" is a demonstration link. Live site features coming soon!`);
  };

  // Animation constants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeInOut" as any }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/10 selection:text-primary">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
        <div className="container py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-semibold tracking-wide text-foreground/90 transition-colors group-hover:text-primary">
              LUMINARY
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground animate-pulse" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {["Work", "Studio", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="rounded-full border-border/80 text-foreground/80 hover:bg-secondary/50 hover:text-foreground hover-lift btn-active-press"
              onClick={() => handlePlaceholderClick("Journal")}
            >
              Journal
            </Button>
            <Button 
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover-lift btn-active-press"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Inquire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary/80 text-foreground/80 transition-colors"
            aria-label="Toggle menu"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background border-b border-border/50"
          >
            <div className="container py-6 flex flex-col gap-6">
              {["Work", "Studio", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  {item}
                </a>
              ))}
              <div className="h-[1px] bg-border/40 my-2" />
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-border"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handlePlaceholderClick("Journal");
                  }}
                >
                  Journal
                </Button>
                <Button 
                  className="w-full rounded-full bg-primary text-primary-foreground"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Inquire
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden bg-background">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-foreground/5 blur-[100px] pointer-events-none" />

          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7 flex flex-col items-start gap-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border/40 text-xs font-medium tracking-wider text-secondary-foreground uppercase">
                <Sparkles className="h-3 w-3 text-primary" />
                <span>Crafting Digital & Physical Presence</span>
              </div>
              
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-foreground/95 leading-[1.1] text-left">
                We shape ideas into <span className="italic font-normal text-primary">deliberate, organic</span> experiences.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed text-left">
                Luminary is a boutique design and art direction studio. We believe in high-end minimalism, thoughtful details, and crafting brands that feel deeply tactile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base hover-lift btn-active-press"
                  onClick={() => {
                    const workSection = document.getElementById("work");
                    workSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Work
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-border bg-transparent text-foreground/80 hover:bg-secondary/40 px-8 py-6 text-base hover-lift btn-active-press"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Our Philosophy
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-border/30">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663709293579/EarATHm5jkRJuPjkpeqG5N/hero_bg-A2Tq6kJT6c3wwLQ2LmSMeY.webp" 
                  alt="Luminary Studio Space" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-border/40 flex items-center gap-4 max-w-xs"
              >
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">100% Bespoke Craft</h4>
                  <p className="text-xs text-muted-foreground">Every pixel and texture, tailored to your story.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WORK / PORTFOLIO SECTION */}
        <section id="work" className="py-24 bg-secondary/20 relative border-y border-border/40">
          <div className="container">
            <motion.div 
              {...fadeInUp}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            >
              <div className="text-left">
                <span className="text-xs font-semibold tracking-wider text-accent-foreground uppercase">Selected Creations</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-3">Portfolio of Intention</h2>
              </div>
              <p className="text-muted-foreground max-w-md font-light text-left md:text-right">
                A carefully curated archive of brands, spaces, and digital platforms we have shaped from concept to realization.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {portfolioItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as any } }
                  }}
                  className="group flex flex-col gap-4 cursor-pointer text-left"
                  onClick={() => handlePlaceholderClick(item.title)}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/30 bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-snappy group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                      <ArrowUpRight className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between items-start mt-2">
                    <div>
                      <h3 className="font-serif text-2xl font-normal group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light mt-1">{item.category}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/60 py-1 px-2.5 rounded bg-secondary/80 border border-border/30">
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY / STUDIO SECTION */}
        <section id="studio" className="py-28 bg-background">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Quote/Statement */}
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-6 flex flex-col gap-8 text-left"
            >
              <span className="text-xs font-semibold tracking-wider text-accent-foreground uppercase">Our Core Belief</span>
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground/90 leading-tight">
                "Simplicity is not the absence of clutter, but the presence of <span className="italic font-normal text-primary">deliberate clarity</span>."
              </blockquote>
              <div className="h-[1px] bg-border/60 w-24" />
              <p className="text-muted-foreground font-light leading-relaxed max-w-xl">
                We believe that the best work emerges from deep listening and slow craftsmanship. By stripping away the unnecessary, we expose the essence of your story, creating designs that endure and capture the imagination.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center font-serif italic text-lg border border-border/40">
                  L
                </div>
                <div>
                  <h4 className="text-sm font-semibold">The Luminary Ethos</h4>
                  <p className="text-xs text-muted-foreground">Est. 2024 • Crafting with Warmth</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Multi-stat Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { number: "01", label: "Slow Design", desc: "We dedicate focused, unhurried attention to every project, rejecting the assembly-line approach." },
                { number: "02", label: "Tactile Digital", desc: "Digital assets that feel organic, using natural motion, texture, and responsive curves." },
                { number: "03", label: "Deep Cohesion", desc: "Ensuring that every detail—from favicon to spatial atmosphere—speaks the same language." },
                { number: "04", label: "Global Reach", desc: "Serving forward-thinking creators and brands worldwide from our physical studio space." }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="p-8 rounded-2xl bg-card border border-border/40 hover-lift text-left"
                >
                  <span className="font-serif text-3xl italic text-primary/40 block mb-4">{stat.number}</span>
                  <h3 className="font-serif text-xl font-medium mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-secondary/10 border-t border-border/40">
          <div className="container">
            <motion.div 
              {...fadeInUp}
              className="max-w-2xl text-left mb-16"
            >
              <span className="text-xs font-semibold tracking-wider text-accent-foreground uppercase">What We Do</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-3">Tailored Capabilities</h2>
              <p className="text-muted-foreground font-light mt-4">
                We partner with select visionaries to craft cohesive brand systems, beautiful editorial materials, and interactive web experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card key={idx} className="rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-8 flex flex-col items-start text-left gap-6">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-serif text-2xl font-normal text-foreground/90">{service.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed text-sm">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* INQUIRY / CONTACT SECTION */}
        <section id="contact" className="py-28 bg-background relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

          <div className="container max-w-4xl relative z-10">
            <motion.div 
              {...fadeInUp}
              className="text-center mb-16 flex flex-col items-center gap-4"
            >
              <span className="text-xs font-semibold tracking-wider text-accent-foreground uppercase">Inquire</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light">Begin a Dialogue</h2>
              <p className="text-muted-foreground font-light max-w-lg">
                We take on a limited number of clients each season to maintain our standard of unhurried quality. Tell us about your vision.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card/75 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-border/40 shadow-xl"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Your Name</label>
                    <Input 
                      type="text" 
                      placeholder="E.g., Alexander" 
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="rounded-xl border-border/60 bg-background/50 focus-visible:ring-primary/40 py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="E.g., alex@studio.com" 
                      value={contactEmail}
                      onChange={(e) => setContactContactEmail(e.target.value)}
                      className="rounded-xl border-border/60 bg-background/50 focus-visible:ring-primary/40 py-6"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Tell us about your project</label>
                  <Textarea 
                    rows={4} 
                    placeholder="Describe your vision, timeline, and what you hope to create with us..." 
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="rounded-xl border-border/60 bg-background/50 focus-visible:ring-primary/40 p-4 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base hover-lift btn-active-press"
                >
                  {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-secondary/40 border-t border-border/40 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            
            {/* Column 1 - Brand */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <a href="#" className="flex items-center gap-2">
                <span className="font-serif text-2xl font-semibold tracking-wide text-foreground/90">
                  LUMINARY
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground" />
              </a>
              <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
                An organic minimalist creative studio crafting high-end digital and physical experiences with absolute focus, care, and intention.
              </p>
              <div className="flex items-center gap-4 mt-2">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <button 
                      key={idx}
                      onClick={() => handlePlaceholderClick(social.label)}
                      className="h-10 w-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-secondary text-foreground/70 hover:text-foreground transition-colors"
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
              <h4 className="text-xs font-semibold tracking-wider text-accent-foreground uppercase">Navigation</h4>
              <div className="flex flex-col gap-2.5">
                {["Work", "Studio", "Services", "Contact"].map((item) => (
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

            {/* Column 3 - Studio Info */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold tracking-wider text-accent-foreground uppercase">The Studio</h4>
              <div className="flex flex-col gap-2.5 text-sm text-muted-foreground font-light">
                <p>Copenhagen • Tokyo</p>
                <p>hello@luminary.studio</p>
                <p>+45 88 92 11 00</p>
              </div>
            </div>

          </div>

          <div className="h-[1px] bg-border/40 my-12" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground font-light">
            <p>© 2026 Luminary Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={() => handlePlaceholderClick("Privacy Policy")} className="hover:underline">Privacy Policy</button>
              <button onClick={() => handlePlaceholderClick("Terms of Service")} className="hover:underline">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
