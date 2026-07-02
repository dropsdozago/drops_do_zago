"use client";

export function HeroBanner({ onSeeOffers }: { onSeeOffers: () => void }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-neutral-950 mx-4 mt-4">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:18px_18px]" />

      <div className="relative px-6 py-8 sm:py-10 flex flex-col items-center text-center">
        <span className="chip bg-brand-500/15 text-brand-300 border border-brand-500/20 mb-4 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          Curadoria diária
        </span>

        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight max-w-xs animate-slide-up">
          Os melhores achados da internet em um só lugar.
        </h2>

        <p className="mt-3 text-sm text-neutral-400 max-w-xs leading-relaxed">
          Selecionamos as ofertas mais quentes da Shopee, AliExpress, Shein e Mercado Livre.
        </p>

        <button
          onClick={onSeeOffers}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-brand-500/40 active:scale-95 animate-slide-up"
        >
          Ver ofertas
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
