import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { label: "Signals", href: "#signals" },
  { label: "Features", href: "#features" },
  { label: "Stories", href: "#stories" },
  { label: "Connect", href: "#connect" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="rounded-full bg-brand/20 px-3 py-1 text-brand dark:bg-brand/10">
            D
          </span>
          <span className="tracking-wide">Dاللوى تل</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-brand dark:hover:text-brand-light"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#connect"
            className="hidden rounded-full border border-brand/70 px-5 py-2 text-sm font-semibold tracking-wide text-brand shadow-sm transition hover:bg-brand hover:text-white md:block"
          >
            Pulse Demo
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
