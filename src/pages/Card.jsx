import React from "react";
import logo from "../assets/tapforge-logo.svg";

function Logo({ className = "h-12 w-12", muted = false }) {
  return (
    <img
      src={logo}
      alt="TapForge"
      className={`${className} object-contain ${muted ? "opacity-[0.05]" : ""}`}
    />
  );
}

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
          <a href="/card" className="text-emerald-600 transition-colors">Card</a>
          <a href="/wallet" className="hover:text-emerald-600 transition-colors">Wallet</a>
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

function CardVisual() {
  return (
    <div className="relative overflow-hidden rounded-[44px] bg-slate-950 p-9 text-white shadow-[0_35px_100px_rgba(15,23,42,0.34)]">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="absolute -left-20 bottom-0">
        <Logo className="h-[360px] w-[360px]" muted />
      </div>

      <div className="absolute right-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
        NFC
      </div>

      <div className="relative flex min-h-[430px] flex-col justify-between">
        <div className="flex items-start justify-between">
          <Logo className="h-36 w-36" />
        </div>

        <div>
          <p className="text-xs tracking-[0.35em] text-white/50">TAPFORGE</p>
          <h3 className="mt-2 text-5xl font-black">Secure Card</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/65">
            Firma operaciones desde un chip seguro y administra las claves vinculadas a tu dominio .klv.
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-[32px] border border-slate-100 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
        {icon}
      </div>
      <h3 className="mt-6 text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

export default function Card() {
  return (
    <main className="min-h-screen bg-[#F8FAFB] text-slate-950">
      <Header />

      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute -left-36 bottom-0 hidden md:block">
          <Logo className="h-[560px] w-[560px]" muted />
        </div>
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-emerald-200/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-emerald-100 bg-white px-5 py-3 text-sm font-black text-emerald-700 shadow-sm">
              <Logo className="h-7 w-7" />
              TapForge Card · Firma NFC segura
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Tap. Sign. Done.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-600">
              TapForge Card permite firmar operaciones sin exponer tus claves. La tarjeta no es un simple backup: es parte activa de la seguridad de tu identidad y tus wallets.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/identity"
                className="rounded-2xl bg-emerald-500 px-8 py-5 text-center font-black text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-600"
              >
                Ver identidad
              </a>
              <a
                href="/roadmap"
                className="rounded-2xl border border-slate-200 bg-white px-8 py-5 text-center font-black text-slate-800 shadow-lg hover:bg-slate-50"
              >
                Ver roadmap
              </a>
            </div>
          </div>

          <CardVisual />
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
              SEGURIDAD
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              La tarjeta firma. Tú mantienes el control.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              La TapForge Card puede generar y proteger claves, firmar transacciones y administrar operaciones críticas. El usuario no depende de un servidor ni de una cuenta tradicional.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Feature
              icon="📡"
              title="NFC"
              text="Acerca la tarjeta al móvil para autorizar operaciones críticas de forma sencilla."
            />
            <Feature
              icon="🔐"
              title="Firma segura"
              text="Las claves no se exponen durante la firma. La tarjeta actúa como elemento de autorización."
            />
            <Feature
              icon="🧭"
              title="Identidad vinculada"
              text="La tarjeta administra claves asociadas a dominios .klv, wallets y operaciones sensibles."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
            <Logo className="h-28 w-28" />
            <h3 className="mt-10 text-4xl font-black">Flujo de firma</h3>

            <div className="mt-8 space-y-4">
              {[
                "Preparar operación",
                "Acercar TapForge Card",
                "Validar operación",
                "Firmar desde el chip",
                "Enviar transacción",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-bold text-white/80"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-sm text-white">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
              PRODUCTO
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              No es una tarjeta de backup.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              TapForge Card está pensada como un elemento activo de seguridad. Puede proteger la firma de transacciones, la administración del dominio .klv y operaciones sensibles dentro de la wallet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
