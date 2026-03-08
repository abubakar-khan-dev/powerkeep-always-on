import { motion } from "framer-motion";
import { WifiOff, VideoOff, BriefcaseBusiness, ArrowDown } from "lucide-react";

const problems = [
  { icon: WifiOff, title: "Internet Disconnects", desc: "WiFi router shuts down instantly during load shedding." },
  { icon: VideoOff, title: "CCTV Stops Recording", desc: "Security cameras go offline when power cuts happen." },
  { icon: BriefcaseBusiness, title: "Work Gets Interrupted", desc: "Online meetings and remote work come to a halt." },
];

const ProblemSection = () => (
  <section className="py-20">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-destructive font-semibold text-sm uppercase tracking-wider mb-2">The Problem</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Tired of Internet Disconnecting During Load Shedding?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Every day, millions of Pakistanis face these frustrating problems.</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {problems.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-destructive/5 border border-destructive/15 rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <p.icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <ArrowDown className="h-8 w-8 text-primary mx-auto mb-4 animate-bounce" />
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 max-w-xl mx-auto">
          <p className="text-lg font-display font-bold text-foreground mb-1">✅ The Solution</p>
          <p className="text-muted-foreground">The WGP Mini UPS keeps your router and CCTV cameras powered — even when electricity goes out.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
