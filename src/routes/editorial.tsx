import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Shell } from "@/components/shell";
import { categoryLabels, type SourceCategory } from "@/data/sources";
import { emptyRecord, useCms, type EditorialKind, type EditorialRecord, type EditorialStatus } from "@/lib/cms";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/editorial")({
  head: () => ({
    meta: [
      { title: "Editorial desk · Tharparkar Cattle" },
      { name: "description", content: "Local, browser-only desk for drafting Tharparkar research records before they are shown as unverified additions." },
    ],
  }),
  component: EditorialPage,
});

const schema = z.object({
  title: z.string().min(8),
  authors: z.string().min(3),
  year: z.string().min(4),
  summary: z.string().min(20),
  url: z.string().url(),
});

const kinds: EditorialKind[] = ["publication", "article", "dataset", "image-note", "breed-note"];
const statuses: EditorialStatus[] = ["draft", "in-review", "published"];

function EditorialPage() {
  const { t } = useI18n();
  const records = useCms((state) => state.records);
  const upsert = useCms((state) => state.upsert);
  const remove = useCms((state) => state.remove);
  const setStatus = useCms((state) => state.setStatus);
  const replaceAll = useCms((state) => state.replaceAll);
  const [draft, setDraft] = useState<EditorialRecord>(emptyRecord);
  const [error, setError] = useState("");

  const save = () => {
    const parsed = schema.safeParse(draft);
    if (!parsed.success) {
      setError(
        t({
          en: "Title, authors, year, a 20-character summary and a full URL are required. Nothing was saved.",
          hi: "शीर्षक, लेखक, वर्ष, 20 अक्षरों का सार और पूरा URL आवश्यक हैं। कुछ सहेजा नहीं गया।",
        }),
      );
      return;
    }
    setError("");
    upsert({ ...draft, updatedAt: new Date().toISOString() });
    setDraft(emptyRecord());
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "tharparkar-editorial-desk.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const importJson = async (file: File) => {
    const text = await file.text();
    const parsed = z.array(z.object({
      id: z.string(),
      kind: z.enum(["publication", "article", "dataset", "image-note", "breed-note"]),
      title: z.string(),
      authors: z.string(),
      year: z.string(),
      journal: z.string(),
      category: z.string(),
      summary: z.string(),
      method: z.string(),
      findings: z.string(),
      limitations: z.string(),
      url: z.string(),
      status: z.enum(["draft", "in-review", "published"]),
      updatedAt: z.string(),
    })).safeParse(JSON.parse(text));
    if (!parsed.success) {
      setError(t({ en: "That file is not an editorial export.", hi: "वह फाइल संपादकीय निर्यात नहीं है।" }));
      return;
    }
    replaceAll(parsed.data as EditorialRecord[]);
    setError("");
  };

  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-10">
        <p className="text-sm tracking-[0.16em] text-sage uppercase">{t({ en: "This browser only", hi: "केवल यह ब्राउज़र" })}</p>
        <h1 className="mt-2 font-display text-5xl">{t({ en: "Editorial desk", hi: "संपादकीय डेस्क" })}</h1>
        <p className="mt-4">
          {t({
            en: "Add a source only after you have read it. Published items show in the library as unverified local additions. They do not replace ICAR or journal records.",
            hi: "स्रोत तभी जोड़ें जब आप उसे पढ़ चुके हों। प्रकाशित मदें पुस्तकालय में असत्यापित स्थानीय जोड़ के रूप में दिखती हैं। वे ICAR या जर्नल अभिलेखों की जगह नहीं लेतीं।",
          })}
        </p>
        <form
          className="mt-6 grid gap-3 rounded-2xl border border-line bg-paper p-5"
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          <label className="grid gap-1">
            {t({ en: "Kind", hi: "प्रकार" })}
            <select
              className="min-h-12 rounded-xl border border-line bg-canvas px-3"
              value={draft.kind}
              onChange={(event) => setDraft({ ...draft, kind: event.target.value as EditorialKind })}
            >
              {kinds.map((kind) => (
                <option key={kind} value={kind}>{kind}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1">
            {t({ en: "Title", hi: "शीर्षक" })}
            <input className="min-h-12 rounded-xl border border-line px-3" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} />
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1">
              {t({ en: "Authors", hi: "लेखक" })}
              <input className="min-h-12 rounded-xl border border-line px-3" value={draft.authors} onChange={(event) => setDraft({ ...draft, authors: event.target.value })} />
            </label>
            <label className="grid gap-1">
              {t({ en: "Year", hi: "वर्ष" })}
              <input className="min-h-12 rounded-xl border border-line px-3" value={draft.year} onChange={(event) => setDraft({ ...draft, year: event.target.value })} />
            </label>
          </div>
          <label className="grid gap-1">
            {t({ en: "Journal or institution", hi: "जर्नल या संस्था" })}
            <input className="min-h-12 rounded-xl border border-line px-3" value={draft.journal} onChange={(event) => setDraft({ ...draft, journal: event.target.value })} />
          </label>
          <label className="grid gap-1">
            {t({ en: "Category", hi: "श्रेणी" })}
            <select
              className="min-h-12 rounded-xl border border-line bg-canvas px-3"
              value={draft.category}
              onChange={(event) => setDraft({ ...draft, category: event.target.value as SourceCategory })}
            >
              {Object.entries(categoryLabels).map(([key, label]) => (
                <option key={key} value={key}>{t(label)}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1">
            URL
            <input className="min-h-12 rounded-xl border border-line px-3" value={draft.url} onChange={(event) => setDraft({ ...draft, url: event.target.value })} />
          </label>
          <label className="grid gap-1">
            {t({ en: "Summary", hi: "सार" })}
            <textarea className="min-h-24 rounded-xl border border-line px-3 py-2" value={draft.summary} onChange={(event) => setDraft({ ...draft, summary: event.target.value })} />
          </label>
          <label className="grid gap-1">
            {t({ en: "Method", hi: "विधि" })}
            <textarea className="min-h-20 rounded-xl border border-line px-3 py-2" value={draft.method} onChange={(event) => setDraft({ ...draft, method: event.target.value })} />
          </label>
          <label className="grid gap-1">
            {t({ en: "Findings", hi: "निष्कर्ष" })}
            <textarea className="min-h-20 rounded-xl border border-line px-3 py-2" value={draft.findings} onChange={(event) => setDraft({ ...draft, findings: event.target.value })} />
          </label>
          <label className="grid gap-1">
            {t({ en: "Limitations", hi: "सीमाएँ" })}
            <textarea className="min-h-20 rounded-xl border border-line px-3 py-2" value={draft.limitations} onChange={(event) => setDraft({ ...draft, limitations: event.target.value })} />
          </label>
          <label className="grid gap-1">
            {t({ en: "Review status", hi: "समीक्षा स्थिति" })}
            <select
              className="min-h-12 rounded-xl border border-line bg-canvas px-3"
              value={draft.status}
              onChange={(event) => setDraft({ ...draft, status: event.target.value as EditorialStatus })}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </label>
          {error ? <p className="text-earth">{error}</p> : null}
          <button type="submit" className="min-h-12 rounded-full bg-earth px-5 text-paper">
            {t({ en: "Save record", hi: "अभिलेख सहेजें" })}
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" className="min-h-11 rounded-xl border border-line px-4" onClick={exportJson}>
            {t({ en: "Export JSON", hi: "JSON निर्यात" })}
          </button>
          <label className="inline-flex min-h-11 cursor-pointer items-center rounded-xl border border-line px-4">
            {t({ en: "Import JSON", hi: "JSON आयात" })}
            <input
              type="file"
              accept="application/json"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void importJson(file);
              }}
            />
          </label>
        </div>
        <ul className="mt-8 grid gap-3">
          {records.map((record) => (
            <li key={record.id} className="rounded-2xl border border-line bg-paper p-4">
              <p className="text-sm text-sage">{record.kind} · {record.status}</p>
              <h2 className="font-display text-2xl">{record.title}</h2>
              <p className="text-sm text-muted">{record.authors} · {record.year}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button key={status} type="button" className="min-h-11 rounded-full border border-line px-3" onClick={() => setStatus(record.id, status)}>
                    {status}
                  </button>
                ))}
                <button type="button" className="min-h-11 rounded-full border border-line px-3" onClick={() => setDraft(record)}>
                  {t({ en: "Edit", hi: "संपादित करें" })}
                </button>
                <button type="button" className="min-h-11 rounded-full border border-line px-3" onClick={() => remove(record.id)}>
                  {t({ en: "Delete", hi: "हटाएँ" })}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
