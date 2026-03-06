import { motion } from "framer-motion";
import { WifiOff, VideoOff, PhoneOff, ShieldCheck } from "lucide-react";

const problems = [
  { icon: WifiOff, text: "Internet disconnects during power outages" },
  { icon: VideoOff, text: "CCTV cameras stop recording" },
  { icon: PhoneOff, text: "Work meetings get interrupted" },
];

const ProblemSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Tired of Internet Disconnecting During{" "}
          <span className="text-gradient-green">Load Shedding?</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {problems.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <p.icon className="h-7 w-7 text-destructive" />
            </div>
            <p className="text-foreground font-medium">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="bg-card border border-glow rounded-xl p-8 text-center max-w-2xl mx-auto glow-green"
      >
        <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
        <p className="text-lg font-semibold text-foreground">
          Mini DC UPS keeps your devices powered even when electricity goes out.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
