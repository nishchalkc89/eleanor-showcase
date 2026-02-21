import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    client: "U.S. Army",
    via: "(via Agency Partner)",
    date: "2024",
    value: "$1.2M+",
    description: "Delivered end-to-end national recruitment campaign with live-action production and post-production.",
  },
  {
    client: "Comcast NBCUniversal",
    date: "2024",
    value: "$750K+",
    description: "Produced documentary-style branded content featuring multi-city filming.",
  },
  {
    client: "Walmart",
    date: "2024",
    value: "$1M+",
    description: "Executed integrated digital production generating 60+ deliverables.",
  },
  {
    client: "Supercell",
    date: "2024",
    value: "$600K+",
    description: "Produced cinematic commercial content including live-action production and VFX integration.",
  },
];

const PastPerformanceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="performance" className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Track Record</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-dark-foreground">
            Past Performance
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-elevated border border-border/10 rounded-xl p-8 group hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-lg bg-surface-dark-foreground/10 flex items-center justify-center text-surface-dark-foreground/30 text-xs font-bold">
                  LOGO
                </div>
                <span className="gradient-text font-bold text-xl">{project.value}</span>
              </div>
              <h3 className="text-surface-dark-foreground font-display text-xl font-semibold mb-1">
                {project.client}
              </h3>
              {project.via && (
                <p className="text-surface-dark-foreground/40 text-sm mb-2">{project.via}</p>
              )}
              <p className="text-surface-dark-foreground/40 text-sm mb-3">{project.date}</p>
              <p className="text-surface-dark-foreground/60 leading-relaxed text-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastPerformanceSection;
