import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ahmed R.", text: "My internet never disconnects during load shedding now.", rating: 5 },
  { name: "Sana K.", text: "The projector is amazing for watching movies with family.", rating: 5 },
  { name: "Usman T.", text: "Very useful gadgets and easy to install.", rating: 5 },
  { name: "Fatima A.", text: "Best purchase I made this year. Highly recommended!", rating: 5 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Reviews</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">What Our Customers Say</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-product"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className={`h-4 w-4 ${si < r.rating ? "text-primary fill-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
            <p className="font-semibold text-foreground text-sm">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
