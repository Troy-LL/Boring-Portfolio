import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Talk", href: "/talk" },
  { name: "Resume", href: "/resume" },
] as const;

export default function Navbar() {
  return (
    <header>
      <nav className="mx-auto max-w-page px-6 py-8 flex items-center justify-between">
        <Link href="/" className="font-display italic text-xl text-ink">
          {SITE.name}
        </Link>
        <ul className="flex items-center gap-5 sm:gap-7 font-ui text-sm text-muted">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-ink underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
