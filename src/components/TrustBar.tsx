import { Truck, CreditCard, ShieldCheck, Users, Star } from "lucide-react";

const badges = [
  { icon: Truck, text: "Free Delivery Across Pakistan" },
  { icon: CreditCard, text: "Cash on Delivery Available" },
  { icon: ShieldCheck, text: "7-Day Money Back Guarantee" },
  { icon: Users, text: "3,200+ Happy Customers" },
];

const TrustBar = () => (
  <section className="py-5 bg-section-alt border-y border-border">
    <div className="container">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <b.icon className="h-5 w-5 text-primary shrink-0" />
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
