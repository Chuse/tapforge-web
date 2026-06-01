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

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[320px] rounded-[48px] border border-white/70 bg-white/90 p-3 shadow-[0_40px_120px_rgba(15,23,42,0.25)] backdrop-blur-2xl">
      <div className="relative overflow-hidden rounded-[40px] bg-[#F8FAFB] p-4">
        <div className="absolute -right-20 top-40">
          <Logo className="h-[260px] w-[260px]" muted />
        </div>

        <div className="flex items-center justify-between text-xs font-bold text-slate-900">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        <div className="relative mt-6 rounded-[30px] border border-slate-100 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <div>
              <p className="text-xs text-slate-500">Identidad activa</p>
              <p className="text-lg font-black text-slate-950">carlos.klv</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm font-black text-emerald-700">TapForge Card conectada</p>
            <p className="mt-1 text-xs text-slate-500">Lista para firmar operaciones</p>
          </div>
        </div>

        <div className="relative mt-4 rounded-[30px] border border-slate-100 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
          <p className="text-xs text-slate-500">Balance total</p>
          <p className="mt-1 text-3xl font-black text-slate-950">10,000 KLV</p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {["Enviar", "Recibir", "Swap"].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-emerald-50 px-2 py-3 text-center text-xs font-black text-emerald-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-4 space-y-2">
          {[
            ["Klever", "10,000 KLV"],
            ["Ethereum", "Próximamente"],
            ["BSC", "Próximamente"],
          ].map(([chain, value]) => (
            <div
              key={chain}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4"
            >
              <div>
                <p className="text-sm font-black text-slate-950">{chain}</p>
                <p className="text-xs text-slate-500">Red vinculada</p>
              </div>
              <p className="text-xs font-bold text-slate-500">{value}</p>
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

function ChainCard({ name, status, tokens }) {
  return (
    <div className="rounded-[30px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-black text-slate-950">{name}</p>
          <p className="mt-1 text-sm text-slate-500">{tokens}</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700">
          {status}
        </span>
      </div>
    </div>
  );
}

export default function Wallet() {
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
              TapForge Wallet · Identidad primero
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              La wallet deja de ser el centro.
            </h1>

            <p className="mt-7 max-w-2xl text-2xl font-black text-emerald-600">
              El centro es tu identidad.
            </p>

            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-600">
              TapForge organiza blockchains, tokens y wallets alrededor de tu dominio .klv,
              evitando una home saturada y haciendo que cada operación tenga contexto.
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

          <PhoneMockup />
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
              ARQUITECTURA
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Home limpia. Redes separadas. Operaciones claras.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TapForge no mezcla todos los tokens de todas las redes en una única pantalla.
              Primero eliges la blockchain, luego el token, y finalmente la wallet operativa.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Feature
              icon="🌐"
              title="Blockchain"
              text="Cada red tiene su propio espacio: Klever, Ethereum, BSC, Polygon y más."
            />
            <Feature
              icon="🪙"
              title="Tokens"
              text="Los activos se muestran agrupados por red, sin exponer direcciones innecesarias."
            />
            <Feature
              icon="👛"
              title="Wallets"
              text="La wallet maestra aparece primero, con opción de acceder a wallets secundarias."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="rounded-[40px] bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
            <Logo className="h-28 w-28" />
            <h3 className="mt-10 text-4xl font-black">Estructura de navegación</h3>

            <div className="mt-8 space-y-4">
              {[
                "Home",
                "Blockchain",
                "Token",
                "Wallet",
                "Operación",
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
              MULTIRED
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Una identidad. Múltiples redes.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              La wallet de TapForge está diseñada para que el usuario pueda operar en varias
              blockchains sin perder la relación con su identidad principal.
            </p>

            <div className="mt-8 space-y-4">
              <ChainCard name="Klever" status="v1.0" tokens="KLV, KFI y tokens KDA" />
              <ChainCard name="Ethereum" status="v1.2" tokens="ETH y ERC-20" />
              <ChainCard name="BSC" status="v1.2" tokens="BNB y BEP-20" />
              <ChainCard name="Polygon" status="v1.2" tokens="POL y tokens Polygon" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
