import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";

const OrderSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", qty: "1" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.address) {
      toast.error("Please fill in all fields");
      return;
    }
    const msg = `New Order:%0A${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0AAddress: ${form.address}%0AQty: ${form.qty}`;
    window.open(`https://wa.me/923424100307?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="order" className="py-20 bg-section-alt">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Order Now</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">Get Your PowerKeep Mini UPS</h2>
          <p className="text-muted-foreground">Cash on Delivery available across Pakistan</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Price card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-2 bg-card border border-glow rounded-xl p-6 glow-green self-start"
          >
            <p className="text-sm text-muted-foreground mb-1">Special Price</p>
            <p className="font-display text-4xl font-bold text-primary mb-1">Rs. 3,499</p>
            <p className="text-sm text-muted-foreground line-through mb-6">Rs. 4,999</p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground"><Truck className="h-4 w-4 text-primary" /> Free Delivery Nationwide</div>
              <div className="flex items-center gap-2 text-muted-foreground"><CreditCard className="h-4 w-4 text-primary" /> Cash on Delivery</div>
              <div className="flex items-center gap-2 text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> 6-Month Warranty</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={handleSubmit} className="md:col-span-3 bg-card border border-border rounded-xl p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground">Full Name</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-secondary border-border text-foreground" />
              </div>
              <div>
                <Label className="text-foreground">Phone Number</Label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03XX-XXXXXXX" className="bg-secondary border-border text-foreground" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground">City</Label>
                <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Lahore, Karachi..." className="bg-secondary border-border text-foreground" />
              </div>
              <div>
                <Label className="text-foreground">Quantity</Label>
                <Input type="number" min="1" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} className="bg-secondary border-border text-foreground" />
              </div>
            </div>
            <div>
              <Label className="text-foreground">Delivery Address</Label>
              <Textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Full delivery address" className="bg-secondary border-border text-foreground" rows={3} />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold text-base">
              Place Order via WhatsApp
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
