import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="text-foreground">Rawaan</span>
          <span className="text-primary">Store</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow font-semibold">
            <a href="#order">Order on WhatsApp</a>
          </Button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-1 font-medium">
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="bg-primary text-primary-foreground w-full mt-2">
              <a href="#order" onClick={() => setMobileOpen(false)}>Order on WhatsApp</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
