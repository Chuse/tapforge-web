import React, { useMemo, useState } from "react";
import logo from "../assets/tapforge-logo.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Logo({ className = "h-12 w-12", muted = false }) {
  return (
    <img
      src={logo}
      alt="TapForge"
      className={`${className} object-contain ${muted ? "opacity-[0.05]" : ""}`}
    />
  );
}

function DomainPreview({ name }) {
  const cleanName = name.trim().toLowerCase() || "carlos";
  const domain = `${cleanName}.klv`;

  return (
    <div className="relative overflow-hidden rounded-[44px] bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
      <div className="absolute -right-28 -bottom-28">
        <Logo className="h-[340px] w-[340px]" muted />
      </div>

      <div className="relative">
        <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
          TU NOMBRE WEB3
        </p>

        <h2 className="mt-4 break-all text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
          {domain}
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Este dominio será el punto de entrada de tu identidad TapForge.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            ["Klever", "Dirección KLV"],
            ["Ethereum", "Dirección 0x"],
            ["BSC", "Dirección BEP20"],
            ["Polygon", "Dirección POL"],
          ].map(([chain, detail]) => (
            <div key={chain} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
              <p className="font-black text-slate-950">{chain}</p>
              <p className="mt-1 text-sm text-slate-500">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RuleCard({ chars, label, text }) {
  return (
    <div className="rounded-[30px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
      <p className="text-4xl font-black text-emerald-600">{chars}</p>
      <h3 className="mt-4 text-2xl font-black text-slate-950">{label}</h3>
      <p className="mt-3 leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-[30px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-black text-white">
        {number}
      </div>
      <h3 className="mt-6 text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

export default function Register() {
  const [name, setName] = useState("carlos");

  const cleanName = name.trim().toLowerCase();
  const domain = `${cleanName || "carlos"}.klv`;

  const domainInfo = useMemo(() => {
    const length = cleanName.length || 6;

    if (length <= 2) {
      return {
        label: "Premium",
        cost: "Coste premium",
        description: "Los dominios de 2 caracteres son extremadamente escasos.",
      };
    }

    if (length === 3) {
      return {
        label: "Muy escaso",
        cost: "Coste alto",
        description: "Los dominios de 3 caracteres tienen disponibilidad limitada.",
      };
    }

    if (length === 4) {
      return {
        label: "Limitado",
        cost: "Coste medio",
        description: "Los dominios de 4 caracteres tienen una disponibilidad más reducida.",
      };
    }

    return {
      label: "Estándar",
      cost: "Coste estándar",
      description: "Los dominios de 5 o más caracteres siguen la tarifa estándar.",
    };
  }, [cleanName]);

  return (
    <main className="min-h-screen bg-[#F8FAFB] text-slate-950">
      <Header />

      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute -left-36 bottom-0 hidden md:block">
          <Logo className="h-[560px] w-[560px]" muted />
        </div>
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-emerald-200/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-emerald-100 bg-white px-5 py-3 text-sm font-black text-emerald-700 shadow-sm">
              <Logo className="h-7 w-7" />
              Registro de dominios .klv
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Elige el nombre de tu identidad digital.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-600">
              Tu dominio .klv será el punto de entrada de tu identidad TapForge:
              direcciones, perfil público, redes verificadas y wallets conectadas bajo un único nombre.
            </p>

            <div className="mt-9 rounded-[32px] border border-slate-100 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <label className="text-sm font-black tracking-[0.18em] text-slate-400">
                BUSCAR DOMINIO
              </label>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z0-9-]/g, ""))}
                    placeholder="carlos"
                    className="min-w-0 flex-1 bg-transparent px-5 py-4 text-lg font-black outline-none"
                  />
                  <div className="flex items-center bg-white px-5 text-lg font-black text-emerald-600">
                    .klv
                  </div>
                </div>

                <button className="rounded-2xl bg-emerald-500 px-7 py-4 font-black text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600">
                  Comprobar
                </button>
              </div>

              <div className="mt-5 rounded-2xl bg-emerald-50 p-5">
                <p className="font-black text-emerald-700">
                  {domain} podría estar disponible
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {domainInfo.label} · {domainInfo.cost}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {domainInfo.description}
                </p>
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-400">
                El registro definitivo se realizará desde la aplicación TapForge.
              </p>
            </div>
          </div>

          <DomainPreview name={name} />
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
              CÓMO FUNCIONA
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              La web enseña el flujo. La app ejecuta el registro.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Esta página muestra cómo funcionará el registro de dominios .klv dentro de TapForge.
              La disponibilidad, coste real y confirmación final dependerán del contrato.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <Step
              number="1"
              title="Elige nombre"
              text="Busca el dominio .klv que quieres usar como identidad pública."
            />
            <Step
              number="2"
              title="Calcula coste"
              text="El contrato aplica reglas según longitud, disponibilidad y blacklist."
            />
            <Step
              number="3"
              title="Confirma"
              text="La app TapForge prepara la operación y solicita la firma."
            />
            <Step
              number="4"
              title="Activa identidad"
              text="Tu dominio queda asociado a tu identidad, direcciones y perfil."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black tracking-[0.25em] text-emerald-600">
              REGLAS DEL CONTRATO
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              No todos los nombres tienen el mismo valor.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Los dominios cortos son más escasos. El contrato puede aplicar precios distintos
              según el número de caracteres y bloquear nombres reservados mediante blacklist.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <RuleCard
              chars="2"
              label="Premium"
              text="Muy escasos. Pensados para nombres extremadamente cortos."
            />
            <RuleCard
              chars="3"
              label="Muy escasos"
              text="Alta demanda y disponibilidad limitada."
            />
            <RuleCard
              chars="4"
              label="Limitados"
              text="Más accesibles, pero todavía con valor diferencial."
            />
            <RuleCard
              chars="5+"
              label="Estándar"
              text="La opción natural para usuarios, marcas y proyectos."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto overflow-hidden rounded-[46px] bg-slate-950 p-10 text-white shadow-[0_35px_100px_rgba(15,23,42,0.28)] md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Logo className="h-32 w-32" />
              <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
                Un dominio. Una identidad completa.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                El dominio .klv será la base para resolver direcciones, mostrar un perfil público,
                vincular redes sociales y conectar TapForge Card con TapForge Wallet.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Resolución KLV",
                "Direcciones multired",
                "Perfil público",
                "Redes verificadas",
                "TapForge Card",
                "TapForge Wallet",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-6 font-black text-white/80 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
