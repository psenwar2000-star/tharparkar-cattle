export type Bi = { en: string; hi: string };

export type Block =
  | { kind: "h"; text: Bi }
  | { kind: "p"; text: Bi; cites?: string[] }
  | { kind: "callout"; tone: "standard" | "finding" | "limit" | "gap"; text: Bi; cites?: string[] }
  | { kind: "list"; items: { text: Bi; cites?: string[] }[] }
  | {
      kind: "table";
      caption: Bi;
      source: string;
      columns: string[];
      rows: string[][];
    }
  | { kind: "chart"; id: "yield" | "heat" }
  | { kind: "cards"; items: { title: Bi; body: Bi; cites?: string[] }[] }
  | { kind: "atlas" }
  | { kind: "figure"; imageId: string };

export type PageDoc = {
  id: string;
  path: string;
  nav: string;
  title: Bi;
  description: Bi;
  kicker: Bi;
  lede: Bi;
  blocks: Block[];
  related: string[];
};
