import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border p-3 lg:hidden">
    <div className="flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground truncate">🔥 Sale ends tonight — free delivery</p>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-0.5">
          <ShieldCheck className="h-3 w-3 text-accent" /> 7-Day Guarantee
        </div>
      </div>
      <Button asChild size="sm" className="btn-glow font-semibold shrink-0">
        <a href="#order">Order Now</a>
      </Button>
    </div>
  </div>
);

export default StickyMobileCTA;
