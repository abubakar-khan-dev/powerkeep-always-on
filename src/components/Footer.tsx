import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-primary" />
        <span className="font-display font-semibold text-foreground">PowerKeep Mini UPS</span>
      </div>
      <p>© 2026 PowerKeep. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
