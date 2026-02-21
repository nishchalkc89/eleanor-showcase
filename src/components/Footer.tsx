import { Instagram, Linkedin, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-dark border-t border-border/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="text-surface-dark-foreground/50 hover:text-primary text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "https://www.instagram.com/eleanorunlimited/" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/eleanor-global/" },
              { icon: Facebook, href: "https://www.facebook.com/eleanorunlimited/" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-surface-elevated border border-border/10 flex items-center justify-center text-surface-dark-foreground/40 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/10 text-center">
          <p className="text-surface-dark-foreground/30 text-sm">
            © {new Date().getFullYear()} Eleanor, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
