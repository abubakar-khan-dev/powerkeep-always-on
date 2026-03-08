import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ShieldCheck, Truck, Gift } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const OrderSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", qty: "1" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) {
      toast.error("Please fill in all fields");
      return;
    }

    const lines = [
      "New Order – Rawaan Store",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      "",
      "Product Ordered:",
      `WGP Mini UPS – Quantity: ${form.qty}`,
    ];

    window.open(`https://wa.me/923424100307?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="order" className="py-20">
      <div className="container max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <p className="text-destructive font-semibold text-sm uppercase tracking-wider mb-2 urgency-pulse">🔥 Limited Time Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">Don't Miss This Deal</h2>
          <p className="text-muted-foreground mb-4">Sale ends tonight — free delivery included</p>
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit} className="bg-card border-2 border-primary/20 rounded-2xl p-6 sm:p-8 space-y-5 shadow-product"
        >
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-3 flex items-center gap-3 text-sm">
            <Gift className="h-5 w-5 text-accent shrink-0" />
            <span className="text-foreground font-medium">Order today and get <strong>free delivery</strong> + bonus charging cable!</span>
          </div>

          {/* Product summary */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">WGP Mini UPS</span>
              <div className="flex items-baseline gap-2">
                <span className="price-slash text-xs">PKR 7,000</span>
                <span className="text-primary font-bold">PKR 5,600</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Label className="text-muted-foreground text-xs">Quantity</Label>
              <Input type="number" min="1" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} className="w-24" />
            </div>
          </div>

          <div>
            <Label className="text-foreground">Full Name</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </div>
          <div>
            <Label className="text-foreground">Phone Number</Label>
            <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03XX-XXXXXXX" />
          </div>
          <div>
            <Label className="text-foreground">City</Label>
            <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Lahore, Karachi..." />
          </div>

          <Button type="submit" size="lg" className="w-full btn-glow font-semibold text-base">
            🛒 Place Order — Free Delivery
          </Button>

          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-muted-foreground pt-1">
            <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-accent" /> 7-Day Guarantee</span>
            <span className="flex items-center gap-1"><Truck className="h-3.5 w-3.5 text-accent" /> Cash on Delivery</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderSection;
