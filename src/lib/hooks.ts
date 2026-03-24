"use client";

import { useEffect, useMemo, useState } from "react";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ1234567890#@$%&*";

export function useTextScramble(words: string[], intervalMs = 2100) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(words[0] ?? "");

  useEffect(() => {
    if (words.length < 2) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs, words]);

  const target = useMemo(() => words[index] ?? "", [index, words]);

  useEffect(() => {
    let frame = 0;
    const max = Math.max(target.length, 12);
    const duration = 22;
    const id = setInterval(() => {
      frame += 1;
      const progress = frame / duration;
      const locked = Math.floor(progress * target.length);
      const next = Array.from({ length: max }, (_, i) => {
        if (i < locked && i < target.length) return target[i];
        if (i >= target.length) return "";
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");
      setDisplay(next.trimEnd());
      if (frame >= duration) {
        setDisplay(target);
        clearInterval(id);
      }
    }, 24);
    return () => clearInterval(id);
  }, [target]);

  return display;
}

export function useUptime(startDate: string) {
  const [text, setText] = useState("0d 00h");

  useEffect(() => {
    const start = new Date(startDate).getTime();
    const id = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(now - start, 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      setText(`${days}d ${String(hours).padStart(2, "0")}h`);
    }, 1000);

    return () => clearInterval(id);
  }, [startDate]);

  return text;
}
