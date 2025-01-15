import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  const techMap: { [key: string]: string } = {
    // JavaScript variations
    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",

    // TypeScript variations
    typescript: "devicon-typescript-plain",
    ts: "devicon-typescript-plain",

    // React variations
    react: "devicon-react-original",
    reactjs: "devicon-react-original",

    // Next.js variations
    nextjs: "devicon-nextjs-plain",
    next: "devicon-nextjs-plain",
  };

  return techMap[normalizedTechName] ? `${techMap[normalizedTechName]} colored` : 'devicon-devicon-plain'
};
