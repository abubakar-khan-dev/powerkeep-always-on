import { motion } from "framer-motion";
import { ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const guarantees = [
  { icon: ShieldCheck, title: "7-Day Money Back Guarantee", desc: "Not satisfied? Get a full refund — no questions asked." },
  { icon: RotateCcw, title: "Easy Returns", desc: "Hassle-free return process with free pickup from your doorstep." },
  { icon: Headphones, title: "WhatsApp Support", desc: "Get help anytime via WhatsApp — real humans, not bots." },
];

const GuaranteeSection = () => (
  <section className="py-16">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Risk-Free Purchase</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Try It Completely Risk-Free</h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {guarantees.map((g, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <g.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-1">{g.title}</h3>
            <p className="text-sm text-muted-foreground">{g.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
