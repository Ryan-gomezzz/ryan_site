/** Shared motion presets — chapter / “next page” feel on scroll */
export const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.985,
    clipPath: "inset(8% 0 12% 0)",
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0 0% 0)",
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/** Lighter reveal for strips / hero-adjacent bands */
export const bandReveal = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

/** Hero “first page” entrance */
export const heroOpen = {
  hidden: { opacity: 0, clipPath: "inset(0 0 12% 0)", y: 24 },
  show: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};
