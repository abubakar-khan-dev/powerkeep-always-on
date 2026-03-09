import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import upsPackage from "@/assets/ups-package.jpg";
import upsPorts from "@/assets/ups-ports.jpg";
import upsDevices from "@/assets/ups-devices.jpg";

const images = [
  { src: upsPackage, alt: "Mini DC UPS — Full Package Contents" },
  { src: upsPorts, alt: "Mini DC UPS — Ports & Connections" },
  { src: upsDevices, alt: "Mini DC UPS — Compatible Devices" },
];

const ProductGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: 1 | -1) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-section-alt">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Product Gallery</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">See Every Detail</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-zoom-in"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-sm border-border overflow-hidden">
          <DialogTitle className="sr-only">Product Image Preview</DialogTitle>
          <AnimatePresence mode="wait">
            {selected !== null && (
              <motion.img
                key={selected}
                src={images[selected].src}
                alt={images[selected].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full max-h-[80vh] object-contain p-4"
              />
            )}
          </AnimatePresence>
          <button onClick={() => navigate(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => navigate(1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductGallery;
