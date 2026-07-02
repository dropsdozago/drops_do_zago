"use client";

import { Product, formatBRL, discountPct, STORES } from "@/lib/data";
import { StoreLogo } from "./StoreLogos";

export function ProductCard({ product }: { product: Product }) {
  const store = STORES.find((s) => s.id === product.store)!;
  const pct = discountPct(product);

  return (
    <article className="card group overflow-hidden flex flex-col hover:shadow-lg hover:shadow-black/5 hover:border-brand-300 dark:hover:border-brand-700/50 transition-all">
      <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-neutral-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="rounded-lg bg-brand-500 px-2 py-1 text-[11px] font-bold text-white shadow-md">
            -{pct}%
          </span>
          {product.hot && (
            <span className="rounded-lg bg-red-500 px-2 py-1 text-[10px] font-bold text-white shadow-md flex items-center gap-0.5">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor">
                <path d="M12 2s4 4 4 8a4 4 0 11-8 0c0-1 .5-2 .5-2S8 10 8 12a4 4 0 008 0c0-4-4-10-4-10z" />
              </svg>
              Em Alta
            </span>
          )}
        </div>
      </div>

      <div className="p-3 flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-1.5">
          <StoreLogo id={product.store} className="w-3.5 h-3.5 rounded shrink-0" />
          <span className="text-[10px] font-medium text-slate-500 dark:text-neutral-500 truncate">
            {store.name}
          </span>
        </div>

        <h3 className="text-xs font-semibold leading-snug line-clamp-2 text-slate-800 dark:text-neutral-200 min-h-[2rem]">
          {product.name}
        </h3>

        <div className="mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-extrabold text-brand-600 dark:text-brand-400">
              {formatBRL(product.price)}
            </span>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-neutral-600 line-through">
            {formatBRL(product.oldPrice)}
          </span>
        </div>

        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-3 py-2.5 text-xs font-bold text-white transition-all hover:bg-brand-600 active:scale-95"
        >
          Comprar Agora
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </article>
  );
}
