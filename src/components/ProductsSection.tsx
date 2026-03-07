import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import upsImg from "@/assets/wgp-mini-ups.jpg";
import projectorImg from "@/assets/yg300-projector.jpg";

const products = [
  {
    name: "WGP Mini UPS",
    price: "PKR 5,600",
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
  },
  {
    name: "YG300 Smart Projector",
    price: "PKR 6,500",
    image: projectorImg,
    desc: "Compact multimedia projector perfect for movies, gaming, and presentations.",
    features: [
      "Portable mini projector",
      "Supports HDMI / USB / AV",
      "Connect phone, laptop or TV box",
      "Great for home cinema",
    ],
    whatsapp: "I want to order YG300 Smart Projector – PKR 6500",
    videoId: "dQw4w9WgXcQ",
  },
];

const ProductsSection = () => {
  const [videoOpen, setVideoOpen] = useState<string | null>(null);

  return (
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
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 gap-2" onClick={() => setVideoOpen(p.videoId)}>
                    <Play className="h-4 w-4" /> Watch Demo
                  </Button>
                  <Button asChild className="flex-1 btn-glow font-semibold">
                    <a href={`https://wa.me/923424100307?text=${encodeURIComponent(p.whatsapp)}`} target="_blank" rel="noopener noreferrer">
                      Order on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!videoOpen} onOpenChange={() => setVideoOpen(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">Product Demo Video</DialogTitle>
          <div className="relative pt-[56.25%]">
            {videoOpen && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoOpen}?autoplay=1`}
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
