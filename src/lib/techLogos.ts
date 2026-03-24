/**
 * Logos via Simple Icons CDN — https://simpleicons.org/
 * Matches GitHub profile “Tech Arsenal” + tools used across your projects.
 */
export type TechLogo = { name: string; slug: string };

export const techStackLogos: TechLogo[] = [
  { name: "Python", slug: "python" },
  { name: "Java", slug: "openjdk" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "C++", slug: "cplusplus" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flask", slug: "flask" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "scikit-learn", slug: "scikitlearn" },
  { name: "LangChain", slug: "langchain" },
  { name: "OpenAI", slug: "openai" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Vercel", slug: "vercel" },
  { name: "Supabase", slug: "supabase" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Git", slug: "git" },
  { name: "Linux", slug: "linux" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "OpenCV", slug: "opencv" },
  { name: "ROS", slug: "ros" },
  { name: "Espressif", slug: "espressif" },
  { name: "Figma", slug: "figma" },
];

export function techIconUrl(slug: string, color = "71717a") {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}
