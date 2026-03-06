import { motion } from "framer-motion";
import { Battery, ShieldCheck, Zap, Plug, Box, Router } from "lucide-react";

const features = [
  { icon: Battery, title: "Long Backup Time", desc: "Provides 6–8 hours of continuous power backup for your devices." },
  { icon: ShieldCheck, title: "Smart Battery Protection", desc: "Intelligent BMS protects battery from damage and extends lifespan." },
  { icon: Zap, title: "Overcharge & Short Circuit Protection", desc: "Built-in safety mechanisms for worry-free 24/7 operation." },
  { icon: Plug, title: "Plug & Play Setup", desc: "No technical knowledge required. Just plug in and you're protected." },
  { icon: Box, title: "Compact Portable Design", desc: "Sleek, lightweight design fits anywhere — behind your router or on a shelf." },
  { icon: Router, title: "Wide Compatibility", desc: "Supports WiFi routers, ONU devices, and CCTV cameras." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Features</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Why Choose PowerKeep Mini UPS?</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-green transition-shadow">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
