import { contactPeople, testimonials } from "../data/site";
import { Icon } from "../components/Icon";
import { PageShell, Reveal } from "../components/Motion";
import { Seo } from "../components/Seo";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { ButtonLink, Metric, PageHero, SectionHeader } from "../components/ui";

const clientTypes = [
  "Farmers",
  "Agri Traders",
  "Wholesalers",
  "Bulk Buyers",
  "Commodity Purchasers",
  "Agricultural Businesses",
];

export function Clients() {
  return (
    <PageShell>
      <Seo
        title="Clients - 400+ Agricultural Trade Relationships"
        description="J J & Co. serves 400+ clients including farmers, traders, wholesalers, buyers, agricultural businesses, and commodity purchasers with trusted commission services."
        path="/clients"
        image="/images/jj-handshake.jpg"
      />
      <PageHero
        eyebrow="Clients"
        title="400+ relationships built through clear market dealing."
        text="Our clients include farmers, traders, wholesalers, buyers, agricultural businesses, and commodity purchasers who rely on trusted commission support."
        image="/images/jj-handshake.jpg"
        imageAlt="Trusted agri business handshake near commodity sacks"
      />

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <Metric value="400+" label="Clients, traders, purchasers, and agri business relationships supported by J J & Co." />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Trust Indicators"
              title="Strong relationships are the real infrastructure of agri trade."
              text="J J & Co. is trusted because it protects the basics: fair conversation, reliable follow-up, market awareness, transparent commission, and respect for every participant in the chain."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--sand)]/55 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Testimonials"
              title="Words shaped by repeat business and market confidence."
              text="These testimonial examples reflect the trust signals clients look for when choosing a commission agent: clarity, connection, and practical coordination."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Client Categories"
              title="Serving every side of the agricultural commodity conversation."
              text="The company network is useful because it connects supply, purchase, information, and coordination across different client profiles."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientTypes.map((type, index) => (
              <Reveal key={type} delay={index * 0.05}>
                <div className="group rounded-[2rem] border border-[var(--green)]/10 bg-white/55 p-7 shadow-[0_20px_70px_rgba(22,42,31,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--mustard)] hover:bg-white">
                  <Icon name={index % 2 === 0 ? "users" : "grain"} className="h-8 w-8 text-[var(--mustard)]" />
                  <h2 className="mt-6 text-3xl font-black tracking-[-0.06em] text-[var(--green)]">{type}</h2>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--earth)]">
                    Reliable commission support, buyer-seller connection, and market coordination for {type.toLowerCase()}.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--green)] px-5 py-20 text-[var(--cream)] sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Long-Term Relationships"
              title="The company is designed for clients who return season after season."
              text="A strong commission agent relationship is built over time through dependable communication, market memory, and the discipline to handle every transaction with care."
              light
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              "Transparent expectations before every transaction",
              "Responsive communication with decision makers",
              "Market relationships that strengthen repeat trade",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
                  <span className="text-4xl font-black tracking-[-0.08em] text-[var(--mustard)]">0{index + 1}</span>
                  <p className="mt-5 text-xl font-black leading-8 tracking-[-0.04em]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeader
            eyebrow="Client Reviews"
            title="A practical reputation in a relationship-driven market."
            text="The clearest signal of trust is simple: people continue doing business when the process is transparent and the follow-up is dependable."
          />
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[1.75rem] border border-[var(--green)]/10 bg-white/55 p-6">
                <p className="text-base font-bold leading-7 text-[var(--green)]">"{testimonial.quote}"</p>
                <p className="mt-4 text-sm font-black text-[var(--mustard)]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--sand)] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <SectionHeader
              eyebrow="Become A Client"
              title="Speak with the team for your next agricultural commodity requirement."
              text="Call or WhatsApp to discuss groundnuts, grains, pulses, seasonal crops, and commission service requirements."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink to="/contact">Contact Page</ButtonLink>
              <ButtonLink to={`tel:+91${contactPeople[0].phone}`} variant="secondary">Call Now</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}