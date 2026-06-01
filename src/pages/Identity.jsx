import React from "react";
import logo from "../assets/tapforge-logo.svg";
import Header from "../components/Header";

function Logo({ className = "h-12 w-12", muted = false }) {
  return (
    <img
      src={logo}
      alt="TapForge"
      className={`${className} object-contain ${muted ? "opacity-[0.05]" : ""}`}
    />
  );
}


function ResolverCard() {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
      <div className="absolute -right-28 -bottom-28">
        <Logo className="h-[340px] w-[340px]" muted />
      </div>

      <div className="relative">
        <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
          RESOLVER MULTIRED
        </p>

        <h3 className="mt-3 text-5xl font-black text-slate-950">
          carlos.klv
        </h3>

        <div className="mt-8 space-y-3">
          {[
            ["Klever", "Dirección KLV"],
            ["Ethereum", "Dirección 0x"],
            ["BSC", "Dirección BEP20"],
            ["Polygon", "Dirección POL"],
          ].map(([chain, detail]) => (
            <div
              key={chain}
              className="flex items-center justify-between rounded-3xl border border-slate-100 bg-slate-50 p-4"
            >
              <div>
                <p className="font-black text-slate-950">{chain}</p>
                <p className="text-sm text-slate-500">{detail}</p>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
            </div>
          ))}
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

export default function Identity() {
  return (
    <main className="min-h-screen bg-[#F8FAFB] text-slate-950">
      <Header />

      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute -left-36 bottom-0 hidden md:block">
          <Logo className="h-[560px] w-[560px]" muted />
        </div>
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-emerald-200/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-emerald-100 bg-white px-5 py-3 text-sm font-black text-emerald-700 shadow-sm">
              <Logo className="h-7 w-7" />
              Dominio .klv como identidad pública
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              No es una cuenta. No es un perfil.
            </h1>

            <p className="mt-7 max-w-2xl text-2xl font-black text-emerald-600">
              Es tu identidad on-chain.
            </p>

            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-600">
              Con TapForge, tu dominio .klv se convierte en el centro de tu identidad:
              direcciones, redes, perfil público y wallets conectadas bajo un único nombre.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/roadmap"
                className="rounded-2xl bg-emerald-500 px-8 py-5 text-center font-black text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-600"
              >
                Ver evolución
              </a>
              <a
                href="/"
                className="rounded-2xl border border-slate-200 bg-white px-8 py-5 text-center font-black text-slate-800 shadow-lg hover:bg-slate-50"
              >
                Volver al inicio
              </a>
            </div>
          </div>

          <ResolverCard />
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
              QUÉ RESUELVE
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Un nombre. Todas tus direcciones.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Feature
              icon="🌐"
              title="Dominio .klv"
              text="Un nombre legible para recibir activos y representar tu identidad pública."
            />
            <Feature
              icon="⛓️"
              title="Direcciones multired"
              text="Vincula Klever, Ethereum, BSC, Polygon y otras redes bajo el mismo dominio."
            />
            <Feature
              icon="🔐"
              title="Control propio"
              text="El dominio vive on-chain y solo el propietario puede administrarlo."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
            <Logo className="h-28 w-28" />
            <h3 className="mt-10 text-4xl font-black">carlos.klv</h3>

            <div className="mt-8 space-y-4">
              {[
                "Direcciones blockchain",
                "Perfil público",
                "Redes sociales verificadas",
                "Metadata editable",
                "Wallets vinculadas",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-bold text-white/80"
                >
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
              La identidad no se crea en una base de datos.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              TapForge no trata tu identidad como una cuenta tradicional. El dominio .klv
              es el punto de referencia. Todo lo demás —direcciones, redes, perfil y
              verificaciones— cuelga de ese dominio.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
