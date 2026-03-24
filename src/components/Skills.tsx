"use client";

import { skillGroups } from "@/lib/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function Skills() {
  const tickerText = skillGroups.flatMap((g) => g.items).join("  •  ");

  return (
    <SectionWrapper id="skills" number="05." title="Technical Capabilities">
      <div className="space-y-8">
        <div className="lux-card overflow-hidden py-3">
          <div className="ticker-track flex min-w-max gap-8 px-4 font-mono text-sm text-zinc-300">
            <span>{tickerText}</span>
            <span aria-hidden>{tickerText}</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.category} className="lux-card p-5">
              <h3 className="eyebrow">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-700 bg-zinc-900/55 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
