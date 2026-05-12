import { motion } from "framer-motion";
import { products } from "../data/site";
import { Icon } from "../components/Icon";
import { PageShell, Reveal, premiumHover } from "../components/Motion";
import { Seo } from "../components/Seo";
import { ButtonLink, PageHero, SectionHeader } from "../components/ui";

export function Products() {
  return (
    <PageShell>
      <Seo
        title="Products - Groundnuts, Grains, Pulses And Agri Commodities"
        description="J J & Co. supports trading and commission services for groundnuts, grains, pulses, seeds, agricultural commodities, and seasonal products."
        path="/products"
        image="/images/jj-groundnuts.jpg"
      />
      <PageHero
        eyebrow="Products"
        title="Agri commodities with market-backed availability."
        text="Groundnuts, grains, pulses, seeds, and seasonal agricultural products supported through experienced trading coordination."
        image="/images/jj-groundnuts.jpg"
        imageAlt="Groundnuts in sacks at an Indian agricultural market"
      />

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Product Categories"
              title="Specialized in core commodity categories that move Indian agri markets."
              text="Product availability depends on season, quality, arrivals, and buyer requirements. J J & Co. helps bring the right counterparties and market context into the transaction."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {products.map((product, index) => (
              <Reveal key={product.title} delay={index * 0.05}>
                <motion.article
                  whileHover={premiumHover}
                  className="group overflow-hidden rounded-[2.25rem] border border-[var(--green)]/10 bg-white/60 shadow-[0_25px_80px_rgba(22,42,31,0.08)]"
                >
                  <div className="grid min-h-[420px] md:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-[260px] overflow-hidden">
                      <img src={product.image} alt={product.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,63,47,0.02),rgba(7,63,47,0.42))]" />
                    </div>
                    <div className="flex flex-col justify-between p-7 md:p-8">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--leaf)]">Trading Availability</p>
                        <h2 className="mt-4 text-4xl font-black tracking-[-0.065em] text-[var(--green)]">{product.title}</h2>
                        <p className="mt-4 text-base font-semibold leading-8 text-[var(--earth)]">{product.summary}</p>
                      </div>
                      <div className="mt-7 space-y-3">
                        {product.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-3 border-t border-[var(--green)]/10 pt-3">
                            <Icon name="leaf" className="h-5 w-5 text-[var(--mustard)]" />
                            <span className="text-sm font-bold text-[var(--green)]/82">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)]/55 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Quality Approach"
              title="Practical checks before pricing, negotiation, and movement."
              text="Commodity trading requires attention to sample condition, grade expectations, moisture, origin, quantity, timing, and market demand. J J & Co. helps clients discuss these factors clearly before moving forward."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Sample and visual quality review support",
              "Seasonal arrival and availability understanding",
              "Market rate and demand context",
              "Bulk quantity and dispatch coordination",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-[2rem] border border-[var(--green)]/10 bg-[var(--cream)]/72 p-6">
                  <span className="text-4xl font-black tracking-[-0.08em] text-[var(--mustard)]">0{index + 1}</span>
                  <p className="mt-4 text-lg font-black leading-7 tracking-[-0.035em] text-[var(--green)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--green)] p-8 text-[var(--cream)] md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <SectionHeader
              eyebrow="Commodity Inquiry"
              title="Looking for a specific agri product or seasonal quantity?"
              text="Connect with J J & Co. for current market guidance and commission-based trading support."
              light
            />
            <div className="lg:text-right">
              <ButtonLink to="/contact" variant="light">Send Product Inquiry</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}