import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SourceCategory } from "@/data/sources";

export type EditorialStatus = "draft" | "in-review" | "published";
export type EditorialKind = "article" | "publication" | "dataset" | "image-note" | "breed-note";

export type EditorialRecord = {
  id: string;
  kind: EditorialKind;
  title: string;
  authors: string;
  year: string;
  journal: string;
  category: SourceCategory;
  summary: string;
  method: string;
  findings: string;
  limitations: string;
  url: string;
  status: EditorialStatus;
  updatedAt: string;
};

type CmsState = {
  records: EditorialRecord[];
  upsert: (record: EditorialRecord) => void;
  remove: (id: string) => void;
  setStatus: (id: string, status: EditorialStatus) => void;
  replaceAll: (records: EditorialRecord[]) => void;
};

export const useCms = create<CmsState>()(
  persist(
    (set) => ({
      records: [],
      upsert: (record) =>
        set((state) => {
          const index = state.records.findIndex((item) => item.id === record.id);
          const next = [...state.records];
          if (index === -1) next.unshift(record);
          else next[index] = record;
          return { records: next };
        }),
      remove: (id) => set((state) => ({ records: state.records.filter((item) => item.id !== id) })),
      setStatus: (id, status) =>
        set((state) => ({
          records: state.records.map((item) =>
            item.id === id ? { ...item, status, updatedAt: new Date().toISOString() } : item,
          ),
        })),
      replaceAll: (records) => set({ records }),
    }),
    { name: "tharparkar-editorial-desk" },
  ),
);

export const emptyRecord = (): EditorialRecord => ({
  id: crypto.randomUUID(),
  kind: "publication",
  title: "",
  authors: "",
  year: "",
  journal: "",
  category: "milk",
  summary: "",
  method: "",
  findings: "",
  limitations: "",
  url: "",
  status: "draft",
  updatedAt: new Date().toISOString(),
});
