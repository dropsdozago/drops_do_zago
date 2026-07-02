"use client";

import { useMemo, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { HeroBanner } from "@/components/HeroBanner";
import { StoreTabs } from "@/components/StoreTabs";
import { ProductRow } from "@/components/ProductRow";
import { ProductCard } from "@/components/ProductCard";
import { CategoriesSection } from "@/components/CategoriesSection";
import { Footer } from "@/components/Footer";
import { PRODUCTS, Product, StoreId } from "@/lib/data";

export default function Home() {
  const [activeStore, setActiveStore] = useState<StoreId | "all">("all");
  const [query, setQuery] = useState("");
  const offersRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeStore !== "all") list = list.filter((p) => p.store === activeStore);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeStore, query]);

  const hotProducts = filtered.filter((p) => p.hot);
  const dealProducts = filtered.filter((p) => p.deal);
  const hasResults = filtered.length > 0;

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-neutral-900 flex justify-center">
      <div className="app-shell flex flex-col">
        <Header />

        <main className="flex-1 flex flex-col gap-1 pb-4">
          <div className="px-4 py-3">
            <SearchBar onSearch={setQuery} />
          </div>

          <HeroBanner onSeeOffers={scrollToOffers} />

          <StoreTabs active={activeStore} onChange={setActiveStore} />

          <div ref={offersRef} className="scroll-mt-20" />

          {!hasResults ? (
            <div className="px-4 py-16 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-sm font-semibold text-slate-700 dark:text-neutral-300">
                Nenhum achado encontrado
              </p>
              <p className="text-xs text-slate-500 dark:text-neutral-500 mt-1">
                Tente outra busca ou loja.
              </p>
            </div>
          ) : query.trim() ? (
            <section className="px-4 py-3">
              <h2 className="section-title mb-3">
                Resultados ({filtered.length})
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          ) : (
            <>
              <ProductRow title="Em Alta" badge="🔥" products={hotProducts} />
              <ProductRow
                title="Promoções do Dia"
                badge="⏱️"
                products={dealProducts}
              />
              <CategoriesSection />
              <section className="px-4 py-3">
                <h2 className="section-title mb-3">Todos os achados</h2>
                <div className="grid grid-cols-2 gap-3">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            </>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}
