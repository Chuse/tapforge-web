function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40 px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[30px] border border-white/50 bg-white/75 px-5 py-3 shadow-[0_14px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-lg font-black leading-none text-slate-950">TapForge</p>
            <p className="mt-1 text-xs font-bold tracking-[0.18em] text-emerald-600">IDENTIDAD · CARD · WALLET</p>
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
          <a href="#identity" className="hover:text-emerald-600">Identidad</a>
          <a href="#card" className="hover:text-emerald-600">Card</a>
          <a href="#wallet" className="hover:text-emerald-600">Wallet</a>
          <a href="#roadmap" className="hover:text-emerald-600">Roadmap</a>
        </nav>
        <a href="#roadmap" className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600">
          Ver roadmap
        </a>
      </div>
    </header>
  );
}
