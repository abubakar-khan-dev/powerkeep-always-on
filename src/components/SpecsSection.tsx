import { motion } from "framer-motion";
import { Battery, Zap, ArrowDownUp, Clock, Laptop, Timer } from "lucide-react";

const specs = [
  { icon: Battery, label: "Battery Capacity", value: "10400mAh" },
  { icon: Zap, label: "Input Voltage", value: "12V" },
  { icon: ArrowDownUp, label: "Output Voltage", value: "5V / 9V / 12V" },
  { icon: Clock, label: "Backup Time", value: "6–8 Hours" },
  { icon: Laptop, label: "Compatibility", value: "WiFi Routers, ONU, CCTV" },
  { icon: Timer, label: "Charging Time", value: "3–4 Hours" },
];

const SpecsSection = () => (
  <section id="specifications" className="py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Specifications</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Technical Details</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {specs.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className="bg-card border border-border rounded-xl p-5 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="font-display font-semibold text-lg text-foreground">{s.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecsSection;
