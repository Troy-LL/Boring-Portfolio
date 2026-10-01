export const SITE = {
  name: "Troy Lazaro",
  mark: "TL",
  email: "troylazaro09@gmail.com",
  positioning: "I make things. I care how they look and how they work.",
  motto: "Life’s too short to be boring.",
  location: "Manila, Philippines",
  github: "https://github.com/Troy-LL",
  linkedin: "https://www.linkedin.com/in/troylazaro/",
  instagram: "https://www.instagram.com/isametroy_/",
} as const;

export function getBookingUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return value || undefined;
}
