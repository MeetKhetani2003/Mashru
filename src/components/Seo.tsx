import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    element = selector.startsWith("link") ? document.createElement("link") : document.createElement("meta");

    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/property="(.+?)"/)?.[1] ?? "");
    }

    if (selector.includes("name=")) {
      element.setAttribute("name", selector.match(/name="(.+?)"/)?.[1] ?? "");
    }

    if (selector.startsWith("link")) {
      element.setAttribute("rel", "canonical");
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attr, value);
}

export function Seo({ title, description, path = "/", image = "/images/jj-hero-agri-trading.jpg" }: SeoProps) {
  useEffect(() => {
    const siteTitle = title.includes("J J & Co.") ? title : `${title} | J J & Co.`;
    const origin = window.location.origin;
    const canonical = `${origin}${path}`;
    const absoluteImage = image.startsWith("http") ? image : `${origin}${image}`;

    document.title = siteTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow");
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:title"]', "content", siteTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", absoluteImage);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", siteTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", absoluteImage);
    setMeta('link[rel="canonical"]', "href", canonical);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "J J & Co.",
      description,
      foundingDate: "1977",
      telephone: ["+919427740313", "+919427740311", "+919429772799", "+919429772711", "+919723489100", "+919879863087"],
      areaServed: "Indian agricultural markets",
      url: canonical,
      image: absoluteImage,
      sameAs: [],
    };

    let script = document.head.querySelector('#jjco-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "jjco-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [description, image, path, title]);

  return null;
}