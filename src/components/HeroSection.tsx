import { motion } from "framer-motion";
import { Zap, Plug, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import productImg from "@/assets/product-hero.png";

const benefits = [
  { icon: Zap, text: "6–8 Hours Backup" },
  { icon: Plug, text: "Plug & Play Installation" },
  { icon: Wifi, text: "Works with Most Routers" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-hero-gradient">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Never Let Your Internet{" "}
              <span className="text-gradient-green">Go Down Again.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Mini DC UPS keeps your WiFi router and CCTV cameras running during power outages for up to 6–8 hours.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold text-base px-8">
                <a href="#order">Order Now</a>
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary text-base px-8">
                    ▶ Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl bg-card border-border p-2">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                    <p className="text-center">Demo video placeholder<br/>Add your YouTube embed here</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <b.icon className="h-5 w-5 text-primary" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={productImg}
              alt="PowerKeep Mini DC UPS device"
              className="w-full max-w-md animate-float drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
