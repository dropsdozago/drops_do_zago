"use client";

import { useState } from "react";

export function SearchBar({
  onSearch,
}: {
  onSearch: (q: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
      className="relative"
    >
      <div className="relative flex items-center">
        <svg
          viewBox="0 0 24 24"
          className="absolute left-4 w-5 h-5 text-slate-400 dark:text-neutral-500 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Buscar achados..."
          className="w-full rounded-full bg-slate-100 dark:bg-neutral-900 border border-transparent focus:border-brand-500 focus:bg-white dark:focus:bg-neutral-900 pl-11 pr-12 py-3 text-sm font-medium text-slate-900 dark:text-neutral-100 placeholder:text-slate-400 dark:placeholder:text-neutral-600 outline-none transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              onSearch("");
            }}
            aria-label="Limpar"
            className="absolute right-4 w-5 h-5 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-neutral-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
