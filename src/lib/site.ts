export const SITE = {
  name: "Troy Lazaro",
  mark: "TL",
  email: "troylazaro09@gmail.com",
  role: "AI engineer & builder",
  positioning: "I build with AI, break it, fix it, and ship it.",
  motto: "Life’s too short to be boring.",
  location: "Manila, Philippines",
  github: "https://github.com/Troy-LL",
  linkedin: "https://www.linkedin.com/in/troylazaro/",
  instagram: "https://www.instagram.com/isametroy_/",
  creative: "https://desktop.troylazaro.dev",
} as const;

export function getBookingUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return value || undefined;
}
