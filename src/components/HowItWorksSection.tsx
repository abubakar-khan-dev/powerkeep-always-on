import { motion } from "framer-motion";
import { PlugZap, Cable, Wifi, Smartphone, PlayCircle, Tv } from "lucide-react";

const upsSteps = [
  { icon: PlugZap, num: "1", title: "Plug UPS into power" },
  { icon: Cable, num: "2", title: "Connect router" },
  { icon: Wifi, num: "3", title: "Internet stays on during load shedding" },
];

const projectorSteps = [
  { icon: Smartphone, num: "1", title: "Connect phone or laptop" },
  { icon: PlayCircle, num: "2", title: "Play movies or videos" },
  { icon: Tv, num: "3", title: "Enjoy big screen anywhere" },
];

const StepRow = ({ title, steps }: { title: string; steps: typeof upsSteps }) => (
  <div>
    <h3 className="font-display font-bold text-xl text-foreground text-center mb-8">{title}</h3>
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
);

const HowItWorksSection = () => (
  <section id="features" className="py-20 bg-section-alt">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Simple Setup, Instant Results</h2>
      </motion.div>

      <div className="space-y-14">
        <StepRow title="Mini UPS" steps={upsSteps} />
        <StepRow title="Smart Projector" steps={projectorSteps} />
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
