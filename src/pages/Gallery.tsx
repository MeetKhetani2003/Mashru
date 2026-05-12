import { LightboxGallery } from "../components/LightboxGallery";
import { PageShell, Reveal } from "../components/Motion";
import { Seo } from "../components/Seo";
import { PageHero, SectionHeader } from "../components/ui";

export function Gallery() {
  return (
    <PageShell>
      <Seo
        title="Gallery - Agricultural Commodities And Mandi Operations"
        description="View premium J J & Co. gallery visuals featuring agricultural commodities, groundnuts, grains, pulses, market environments, warehouse operations, and Indian mandi trading atmosphere."
        path="/gallery"
        image="/images/jj-gallery-mandi.jpg"
      />
      <PageHero
        eyebrow="Gallery"
        title="Agriculture visuals with commodity market depth."
        text="A cinematic look at groundnuts, grains, pulses, mandi environments, warehouse coordination, and relationship-led agri trading."
        image="/images/jj-gallery-mandi.jpg"
        imageAlt="Wide Indian grain market with commodity sacks"
      />

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Visual Story"
              title="Commodity textures, market environments, and trading operations."
              text="The gallery brings together the agricultural atmosphere that defines J J & Co.: grounded, professional, active, and relationship-led. Select any image to open the lightbox."
            />
          </Reveal>
          <div className="mt-12">
            <LightboxGallery />
          </div>
        </div>
      </section>
    </PageShell>
  );
}