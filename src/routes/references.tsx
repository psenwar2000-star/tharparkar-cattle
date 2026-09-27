import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { sources } from "@/data/sources";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "Scientific references · Tharparkar Cattle" },
      {
        name: "description",
        content: "Citation list for the Tharparkar Cattle encyclopedia, with links to ICAR institutes and papers.",
      },
    ],
  }),
  component: ReferencesPage,
});

const institutions = [
  ["ICAR-NBAGR cattle breeds", "https://nbagr.res.in/cattle-breed"],
  ["ICAR-NBAGR gene bank", "https://nbagr.res.in/gene-bank"],
  ["ICAR-NBAGR somatic cell bank", "https://nbagr.res.in/somatic-bank"],
  ["ICAR-NDRI livestock farm", "https://ndri.res.in/livestock-farm"],
  ["ICAR-NDRI artificial breeding centre", "https://ndri.res.in/artificial-breeding-research-center"],
  ["NDDB Dairy Knowledge Portal — Tharparkar", "https://www.dairyknowledge.in/article/tharparkar"],
  ["ICAR-IVRI", "https://www.ivri.nic.in/"],
  ["FAO Domestic Animal Diversity Information System", "https://www.fao.org/dad-is/en/"],
];

function ReferencesPage() {
  const { t } = useI18n();
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-10">
        <p className="text-sm tracking-[0.16em] text-sage uppercase">{t({ en: "Citations", hi: "उद्धरण" })}</p>
        <h1 className="mt-2 font-display text-5xl">{t({ en: "Scientific references", hi: "वैज्ञानिक संदर्भ" })}</h1>
        <p className="mt-4">
          {t({
            en: "Access date for institutional pages: 27 September 2026. Author order follows the source. ICAR-CIRC and ICAR-CAZRI homepages are not listed as Tharparkar authorities because a breed-specific page on those sites was not verified; the CAZRI herd study is the paper by Patel and colleagues.",
            hi: "संस्थागत पृष्ठों की पहुँच तिथि: 27 सितंबर 2026। लेखक क्रम स्रोत के अनुसार है। ICAR-CIRC और ICAR-CAZRI के मुखपृष्ठ थारपारकर प्राधिकरण के रूप में नहीं रखे गए, क्योंकि उन साइटों पर नस्ल-विशिष्ट पृष्ठ सत्यापित नहीं हुआ; CAZRI झुंड अध्ययन पटेल और सहयोगियों का शोधपत्र है।",
          })}
        </p>
        <h2 className="mt-10 font-display text-3xl">{t({ en: "Institutions", hi: "संस्थाएँ" })}</h2>
        <ul className="mt-3 grid gap-2">
          {institutions.map(([label, href]) => (
            <li key={href}>
              <a className="inline-flex min-h-11 items-center text-earth underline" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="mt-10 font-display text-3xl">{t({ en: "Works cited", hi: "उद्धृत कृतियाँ" })}</h2>
        <ol className="mt-4 grid list-decimal gap-5 pl-5">
          {sources.map((source) => (
            <li key={source.id} className="pl-1">
              <p>
                {source.authors} ({source.year}). {source.title}. <em>{source.journal}</em>. {source.institution}.
                {source.doi ? ` https://doi.org/${source.doi}` : ""}
              </p>
              <a className="inline-flex min-h-11 items-center text-earth underline" href={source.url}>
                {source.url.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Shell>
  );
}
