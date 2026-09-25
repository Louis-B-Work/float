"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = menuDialogRef.current;
    const menuButton = menuButtonRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="page-shell flex h-[76px] items-center justify-between">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) =>
            "children" in item ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-7 text-sm font-bold ${pathname.startsWith(item.href) ? "text-navy" : "text-ink/70 hover:text-navy"}`}
                >
                  {item.label}
                  <ChevronDown size={15} aria-hidden />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 text-sm font-semibold hover:bg-mist hover:text-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`py-7 text-sm font-bold ${pathname === item.href ? "text-navy" : "text-ink/70 hover:text-navy"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-coral px-6 py-3 text-sm font-extrabold text-navy-deep transition hover:bg-aqua"
          >
            Get a quote
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-11 place-items-center border border-line text-navy"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <div
          ref={menuDialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-x-0 top-[76px] z-40 h-[calc(100dvh-76px)] lg:hidden"
        >
          <button
            type="button"
            tabIndex={-1}
            className="absolute inset-0 bg-navy-deep/55 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-0 max-h-full overflow-y-auto border-t border-line bg-white shadow-2xl"
          >
            <div className="page-shell flex flex-col py-4">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 font-bold text-navy"
                  >
                    {item.label}
                  </Link>
                  {"children" in item &&
                    item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-line py-3 pl-5 text-sm font-semibold text-ink/70"
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex justify-center bg-coral px-6 py-4 font-extrabold text-navy-deep"
              >
                Get a quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
