import { sourceMap } from "@/data/sources";

export function Cites({ ids }: { ids?: string[] }) {
  if (!ids?.length) return null;
  return (
    <span className="mt-2 flex flex-wrap gap-2">
      {ids.map((id) => {
        const source = sourceMap[id];
        if (!source) return null;
        return (
          <a
            key={id}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-3 text-sm text-earth underline-offset-2 hover:underline"
          >
            {source.authors.split(",")[0]} {source.year}
          </a>
        );
      })}
    </span>
  );
}
