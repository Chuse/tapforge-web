import React, { useMemo, useState } from "react";
import logo from "../assets/tapforge-logo.svg";

const roadmap = [
  {
    version: "v0.1",
    title: "Fundación",
    progress: 100,
    items: [
      { label: "Onboarding inicial", status: "done" },
      { label: "Pantalla PIN", status: "done" },
      { label: "Home principal", status: "done" },
      { label: "Línea visual TapForge", status: "done" },
    ],
  },
  {
    version: "v0.2",
    title: "Wallet KLV",
    progress: 70,
    items: [
      { label: "Pantalla Blockchain", status: "done" },
      { label: "Listado de tokens", status: "done" },
      { label: "Wallet de token", status: "progress" },
      { label: "Staking y validadores", status: "progress" },
    ],
  },
  {
    version: "v0.3",
    title: "Identidad .klv",
    progress: 35,
    items: [
      { label: "Contrato de dominios", status: "progress" },
      { label: "Registro de dominio .klv", status: "planned" },
      { label: "Resolución multired", status: "planned" },
      { label: "Perfil público", status: "planned" },
    ],
  },
  {
    version: "v0.4",
    title: "TapForge Card",
    progress: 20,
    items: [
      { label: "Firma NFC", status: "planned" },
      { label: "Vinculación con dominio", status: "planned" },
      { label: "Recuperación segura", status: "planned" },
      { label: "Verificación de autenticidad", status: "planned" },
    ],
  },
  {
    version: "v0.5",
    title: "Wallet multired",
    progress: 10,
    items: [
      { label: "Ethereum", status: "planned" },
      { label: "BSC", status: "planned" },
      { label: "Polygon", status: "planned" },
      { label: "Solana", status: "planned" },
    ],
  },
];

const initialIdeas = [
  {
    id: 1,
    votes: 128,
    title: "Marketplace de dominios .klv",
    description: "Permitir comprar, vender o transferir dominios .klv entre usuarios.",
    status: "En revisión",
    tag: "Identidad",
  },
  {
    id: 2,
    votes: 84,
    title: "Verificación de redes sociales",
    description: "Vincular X, GitHub, Telegram o LinkedIn a un dominio .klv.",
    status: "Abierta",
    tag: "Perfil",
  },
  {
    id: 3,
    votes: 52,
    title: "Alias secundarios",
    description: "Gestionar varios dominios bajo una misma identidad TapForge.",
    status: "Abierta",
    tag: "Dominios",
  },
  {
    id: 4,
    votes: 42,
    title: "Página pública del dominio",
    description: "Crear una página tipo tapforge.io/carlos para mostrar perfil, redes y direcciones.",
    status: "Planificable",
    tag: "Web",
  },
];

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
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-2xl">
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

function StatusIcon({ status }) {
  if (status === "done") return <span className="text-emerald-500">✓</span>;
  if (status === "progress") return <span className="text-teal-500">●</span>;
  return <span className="text-slate-400">○</span>;
}

function RoadmapCard({ item }) {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
      <div className="absolute -right-20 -bottom-24">
        <Logo className="h-64 w-64" muted />
      </div>
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black tracking-[0.18em] text-emerald-600">{item.version}</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">{item.title}</h3>
          </div>
          <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">
            {item.progress}%
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-emerald-500" style={{ width: `${item.progress}%` }} />
        </div>

        <div className="mt-6 space-y-3">
          {item.items.map((feature) => (
            <div key={feature.label} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
              <StatusIcon status={feature.status} />
              <span className="text-sm font-semibold text-slate-700">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IdeaCard({ idea, onVote }) {
  return (
    <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
      <div className="flex gap-5">
        <button onClick={() => onVote(idea.id)} className="flex min-w-16 flex-col items-center justify-center rounded-3xl bg-emerald-50 px-4 py-3 text-emerald-700 hover:bg-emerald-100">
          <span className="text-xl font-black">▲</span>
          <span className="text-lg font-black">{idea.votes}</span>
        </button>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{idea.tag}</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700">{idea.status}</span>
          </div>
          <h3 className="mt-4 text-2xl font-black text-slate-950">{idea.title}</h3>
          <p className="mt-3 leading-relaxed text-slate-500">{idea.description}</p>
        </div>
      </div>
    </div>
  );
}

function ProposalForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", description: "", tag: "Identidad" });

  const submit = () => {
    if (!form.title.trim() || !form.description.trim()) return;
    onAdd(form);
    setForm({ title: "", description: "", tag: "Identidad" });
  };

  return (
    <div className="rounded-[36px] border border-slate-100 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
      <h3 className="text-3xl font-black text-slate-950">Proponer una idea</h3>
      <p className="mt-2 text-slate-500">Las propuestas aparecerán como ideas de la comunidad.</p>

      <div className="mt-6 space-y-4">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Título de la idea"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold outline-none focus:border-emerald-400"
        />
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Describe brevemente la propuesta"
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold outline-none focus:border-emerald-400"
        />
        <select
          value={form.tag}
          onChange={(e) => setForm({ ...form, tag: e.target.value })}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold outline-none focus:border-emerald-400"
        >
          <option>Identidad</option>
          <option>Wallet</option>
          <option>TapForge Card</option>
          <option>Dominios</option>
          <option>Comunidad</option>
        </select>
        <button onClick={submit} className="w-full rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600">
          Enviar propuesta
        </button>
      </div>
    </div>
  );
}

export default function TapForgeRoadmapPage() {
  const [tab, setTab] = useState("roadmap");
  const [ideas, setIdeas] = useState(initialIdeas);

  const stats = useMemo(() => {
    const all = roadmap.flatMap((r) => r.items);
    return {
      done: all.filter((i) => i.status === "done").length,
      progress: all.filter((i) => i.status === "progress").length,
      planned: all.filter((i) => i.status === "planned").length,
      ideas: ideas.length,
    };
  }, [ideas]);

  const vote = (id) => {
    setIdeas((current) => current.map((idea) => idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea));
  };

  const addIdea = (idea) => {
    setIdeas((current) => [
      {
        id: Date.now(),
        votes: 1,
        title: idea.title,
        description: idea.description,
        status: "Abierta",
        tag: idea.tag,
      },
      ...current,
    ]);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFB] text-slate-950">
      <Header />

      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute left-1/2 top-8 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute -left-32 bottom-0 hidden md:block">
          <Logo className="h-[520px] w-[520px]" muted />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-white px-5 py-3 text-sm font-black text-emerald-700 shadow-sm">
            <Logo className="h-7 w-7" />
            Construido en público · Impulsado por la comunidad
          </div>
          <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            Roadmap público de TapForge.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-slate-600">
            Sigue el progreso del producto, descubre qué versiones vienen después y propone ideas para que la comunidad vote.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button onClick={() => setTab("roadmap")} className="rounded-2xl bg-emerald-500 px-8 py-5 font-black text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-600">
              Ver roadmap oficial
            </button>
            <button onClick={() => setTab("ideas")} className="rounded-2xl border border-white bg-white/80 px-8 py-5 font-black text-slate-800 shadow-lg backdrop-blur-xl hover:bg-white">
              Ver ideas de comunidad
            </button>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ["✓", stats.done, "Completadas"],
              ["●", stats.progress, "En desarrollo"],
              ["○", stats.planned, "Planificadas"],
              ["▲", stats.ideas, "Ideas abiertas"],
            ].map(([icon, value, label]) => (
              <div key={label} className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <p className="text-2xl text-emerald-600">{icon}</p>
                <p className="mt-2 text-4xl font-black text-slate-950">{value}</p>
                <p className="mt-1 text-sm font-bold text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-10">
        <div className="mx-auto flex max-w-7xl gap-3 rounded-[26px] border border-slate-100 bg-white p-2 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <button
            onClick={() => setTab("roadmap")}
            className={`flex-1 rounded-2xl px-5 py-4 font-black ${tab === "roadmap" ? "bg-emerald-500 text-white" : "text-slate-500 hover:bg-slate-50"}`}
          >
            Roadmap oficial
          </button>
          <button
            onClick={() => setTab("ideas")}
            className={`flex-1 rounded-2xl px-5 py-4 font-black ${tab === "ideas" ? "bg-emerald-500 text-white" : "text-slate-500 hover:bg-slate-50"}`}
          >
            Ideas comunidad
          </button>
        </div>
      </section>

      {tab === "roadmap" ? (
        <section id="roadmap" className="px-5 py-12 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {roadmap.map((item) => <RoadmapCard key={item.version} item={item} />)}
          </div>
        </section>
      ) : (
        <section id="ideas" className="px-5 py-12 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div className="space-y-5">
              {ideas.map((idea) => <IdeaCard key={idea.id} idea={idea} onVote={vote} />)}
            </div>
            <div id="proponer" className="lg:sticky lg:top-28 lg:self-start">
              <ProposalForm onAdd={addIdea} />
            </div>
          </div>
        </section>
      )}

      <footer className="px-5 py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[36px] bg-slate-950 p-8 text-white md:flex-row">
          <div className="flex items-center gap-4">
            <Logo className="h-16 w-16" />
            <div>
              <p className="text-2xl font-black">TapForge</p>
              <p className="text-white/50">Un nombre. Una identidad. Todas tus redes.</p>
            </div>
          </div>
          <p className="text-sm font-bold text-white/40">Roadmap público experimental</p>
        </div>
      </footer>
    </main>
  );
}
