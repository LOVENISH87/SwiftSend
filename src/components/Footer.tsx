import { Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Send className="h-3.5 w-3.5" />
          <span>© 2026 SwiftSend — MIT License</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          <a href="#" className="transition-colors hover:text-foreground">Contact Us</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
