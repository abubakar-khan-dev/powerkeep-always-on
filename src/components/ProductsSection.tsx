import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import upsImg from "@/assets/wgp-mini-ups.jpg";
import projectorImg from "@/assets/yg300-projector.jpg";

const products = [
  {
    name: "WGP Mini UPS",
    price: "PKR 5,600",
    image: upsImg,
    desc: "Reliable backup power for routers and CCTV cameras during load shedding.",
    features: ["8–10 hours battery backup", "Plug and play installation", "Works with most routers", "Smart battery protection"],
    whatsapp: "I want to order WGP Mini UPS – PKR 5600",
  },
  {
    name: "YG300 Smart Projector",
    price: "PKR 6,500",
    image: projectorImg,
    desc: "Portable multimedia projector for movies, gaming and presentations.",
    features: ["Compact portable design", "Supports HDMI / USB / AV", "Perfect for home cinema", "HD multimedia projection"],
    whatsapp: "I want to order YG300 Smart Projector – PKR 6500",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Products</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Smart Gadgets for Pakistani Homes</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {products.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-product hover:shadow-lg transition-shadow"
          >
            <div className="bg-section-alt p-8 flex items-center justify-center">
              <img src={p.image} alt={p.name} className="h-52 object-contain rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">{p.name}</h3>
              <p className="font-display font-bold text-xl text-primary mb-3">{p.price}</p>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-glow font-semibold">
                <a href={`https://wa.me/923424100307?text=${encodeURIComponent(p.whatsapp)}`} target="_blank" rel="noopener noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
