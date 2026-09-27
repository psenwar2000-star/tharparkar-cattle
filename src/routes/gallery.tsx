import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import {
  absentGalleries,
  galleryCategoryLabels,
  galleryImages,
  type GalleryCategory,
} from "@/data/images";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo gallery · Tharparkar Cattle" },
      {
        name: "description",
        content:
          "Photographs identified by their photographers as Tharparkar cattle, with licence, date and the limits of visual identification.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [active, setActive] = useState<string | null>(null);
  const categories = Object.keys(galleryCategoryLabels) as GalleryCategory[];
  const images = galleryImages.filter((image) => filter === "all" || image.categories.includes(filter));
  const current = galleryImages.find((image) => image.id === active);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-sm tracking-[0.16em] text-sage uppercase">{t({ en: "Photographs", hi: "चित्र" })}</p>
        <h1 className="mt-2 font-display text-5xl">{t({ en: "Photo gallery", hi: "चित्र दीर्घा" })}</h1>
        <p className="mt-4 max-w-3xl text-lg">
          {t({
            en: "Four Wikimedia files whose uploaders identified the animals as Tharparkar or White Sindhi. Colour is not proof of purity. Empty categories stay empty.",
            hi: "चार विकिमीडिया फाइलें जिनके अपलोडर्स ने पशुओं को थारपारकर या व्हाइट सिंधी बताया। रंग शुद्धता का प्रमाण नहीं। खाली श्रेणियाँ खाली रहती हैं।",
          })}
        </p>
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`min-h-11 shrink-0 rounded-full px-4 ${filter === "all" ? "bg-earth text-paper" : "border border-line bg-paper"}`}
          >
            {t({ en: "All", hi: "सभी" })}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`min-h-11 shrink-0 rounded-full px-4 ${filter === category ? "bg-earth text-paper" : "border border-line bg-paper"}`}
            >
              {t(galleryCategoryLabels[category])}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActive(image.id)}
              className="overflow-hidden rounded-2xl border border-line bg-paper text-left"
            >
              <img src={image.src} alt={t(image.title)} className="h-72 w-full object-cover" />
              <span className="block px-4 py-3">
                <span className="block font-display text-2xl text-ink">{t(image.title)}</span>
                <span className="text-sm text-muted">
                  {image.photographer} · {image.date} · {image.license}
                </span>
              </span>
            </button>
          ))}
        </div>
        <section className="mt-10 rounded-2xl border border-dashed border-line bg-paper p-5">
          <h2 className="font-display text-3xl">{t({ en: "Categories with no verified file", hi: "जिन श्रेणियों में सत्यापित फाइल नहीं" })}</h2>
          <ul className="mt-3 grid gap-2">
            {absentGalleries.map((item) => (
              <li key={item.en}>{t(item)}</li>
            ))}
          </ul>
        </section>
      </div>
      {current ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-deep/80 px-4 py-8" onClick={() => setActive(null)}>
          <figure className="mx-auto max-w-4xl rounded-2xl bg-paper p-3" onClick={(event) => event.stopPropagation()}>
            <img src={current.src} alt={t(current.title)} className="max-h-[70vh] w-full rounded-xl object-contain" />
            <figcaption className="space-y-2 px-2 py-4">
              <h2 className="font-display text-3xl">{t(current.title)}</h2>
              <p>{t(current.description)}</p>
              <p className="text-sm text-muted">{t(current.location)}</p>
              <p className="text-sm text-muted">
                {current.photographer}, {current.date}. {current.license}.
              </p>
              <a className="inline-flex min-h-11 items-center text-earth underline" href={current.sourceUrl}>
                Wikimedia Commons
              </a>
              <button type="button" className="ml-4 min-h-11 underline" onClick={() => setActive(null)}>
                {t({ en: "Close", hi: "बंद करें" })}
              </button>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Shell>
  );
}
