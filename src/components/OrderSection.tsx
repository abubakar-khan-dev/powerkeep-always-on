import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ShieldCheck, Truck, Gift, CreditCard, Smartphone, Building2, CheckCircle2, Loader2 } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { supabase } from "@/integrations/supabase/client";

const PRICE = 5600;

const paymentMethods = [
  { id: "jazzcash", label: "JazzCash", icon: Smartphone, color: "text-red-500" },
  { id: "easypaisa", label: "Easypaisa", icon: Smartphone, color: "text-green-500" },
  { id: "bank", label: "Bank Transfer", icon: Building2, color: "text-primary" },
  { id: "cod", label: "Cash on Delivery", icon: CreditCard, color: "text-muted-foreground" },
];

const OrderSection = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", city: "", qty: "1",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const total = PRICE * (parseInt(form.qty) || 1);

  const validate = () => {
    if (!form.name.trim()) { toast.error("Please enter your name"); return false; }
    if (!form.phone.trim() || form.phone.trim().length < 10) { toast.error("Please enter a valid phone number"); return false; }
    if (!form.email.trim() || !form.email.includes("@")) { toast.error("Please enter a valid email"); return false; }
    if (!form.address.trim()) { toast.error("Please enter your shipping address"); return false; }
    if (!form.city.trim()) { toast.error("Please enter your city"); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("process-order", {
        body: {
          customer_name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          address: form.address.trim(),
          city: form.city.trim(),
          quantity: parseInt(form.qty) || 1,
          payment_method: paymentMethods.find(m => m.id === paymentMethod)?.label || paymentMethod,
          total_amount: total,
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setOrderId(data.order_id?.slice(0, 8) || "");
      setSuccess(true);
      toast.success("Order placed successfully!");
    } catch (err: any) {
      console.error("Order error:", err);
      toast.error(err.message || "Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="order" className="py-20">
        <div className="container max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border-2 border-accent/30 rounded-2xl p-8 sm:p-10 text-center shadow-product"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Order Confirmed! 🎉
            </h2>
            <p className="text-muted-foreground mb-1">Order ID: <span className="font-mono font-semibold text-foreground">#{orderId}</span></p>
            <p className="text-muted-foreground mb-6">
              Thank you, <strong>{form.name}</strong>! We'll process your order and contact you at <strong>{form.phone}</strong> shortly.
            </p>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 text-sm text-left space-y-1">
              <p><strong>Product:</strong> WGP Mini UPS × {form.qty}</p>
              <p><strong>Total:</strong> PKR {total.toLocaleString()}</p>
              <p><strong>Payment:</strong> {paymentMethods.find(m => m.id === paymentMethod)?.label}</p>
              <p><strong>Delivery:</strong> {form.address}, {form.city}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">A confirmation email has been sent to the store.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20">
      <div className="container max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <p className="text-destructive font-semibold text-sm uppercase tracking-wider mb-2 urgency-pulse">🔥 Limited Time Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">Don't Miss This Deal</h2>
          <p className="text-muted-foreground mb-4">Sale ends tonight — free delivery included</p>
          <div className="flex justify-center"><CountdownTimer /></div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card border-2 border-primary/20 rounded-2xl p-6 sm:p-8 space-y-5 shadow-product"
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
              <Input type="number" min="1" max="10" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} className="w-24" />
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs text-muted-foreground">Total: </span>
              <span className="font-bold text-foreground">PKR {total.toLocaleString()}</span>
            </div>
          </div>

          {/* Customer info */}
          <div className="grid gap-4">
            <div>
              <Label className="text-foreground">Full Name *</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground">Phone Number *</Label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03XX-XXXXXXX" required />
              </div>
              <div>
                <Label className="text-foreground">Email *</Label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" required />
              </div>
            </div>
            <div>
              <Label className="text-foreground">Shipping Address *</Label>
              <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="House #, Street, Area" required />
            </div>
            <div>
              <Label className="text-foreground">City *</Label>
              <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Lahore, Karachi, Islamabad..." required />
            </div>
          </div>

          {/* Payment method */}
          <div>
            <Label className="text-foreground mb-3 block">Payment Method *</Label>
            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  type="button"
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    paymentMethod === method.id
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  <method.icon className={`h-4 w-4 ${method.color}`} />
                  {method.label}
                </button>
              ))}
            </div>
          </div>

          {/* Payment instructions */}
          {paymentMethod === "jazzcash" && (
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-3 text-sm text-foreground">
              <strong>JazzCash:</strong> After placing your order, send <strong>PKR {total.toLocaleString()}</strong> to <strong>0342-4100307</strong> and share the screenshot on WhatsApp.
            </div>
          )}
          {paymentMethod === "easypaisa" && (
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-3 text-sm text-foreground">
              <strong>Easypaisa:</strong> After placing your order, send <strong>PKR {total.toLocaleString()}</strong> to <strong>0342-4100307</strong> and share the screenshot on WhatsApp.
            </div>
          )}
          {paymentMethod === "bank" && (
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-3 text-sm text-foreground">
              <strong>Meezan Bank:</strong> Transfer <strong>PKR {total.toLocaleString()}</strong> to account <strong>0342-4100307</strong> (Rawaan Store). Share receipt on WhatsApp after placing order.
            </div>
          )}
          {paymentMethod === "cod" && (
            <div className="bg-muted border border-border rounded-xl p-3 text-sm text-foreground">
              <strong>Cash on Delivery:</strong> Pay <strong>PKR {total.toLocaleString()}</strong> when your order arrives at your doorstep.
            </div>
          )}

          <Button type="submit" size="lg" className="w-full btn-glow font-semibold text-base" disabled={loading}>
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Processing...</>
            ) : (
              <>🛒 Pay & Order Now — PKR {total.toLocaleString()}</>
            )}
          </Button>

          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-muted-foreground pt-1">
            <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-accent" /> 7-Day Guarantee</span>
            <span className="flex items-center gap-1"><Truck className="h-3.5 w-3.5 text-accent" /> Free Delivery</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderSection;
