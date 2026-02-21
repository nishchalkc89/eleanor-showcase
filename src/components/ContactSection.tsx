import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — UI only
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Get in Touch</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-dark-foreground mb-6">
              Let's Create Together
            </h2>
            <p className="text-surface-dark-foreground/60 text-lg leading-relaxed mb-8">
              Ready to bring your vision to life? Reach out and let's start a conversation.
            </p>

            <a
              href="mailto:info@eleanor.co"
              className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@eleanor.co</span>
            </a>

            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-surface-elevated border border-border/10 flex items-center justify-center text-surface-dark-foreground/50 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-surface-elevated border border-border/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-surface-elevated border border-border/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-surface-elevated border border-border/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-bg text-primary-foreground py-4 rounded-xl font-semibold tracking-wide hover:opacity-90 transition-opacity glow-shadow"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
