export function Footer() {
  return (
    <footer className="mt-8 px-4 pb-8 pt-6 border-t border-slate-200 dark:border-neutral-800">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
            <span className="font-display font-extrabold text-white text-sm leading-none">D</span>
          </div>
          <span className="font-display font-bold text-sm">
            DROPS<span className="text-brand-500">_DO_</span>ZAGO
          </span>
        </div>

        <p className="text-xs text-slate-500 dark:text-neutral-500 max-w-xs leading-relaxed">
          Curadoria de ofertas das melhores lojas da internet. Novos achados todos os dias.
        </p>

        <a
          href="https://www.tiktok.com/@drops_do_zago"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-neutral-950 dark:bg-white px-6 py-3 text-sm font-bold text-white dark:text-neutral-950 transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M19.6 6.3a4.8 4.8 0 01-3.8-2.2 4.8 4.8 0 01-4.3 2.7v-3a7.8 7.8 0 002.6.4V.8a4.8 4.8 0 00-4.8 4.8v6.4a4.8 4.8 0 11-4.8-4.8v3a1.8 1.8 0 101.8 1.8V0a7.8 7.8 0 006.4 7.7V5.2a7.8 7.8 0 003.9 1V3.3z" />
          </svg>
          @drops_do_zago
        </a>

        <p className="text-[10px] text-slate-400 dark:text-neutral-600 mt-2">
          © 2026 DROPS_DO_ZAGO. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
