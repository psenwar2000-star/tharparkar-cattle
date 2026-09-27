import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/shell";
import { SiteLink } from "@/components/site-link";
import { categoryLabels, sources, type SourceCategory } from "@/data/sources";
import { useCms } from "@/lib/cms";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research library · Tharparkar Cattle" },
      {
        name: "description",
        content:
          "Searchable library of verified Tharparkar cattle publications and institutional sources, with methods and limitations.",
      },
    ],
  }),
  component: ResearchPage,
});

const filters: Array<SourceCategory | "all"> = [
  "all",
  "genetics",
  "milk",
  "reproduction",
  "heat",
  "nutrition",
  "morphology",
  "conservation",
  "health",
  "identity",
];

function ResearchPage() {
  const { t, lang } = useI18n();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<SourceCategory | "all">("all");
  const [open, setOpen] = useState<string | null>(null);
  const desk = useCms((state) => state.records.filter((record) => record.status === "published"));

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sources.filter((source) => {
      const categoryOk = filter === "all" || source.category.includes(filter);
      const text = `${source.title} ${source.authors} ${source.summary} ${source.findings}`.toLowerCase();
      return categoryOk && (!q || text.includes(q));
    });
  }, [query, filter]);

  const download = () => {
    const blob = new Blob([JSON.stringify(sources, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "tharparkar-verified-sources.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-sm tracking-[0.16em] text-sage uppercase">{t({ en: "Library", hi: "पुस्तकालय" })}</p>
        <h1 className="mt-2 font-display text-5xl">{t({ en: "Research and publications", hi: "शोध और प्रकाशन" })}</h1>
        <p className="mt-4 max-w-3xl text-lg">
          {t({
            en: "Only sources opened for this edition are listed. A record shows method, main finding and limitation. Open-access files are linked. Paywalled papers link to the DOI, not to a pirated PDF.",
            hi: "केवल वे स्रोत सूचीबद्ध हैं जो इस संस्करण के लिए खोले गए। हर अभिलेख विधि, मुख्य निष्कर्ष और सीमा दिखाता है। खुली फाइलें जुड़ी हैं। भुगतान वाले शोधपत्र DOI से जुड़ते हैं, चोरी की पीडीएफ से नहीं।",
          })}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="min-h-12 min-w-64 flex-1 rounded-xl border border-line bg-paper px-4"
            placeholder={lang === "hi" ? "लेखक, शीर्षक या झुंड" : "Author, title or herd"}
            aria-label={t({ en: "Filter the library", hi: "पुस्तकालय छानें" })}
          />
          <button type="button" onClick={download} className="min-h-12 rounded-xl border border-line bg-paper px-4">
            {t({ en: "Download source JSON", hi: "स्रोत JSON डाउनलोड" })}
          </button>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-11 shrink-0 rounded-full px-4 ${filter === item ? "bg-earth text-paper" : "border border-line bg-paper"}`}
            >
              {item === "all" ? t({ en: "All", hi: "सभी" }) : t(categoryLabels[item])}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted tabular-nums">
          {rows.length} {t({ en: "verified records", hi: "सत्यापित अभिलेख" })}
        </p>
        <ul className="mt-4 grid gap-3">
          {rows.map((source) => {
            const expanded = open === source.id;
            return (
              <li key={source.id} className="rounded-2xl border border-line bg-paper p-5">
                <p className="text-sm text-sage">
                  {source.category.map((item) => t(categoryLabels[item])).join(" · ")} · {source.year}
                </p>
                <h2 className="mt-1 font-display text-2xl">{source.title}</h2>
                <p className="mt-1 text-muted">
                  {source.authors}. {source.journal}. {source.institution}.
                </p>
                <p className="mt-3">{lang === "hi" ? source.summaryHi : source.summary}</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button type="button" className="min-h-11 text-earth underline" onClick={() => setOpen(expanded ? null : source.id)}>
                    {expanded ? t({ en: "Hide detail", hi: "विवरण छिपाएँ" }) : t({ en: "Method, findings, limits", hi: "विधि, निष्कर्ष, सीमा" })}
                  </button>
                  <a className="inline-flex min-h-11 items-center text-earth underline" href={source.url} target="_blank" rel="noreferrer">
                    {t({ en: "Original source", hi: "मूल स्रोत" })}
                  </a>
                  {source.pdf ? (
                    <a className="inline-flex min-h-11 items-center text-earth underline" href={source.pdf} target="_blank" rel="noreferrer">
                      {t({ en: "Open file", hi: "फाइल खोलें" })}
                    </a>
                  ) : null}
                  {source.doi ? <span className="inline-flex min-h-11 items-center text-sm text-muted">DOI {source.doi}</span> : null}
                </div>
                {expanded ? (
                  <div className="mt-4 grid gap-3 text-sm">
                    <p>
                      <strong>{t({ en: "Method. ", hi: "विधि. " })}</strong>
                      {lang === "hi" ? source.methodHi : source.method}
                    </p>
                    <p>
                      <strong>{t({ en: "Findings. ", hi: "निष्कर्ष. " })}</strong>
                      {lang === "hi" ? source.findingsHi : source.findings}
                    </p>
                    <p>
                      <strong>{t({ en: "Limitations. ", hi: "सीमाएँ. " })}</strong>
                      {lang === "hi" ? source.limitationsHi : source.limitations}
                    </p>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <section className="mt-12">
          <h2 className="font-display text-3xl">{t({ en: "Editorial desk records", hi: "संपादकीय डेस्क अभिलेख" })}</h2>
          <p className="mt-2 max-w-3xl text-muted">
            {t({
              en: "These exist only in this browser after someone marks them published on the editorial desk. They are not part of the verified corpus above.",
              hi: "ये केवल इस ब्राउज़र में हैं, जब कोई उन्हें संपादकीय डेस्क पर प्रकाशित चिह्नित करे। वे ऊपर के सत्यापित संग्रह का हिस्सा नहीं हैं।",
            })}
          </p>
          {desk.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-dashed border-line px-4 py-6 text-muted">
              {t({ en: "No locally published records yet.", hi: "अभी कोई स्थानीय प्रकाशित अभिलेख नहीं।" })}{" "}
              <SiteLink to="/editorial" className="text-earth underline">
                {t({ en: "Open the desk", hi: "डेस्क खोलें" })}
              </SiteLink>
            </p>
          ) : (
            <ul className="mt-4 grid gap-3">
              {desk.map((record) => (
                <li key={record.id} className="rounded-2xl border border-earth bg-sand p-4">
                  <p className="text-sm text-earth">{t({ en: "Unverified local addition", hi: "असत्यापित स्थानीय जोड़" })}</p>
                  <h3 className="font-display text-2xl">{record.title}</h3>
                  <p className="text-sm text-muted">
                    {record.authors} · {record.year} · {record.journal}
                  </p>
                  <p className="mt-2">{record.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Shell>
  );
}
