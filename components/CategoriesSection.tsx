"use client";

import { CATEGORIES } from "@/lib/data";

export function CategoriesSection() {
  return (
    <section className="px-4 py-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="section-title">Categorias</h2>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="card flex flex-col items-center gap-2 p-3 hover:border-brand-300 dark:hover:border-brand-700/50 hover:bg-slate-50 dark:hover:bg-neutral-800/50 transition-all active:scale-95"
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-[11px] font-semibold text-center leading-tight text-slate-700 dark:text-neutral-300">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
