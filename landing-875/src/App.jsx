import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
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
              className="min-w-70 bg-[#111] border border-zinc-800 rounded-2xl p-5"
            >
              <div className="h-40 bg-zinc-900 rounded-xl mb-5 flex items-center justify-center text-zinc-500">
                Imagem / vídeo
              </div>

              <CheckCircle className="text-red-500 mb-3" />

              <h3 className="text-xl font-bold">{item}</h3>

              <p className="text-zinc-400 mt-2">
                Demonstração simples e visual para facilitar o dia a dia da
                operação.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecossistema() {
  const items = ["Sistema", "Atendimento", "Caixa", "Marketing", "Vendas"];

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Ecossistema completo
        </h2>

        <p className="text-zinc-400 mt-4">
          Gestão, atendimento, caixa, marketing e tráfego funcionando juntos.
        </p>

        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {items.map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
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
              className="aspect-9/16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500"
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
    <section className="px-6 py-24 bg-linear-to-b from-zinc-950 to-black text-center">
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