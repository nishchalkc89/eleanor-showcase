import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/5] rounded-2xl bg-muted border border-border overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10" />
                <p className="text-muted-foreground text-sm uppercase tracking-widest">About Image</p>
                <p className="text-muted-foreground/50 text-xs mt-1">Replace placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Eleanor</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Bringing Stories to Life Since{" "}
              <span className="gradient-text">2016</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eleanor, LLC is a U.S.-based, woman- and Black-owned full-service production company established in 2016. The company delivers strategic video production and integrated communications support, managing projects from concept development through final delivery. Eleanor provides compliant, deadline-driven execution across complex, multi-location environments, supporting enterprise brands, agencies, and institutional clients with structured production workflows and operational oversight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
