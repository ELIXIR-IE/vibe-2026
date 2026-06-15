import { base } from "$app/paths";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const links = [
  { title: "About", href: `${base}/about/` },
  { title: "Important Dates", href: `${base}/dates/` },
  { title: "Speakers", href: `${base}/speakers/` },
  { title: "Conference Program", href: `${base}/program-conference/` },
  { title: "Venue", href: `${base}/venue/` },
  { title: "Organising Committee", href: `${base}/committee/` },
];
