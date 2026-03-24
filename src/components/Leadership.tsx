"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { certifications, leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" number="09." title="Leadership + Certifications">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="lux-card p-6 md:p-7">
          <p className="eyebrow">Leadership</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {leadership.map((item) => (
              <article key={`${item.org}-${item.role}`} className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
                <p className="font-semibold tracking-tight text-zinc-100">{item.role}</p>
                <p className="mt-1 font-mono text-xs text-zinc-400">{item.org}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{item.impact}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="lux-card p-6 md:p-7">
          <p className="eyebrow">Certifications</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {certifications.map((item) => (
              <li key={item} className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2 font-mono">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
