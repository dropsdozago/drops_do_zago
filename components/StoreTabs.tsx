"use client";

import { StoreId, STORES } from "@/lib/data";
import { StoreLogo } from "./StoreLogos";

interface Props {
  active: StoreId | "all";
  onChange: (id: StoreId | "all") => void;
}

export function StoreTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 py-3 -mx-4">
      <button
        onClick={() => onChange("all")}
        className={`chip shrink-0 border ${
          active === "all"
            ? "bg-brand-500 text-white border-brand-500"
            : "bg-white dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 border-slate-200 dark:border-neutral-800"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Todas
      </button>

      {STORES.map((store) => {
        const isActive = active === store.id;
        return (
          <button
            key={store.id}
            onClick={() => onChange(store.id)}
            className={`chip shrink-0 border transition-all ${
              isActive
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white"
                : "bg-white dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 border-slate-200 dark:border-neutral-800 hover:border-slate-300 dark:hover:border-neutral-700"
            }`}
          >
            <StoreLogo id={store.id} className="w-4 h-4 rounded" />
            {store.name}
          </button>
        );
      })}
    </div>
  );
}
