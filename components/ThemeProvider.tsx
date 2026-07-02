"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

type Theme = "light" | "dark";
type Brand = "orange" | "blue" | "gray";

interface ThemeContextValue {
  theme: Theme;
  brand: Brand;
  toggleTheme: () => void;
  setBrand: (b: Brand) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [brand, setBrandState] = useState<Brand>("orange");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const t = localStorage.getItem("ddz-theme") as Theme | null;
      const b = localStorage.getItem("ddz-brand") as Brand | null;
      if (t === "light" || t === "dark") setTheme(t);
      if (b === "orange" || b === "blue" || b === "gray") setBrandState(b);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("ddz-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-brand", brand);
    try {
      localStorage.setItem("ddz-brand", brand);
    } catch {
      /* ignore */
    }
  }, [brand, mounted]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );
  const setBrand = useCallback((b: Brand) => setBrandState(b), []);

  return (
    <ThemeContext.Provider value={{ theme, brand, toggleTheme, setBrand }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
