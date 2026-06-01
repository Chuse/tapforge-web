import React from "react";
import logo from "../assets/tapforge-logo.svg";


const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90",
  card:
    "https://images.unsplash.com/photo-1616077168079-7e09a677fb2f?auto=format&fit=crop&w=1200&q=85",
};

function Logo({ className = "h-12 w-12", muted = false }) {
  return (
    <img
      src={logo}
      alt="TapForge"
      className={`${className} object-contain ${muted ? "opacity-[0.06]" : ""}`}
    />
  );
}

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40 px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-lg font-black leading-none text-slate-950">
              TapForge
            </p>
            <p className="mt-1 text-xs font-bold tracking-[0.18em] text-emerald-600">
              IDENTITY · CARD · WALLET
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
          <a href="/" className="hover:text-emerald-600 transition-colors">
            Inicio
          </a>
          <a href="/identity" className="hover:text-emerald-600 transition-colors">
            Identity
          </a>
          <a href="/card" className="hover:text-emerald-600 transition-colors">
            Card
          </a>
          <a href="/wallet" className="hover:text-emerald-600 transition-colors">
            Wallet
          </a>
          <a href="/roadmap" className="hover:text-emerald-600 transition-colors">
            Community
          </a>
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

function IdentityPreview() {
  return (
    <div className="relative overflow-hidden rounded-[46px] border border-white/60 bg-white/82 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.24)] backdrop-blur-2xl">
      <div className="absolute -right-28 -bottom-28">
        <Logo className="h-[360px] w-[360px]" muted />
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <Logo className="h-32 w-32" />
        </div>
        <p className="mt-8 text-center text-sm font-black tracking-[0.32em] text-emerald-600">TU NOMBRE WEB3</p>
        <h2 className="mt-3 text-center text-5xl font-black tracking-tight text-slate-950 md:text-6xl">carlos.klv</h2>
        <p className="mx-auto mt-5 max-w-md text-center text-lg leading-relaxed text-slate-600">
          Un nombre para recibir activos, resolver direcciones y conectar tu identidad al ecosistema TapForge.
        </p>
        <div className="mt-8 grid grid-cols-4 gap-3 text-center text-sm font-black">
          {['KLV', 'ETH', 'BSC', 'POL'].map((item) => (
            <div key={item} className="rounded-2xl bg-emerald-50 px-3 py-4 text-emerald-700">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, text, icon }) {
  return (
    <div className="rounded-[34px] border border-slate-100 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">{icon}</div>
      <h3 className="mt-6 text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

function TapForgeCard() {
  return (
    <div id="card" className="relative overflow-hidden rounded-[44px] bg-slate-950 p-9 text-white shadow-[0_35px_100px_rgba(15,23,42,0.34)]">
      <div className="absolute inset-0 opacity-20">
        <img src={IMAGES.card} alt="TapForge Card" className="h-full w-full object-cover" />
      </div>
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="absolute right-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">NFC</div>
      <div className="relative flex min-h-[390px] flex-col justify-between">
        <Logo className="h-36 w-36" />
        <div>
          <p className="text-xs tracking-[0.35em] text-white/50">TAPFORGE</p>
          <h3 className="mt-2 text-4xl font-black">Tarjeta segura</h3>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-white/65">
            Firma operaciones y administra las claves vinculadas a tu dominio .klv.
          </p>
        </div>
      </div>
    </div>
  );
}

function WalletBlock() {
  return (
    <div id="wallet" className="relative overflow-hidden rounded-[44px] bg-white p-8 shadow-[0_25px_90px_rgba(15,23,42,0.12)]">
      <div className="absolute -right-28 -bottom-28">
        <Logo className="h-[340px] w-[340px]" muted />
      </div>
      <div className="relative">
        <p className="text-sm font-black tracking-[0.25em] text-emerald-600">WALLET MULTIRED</p>
        <h3 className="mt-3 text-5xl font-black text-slate-950">Una identidad. Múltiples redes.</h3>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {['Klever', 'Ethereum', 'BSC', 'Polygon'].map((chain) => (
            <div key={chain} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-xl font-black text-slate-950">{chain}</p>
              <p className="mt-2 text-sm text-slate-500">Activos vinculados a carlos.klv</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TapForgeHomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFB] text-slate-950">
      <section className="relative min-h-screen overflow-hidden">
        <img src={IMAGES.hero} alt="Campo de girasoles" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/82 to-white/44" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFB] via-transparent to-transparent" />
        <div className="absolute -left-36 bottom-4 hidden md:block">
          <Logo className="h-[560px] w-[560px]" muted />
        </div>

        <Header />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 pt-32 md:grid-cols-[1fr_0.95fr] md:px-10">
          <div>
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-emerald-100 bg-white/75 px-5 py-3 text-sm font-black text-emerald-700 shadow-sm backdrop-blur-xl">
              <Logo className="h-7 w-7" />
              Dominios .klv · TapForge Card · Wallet multired
            </div>

            <div className="mb-8">
              <Logo className="h-44 w-44" />
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
              Tu identidad digital empieza por tu nombre.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Recibe activos con tu dominio .klv, firma operaciones con TapForge Card y gestiona tus wallets sin depender de cuentas, emails ni contraseñas.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/identity" className="rounded-2xl bg-emerald-500 px-8 py-5 text-center text-base font-black text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-600">
                Descubrir TapForge →
              </a>
              <a href="/roadmap" className="rounded-2xl border border-white bg-white/75 px-8 py-5 text-center text-base font-black text-slate-800 shadow-lg backdrop-blur-xl hover:bg-white">
                Ver roadmap
              </a>
            </div>
          </div>

          <IdentityPreview />
        </div>
      </section>

      <section id="identity" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">IDENTIDAD</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Un nombre. Todas tus direcciones.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              carlos.klv puede resolver direcciones KLV, ETH, BSC o Polygon, mostrar un perfil público y convertirse en el punto de entrada de todo el ecosistema TapForge.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FeatureCard title="Dominio .klv" icon="🌐" text="Un nombre legible para recibir activos y representar tu identidad on-chain." />
            <FeatureCard title="Sin cuentas" icon="🔐" text="No necesitas email, usuario ni contraseña para controlar tu identidad." />
            <FeatureCard title="Multired" icon="⛓️" text="Un solo dominio puede resolver varias direcciones en diferentes blockchains." />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">TAPFORGE CARD</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">Hardware para firmar. Libertad para recuperar.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              TapForge Card firma operaciones desde un chip seguro, mientras el usuario conserva el control real de su identidad y sus activos.
            </p>
          </div>
          <TapForgeCard />
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <WalletBlock />
          <div>
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">WALLET</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">La identidad es el centro. La wallet es la herramienta.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Organiza blockchains, tokens y wallets sin llenar la home de ruido. TapForge separa identidad, seguridad y activos para que todo sea más claro.
            </p>
          </div>
        </div>
      </section>

      <footer id="roadmap" className="px-5 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[36px] bg-slate-950 p-8 text-white md:flex-row">
          <div className="flex items-center gap-4">
            <Logo className="h-16 w-16" />
            <div>
              <p className="text-2xl font-black">TapForge</p>
              <p className="text-white/50">Un nombre. Una identidad. Todas tus redes.</p>
            </div>
          </div>
          <a href="/roadmap" className="rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white hover:bg-emerald-600">
            Ver roadmap público
          </a>
        </div>
      </footer>
    </main>
  );
}
