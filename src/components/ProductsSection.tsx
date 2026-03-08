import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Play, Flame, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import upsImg from "@/assets/wgp-mini-ups.jpg";

const product = {
  name: "WGP Mini UPS",
  originalPrice: "PKR 7,000",
  price: "PKR 5,600",
  discount: "20% OFF",
  image: upsImg,
  desc: "Reliable power backup for routers and CCTV cameras during load shedding.",
  features: [
    "8 to 10 hours backup time",
    "Works with WiFi routers",
    "Keeps CCTV cameras recording during power outages",
    "Plug and play installation",
    "Smart battery protection",
  ],
  whatsapp: "I want to order WGP Mini UPS – PKR 5600",
  videoId: "dQw4w9WgXcQ",
  stock: 12,
  sold: 1840,
  badge: "Best Seller",
};

const ProductsSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="products" className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Product</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">Smart Backup That Solves Real Problems</h2>
          <p className="text-muted-foreground">Benefits you'll feel from day one — not just features on a box.</p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-product hover:shadow-lg transition-all relative"
          >
            <div className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Flame className="h-3 w-3" /> {product.badge}
            </div>
            <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              {product.discount}
            </div>

            <div className="bg-section-alt p-8 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="h-52 object-contain rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">{product.name}</h3>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="price-slash text-lg">{product.originalPrice}</span>
                <span className="font-display font-bold text-2xl text-primary">{product.price}</span>
              </div>

              <div className="flex items-center gap-4 mb-3 text-xs">
                <span className="text-destructive font-semibold flex items-center gap-1 urgency-pulse">
                  🔥 Only {product.stock} left in stock
                </span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> {product.sold.toLocaleString()}+ sold
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 gap-2" onClick={() => setVideoOpen(true)}>
                  <Play className="h-4 w-4" /> Watch Demo
                </Button>
                <Button asChild className="flex-1 btn-glow font-semibold">
                  <a href={`https://wa.me/923424100307?text=${encodeURIComponent(product.whatsapp)}`} target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={() => setVideoOpen(false)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">Product Demo Video</DialogTitle>
          <div className="relative pt-[56.25%]">
            {videoOpen && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${product.videoId}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
