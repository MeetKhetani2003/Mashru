import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "../data/site";

export function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--green)]/10 bg-white/55 p-6 shadow-[0_25px_80px_rgba(22,42,31,0.08)] backdrop-blur md:p-10">
      <div className="absolute right-8 top-5 text-7xl font-black tracking-[-0.08em] text-[var(--mustard)]/20" aria-hidden="true">
        "
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.quote}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="text-xl font-extrabold leading-9 tracking-[-0.025em] text-[var(--green)] md:text-3xl md:leading-[1.35]">{testimonial.quote}</p>
          <div className="mt-8 border-t border-[var(--green)]/10 pt-5">
            <p className="font-black text-[var(--green)]">{testimonial.name}</p>
            <p className="mt-1 text-sm font-bold text-[var(--earth)]">{testimonial.role}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex gap-2" aria-label="Testimonial controls">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all ${active === index ? "w-10 bg-[var(--green)]" : "w-2.5 bg-[var(--green)]/18 hover:bg-[var(--mustard)]"}`}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}