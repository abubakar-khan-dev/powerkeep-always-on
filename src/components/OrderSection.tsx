import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const OrderSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [upsSelected, setUpsSelected] = useState(false);
  const [projectorSelected, setProjectorSelected] = useState(false);
  const [upsQty, setUpsQty] = useState("1");
  const [projectorQty, setProjectorQty] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!upsSelected && !projectorSelected) {
      toast.error("Please select at least one product");
      return;
    }

    const lines = ["New Order – Rawaan Store", "", `Name: ${form.name}`, `Phone: ${form.phone}`, `City: ${form.city}`, "", "Products Ordered:"];
    if (upsSelected) lines.push(`WGP Mini UPS – Quantity: ${upsQty}`);
    if (projectorSelected) lines.push(`YG300 Projector – Quantity: ${projectorQty}`);

    window.open(`https://wa.me/923424100307?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
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
          onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-5 shadow-product"
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
            <Label className="text-foreground mb-3 block">Select Products</Label>
            <div className="space-y-4">
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Checkbox id="ups" checked={upsSelected} onCheckedChange={(v) => setUpsSelected(!!v)} />
                  <label htmlFor="ups" className="text-sm font-medium text-foreground cursor-pointer flex-1">
                    WGP Mini UPS – <span className="text-primary font-bold">PKR 5,600</span>
                  </label>
                </div>
                {upsSelected && (
                  <div className="mt-3 pl-7">
                    <Label className="text-muted-foreground text-xs">Quantity</Label>
                    <Input type="number" min="1" value={upsQty} onChange={(e) => setUpsQty(e.target.value)} className="w-24 mt-1" />
                  </div>
                )}
              </div>

              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Checkbox id="projector" checked={projectorSelected} onCheckedChange={(v) => setProjectorSelected(!!v)} />
                  <label htmlFor="projector" className="text-sm font-medium text-foreground cursor-pointer flex-1">
                    YG300 Smart Projector – <span className="text-primary font-bold">PKR 6,500</span>
                  </label>
                </div>
                {projectorSelected && (
                  <div className="mt-3 pl-7">
                    <Label className="text-muted-foreground text-xs">Quantity</Label>
                    <Input type="number" min="1" value={projectorQty} onChange={(e) => setProjectorQty(e.target.value)} className="w-24 mt-1" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full btn-glow font-semibold text-base">
            Place Order on WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderSection;
