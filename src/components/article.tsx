import { SiteLink } from "@/components/site-link";
import { TractAtlas } from "@/components/atlas";
import { Cites } from "@/components/cite";
import { HeatChart, YieldChart } from "@/components/charts";
import { Shell } from "@/components/shell";
import { galleryImages } from "@/data/images";
import { pageMap } from "@/data/pages";
import type { Block } from "@/data/types";
import { useI18n } from "@/lib/i18n";

const toneClass = {
  standard: "border-sage bg-paper",
  finding: "border-earth bg-paper",
  limit: "border-earth bg-sand",
  gap: "border-muted bg-sand",
};

const toneLabel = {
  standard: { en: "Institutional statement", hi: "संस्थागत कथन" },
  finding: { en: "Research finding", hi: "शोध निष्कर्ष" },
  limit: { en: "Limit of the evidence", hi: "प्रमाण की सीमा" },
  gap: { en: "Not verified", hi: "सत्यापित नहीं" },
};

function BlockView({ block }: { block: Block }) {
  const { t } = useI18n();
  if (block.kind === "h") {
    return <h2 className="mt-10 font-display text-3xl text-ink sm:text-4xl">{t(block.text)}</h2>;
  }
  if (block.kind === "p") {
    return (
      <div className="mt-4">
        <p>{t(block.text)}</p>
        <Cites ids={block.cites} />
      </div>
    );
  }
  if (block.kind === "callout") {
    return (
      <aside className={`mt-6 rounded-2xl border px-5 py-4 ${toneClass[block.tone]}`}>
        <p className="text-sm tracking-wide text-earth uppercase">{t(toneLabel[block.tone])}</p>
        <p className="mt-2">{t(block.text)}</p>
        <Cites ids={block.cites} />
      </aside>
    );
  }
  if (block.kind === "list") {
    return (
      <ul className="mt-4 grid gap-3">
        {block.items.map((item) => (
          <li key={item.text.en} className="rounded-2xl border border-line bg-paper px-4 py-3">
            <p>{t(item.text)}</p>
            <Cites ids={item.cites} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.kind === "cards") {
    return (
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {block.items.map((item) => (
          <article key={item.title.en} className="rounded-2xl border border-line bg-paper p-5">
            <h3 className="font-display text-2xl text-ink">{t(item.title)}</h3>
            <p className="mt-2 text-ink">{t(item.body)}</p>
            <Cites ids={item.cites} />
          </article>
        ))}
      </div>
    );
  }
  if (block.kind === "table") {
    return (
      <figure className="mt-6">
        <figcaption className="mb-3 text-sm text-muted">{t(block.caption)}</figcaption>
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead className="bg-sand text-ink">
              <tr>
                {block.columns.map((column) => (
                  <th key={column} className="px-3 py-3 font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-line bg-paper align-top">
                  {row.map((cell, index) => (
                    <td key={`${cell}-${index}`} className="px-3 py-3 tabular-nums">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Cites ids={[block.source]} />
      </figure>
    );
  }
  if (block.kind === "chart") {
    return <div className="mt-6">{block.id === "yield" ? <YieldChart /> : <HeatChart />}</div>;
  }
  if (block.kind === "atlas") return <div className="mt-6"><TractAtlas /></div>;
  const image = galleryImages.find((item) => item.id === block.imageId);
  if (!image) return null;
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-line bg-paper">
      <img src={image.src} alt={t(image.title)} className="max-h-[36rem] w-full object-cover" />
      <figcaption className="space-y-2 px-4 py-4 text-sm text-muted">
        <p className="font-display text-xl text-ink">{t(image.title)}</p>
        <p>{t(image.description)}</p>
        <p>
          {image.photographer}, {image.date}. {image.license}. {t(image.location)}
        </p>
        <a className="inline-flex min-h-11 items-center text-earth underline" href={image.sourceUrl}>
          Wikimedia Commons
        </a>
      </figcaption>
    </figure>
  );
}

export function ArticlePage({ id }: { id: string }) {
  const page = pageMap[id];
  const { t } = useI18n();
  if (!page) return null;
  return (
    <Shell>
      <article className="mx-auto w-full max-w-3xl px-5 py-10">
        <p className="text-sm tracking-[0.16em] text-sage uppercase">{t(page.kicker)}</p>
        <h1 className="mt-3 font-display text-5xl text-ink sm:text-6xl">{t(page.title)}</h1>
        <p className="mt-5 text-xl leading-relaxed text-ink">{t(page.lede)}</p>
        {page.blocks.map((block, index) => (
          <BlockView key={index} block={block} />
        ))}
        <aside className="mt-12 border-t border-line pt-6">
          <h2 className="font-display text-2xl">{t({ en: "Continue", hi: "आगे पढ़ें" })}</h2>
          <ul className="mt-3 grid gap-2">
            {page.related.map((relatedId) => {
              const related = pageMap[relatedId];
              if (!related) return null;
              return (
                <li key={relatedId}>
                  <SiteLink to={related.path} className="inline-flex min-h-11 items-center text-earth underline-offset-2 hover:underline">
                    {t(related.title)}
                  </SiteLink>
                </li>
              );
            })}
          </ul>
        </aside>
      </article>
    </Shell>
  );
}
