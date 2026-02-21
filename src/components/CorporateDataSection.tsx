import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Hash, FileText, ShieldCheck, MapPin, Calendar } from "lucide-react";

const corporateData = [
  { icon: Building2, label: "Company Name", value: "Eleanor, LLC" },
  { icon: Hash, label: "DUNS Number", value: "Placeholder" },
  { icon: Hash, label: "CAGE Code", value: "Placeholder" },
  { icon: ShieldCheck, label: "Certifications", value: "Woman-Owned, Black-Owned" },
  { icon: Calendar, label: "Year Established", value: "2016" },
  { icon: MapPin, label: "Headquarters", value: "United States" },
  { icon: FileText, label: "Business Type", value: "Full-Service Production Company" },
  {
    icon: FileText,
    label: "NAICS Codes",
    value: "512110 · 512191 · 541810 · 541820 · 541830 · 541613 · 541430",
  },
];

const CorporateDataSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="corporate" className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Company Profile</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Corporate Data
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {corporateData.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className="bg-card border border-border rounded-xl p-6 card-shadow"
            >
              <item.icon className="w-7 h-7 text-primary mb-3" />
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-foreground font-semibold text-sm leading-snug">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateDataSection;
