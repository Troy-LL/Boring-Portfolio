import { shareAlt, shareCard, shareContentType, shareSize } from "@/lib/share-card";

export const alt = shareAlt;
export const size = shareSize;
export const contentType = shareContentType;
export const runtime = "nodejs";

export default function OpenGraphImage() {
  return shareCard();
}
