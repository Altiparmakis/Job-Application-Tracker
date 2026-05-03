import Link from "next/link";
import NavbarAuth from "./NavbarAuth";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95 shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3 text-slate-950">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-700 text-sm font-semibold text-white shadow-sm">
            J
          </span>
          <span className="text-base font-semibold sm:text-lg">
            Job Application Tracker
          </span>
        </Link>

        <NavbarAuth />
      </nav>
    </header>
  );
}
