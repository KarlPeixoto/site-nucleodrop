import * as React from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setIsDark(true);
    else if (stored === "light") setIsDark(false);
    else setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  if (!mounted) return null; // Evita renderização no SSR

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="rounded px-3 py-2 bg-muted text-muted-foreground border border-border text-xl md:text-base"
      aria-label="Alternar modo escuro/claro"
      style={{ position: "relative", zIndex: 10 }}
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}