import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const works = [
  { title: "Apple Music Classical" },
  { title: "DoorDash x HBO House of the Dragon" },
  { title: "Garmin Why Do We Run" },
  { title: "Supercell x WWE Supercut" },
];

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Stories & Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[16/10] rounded-xl bg-muted border border-border overflow-hidden cursor-pointer"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10" />
                  <p className="text-muted-foreground/40 text-xs uppercase tracking-widest">Project Thumbnail</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-surface-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-primary text-xs uppercase tracking-widest mb-1">Project</p>
                  <h3 className="text-surface-dark-foreground font-display text-xl font-semibold">
                    {work.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
