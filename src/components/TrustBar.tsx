import { Truck, CreditCard, Users } from "lucide-react";

const badges = [
  { icon: Truck, text: "Fast Delivery Across Pakistan" },
  { icon: CreditCard, text: "Cash on Delivery Available" },
  { icon: Users, text: "Thousands of Happy Customers" },
];

const TrustBar = () => (
  <section className="py-6 bg-section-alt border-y border-border">
    <div className="container">
      <div className="flex flex-wrap justify-center gap-8">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <b.icon className="h-5 w-5 text-primary" />
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
