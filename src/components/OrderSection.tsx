import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const OrderSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", product: "WGP Mini UPS – PKR 5600", qty: "1" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) {
      toast.error("Please fill in all fields");
      return;
    }
    const msg = `New Order – Rawaan Store\n\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nProduct: ${form.product}\nQuantity: ${form.qty}`;
    window.open(`https://wa.me/923424100307?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="order" className="py-20">
      <div className="container max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Order Now</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">Place Your Order</h2>
          <p className="text-muted-foreground">Cash on Delivery available across Pakistan</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-product"
        >
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
          <div>
            <Label className="text-foreground">Select Product</Label>
            <select
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option>WGP Mini UPS – PKR 5600</option>
              <option>YG300 Smart Projector – PKR 6500</option>
            </select>
          </div>
          <div>
            <Label className="text-foreground">Quantity</Label>
            <Input type="number" min="1" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} />
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-glow font-semibold text-base">
            Order on WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderSection;
