"use client";

import { useTextScramble } from "@/lib/hooks";

type Props = {
  words: string[];
  className?: string;
};

export default function TextScramble({ words, className = "" }: Props) {
  const text = useTextScramble(words);
  return <span className={className}>{text}</span>;
}
