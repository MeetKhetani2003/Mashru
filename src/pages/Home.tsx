import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { company, contactPeople, processSteps, products, whyChoose } from "../data/site";
import { Icon, type IconName } from "../components/Icon";
import { PageShell, Reveal } from "../components/Motion";
import { Seo } from "../components/Seo";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { ButtonLink, ImageBand, Metric, SectionHeader } from "../components/ui";

export function Home() {
  return (
    <PageShell>
      <Seo
        title="J J & Co. | Agricultural Commission Agents Since 1977"
        description="J J & Co. is a trusted Indian agricultural commission agent company serving groundnuts, grains, pulses, agri commodities, traders, farmers, wholesalers, and bulk buyers since 1977."
        path="/"
      />

      <section className="relative isolate min-h-screen overflow-hidden bg-[var(--green)] text-[var(--cream)]">
        <motion.img
          src={company.heroImage}
          alt="Indian agricultural commodity trading mandi with groundnuts and grain sacks"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
          loading="eager"
          decoding="async"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,45,34,0.96),rgba(7,63,47,0.77)_48%,rgba(7,63,47,0.35))]" />
        <motion.div
          className="absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-[var(--mustard)]/22 blur-3xl"
          animate={{ y: [0, -28, 0], x: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-[0.34em] text-[var(--mustard)]">All types of agri products</p>
            <h1 className="text-balance text-6xl font-black tracking-[-0.085em] sm:text-7xl md:text-8xl lg:text-9xl">J J &amp; Co.</h1>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Trusted Agricultural Commission Agents Since 1977
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cream)]/82 md:text-xl">
              Groundnuts, grains, pulses, and agri commodities traded through transparent commission services, strong mandi relationships, and generations of business trust.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/services" variant="light">Explore Services</ButtonLink>
              <ButtonLink to="/contact" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-[var(--green)]">Contact Us</ButtonLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <ImageBand src="/images/jj-handshake.jpg" alt="Farmer and commodity trader handshake beside agri sacks" className="h-[480px]" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Company Introduction"
              title="A commission agent business built on market relationships, not shortcuts."
              text="Since 1977, J J & Co. has supported farmers, traders, wholesalers, buyers, and agricultural businesses with dependable commission services across the mandi ecosystem. The company combines traditional relationship-led trust with modern coordination and clear communication."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="flex gap-3 border-t border-[var(--green)]/10 pt-4">
                  <Icon name="leaf" className="mt-1 h-5 w-5 shrink-0 text-[var(--mustard)]" />
                  <p className="text-sm font-bold leading-7 text-[var(--earth)]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--sand)]/60 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Trusted by agricultural businesses that value clear dealing."
              text="Every trade depends on reputation. Our role is to keep information, coordination, and expectations aligned between the people who grow, sell, buy, and move commodities."
            />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "shield", title: "Transparent Commission", text: "Straightforward terms and open communication from inquiry to follow-up." },
              { icon: "mandi", title: "Strong Mandi Network", text: "Relationships across market participants, traders, and bulk commodity buyers." },
              { icon: "grain", title: "Commodity Expertise", text: "Focused understanding of groundnuts, grains, pulses, seeds, and seasonal crops." },
              { icon: "users", title: "Long-Term Clients", text: "A relationship-first business serving 400+ clients and trade connections." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group h-full border-t border-[var(--green)]/12 pt-6 transition duration-300 hover:-translate-y-1">
                  <Icon name={item.icon as IconName} className="h-8 w-8 text-[var(--mustard)]" />
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.045em] text-[var(--green)]">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--earth)]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--green)] px-5 py-20 text-[var(--cream)] sm:px-8 md:py-28 lg:px-10">
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_12%_20%,rgba(217,163,47,0.4),transparent_28%),radial-gradient(circle_at_86%_78%,rgba(255,248,232,0.16),transparent_26%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <Metric value="400+" label="Clients, buyers, traders, and agricultural relationships served through years of market work." light />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Client Trust"
              title="Built for repeat business, references, and dependable commodity flow."
              text="J J & Co. supports both traditional mandi relationships and modern bulk agri inquiries with the same core principle: deal clearly, coordinate responsibly, and protect trust over the long term."
              light
            />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Since 1977"
              title="Decades in the market, one consistent promise."
              text="Old trust remains valuable when paired with responsive communication and organized coordination. That is how J J & Co. continues to serve the agri trade ecosystem."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <Metric value="47+" label="Years of agricultural market presence" />
            </Reveal>
            <Reveal delay={0.08}>
              <Metric value="1977" label="Founded with commission agent roots" />
            </Reveal>
            <Reveal delay={0.16}>
              <Metric value="All" label="Types of agri product trading and commission services" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)]/55 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Product Categories"
              title="Focused in groundnuts, grains, pulses, and active agri commodities."
              text="From seasonal arrivals to bulk requirements, product support is guided by market availability, quality understanding, and trusted counterparties."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product, index) => (
              <Reveal key={product.title} delay={index * 0.05}>
                <Link to="/products" className="group block overflow-hidden rounded-[1.75rem] bg-[var(--green)] text-white shadow-[0_25px_70px_rgba(22,42,31,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mustard)]">
                  <div className="relative h-72 overflow-hidden">
                    <img src={product.image} alt={product.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,63,47,0.04),rgba(7,63,47,0.86))]" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-3xl font-black tracking-[-0.06em]">{product.title}</h3>
                      <p className="mt-3 text-sm font-semibold leading-6 text-white/78">{product.summary}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Trading Process"
              title="A clear process for commission and trading coordination."
              text="The goal is to reduce confusion and keep every stakeholder aligned through each stage of the commodity transaction."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="relative border-l border-[var(--green)]/14 pl-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6">
                  <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--mustard)] text-xs font-black text-[var(--green)] lg:-top-3 lg:left-0">{index + 1}</span>
                  <h3 className="text-2xl font-black tracking-[-0.05em] text-[var(--green)]">{step.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--earth)]">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)]/50 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Testimonials"
              title="Confidence built through repeated market dealings."
              text="Clients value clear communication, trusted references, and the practical market sense that comes from decades inside the agricultural trade."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--green)] p-8 text-[var(--cream)] shadow-[0_30px_100px_rgba(7,63,47,0.22)] md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <SectionHeader
              eyebrow="Business Inquiry"
              title="Planning a bulk agri purchase or looking for reliable commission support?"
              text="Speak with the J J & Co. team for groundnuts, grains, pulses, seasonal commodities, and trading coordination."
              light
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink to="/contact" variant="light">Contact Us</ButtonLink>
              <ButtonLink to={`https://wa.me/91${contactPeople[0].phone}`} variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-[var(--green)]">
                WhatsApp Inquiry
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-[var(--green)]/10 pt-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeader eyebrow="Contact Preview" title="Direct phone support for business conversations." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contactPeople.map((person) => (
              <a key={person.phone} href={`tel:+91${person.phone}`} className="rounded-3xl border border-[var(--green)]/10 bg-white/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--mustard)] hover:bg-white">
                <p className="font-black text-[var(--green)]">{person.name}</p>
                <p className="mt-2 text-sm font-extrabold text-[var(--mustard)]">{person.phone}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}