import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Get in Touch</h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-1">
        {[
          { icon: Phone, label: "Phone / WhatsApp", value: "+92 3424100307" },
          { icon: Mail, label: "Email", value: "abubakkarinam01@gmail.com" },
          { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
        ].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <c.icon className="h-6 w-6 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">{c.label}</p>
            <p className="font-semibold text-foreground text-sm">{c.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
