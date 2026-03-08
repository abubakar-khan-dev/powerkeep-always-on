import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Urgency top bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs sm:text-sm py-2 font-semibold tracking-wide">
        🔥 Launch Sale — Limited Time Offer — Free Delivery Across Pakistan
      </div>
      <nav className={`sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border transition-shadow ${scrolled ? "shadow-md" : ""}`}>
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
            <Button asChild size="sm" className="btn-glow font-semibold">
              <a href="#order">Order Now — Sale Ends Soon</a>
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
              <Button asChild size="sm" className="w-full mt-2 btn-glow">
                <a href="#order" onClick={() => setMobileOpen(false)}>Order Now — Sale Ends Soon</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
