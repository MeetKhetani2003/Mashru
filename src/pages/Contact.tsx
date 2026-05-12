import { FormEvent, useMemo, useState } from "react";
import { contactPeople } from "../data/site";
import { Icon, type IconName } from "../components/Icon";
import { PageShell, Reveal } from "../components/Motion";
import { Seo } from "../components/Seo";
import { ButtonLink, PageHero, SectionHeader } from "../components/ui";

type Inquiry = {
  name: string;
  phone: string;
  commodity: string;
  quantity: string;
  message: string;
};

const initialInquiry: Inquiry = {
  name: "",
  phone: "",
  commodity: "",
  quantity: "",
  message: "",
};

export function Contact() {
  const [inquiry, setInquiry] = useState(initialInquiry);
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = useMemo(() => {
    const message = [
      "J J & Co. business inquiry",
      `Name: ${inquiry.name || "-"}`,
      `Phone: ${inquiry.phone || "-"}`,
      `Commodity: ${inquiry.commodity || "-"}`,
      `Quantity: ${inquiry.quantity || "-"}`,
      `Message: ${inquiry.message || "-"}`,
    ].join("%0A");

    return `https://wa.me/91${contactPeople[0].phone}?text=${message}`;
  }, [inquiry]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <PageShell>
      <Seo
        title="Contact J J & Co."
        description="Contact J J & Co. for agricultural commission services, agri product trading, groundnuts, grains, pulses, seasonal commodities, procurement coordination, and bulk trading inquiries."
        path="/contact"
        image="/images/jj-warehouse.jpg"
      />
      <PageHero
        eyebrow="Contact"
        title="Start a clear agricultural business conversation."
        text="Call, WhatsApp, or send an inquiry for commission services, trading support, groundnuts, grains, pulses, and agri commodities."
        image="/images/jj-warehouse.jpg"
        imageAlt="Agri commodity warehouse for trading support"
      />

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Business Inquiry"
              title="Share your commodity requirement."
              text="Use the form to prepare a WhatsApp inquiry with your commodity, quantity, and message. You can also call any team member directly."
            />
            <form onSubmit={handleSubmit} className="mt-10 rounded-[2.5rem] border border-[var(--green)]/10 bg-white/62 p-6 shadow-[0_25px_80px_rgba(22,42,31,0.08)] md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-black text-[var(--green)]">Name</span>
                  <input
                    required
                    value={inquiry.name}
                    onChange={(event) => setInquiry((value) => ({ ...value, name: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-[var(--green)]/10 bg-[var(--cream)] px-4 py-3 text-base font-semibold text-[var(--green)] outline-none transition focus:border-[var(--mustard)]"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-black text-[var(--green)]">Phone</span>
                  <input
                    required
                    inputMode="tel"
                    value={inquiry.phone}
                    onChange={(event) => setInquiry((value) => ({ ...value, phone: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-[var(--green)]/10 bg-[var(--cream)] px-4 py-3 text-base font-semibold text-[var(--green)] outline-none transition focus:border-[var(--mustard)]"
                    placeholder="Mobile number"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-black text-[var(--green)]">Commodity</span>
                  <input
                    value={inquiry.commodity}
                    onChange={(event) => setInquiry((value) => ({ ...value, commodity: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-[var(--green)]/10 bg-[var(--cream)] px-4 py-3 text-base font-semibold text-[var(--green)] outline-none transition focus:border-[var(--mustard)]"
                    placeholder="Groundnuts, grains, pulses"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-black text-[var(--green)]">Quantity</span>
                  <input
                    value={inquiry.quantity}
                    onChange={(event) => setInquiry((value) => ({ ...value, quantity: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-[var(--green)]/10 bg-[var(--cream)] px-4 py-3 text-base font-semibold text-[var(--green)] outline-none transition focus:border-[var(--mustard)]"
                    placeholder="Approx. requirement"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="text-sm font-black text-[var(--green)]">Message</span>
                <textarea
                  value={inquiry.message}
                  onChange={(event) => setInquiry((value) => ({ ...value, message: event.target.value }))}
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-[var(--green)]/10 bg-[var(--cream)] px-4 py-3 text-base font-semibold text-[var(--green)] outline-none transition focus:border-[var(--mustard)]"
                  placeholder="Tell us about your trading, procurement, or commission service requirement."
                />
              </label>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--green)] px-7 text-sm font-black text-[var(--cream)] transition hover:bg-[var(--green-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mustard)]"
                >
                  Send Inquiry On WhatsApp
                </button>
                {submitted && <p className="text-sm font-bold text-[var(--leaf)]">WhatsApp inquiry opened in a new tab.</p>}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2.5rem] bg-[var(--green)] p-6 text-[var(--cream)] shadow-[0_30px_90px_rgba(7,63,47,0.22)] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--mustard)]">Call Directly</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.065em] md:text-5xl">Team contacts</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contactPeople.map((person) => (
                  <a key={person.phone} href={`tel:+91${person.phone}`} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
                    <p className="text-base font-black">{person.name}</p>
                    <p className="mt-2 text-sm font-extrabold text-[var(--mustard)]">{person.phone}</p>
                  </a>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to={`tel:+91${contactPeople[0].phone}`} variant="light">Click To Call</ButtonLink>
                <ButtonLink to={`https://wa.me/91${contactPeople[0].phone}`} variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-[var(--green)]">
                  WhatsApp CTA
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--sand)]/55 px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Business Information"
              title="Commission support for farmers, traders, wholesalers, and buyers."
              text="J J & Co. serves Indian agricultural market relationships and can share exact visit or meeting details directly on call or WhatsApp."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { icon: "grain", title: "Product Focus", text: "Groundnuts, grains, pulses, seeds, and seasonal agri commodities." },
              { icon: "mandi", title: "Market Focus", text: "Mandi network, buyer-seller connection, and regional trading relationships." },
              { icon: "shield", title: "Business Focus", text: "Transparent commission system, reliable coordination, and long-term trust." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="rounded-[2rem] border border-[var(--green)]/10 bg-[var(--cream)]/72 p-7">
                  <Icon name={item.icon as IconName} className="h-8 w-8 text-[var(--mustard)]" />
                  <h3 className="mt-6 text-2xl font-black tracking-[-0.05em] text-[var(--green)]">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--earth)]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Map"
              title="Serving agricultural market relationships across regional mandi networks."
              text="The embedded map indicates the broader agricultural market region. For exact visit coordination, please connect directly with the J J & Co. team."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2.5rem] border border-[var(--green)]/10 bg-white shadow-[0_25px_80px_rgba(22,42,31,0.08)]">
              <iframe
                title="J J & Co. regional agricultural market map"
                src="https://www.google.com/maps?q=Gujarat%20Agricultural%20Market%20India&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}