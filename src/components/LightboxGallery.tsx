import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { galleryImages } from "../data/site";
import { Reveal } from "./Motion";

export function LightboxGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight" && activeIndex !== null) setActiveIndex((activeIndex + 1) % galleryImages.length);
      if (event.key === "ArrowLeft" && activeIndex !== null) setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.04} className={index === 0 || index === 3 ? "sm:row-span-2" : index === 5 ? "lg:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative h-full w-full overflow-hidden rounded-[1.75rem] bg-[var(--green)] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mustard)]"
              aria-label={`Open image: ${image.title}`}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,63,47,0.02),rgba(7,63,47,0.72))]" />
              <span className="absolute bottom-5 left-5 right-5 text-lg font-black tracking-[-0.035em] text-white">{image.title}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(7,33,25,0.88)] p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
          >
            <button type="button" className="absolute inset-0 cursor-default" onClick={() => setActiveIndex(null)} aria-label="Close gallery" />
            <motion.div
              className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--cream)] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
              initial={{ scale: 0.96, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={activeImage.src} alt={activeImage.alt} className="max-h-[76vh] w-full object-cover" />
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="font-black text-[var(--green)]">{activeImage.title}</p>
                  <p className="text-sm font-semibold text-[var(--earth)]">J J & Co. agricultural trading visuals</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="rounded-full bg-[var(--green)] px-5 py-2 text-sm font-black text-[var(--cream)] transition hover:bg-[var(--green-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mustard)]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}