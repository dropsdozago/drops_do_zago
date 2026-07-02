"use client";

import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggleTheme, brand, setBrand } = useTheme();

  const brands: { id: "orange" | "blue" | "gray"; label: string; color: string }[] = [
    { id: "orange", label: "Laranja", color: "bg-orange-500" },
    { id: "blue", label: "Azul", color: "bg-blue-500" },
    { id: "gray", label: "Cinza", color: "bg-slate-500" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-neutral-800/60">
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
              <span className="font-display font-extrabold text-white text-lg leading-none">D</span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brand-400 border-2 border-white dark:border-neutral-950" />
          </div>
          <div className="leading-none">
            <h1 className="font-display font-extrabold text-base tracking-tight">
              DROPS<span className="text-brand-500">_DO_</span>ZAGO
            </h1>
            <p className="text-[10px] text-slate-500 dark:text-neutral-500 font-medium mt-0.5">
              achados que valem a pena
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Color picker */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-neutral-900 p-1">
            {brands.map((b) => (
              <button
                key={b.id}
                onClick={() => setBrand(b.id)}
                aria-label={`Cor ${b.label}`}
                className={`w-6 h-6 rounded-full ${b.color} transition-all ${
                  brand === b.id
                    ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900 ring-slate-400 scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 hover:bg-slate-200 dark:hover:bg-neutral-800 transition-all active:scale-90"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile color picker row */}
      <div className="sm:hidden px-4 pb-2 flex items-center gap-2">
        <span className="text-[10px] text-slate-500 dark:text-neutral-500 font-medium">Cor:</span>
        {brands.map((b) => (
          <button
            key={b.id}
            onClick={() => setBrand(b.id)}
            aria-label={`Cor ${b.label}`}
            className={`w-5 h-5 rounded-full ${b.color} transition-all ${
              brand === b.id ? "ring-2 ring-slate-400 scale-110" : "opacity-60"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
