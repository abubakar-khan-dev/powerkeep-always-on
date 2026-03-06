import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ahmed Khan", city: "Lahore", text: "Best investment for my home office. Internet stays on even during 4-hour load shedding.", rating: 5 },
  { name: "Fatima Ali", city: "Karachi", text: "My CCTV cameras never go offline anymore. Peace of mind 24/7!", rating: 5 },
  { name: "Usman Tariq", city: "Islamabad", text: "Compact, powerful, and so easy to set up. Highly recommended for every home.", rating: 5 },
  { name: "Sara Malik", city: "Rawalpindi", text: "Works perfectly with my PTCL router. No more missed Zoom calls!", rating: 4 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-section-alt">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Reviews</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Trusted by Thousands Across Pakistan</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className={`h-4 w-4 ${si < r.rating ? "text-primary fill-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
            <p className="font-semibold text-foreground text-sm">{r.name}</p>
            <p className="text-xs text-muted-foreground">{r.city}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
