import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/article";
import { pageMap } from "@/data/pages";

const page = pageMap.identification;

export const Route = createFileRoute("/identification")({
  head: () => ({
    meta: [
      { title: `${page.title.en} · Tharparkar Cattle` },
      { name: "description", content: page.description.en },
    ],
  }),
  component: () => <ArticlePage id="identification" />,
});
