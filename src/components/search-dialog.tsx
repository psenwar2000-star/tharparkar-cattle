import { SiteLink } from "@/components/site-link";
import { useMemo, useState } from "react";
import { pages } from "@/data/pages";
import { sources } from "@/data/sources";
import { useCms } from "@/lib/cms";
import { useI18n } from "@/lib/i18n";

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang } = useI18n();
  const [query, setQuery] = useState("");
  const editorial = useCms((state) => state.records);
  const q = query.trim().toLowerCase();

  const pageHits = useMemo(() => {
    if (!q) return pages.slice(0, 6);
    return pages.filter((page) =>
      `${page.title.en} ${page.title.hi} ${page.lede.en} ${page.lede.hi}`.toLowerCase().includes(q),
    );
  }, [q]);

  const sourceHits = useMemo(() => {
    if (!q) return sources.slice(0, 5);
    return sources.filter((source) =>
      `${source.title} ${source.authors} ${source.summary} ${source.findings}`.toLowerCase().includes(q),
    );
  }, [q]);

  const deskHits = editorial.filter(
    (record) =>
      record.status === "published" &&
      `${record.title} ${record.summary} ${record.authors}`.toLowerCase().includes(q),
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-deep/40 px-4 pt-16" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t({ en: "Search the encyclopedia", hi: "विश्वकोश में खोजें" })}
        className="w-full max-w-2xl rounded-2xl border border-line bg-paper p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={lang === "hi" ? "थारपारकर, दुग्ध, HSP70…" : "Tharparkar, lactation, HSP70…"}
          className="min-h-12 w-full rounded-xl border border-line bg-canvas px-4 text-lg"
        />
        <div className="mt-4 max-h-[60vh] space-y-4 overflow-y-auto">
          <section>
            <h2 className="text-sm tracking-wide text-muted uppercase">{t({ en: "Pages", hi: "पृष्ठ" })}</h2>
            <ul className="mt-2">
              {pageHits.map((page) => (
                <li key={page.id}>
                  <SiteLink to={page.path} onClick={onClose} className="flex min-h-11 items-center rounded-xl px-2 hover:bg-sand">
                    {t(page.title)}
                  </SiteLink>
                </li>
              ))}
              {pageHits.length === 0 ? <li className="px-2 text-muted">{t({ en: "No pages", hi: "कोई पृष्ठ नहीं" })}</li> : null}
            </ul>
          </section>
          <section>
            <h2 className="text-sm tracking-wide text-muted uppercase">{t({ en: "Verified sources", hi: "सत्यापित स्रोत" })}</h2>
            <ul className="mt-2 grid gap-2">
              {sourceHits.map((source) => (
                <li key={source.id} className="rounded-xl border border-line px-3 py-2">
                  <a href={source.url} className="font-semibold text-earth underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
                    {source.title}
                  </a>
                  <p className="text-sm text-muted">
                    {source.authors} · {source.year}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          {q && deskHits.length > 0 ? (
            <section>
              <h2 className="text-sm tracking-wide text-muted uppercase">
                {t({ en: "Editorial desk, this browser only", hi: "संपादकीय डेस्क, केवल यह ब्राउज़र" })}
              </h2>
              <ul className="mt-2">
                {deskHits.map((record) => (
                  <li key={record.id}>
                    <SiteLink to="/research" onClick={onClose} className="flex min-h-11 items-center">
                      {record.title}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
