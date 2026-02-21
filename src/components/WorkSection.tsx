import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ✅ Add thumbnail + video
const works = [
  {
    title: "Apple Music Classical",
    thumbnail: "/w1.png",
    video: "#",
  },
  {
    title: "DoorDash x HBO House of the Dragon",
    thumbnail: "/w2.png",
    video: "PASTE-YOUR-SECOND-VIDEO",
  },
  {
    title: "Garmin Why Do We Run",
    thumbnail: "/w3.png",
    video: "PASTE-YOUR-THIRD-VIDEO",
  },
  {
    title: "Supercell x WWE Supercut",
    thumbnail: "/w4.png",
    video: "PASTE-YOUR-FOURTH-VIDEO",
  },
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
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
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
              {/* ✅ Thumbnail Image */}
              <img
                src={work.thumbnail}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Hover text */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-primary text-xs uppercase tracking-widest mb-1">
                    Project
                  </p>
                  <h3 className="text-white font-display text-xl font-semibold">
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