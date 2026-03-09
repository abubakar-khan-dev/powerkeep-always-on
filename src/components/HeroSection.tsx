import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Truck, Users } from "lucide-react";
import upsHero from "@/assets/ups-ports.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center pt-8 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-1.5 text-sm font-semibold mb-5 urgency-pulse"
          >
            🔥 Launch Sale — Ends Tonight
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-5 text-foreground">
            Never Let Power Outages Stop Your{" "}
            <span className="text-gradient-blue">Internet Again</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-5">
            Keep your WiFi router and CCTV cameras running during load shedding — trusted by <strong className="text-foreground">3,200+ customers</strong> across Pakistan.
          </p>

          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-primary fill-primary" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">4.9/5 from 320+ reviews</span>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-2 font-medium">⏳ Sale ends in:</p>
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild size="lg" className="btn-glow font-semibold text-base px-8">
              <a href="#order">🛒 Order Now — Free Delivery</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary text-base px-8">
              <a href="#products">View Product</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> 7-Day Guarantee</span>
            <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-accent" /> Free Delivery</span>
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-accent" /> 3,200+ Customers</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center relative"
        >
          <div className="absolute -top-2 right-4 z-10 bg-destructive text-destructive-foreground rounded-full w-16 h-16 flex flex-col items-center justify-center font-display font-bold text-xs shadow-lg">
            <span className="text-lg leading-none">20%</span>
            <span>OFF</span>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl scale-90 group-hover:scale-100 transition-transform duration-500" />
            <img
              src={upsPackage}
              alt="Mini DC UPS Package with accessories"
              loading="eager"
              className="relative w-72 sm:w-80 lg:w-96 rounded-2xl shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)] group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
