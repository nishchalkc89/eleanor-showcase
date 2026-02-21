import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, DollarSign, Clapperboard, Users } from "lucide-react";

const differentiators = [
  {
    icon: Award,
    text: "Black female-owned production company delivering large-scale campaigns nationwide.",
  },
  {
    icon: DollarSign,
    text: "Experienced managing multi-million-dollar productions with disciplined scheduling and budget control.",
  },
  {
    icon: Clapperboard,
    text: "Combines cinematic quality with structured operational execution.",
  },
  {
    icon: Users,
    text: "Proven capability coordinating union crews, multi-location shoots, and high-impact digital campaigns.",
  },
];

const DifferentiatorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="differentiators" className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Why Eleanor</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What Sets Us Apart
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-8 card-shadow group"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-foreground/80 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
