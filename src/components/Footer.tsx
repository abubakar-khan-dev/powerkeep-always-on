import { ShoppingBag } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <ShoppingBag className="h-4 w-4 text-primary" />
        <span className="font-display font-semibold text-foreground">Rawaan Store</span>
      </div>
      <p>Fast delivery across Pakistan</p>
      <p>© 2026 Rawaan Store. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
