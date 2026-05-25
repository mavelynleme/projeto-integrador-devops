import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-glow"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-primary transition-transform duration-500 group-hover:rotate-90" />
      ) : (
        <Moon className="h-4 w-4 text-primary transition-transform duration-500 group-hover:-rotate-12" />
      )}
      <span>{isDark ? "Claro" : "Escuro"}</span>
    </button>
  );
}