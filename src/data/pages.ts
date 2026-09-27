import { identityPages } from "./pages-a";
import { sciencePages } from "./pages-b";
import type { PageDoc } from "./types";

export const pages: PageDoc[] = [...identityPages, ...sciencePages];

export const pageMap = Object.fromEntries(pages.map((page) => [page.id, page])) as Record<
  string,
  PageDoc
>;

export function pageByPath(path: string) {
  return pages.find((page) => page.path === path);
}
