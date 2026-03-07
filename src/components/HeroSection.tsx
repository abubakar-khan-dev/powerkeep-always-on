import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import upsImg from "@/assets/wgp-mini-ups.jpg";
import projectorImg from "@/assets/yg300-projector.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6 text-foreground">
            Never Let Power Outages Stop Your{" "}
            <span className="text-gradient-yellow">Internet or Entertainment</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-6">
            Discover smart gadgets that keep your internet running and turn any wall into a cinema.
          </p>

          <ul className="space-y-2 mb-8 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="text-primary font-bold">•</span> 8–10 hours router backup</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">•</span> Portable smart projector</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">•</span> Perfect for homes in Pakistan</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow font-semibold text-base px-8">
              <a href="#order">Order on WhatsApp</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary text-base px-8">
              <a href="#products">View Products</a>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          <img src={upsImg} alt="WGP Mini UPS" className="w-40 sm:w-48 rounded-2xl shadow-product animate-float" />
          <img src={projectorImg} alt="YG300 Smart Projector" className="w-40 sm:w-48 rounded-2xl shadow-product animate-float" style={{ animationDelay: "1.5s" }} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
