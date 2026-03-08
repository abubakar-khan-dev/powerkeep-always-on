import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ahmed R.", city: "Lahore", text: "My internet never disconnects during load shedding now. Best purchase this year!", rating: 5 },
  { name: "Sana K.", city: "Karachi", text: "The projector is amazing for watching movies with family. Kids love it!", rating: 5 },
  { name: "Usman T.", city: "Islamabad", text: "Very useful gadgets and easy to install. Ordered for all 3 of my offices.", rating: 5 },
  { name: "Fatima A.", city: "Faisalabad", text: "Best purchase I made this year. Customer service on WhatsApp is top notch.", rating: 5 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-section-alt">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Social Proof</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">What Our Customers Say</h2>
      </motion.div>

      {/* Aggregate rating */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mb-10"
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-primary fill-primary" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">4.9/5 based on <strong className="text-foreground">320+ reviews</strong></span>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-product relative"
          >
            <Quote className="h-8 w-8 text-primary/10 absolute top-4 right-4" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className={`h-4 w-4 ${si < r.rating ? "text-primary fill-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.city}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social proof counter */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mt-10"
      >
        <p className="text-muted-foreground text-sm">
          🛒 <strong className="text-foreground">3,200+</strong> customers bought from Rawaan Store this month
        </p>
      </motion.div>
    </div>
  </section>
);

export default ReviewsSection;
