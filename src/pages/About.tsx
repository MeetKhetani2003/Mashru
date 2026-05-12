import { timeline, values } from "../data/site";
import { Icon } from "../components/Icon";
import { PageShell, Reveal } from "../components/Motion";
import { Seo } from "../components/Seo";
import { ImageBand, Metric, PageHero, SectionHeader } from "../components/ui";

export function About() {
  return (
    <PageShell>
      <Seo
        title="About J J & Co."
        description="Learn about J J & Co., a trusted Indian agricultural commission agent company established in 1977 with strong mandi roots, family values, and transparent trading relationships."
        path="/about"
        image="/images/jj-handshake.jpg"
      />
      <PageHero
        eyebrow="About The Company"
        title="Traditional roots. Professional agricultural trade."
        text="J J & Co. carries forward a commission agent legacy shaped by trust, market knowledge, and long-term relationships since 1977."
        image="/images/jj-handshake.jpg"
        imageAlt="Trusted farmer and trader relationship in an agri market"
      />

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Company History"
              title="A family-oriented business story built inside the mandi ecosystem."
              text="Founded in 1977, J J & Co. grew through consistent dealing, daily market presence, and relationships that travelled from one season to the next. The business has stayed close to its roots while adapting to faster communication, organized procurement coordination, and modern bulk agri requirements."
            />
            <p className="mt-6 text-base leading-8 text-[var(--earth)]">
              The company supports all types of agri product trading and commission services, with a strong focus on groundnuts, grains, pulses, seeds, and seasonal commodities. Every engagement is approached with practical market knowledge and respect for the people behind the trade.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageBand src="/images/jj-mandi-network.jpg" alt="Indian mandi network with farmers and traders" className="h-[520px]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--sand)]/55 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Journey Since 1977"
              title="A timeline of trust, market expertise, and continuity."
              text="The company journey reflects a steady expansion of relationships, commodity categories, and operational coordination."
            />
          </Reveal>
          <div className="mt-14 space-y-8">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.06}>
                <div className="grid gap-5 border-t border-[var(--green)]/12 pt-7 md:grid-cols-[180px_1fr]">
                  <p className="text-5xl font-black tracking-[-0.07em] text-[var(--mustard)]">{item.year}</p>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.05em] text-[var(--green)]">{item.title}</h3>
                    <p className="mt-3 max-w-3xl text-base font-semibold leading-8 text-[var(--earth)]">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2.5rem] bg-[var(--green)] p-8 text-[var(--cream)] md:p-12">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--mustard)]">Vision</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-5xl">To be a trusted bridge in agricultural trade.</h2>
              <p className="mt-6 text-base leading-8 text-[var(--cream)]/75">
                J J & Co. aims to make commodity transactions more dependable for farmers, traders, wholesalers, and buyers through fair commission practices and strong market relationships.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[2.5rem] border border-[var(--green)]/10 bg-white/55 p-8 shadow-[0_25px_80px_rgba(22,42,31,0.08)] md:p-12">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--leaf)]">Mission</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--green)] md:text-5xl">To coordinate agri business with clarity and care.</h2>
              <p className="mt-6 text-base leading-8 text-[var(--earth)]">
                The mission is to provide practical market support, buyer-seller connection, transparent commission guidance, and reliable follow-up across agri commodities.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--green)] px-5 py-20 text-[var(--cream)] sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Core Values"
              title="The principles behind every market conversation."
              text="Premium service in agriculture is not about complexity. It is about dependable relationships, accurate communication, and fair trade conduct."
              light
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                  <Icon name={index % 2 === 0 ? "shield" : "leaf"} className="h-7 w-7 text-[var(--mustard)]" />
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">{value.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--cream)]/72">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Reveal>
            <Metric value="1977" label="Established with agricultural commission roots" />
          </Reveal>
          <Reveal delay={0.08}>
            <Metric value="400+" label="Clients and long-term trading relationships" />
          </Reveal>
          <Reveal delay={0.16}>
            <Metric value="All" label="Types of agri products trading and commission services" />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}