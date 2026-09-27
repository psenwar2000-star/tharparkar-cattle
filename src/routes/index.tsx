import { createFileRoute } from "@tanstack/react-router";
import { TractAtlas } from "@/components/atlas";
import { YieldChart } from "@/components/charts";
import { Shell } from "@/components/shell";
import { SiteLink } from "@/components/site-link";
import { galleryImages } from "@/data/images";
import { pages } from "@/data/pages";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Home,
});

const chapters = [
  ["about", "Introduction"],
  ["characteristics", "Breed characteristics"],
  ["tract", "Native geographical region"],
  ["research", "Scientific research highlights"],
  ["milk", "Milk production research"],
  ["heat", "Heat adaptation"],
  ["genetics", "Genetics and breeding"],
  ["conservation", "Breed conservation"],
  ["references", "Featured scientific publications"],
  ["gallery", "Image gallery"],
] as const;

const chapterHi: Record<string, string> = {
  about: "परिचय",
  characteristics: "नस्ल विशेषताएँ",
  tract: "मूल भौगोलिक क्षेत्र",
  research: "वैज्ञानिक शोध झलक",
  milk: "दुग्ध उत्पादन शोध",
  heat: "ऊष्मा अनुकूलन",
  genetics: "आनुवंशिकी और प्रजनन",
  conservation: "नस्ल संरक्षण",
  references: "चुनिंदा वैज्ञानिक प्रकाशन",
  gallery: "चित्र दीर्घा",
};

function Home() {
  const { t, lang } = useI18n();
  return (
    <Shell>
      <section className="relative min-h-[78vh] overflow-hidden bg-deep text-paper">
        <img
          src="/gallery/hero.jpg"
          alt={
            lang === "hi"
              ? "सफेद से हल्के धूसर पशु, जिसे छायाकार ने थारपारकर बताया। स्थान फाइल पर नहीं है।"
              : "A white to light-grey animal identified by the photographer as Tharparkar. Location is not on the file."
          }
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-deep/60" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 py-12">
          <p className="text-sm tracking-[0.18em] text-sand uppercase">Bos indicus · Rajasthan</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-paper sm:text-7xl">Tharparkar Cattle</h1>
          <p className="mt-4 max-w-2xl text-xl text-paper">
            {t({
              en: "Exploring the heritage, science and conservation of an indigenous Indian cattle breed.",
              hi: "एक देशी भारतीय गोवंश की विरासत, विज्ञान और संरक्षण की खोज।",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SiteLink to="/about" className="inline-flex min-h-12 items-center rounded-full bg-paper px-5 font-semibold text-deep">
              {t({ en: "Explore the breed", hi: "नस्ल देखें" })}
            </SiteLink>
            <SiteLink to="/research" className="inline-flex min-h-12 items-center rounded-full border border-paper px-5 font-semibold text-paper">
              {t({ en: "Discover research", hi: "शोध देखें" })}
            </SiteLink>
          </div>
          <p className="mt-6 max-w-xl text-sm text-sand">
            {t({
              en: "Photograph: Pavanaja, 28 February 2014, CC BY-SA 3.0. Identified by the photographer as Tharparkar. Not a purity certificate, and not documented as the Thar desert.",
              hi: "चित्र: पवनजा, 28 फरवरी 2014, CC BY-SA 3.0। छायाकार की पहचान थारपारकर। शुद्धता प्रमाणपत्र नहीं, और थार मरुस्थल के रूप में प्रलेखित नहीं।",
            })}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="font-display text-4xl">{t({ en: "Ten ways in", hi: "दस प्रवेश" })}</h2>
        <p className="mt-3 max-w-2xl text-muted">
          {t({
            en: "Every scientific number deeper in the site is tied to a herd, a year and a paper. This entrance only points.",
            hi: "साइट के भीतर हर वैज्ञानिक संख्या एक झुंड, एक वर्ष और एक शोधपत्र से जुड़ी है। यह प्रवेश केवल दिशा दिखाता है।",
          })}
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {chapters.map(([id, label], index) => {
            const page = pages.find((item) => item.id === id);
            const href = page?.path ?? `/${id}`;
            return (
              <li key={id}>
                <SiteLink to={href} className="flex min-h-20 items-center gap-4 rounded-2xl border border-line bg-paper px-4 py-3 hover:bg-sand">
                  <span className="font-display text-3xl text-earth tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-semibold">{lang === "hi" ? chapterHi[id] : label}</span>
                    <span className="text-sm text-muted">{page ? t(page.lede).slice(0, 110) : t({ en: "Library, references and photographs.", hi: "पुस्तकालय, संदर्भ और चित्र।" })}</span>
                  </span>
                </SiteLink>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-4xl">{t({ en: "Where the name sits", hi: "नाम कहाँ बैठता है" })}</h2>
          <p className="mt-3 text-muted">
            {t({
              en: "NBAGR prints Rajasthan. NDDB also names Barmer, Jaisalmer, Jodhpur and Kutchchh, and ties older synonyms to Sindh. The sketch does not pretend those places hold equal herds.",
              hi: "NBAGR राजस्थान लिखता है। NDDB बाड़मेर, जैसलमेर, जोधपुर और कच्छ भी नाम लेता है, और पुराने पर्यायों को सिंध से जोड़ता है। रेखाचित्र यह नाटक नहीं करता कि उन स्थानों में समान झुंड हैं।",
            })}
          </p>
          <div className="mt-6">
            <TractAtlas />
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl">{t({ en: "Yields do not agree, and that is the finding", hi: "उत्पादन मेल नहीं खाते, और यही निष्कर्ष है" })}</h2>
          <div className="mt-6">
            <YieldChart />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl">{t({ en: "Photographs with their limits", hi: "अपनी सीमाओं के साथ चित्र" })}</h2>
          <SiteLink to="/gallery" className="min-h-11 text-earth underline">
            {t({ en: "Gallery", hi: "दीर्घा" })}
          </SiteLink>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {galleryImages.slice(0, 2).map((image) => (
            <figure key={image.id} className="overflow-hidden rounded-2xl border border-line bg-paper">
              <img src={image.src} alt={t(image.title)} className="h-72 w-full object-cover" />
              <figcaption className="px-4 py-3 text-sm text-muted">
                <span className="block font-semibold text-ink">{t(image.title)}</span>
                {image.photographer} · {image.license}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Shell>
  );
}
