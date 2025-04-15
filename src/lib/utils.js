import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // ✅ correct

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
