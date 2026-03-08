import { motion } from "framer-motion";
import { PlugZap, Cable, Wifi } from "lucide-react";

const steps = [
  { icon: PlugZap, num: "1", title: "Plug UPS into power source" },
  { icon: Cable, num: "2", title: "Connect your router or CCTV camera" },
  { icon: Wifi, num: "3", title: "Internet stays on during load shedding" },
];

const HowItWorksSection = () => (
  <section id="features" className="py-20 bg-section-alt">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Simple Setup, Instant Results</h2>
      </motion.div>

      <div className="grid grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="relative w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
              <s.icon className="h-7 w-7 text-primary" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{s.num}</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">{s.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
