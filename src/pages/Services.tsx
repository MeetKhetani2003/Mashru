import { motion } from "framer-motion";
import { services, processSteps } from "../data/site";
import { Icon, type IconName } from "../components/Icon";
import { PageShell, Reveal, premiumHover } from "../components/Motion";
import { Seo } from "../components/Seo";
import { ButtonLink, PageHero, SectionHeader } from "../components/ui";

export function Services() {
  return (
    <PageShell>
      <Seo
        title="Services - Agricultural Commission And Trading Support"
        description="Explore J J & Co. services including agricultural commission services, commodity trading support, buyer-seller connection, market guidance, pricing assistance, procurement, logistics, and bulk trading support."
        path="/services"
        image="/images/jj-warehouse.jpg"
      />
      <PageHero
        eyebrow="Services"
        title="Commission services for serious agri trade."
        text="Transparent facilitation, practical market guidance, and coordinated buyer-seller support for groundnuts, grains, pulses, and agri commodities."
        image="/images/jj-warehouse.jpg"
        imageAlt="Modern Indian agri commodity warehouse with sacks"
      />

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="What We Do"
              title="Nine service capabilities, one dependable commission partner."
              text="J J & Co. supports agricultural trade through a service model that respects traditional mandi relationships while staying responsive to modern bulk inquiry requirements."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04}>
                <motion.article
                  whileHover={premiumHover}
                  className="group h-full rounded-[2rem] border border-[var(--green)]/10 bg-white/58 p-6 shadow-[0_20px_70px_rgba(22,42,31,0.07)] backdrop-blur transition-colors duration-300 hover:border-[var(--mustard)]/70 hover:bg-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--mustard)]/16 text-[var(--green)] transition duration-300 group-hover:bg-[var(--mustard)]">
                    <Icon name={service.icon as IconName} className="h-7 w-7" />
                  </div>
                  <h2 className="mt-7 text-2xl font-black tracking-[-0.052em] text-[var(--green)]">{service.title}</h2>
                  <p className="mt-4 text-sm font-semibold leading-7 text-[var(--earth)]">{service.description}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)]/55 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="How It Works"
              title="A structured trading support flow."
              text="Every trade has moving parts. Our role is to keep each part visible and coordinated so farmers, traders, wholesalers, and buyers can transact with confidence."
            />
            <ButtonLink to="/contact" className="mt-8">Start A Business Inquiry</ButtonLink>
          </Reveal>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="grid gap-5 rounded-[2rem] border border-[var(--green)]/10 bg-[var(--cream)]/70 p-6 md:grid-cols-[80px_1fr]">
                  <span className="text-5xl font-black tracking-[-0.08em] text-[var(--mustard)]">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.05em] text-[var(--green)]">{step.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-[var(--earth)]">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--green)] p-8 text-[var(--cream)] md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <SectionHeader
              eyebrow="Professional Support"
              title="Need commission support for an agri commodity deal?"
              text="Share your commodity, quantity, quality needs, and timeline. The team will guide you on next steps through the mandi network."
              light
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink to="/products" variant="light">View Products</ButtonLink>
              <ButtonLink to="/contact" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-[var(--green)]">
                Contact Team
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}