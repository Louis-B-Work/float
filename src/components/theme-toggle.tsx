"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function isDarkTheme() {
  return document.documentElement.classList.contains("dark");
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const followSystem = (event: MediaQueryListEvent) => {
    if (!localStorage.getItem("float-theme")) {
      document.documentElement.classList.toggle("dark", event.matches);
      onChange();
    }
  };

  media.addEventListener("change", followSystem);
  window.addEventListener("float-theme-change", onChange);

  return () => {
    media.removeEventListener("change", followSystem);
    window.removeEventListener("float-theme-change", onChange);
  };
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDarkTheme, () => false);

  function toggleTheme() {
    const nextDark = !isDarkTheme();
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("float-theme", nextDark ? "dark" : "light");
    window.dispatchEvent(new Event("float-theme-change"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid size-10 shrink-0 place-items-center text-navy transition hover:bg-mist"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      title={`Switch to ${dark ? "light" : "dark"} mode`}
    >
      {dark ? <Sun size={17} aria-hidden /> : <Moon size={17} aria-hidden />}
    </button>
  );
}
