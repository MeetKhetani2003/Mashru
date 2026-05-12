import { motion } from "framer-motion";
import { networkStats } from "../data/site";
import { Icon } from "../components/Icon";
import { PageShell, Reveal } from "../components/Motion";
import { Seo } from "../components/Seo";
import { ButtonLink, Metric, PageHero, SectionHeader } from "../components/ui";

const nodes = [
  { label: "Farmers", top: "24%", left: "17%" },
  { label: "Mandi", top: "48%", left: "37%" },
  { label: "J J & Co.", top: "32%", left: "57%" },
  { label: "Traders", top: "64%", left: "66%" },
  { label: "Bulk Buyers", top: "42%", left: "82%" },
];

const flow = ["Farmers", "Local Mandi", "J J & Co.", "Wholesalers", "Buyers", "Dispatch"];

export function MarketNetwork() {
  return (
    <PageShell>
      <Seo
        title="Market Network - Buyer Seller Agri Trading Ecosystem"
        description="Discover the J J & Co. agricultural market network connecting farmers, traders, wholesalers, bulk buyers, and agri commodity purchasers through trust-based commission services."
        path="/market-network"
        image="/images/jj-mandi-network.jpg"
      />
      <PageHero
        eyebrow="Market Network"
        title="A trust-based network across the agri trading ecosystem."
        text="From farmers and mandi participants to wholesalers and bulk buyers, J J & Co. connects market relationships with clear commission coordination."
        image="/images/jj-mandi-network.jpg"
        imageAlt="Indian agricultural mandi network with farmers and traders"
      />

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Trading Ecosystem"
              title="Where relationships, commodities, and timing meet."
              text="Agricultural trading works best when the right people can be reached at the right moment. J J & Co. maintains a practical network of farmers, traders, wholesalers, purchasers, logistics contacts, and commodity participants."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Buyer-seller network", "Regional market reach", "Trust-based references", "Commodity flow coordination"].map((item) => (
                <div key={item} className="flex gap-3 border-t border-[var(--green)]/10 pt-4">
                  <Icon name="network" className="mt-1 h-5 w-5 shrink-0 text-[var(--mustard)]" />
                  <p className="text-sm font-bold leading-7 text-[var(--earth)]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-[540px] overflow-hidden rounded-[2.5rem] bg-[var(--green)] p-6 text-[var(--cream)] shadow-[0_30px_90px_rgba(7,63,47,0.22)]" aria-label="Interactive style market network map">
              <img src="/images/jj-gallery-mandi.jpg" alt="Indian grain market environment" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,163,47,0.28),transparent_26%),linear-gradient(135deg,rgba(7,63,47,0.9),rgba(7,63,47,0.72))]" />
              <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M17 24 C28 34, 31 43, 37 48" stroke="rgba(217,163,47,0.8)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                <path d="M37 48 C44 39, 49 34, 57 32" stroke="rgba(217,163,47,0.8)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                <path d="M57 32 C65 42, 66 54, 66 64" stroke="rgba(217,163,47,0.8)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                <path d="M57 32 C66 34, 74 38, 82 42" stroke="rgba(217,163,47,0.8)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
              </svg>
              {nodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  className="absolute"
                  style={{ top: node.top, left: node.left }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.45 }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[var(--mustard)]/30" />
                    <span className="relative flex h-4 w-4 rounded-full bg-[var(--mustard)] ring-8 ring-[rgba(217,163,47,0.16)]" />
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-black backdrop-blur">
                      {node.label}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--mustard)]">Network View</p>
                <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.06em]">Regional relationships connected through one trusted commission desk.</h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--sand)]/55 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Commodity Flow"
              title="A clear route from supply to purchase coordination."
              text="The network is designed around practical movement: understanding availability, aligning price expectations, coordinating trade, and supporting dispatch readiness."
            />
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {flow.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="relative rounded-[1.75rem] border border-[var(--green)]/10 bg-[var(--cream)]/75 p-5">
                  <span className="text-3xl font-black tracking-[-0.08em] text-[var(--mustard)]">{index + 1}</span>
                  <p className="mt-5 text-lg font-black tracking-[-0.04em] text-[var(--green)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {networkStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <Metric value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--green)] px-5 py-20 text-[var(--cream)] sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Partnership Approach"
              title="Relationships are treated as long-term assets."
              text="The company works with farmers, traders, wholesalers, commodity purchasers, and agri businesses that value fair dealing and repeat trust."
              light
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                "Farmers and producer-side relationships",
                "Mandi traders and commodity participants",
                "Wholesalers and regional buyers",
                "Bulk agri clients and purchasers",
              ].map((item) => (
                <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 text-sm font-black text-[var(--cream)]/82 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 max-w-7xl">
          <ButtonLink to="/contact" variant="light">Connect With The Network</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}