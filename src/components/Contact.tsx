"use client";

import { AtSign, FolderGit2, Mail } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <SectionWrapper id="contact" number="10." title="Get In Touch" className="pb-16">
      <div className="lux-card p-8 md:p-10">
        <p className="eyebrow">Get In Touch</p>
        <p className="mt-3 font-mono text-xs text-zinc-500">{contact.phone}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="signal-hover inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-zinc-200"
          >
            <FolderGit2 size={14} /> GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="signal-hover inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-zinc-200"
          >
            <AtSign size={14} /> LinkedIn
          </a>
          <a
            href={contact.email}
            className="signal-hover inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-zinc-200"
          >
            <Mail size={14} /> Email
          </a>
        </div>
        <p className="mt-10 border-t border-zinc-800 pt-4 font-mono text-[11px] tracking-[0.1em] text-zinc-600">
          (c) 2026 Ryan Gomez
        </p>
      </div>
    </SectionWrapper>
  );
}
