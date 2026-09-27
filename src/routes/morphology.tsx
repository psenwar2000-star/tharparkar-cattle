import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/article";
import { pageMap } from "@/data/pages";

const page = pageMap.morphology;

export const Route = createFileRoute("/morphology")({
  head: () => ({
    meta: [
      { title: `${page.title.en} · Tharparkar Cattle` },
      { name: "description", content: page.description.en },
    ],
  }),
  component: () => <ArticlePage id="morphology" />,
});
