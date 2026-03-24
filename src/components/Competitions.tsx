"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { competitions } from "@/lib/data";

export default function Competitions() {
  const hasItems = competitions.items.length > 0;

  return (
    <SectionWrapper id="competitions" number="06." title="Competitions">
      <div className="lux-card p-7 md:p-8">
        <p className="max-w-3xl text-[15px] leading-7 text-zinc-400">{competitions.intro}</p>
        {hasItems ? (
          <ul className="mt-8 space-y-4">
            {competitions.items.map((item) => (
              <li
                key={`${item.title}-${item.year ?? ""}`}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-5"
              >
                <p className="text-lg font-semibold tracking-tight text-zinc-100">{item.title}</p>
                <div className="mt-2 flex flex-wrap gap-3 font-mono text-xs text-zinc-500">
                  {item.placement && <span>{item.placement}</span>}
                  {item.year && <span>{item.year}</span>}
                </div>
                {item.note && <p className="mt-2 text-sm text-zinc-400">{item.note}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed border-zinc-700 bg-zinc-950/40 px-6 py-10 text-center">
            <p className="font-mono text-sm text-zinc-500">
              Your competition entries will appear here — add them in{" "}
              <code className="text-cyan-400/90">src/lib/data.ts</code> under{" "}
              <code className="text-cyan-400/90">competitions.items</code>.
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
