function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-lg font-black leading-none text-slate-950">TapForge</p>
            <p className="mt-1 text-xs font-bold tracking-[0.18em] text-emerald-600">
              IDENTITY · CARD · WALLET
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
          <a href="/" className="hover:text-emerald-600 transition-colors">Inicio</a>
          <a href="/identity" className="hover:text-emerald-600 transition-colors">Identity</a>
          <a href="/card" className="hover:text-emerald-600 transition-colors">Card</a>
          <a href="/wallet" className="text-emerald-600 transition-colors">Wallet</a>
          <a href="/roadmap" className="hover:text-emerald-600 transition-colors">Community</a>
        </nav>

        <a
          href="/identity"
          className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition-colors"
        >
          Crear identidad
        </a>
      </div>
    </header>
  );
}
