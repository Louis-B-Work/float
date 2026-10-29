"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/+$/, "") || "/";
  const activeClass = "text-navy-deep underline decoration-2 underline-offset-8";
  const isActive = (href: string) => currentPath === href || currentPath.startsWith(`${href}/`);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = menuDialogRef.current;
    const menuButton = menuButtonRef.current;
    const getFocusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([tabindex="-1"])',
    ) ?? []).filter((element) => element.getClientRects().length > 0);
    getFocusable()[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setExpandedGroup(null);
        return;
      }

      const focusable = getFocusable();
      if (event.key !== "Tab" || !focusable.length) return;

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

    const desktopQuery = window.matchMedia("(min-width: 1200px)");
    function handleDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setOpen(false);
        setExpandedGroup(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
      menuButton?.focus();
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setExpandedGroup(null);
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="page-shell flex h-[76px] items-center justify-between">
        <Logo
          onClick={(event) => {
            // Next does not scroll when the link targets the page we are already on, so do it here.
            if (currentPath === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0 });
            }
            setOpen(false);
          }}
        />
        <nav aria-label="Main navigation" className="hidden items-center gap-3 capitalize min-[1200px]:flex xl:gap-5 2xl:gap-7">
          {navigation.map((item) =>
            "children" in item ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={currentPath === item.href ? "page" : isActive(item.href) ? "location" : undefined}
                  className={`flex items-center gap-1 whitespace-nowrap py-7 text-sm font-bold ${isActive(item.href) ? activeClass : "text-ink/70 hover:text-navy"}`}
                >
                  {item.label}
                  <ChevronDown size={15} aria-hidden />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-max min-w-64 -translate-x-1/2 translate-y-2 border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={currentPath === child.href ? "page" : undefined}
                      className={`block whitespace-nowrap px-4 py-3 text-sm font-semibold hover:bg-mist ${isActive(child.href) ? activeClass : "text-ink/70 hover:text-navy"}`}
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
                aria-current={currentPath === item.href ? "page" : undefined}
                className={`whitespace-nowrap py-7 text-sm font-bold ${isActive(item.href) ? activeClass : "text-ink/70 hover:text-navy"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-3 min-[1200px]:flex">
          <Link
            href="/apply"
            aria-current={currentPath === "/apply" ? "page" : undefined}
            className={`inline-flex items-center justify-center whitespace-nowrap bg-coral px-4 py-3 text-sm font-extrabold text-navy-deep transition hover:bg-aqua xl:px-6 ${isActive("/apply") ? activeClass : ""}`}
          >
            Start an enquiry
          </Link>
        </div>
        <div className="flex items-center gap-2 min-[1200px]:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-11 place-items-center text-navy"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => {
              if (open) closeMenu();
              else setOpen(true);
            }}
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
          className="fixed inset-x-0 top-[76px] z-40 h-[calc(100dvh-76px)] min-[1200px]:hidden"
        >
          <button
            type="button"
            tabIndex={-1}
            className="absolute inset-0 bg-navy-deep/55 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close menu"
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="absolute inset-0 flex flex-col bg-white capitalize shadow-2xl"
          >
            <div className="page-shell min-h-0 flex-1 overflow-y-auto py-2">
              {navigation.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={currentPath === item.href ? "page" : isActive(item.href) ? "location" : undefined}
                      className={`min-w-0 py-3 font-bold ${"children" in item ? "" : "flex-1"} ${isActive(item.href) ? activeClass : "text-ink/70 hover:text-navy"}`}
                    >
                      {item.label}
                    </Link>
                    {"children" in item && (
                      <button
                        type="button"
                        aria-label={`${expandedGroup === item.href ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={expandedGroup === item.href}
                        aria-controls={`mobile-group-${item.href.slice(1)}`}
                        onClick={() => setExpandedGroup((current) => current === item.href ? null : item.href)}
                        className="flex min-h-11 flex-1 items-center justify-end pr-[13px] text-navy"
                      >
                        <ChevronDown size={18} className={expandedGroup === item.href ? "rotate-180" : ""} aria-hidden />
                      </button>
                    )}
                  </div>
                  {"children" in item && (
                    <div id={`mobile-group-${item.href.slice(1)}`} hidden={expandedGroup !== item.href}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          aria-current={currentPath === child.href ? "page" : undefined}
                          className={`block py-3 pl-5 text-sm font-semibold ${isActive(child.href) ? activeClass : "text-ink/70 hover:text-navy"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="page-shell shrink-0 pt-3 pb-[max(.75rem,env(safe-area-inset-bottom))]">
              <Link
                href="/apply"
                onClick={closeMenu}
                aria-current={currentPath === "/apply" ? "page" : undefined}
                className={`flex justify-center bg-coral px-6 py-4 font-extrabold text-navy-deep ${isActive("/apply") ? activeClass : ""}`}
              >
                Start an enquiry
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
