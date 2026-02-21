import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Clapperboard, Lightbulb, ClipboardList, Video, Sparkles, Share2, Palette, BarChart3, Megaphone, Calculator, MapPin } from "lucide-react";

const services = [
  { icon: Film, title: "Motion Picture & Video Production" },
  { icon: Clapperboard, title: "Teleproduction & Postproduction Services" },
  { icon: Lightbulb, title: "Creative Development & Concept Ideation" },
  { icon: ClipboardList, title: "Pre-production Planning & Logistics Coordination" },
  { icon: Video, title: "On-site Production Execution" },
  { icon: Sparkles, title: "Post-production Editing & VFX Integration" },
  { icon: Share2, title: "Multi-platform Content Delivery" },
  { icon: Palette, title: "Graphic Design Services" },
  { icon: BarChart3, title: "Marketing Consulting Services" },
  { icon: Megaphone, title: "Advertising & Public Relations Support" },
  { icon: Calculator, title: "Production Budgeting & Scheduling Oversight" },
  { icon: MapPin, title: "Multi-location Campaign Coordination" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-dark-foreground">
            Core Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-surface-elevated border border-border/10 rounded-xl p-6 group cursor-default transition-colors hover:border-primary/30"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-surface-dark-foreground font-semibold text-sm leading-snug">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
