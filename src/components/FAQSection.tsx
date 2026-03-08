import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Does the UPS work with all routers?", a: "Yes, the WGP Mini UPS is compatible with most WiFi routers, ONU/ONT devices, and CCTV cameras running on 5V, 9V, or 12V DC." },
  { q: "How long does the battery last?", a: "The Mini UPS provides 8–10 hours of backup depending on the power consumption of your connected device." },
  { q: "Can the projector connect to a phone?", a: "Yes! The YG300 projector supports HDMI, USB, and AV inputs. You can connect your phone using an HDMI adapter or cast wirelessly." },
  { q: "Is delivery available across Pakistan?", a: "Yes, we deliver nationwide across all major cities in Pakistan with Cash on Delivery available." },
  { q: "What if I'm not satisfied with my order?", a: "We offer a 7-day money-back guarantee. If you're not happy, contact us on WhatsApp and we'll arrange a full refund — no questions asked." },
  { q: "How long does delivery take?", a: "Standard delivery takes 3–5 business days across Pakistan. We ship within 24 hours of order confirmation." },
  { q: "Is Cash on Delivery available?", a: "Absolutely! COD is available across Pakistan. You pay when the product arrives at your doorstep." },
  { q: "Do you offer warranty?", a: "Yes, all products come with a 30-day replacement warranty for manufacturing defects." },
];

const FAQSection = () => (
  <section id="faqs" className="py-20 bg-section-alt">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQs</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Common Questions Answered</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40">
            <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
