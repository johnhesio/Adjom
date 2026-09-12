import { useEffect } from "react";
import { SITE } from "./constants";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Hook central de SEO. Cada página chama useSEO() com título, descrição
 * e um path relativo para montar a URL canônica e as tags OpenGraph.
 */
export function useSEO({ title, description, path = "/", jsonLd = null }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE.name}`
      : `${SITE.name} — Sites, sistemas e marcas sob medida`;
    const canonical = `${SITE.domain}${path === "/" ? "" : path}`;
    const desc = description || SITE.description;
    const ogImage = `${SITE.domain}/og-image.jpg`;

    document.title = fullTitle;

    setMeta("name", "description", desc);
    setLink("canonical", canonical);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:site_name", SITE.name);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", ogImage);

    if (jsonLd) {
      setJsonLd("page-jsonld", jsonLd);
    }
  }, [title, description, path, jsonLd]);
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  image: `${SITE.domain}/og-image.jpg`,
  url: SITE.domain,
  description: SITE.description,
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: "BR",
  },
  sameAs: [],
};
