"use client";

import { Product } from "@/lib/data";
import { ProductCard } from "./ProductCard";

interface Props {
  title: string;
  products: Product[];
  badge?: string;
}

export function ProductRow({ title, products, badge }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="py-2">
      <div className="px-4 flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h2 className="section-title">{title}</h2>
          {badge && (
            <span className="chip bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px]">
              {badge}
            </span>
          )}
        </div>
        <button className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline">
          Ver tudo
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 pb-1">
        {products.map((p) => (
          <div key={p.id} className="w-40 shrink-0">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
