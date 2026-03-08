import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const names = ["Ali M.", "Ayesha K.", "Bilal T.", "Hira S.", "Zain R.", "Nadia F.", "Hamza A.", "Saba N."];
const cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar"];
const products = ["WGP Mini UPS", "YG300 Smart Projector"];

const RecentPurchase = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", product: "", time: "" });

  useEffect(() => {
    const show = () => {
      const mins = Math.floor(Math.random() * 15) + 2;
      setData({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        product: products[Math.floor(Math.random() * products.length)],
        time: `${mins} min ago`,
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const initial = setTimeout(show, 5000);
    const interval = setInterval(show, 18000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-24 left-4 z-40 bg-card border border-border rounded-xl p-3 shadow-lg max-w-[280px]"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <ShoppingBag className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-foreground font-semibold">{data.name} from {data.city}</p>
              <p className="text-[11px] text-muted-foreground">purchased <strong>{data.product}</strong></p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{data.time}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecentPurchase;
