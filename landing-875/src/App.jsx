import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Headphones,
  CashRegister,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import "./index.css";

const whatsapp = "https://wa.me/message/BABWIOHDLQI6L1";

const cards = [
  "Atendimento rápido",
  "Controle de caixa",
  "Controle financeiro",
  "Controle de estoque",
  "App de garçom",
  "Relatórios inteligentes",
];

export default function App() {
  return (
    <main className="bg-[#080808] text-white overflow-hidden">
      <Hero />
      <ComoFunciona />
      <Ecossistema />
      <Marketing />
      <Cases />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <img
            src="/images/logo.png"
            alt="875 Systems"
            className="w-40 mb-4 drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]"
          />

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Mais controle, mais agilidade e mais vendas para o seu negócio.
          </h1>

          <p className="text-zinc-300 text-lg mt-6">
            Sistema completo para restaurantes, atendimento, caixa, gestão e
            marketing em um só ecossistema.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 px-6 py-4 rounded-xl font-bold transition"
          >
            Falar no WhatsApp <MessageCircle size={20} />
          </a>
        </motion.div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-2xl">
          <div className="aspect-video bg-black rounded-2xl flex items-center justify-center text-zinc-500">
            Vídeo / imagem do sistema aqui
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="px-6 py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Como o sistema funciona
        </h2>

        <p className="text-zinc-400 mb-10">
          Tudo pensado para ser simples, rápido e fácil de entender.
        </p>

        <div className="flex gap-5 overflow-x-auto pb-6">
          {cards.map((item) => (
            <div
              key={item}
              className="min-w-[280px] bg-[#111] border border-zinc-800 rounded-2xl p-5"
            >
              <div className="h-40 bg-zinc-900 rounded-xl mb-5 flex items-center justify-center text-zinc-500">
                Imagem / vídeo
              </div>

              <CheckCircle className="text-red-500 mb-3" />

              <h3 className="text-xl font-bold">{item}</h3>

              <p className="text-zinc-400 mt-2">
                Demonstração simples e visual para facilitar o dia a dia da operação.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecossistema() {
  return (
    <section className="px-6 py-24 bg-black text-center relative overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Ecossistema completo
      </h2>

      <p className="text-zinc-400 mb-16">
        Gestão, atendimento, caixa, marketing e tráfego funcionando juntos.
      </p>

      <div className="md:hidden relative w-full flex justify-center items-center">
        <div className="relative w-[330px] h-[330px]">
          <div className="absolute inset-0 rounded-full border border-red-500/50 shadow-[0_0_35px_rgba(255,0,0,0.45)]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <img
              src="/images/logo.png"
              alt="875 Systems"
              className="w-32 mb-3 drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]"
            />
            <p className="text-sm text-zinc-300 max-w-[220px]">
              Gestão, atendimento, caixa, marketing e tráfego funcionando juntos.
            </p>
          </div>

          <CircleItem text="Atendimento" icon={<Headphones size={28} />} top="0%" left="50%" />
          <CircleItem text="Caixa" icon={<CashRegister size={28} />} top="50%" left="100%" />
          <CircleItem text="Marketing" icon={<Megaphone size={28} />} top="100%" left="50%" />
          <CircleItem text="Vendas" icon={<TrendingUp size={28} />} top="50%" left="0%" />

          <ArrowGlow top="18%" left="75%" rotate="45deg" />
          <ArrowGlow top="75%" left="75%" rotate="135deg" />
          <ArrowGlow top="75%" left="18%" rotate="225deg" />
          <ArrowGlow top="18%" left="18%" rotate="315deg" />
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-5 gap-6 mt-16 max-w-6xl mx-auto">
        {["Sistema", "Atendimento", "Caixa", "Marketing", "Vendas"].map((item) => (
          <div
            key={item}
            className="bg-[#111] border border-red-500/30 rounded-2xl p-6 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.45)] transition duration-300"
          >
            <h3 className="font-bold text-lg">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function CircleItem({ text, icon, top, left }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ top, left }}
    >
      <div className="w-24 h-24 rounded-full border border-red-500 bg-black flex flex-col items-center justify-center gap-1 text-white shadow-[0_0_25px_rgba(255,0,0,0.85)] hover:scale-110 hover:shadow-[0_0_45px_rgba(255,0,0,1)] transition duration-300">
        <div className="text-red-500">{icon}</div>
        <span className="text-xs font-bold">{text}</span>
      </div>
    </div>
  );
}

function ArrowGlow({ top, left, rotate }) {
  return (
    <div
      className="absolute text-red-500 text-4xl z-10 drop-shadow-[0_0_12px_rgba(255,0,0,1)]"
      style={{ top, left, transform: `rotate(${rotate})` }}
    >
      →
    </div>
  );
}

function Marketing() {
  return (
    <section className="px-6 py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Marketing que ajuda a vender mais
          </h2>

          <p className="text-zinc-400 mt-5">
            Além da organização do sistema, a 875 Systems também trabalha com
            vídeos, criativos, campanhas e tráfego pago.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[9/16] bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500"
            >
              Vídeo {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = ["Bar do Pirata", "Porções e Cia"];

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Cases reais</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseName) => (
            <div
              key={caseName}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <div className="h-64 bg-black rounded-2xl mb-5 flex items-center justify-center text-zinc-500">
                Fotos / vídeos do cliente
              </div>

              <h3 className="text-2xl font-bold">{caseName}</h3>

              <p className="text-zinc-400 mt-2">
                Apresentação visual dos trabalhos, campanhas e resultados.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-zinc-950 to-black text-center">
      <h2 className="text-3xl md:text-5xl font-bold">
        Seu negócio mais organizado, rápido e vendendo mais.
      </h2>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition"
      >
        Falar com a 875 Systems <ArrowRight size={20} />
      </a>
    </section>
  );
}