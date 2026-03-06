import { motion } from "framer-motion";
import { PlugZap, Cable, BatteryCharging } from "lucide-react";

const steps = [
  { icon: PlugZap, num: "01", title: "Plug In", desc: "Plug Mini UPS into power source." },
  { icon: Cable, num: "02", title: "Connect Device", desc: "Connect your router or camera." },
  { icon: BatteryCharging, num: "03", title: "Auto Backup", desc: "When electricity goes out, UPS automatically provides backup." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-section-alt">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Simple 3-Step Setup</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="relative w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
              <s.icon className="h-8 w-8 text-primary" />
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {s.num}
              </span>
            </div>
            <h3 className="font-display font-semibold text-xl mb-2 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
