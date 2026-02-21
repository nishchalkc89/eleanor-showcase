import { motion } from "framer-motion";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
            >
              Production Company
            </motion.p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-surface-dark-foreground leading-[1.1] mb-6">
              The Creative Company That Brings{" "}
              <span className="gradient-text">Content Universes™</span>{" "}
              to Life
            </h1>
            <p className="text-surface-dark-foreground/60 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
              Progressive, innovative production company delivering strategic content, integrated communications, and large-scale production.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("#work")}
                className="gradient-bg text-primary-foreground px-8 py-4 rounded-lg font-semibold tracking-wide hover:opacity-90 transition-opacity glow-shadow"
              >
                View Work
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="border border-surface-dark-foreground/20 text-surface-dark-foreground px-8 py-4 rounded-lg font-semibold tracking-wide hover:border-primary/50 hover:text-primary transition-colors"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right: Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-surface-elevated border border-border/10 overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-bg opacity-40" />
                <p className="text-surface-dark-foreground/30 text-sm uppercase tracking-widest">Hero Image / Video</p>
                <p className="text-surface-dark-foreground/20 text-xs mt-1">Replace with /hero-image.png</p>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
