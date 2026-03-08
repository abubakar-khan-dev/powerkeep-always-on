import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const FinalCTA = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="container max-w-2xl text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">⏳ Don't Miss Out</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          This Launch Discount Won't Last Forever
        </h2>
        <p className="opacity-80 mb-6">
          Over 3,200 customers already bought — limited stock remaining. Order now before the sale ends.
        </p>
        <div className="flex justify-center mb-6">
          <CountdownTimer />
        </div>
        <Button asChild size="lg" variant="secondary" className="font-semibold text-base px-10 text-foreground">
          <a href="#order">🛒 Order Now — Free Delivery</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
