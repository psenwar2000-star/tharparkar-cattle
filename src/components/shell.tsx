import { SiteLink } from "@/components/site-link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { SearchDialog } from "@/components/search-dialog";
import { pages } from "@/data/pages";
import { useI18n, type Lang } from "@/lib/i18n";

const groups = [
  {
    id: "breed",
    label: { en: "The breed", hi: "नस्ल" },
    ids: ["about", "origin", "tract"],
  },
  {
    id: "identity",
    label: { en: "Identity", hi: "पहचान" },
    ids: ["characteristics", "identification", "morphology", "coat"],
  },
  {
    id: "production",
    label: { en: "Production", hi: "उत्पादन" },
    ids: ["milk", "composition", "reproduction"],
  },
  {
    id: "science",
    label: { en: "Science", hi: "विज्ञान" },
    ids: ["genetics", "heat", "nutrition", "health"],
  },
  {
    id: "record",
    label: { en: "Record", hi: "अभिलेख" },
    ids: ["conservation"],
    extra: [
      { href: "/research", en: "Research library", hi: "शोध पुस्तकालय" },
      { href: "/gallery", en: "Photo gallery", hi: "चित्र दीर्घा" },
      { href: "/references", en: "Scientific references", hi: "वैज्ञानिक संदर्भ" },
      { href: "/about-site", en: "About this website", hi: "इस वेबसाइट के बारे में" },
    ],
  },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>("breed");
  return (
    <div className="grid gap-2">
      {groups.map((group) => (
        <div key={group.id} className="rounded-2xl border border-line bg-paper">
          <button
            type="button"
            className="flex min-h-11 w-full items-center justify-between px-4 text-left font-semibold"
            aria-expanded={open === group.id}
            onClick={() => setOpen(open === group.id ? null : group.id)}
          >
            {t(group.label)}
            <span className="text-muted">{open === group.id ? "–" : "+"}</span>
          </button>
          {open === group.id ? (
            <ul className="grid gap-1 px-3 pb-3">
              {group.ids.map((id) => {
                const page = pages.find((item) => item.id === id);
                if (!page) return null;
                return (
                  <li key={id}>
                    <SiteLink
                      to={page.path}
                      onClick={onNavigate}
                      className="flex min-h-11 items-center rounded-xl px-2 hover:bg-sand"
                    >
                      {t(page.title)}
                    </SiteLink>
                  </li>
                );
              })}
              {group.extra?.map((item) => (
                <li key={item.href}>
                  <SiteLink
                    to={item.href}
                    onClick={onNavigate}
                    className="flex min-h-11 items-center rounded-xl px-2 hover:bg-sand"
                  >
                    {t(item)}
                  </SiteLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useI18n();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:p-3">
        {t({ en: "Skip to content", hi: "सामग्री पर जाएँ" })}
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line bg-paper lg:hidden"
            aria-label={t({ en: "Open menu", hi: "मेनू खोलें" })}
            onClick={() => setMenu(true)}
          >
            <Menu aria-hidden />
          </button>
          <SiteLink to="/" className="min-w-0 flex-1">
            <p className="font-display text-xl leading-none text-ink sm:text-2xl">Tharparkar Cattle</p>
            <p className="mt-1 text-sm text-muted">
              {t({ en: "Discover. Understand. Preserve.", hi: "जानें. समझें. संरक्षित करें." })}
            </p>
          </SiteLink>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearch(true)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-paper px-3"
            >
              <Search aria-hidden size={18} />
              <span className="hidden sm:inline">{t({ en: "Search", hi: "खोज" })}</span>
            </button>
            <div className="flex rounded-xl border border-line bg-paper p-1">
              {(["en", "hi"] as Lang[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`min-h-11 rounded-lg px-3 ${lang === code ? "bg-earth text-paper" : "text-ink"}`}
                  aria-pressed={lang === code}
                >
                  {code === "en" ? "EN" : "हि"}
                </button>
              ))}
            </div>
          </div>
        </div>
        <nav className="mx-auto hidden max-w-6xl gap-2 px-4 pb-3 lg:grid lg:grid-cols-5" aria-label="Primary">
          {groups.map((group) => (
            <details key={group.id} className="group relative">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-xl px-3 hover:bg-sand">
                {t(group.label)}
              </summary>
              <div className="absolute top-full left-0 z-40 mt-1 w-64 rounded-2xl border border-line bg-paper p-2 shadow-sm">
                <ul>
                  {group.ids.map((id) => {
                    const page = pages.find((item) => item.id === id);
                    if (!page) return null;
                    return (
                      <li key={id}>
                        <SiteLink to={page.path} className="flex min-h-11 items-center rounded-xl px-3 hover:bg-sand">
                          {t(page.title)}
                        </SiteLink>
                      </li>
                    );
                  })}
                  {group.extra?.map((item) => (
                    <li key={item.href}>
                      <SiteLink to={item.href} className="flex min-h-11 items-center rounded-xl px-3 hover:bg-sand">
                        {t(item)}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </nav>
      </header>
      {menu ? (
        <div className="fixed inset-0 z-40 bg-canvas lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <p className="font-display text-2xl">Tharparkar</p>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line"
              onClick={() => setMenu(false)}
              aria-label={t({ en: "Close menu", hi: "मेनू बंद करें" })}
            >
              <X aria-hidden />
            </button>
          </div>
          <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto px-4 pb-8">
            <NavLinks onNavigate={() => setMenu(false)} />
          </div>
        </div>
      ) : null}
      <SearchDialog open={search} onClose={() => setSearch(false)} />
      <main id="content">{children}</main>
      <footer className="mt-8 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-2xl">Tharparkar Cattle</p>
            <p className="mt-2 max-w-md text-muted">
              {t({
                en: "A research encyclopedia of one indigenous breed. Sources were checked for the 27 September 2026 edition. Unverified numbers are left out on purpose.",
                hi: "एक देशी नस्ल का शोध विश्वकोश। स्रोत 27 सितंबर 2026 के संस्करण के लिए जाँचे गए। असत्यापित संख्याएँ जानबूझकर छोड़ी गई हैं।",
              })}
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <a className="min-h-11 text-earth underline" href="https://nbagr.res.in/cattle-breed">ICAR-NBAGR</a>
            <a className="min-h-11 text-earth underline" href="https://ndri.res.in/livestock-farm">ICAR-NDRI</a>
            <a className="min-h-11 text-earth underline" href="https://www.dairyknowledge.in/article/tharparkar">NDDB Dairy Knowledge Portal</a>
            <SiteLink to="/editorial" className="min-h-11 text-earth underline">
              {t({ en: "Editorial desk (this browser)", hi: "संपादकीय डेस्क (यह ब्राउज़र)" })}
            </SiteLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
