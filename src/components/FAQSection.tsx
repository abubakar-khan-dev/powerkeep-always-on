import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How long does the backup last?", a: "The Mini DC UPS provides 6–8 hours of backup depending on the power consumption of your connected device." },
  { q: "Which devices are compatible?", a: "It supports most WiFi routers, ONU/ONT devices, and small CCTV cameras that run on 5V, 9V, or 12V DC." },
  { q: "How long does it take to fully charge?", a: "A full charge takes approximately 3–4 hours." },
  { q: "Is it safe to leave plugged in 24/7?", a: "Yes! It has built-in overcharge protection, short circuit protection, and smart battery management." },
  { q: "Do you deliver across Pakistan?", a: "Yes, we offer nationwide delivery across all major cities in Pakistan with Cash on Delivery available." },
  { q: "What is the warranty?", a: "We offer a 6-month warranty on all Mini UPS units against manufacturing defects." },
];

const FAQSection = () => (
  <section id="faqs" className="py-20">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQs</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
            <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
