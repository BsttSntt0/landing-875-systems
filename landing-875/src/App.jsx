import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Play,
  Headphones,
  BadgeDollarSign,
  Megaphone,
  TrendingUp,
  LayoutDashboard,
  Users,
  BarChart3,
} from "lucide-react";
import "./index.css";

const whatsapp = "https://wa.me/message/BABWIOHDLQI6L1";

const systemCards = [
  {
    title: "Atendimento rápido",
    text: "Demonstrações simples e suporte para facilitar o dia a dia da operação.",
    icon: <Headphones />,
  },
  {
    title: "Gestão centralizada",
    text: "Pedidos, caixa, clientes e relatórios conectados em um único ambiente.",
    icon: <LayoutDashboard />,
  },
  {
    title: "Marketing inteligente",
    text: "Campanhas, conteúdos e tráfego integrados para ajudar o negócio a vender mais.",
    icon: <Megaphone />,
  },
  {
    title: "Caixa organizado",
    text: "Mais clareza no controle financeiro e nas movimentações do dia.",
    icon: <BadgeDollarSign />,
  },
];

const marketingCards = [
  "Criativos para anúncios",
  "Vídeos para redes sociais",
  "Campanhas de tráfego",
  "Conteúdo para conversão",
];

const cases = [
  {
    name: "Bar do Pirata",
    link: "https://www.instagram.com/bardopirata_ibira?igsh=MXgzYjdhazhyNjl4dA==",
    video: "/videos/bardopirata.mp4",
  },
  {
    name: "Porções & Cia",
    link: "https://www.instagram.com/porcoesecia1?igsh=bWI2aWIxeHd6NGJ0",
    video: "/videos/porcoes.mp4",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden">
      <Hero />
      <ComoFunciona />
      <Ecossistema />
      <Marketing />
      <Cases />
      <CTA />
    </main>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-10 md:mb-14"
    >
      <h2 className="text-[clamp(2rem,6vw,3.6rem)] font-bold tracking-tight">
        {title}
      </h2>
      <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl">
        {subtitle}
      </p>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pt-8 pb-20 md:pt-10 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,31,45,0.18),transparent_34%),linear-gradient(180deg,#030303,#0B0B0F_70%,#030303)]" />

      <div className="relative max-w-7xl mx-auto">
        <img
          src="/images/logo.png"
          alt="875 Systems"
          className="w-20 h-20 rounded-full object-cover mb-12 shadow-[0_0_24px_rgba(255,31,45,0.35)]"
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FF1F2D] font-semibold mb-4">
              Tecnologia para restaurantes, delivery e negócios locais
            </p>

            <h1 className="text-[clamp(2.5rem,9vw,5.4rem)] font-black leading-[0.95] tracking-tight">
              Mais controle, mais agilidade e mais vendas para o seu negócio.
            </h1>

            <p className="mt-7 text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Sistema completo para restaurantes, delivery, atendimento, caixa,
              gestão e marketing em um só ecossistema.
            </p>

            <p className="mt-5 text-zinc-400 max-w-xl">
              Atendimento, vendas, caixa e marketing conectados em uma única
              plataforma.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar no WhatsApp"
              className="mt-9 inline-flex items-center gap-3 bg-[#FF1F2D] hover:bg-red-600 px-7 py-4 rounded-2xl font-bold text-lg shadow-[0_0_28px_rgba(255,31,45,0.32)] transition hover:scale-[1.02]"
            >
              Falar no WhatsApp <MessageCircle size={22} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#FF1F2D]/10 blur-3xl rounded-full" />

            <div className="relative bg-[#111116]/90 border border-white/10 rounded-[2rem] p-5 shadow-2xl">
              <div className="aspect-video rounded-[1.4rem] bg-gradient-to-br from-[#16161c] to-black flex flex-col items-center justify-center border border-white/10">
                <div className="w-16 h-16 rounded-full bg-[#FF1F2D] flex items-center justify-center mb-4 shadow-[0_0_28px_rgba(255,31,45,0.45)]">
                  <Play fill="white" size={28} />
                </div>
                <p className="text-zinc-300 font-medium">
                  Veja a 875 Systems em ação
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="px-5 py-20 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Como o sistema funciona"
          subtitle="Tudo pensado para ser simples, rápido e fácil de entender."
        />

        <div className="flex gap-5 overflow-x-auto pb-5 snap-x">
          {systemCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="snap-start min-w-[280px] md:min-w-0 md:flex-1 bg-[#111116] border border-white/10 rounded-3xl p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF1F2D]/10 text-[#FF1F2D] flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecossistema() {
  const modules = [
    { text: "Atendimento", icon: <Headphones size={24} />, top: "4%", left: "50%" },
    { text: "Vendas", icon: <TrendingUp size={24} />, top: "50%", left: "96%" },
    { text: "Caixa", icon: <BadgeDollarSign size={24} />, top: "96%", left: "50%" },
    { text: "Marketing", icon: <Megaphone size={24} />, top: "50%", left: "4%" },
  ];

  return (
    <section className="px-5 py-24 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          title="Ecossistema completo"
          subtitle="Gestão, atendimento, caixa, marketing e tráfego funcionando juntos."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-[min(86vw,390px)] h-[min(86vw,390px)]"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 390 390">
            <circle
              cx="195"
              cy="195"
              r="150"
              fill="none"
              stroke="rgba(255,31,45,0.22)"
              strokeWidth="2"
            />
            <motion.circle
              cx="195"
              cy="195"
              r="150"
              fill="none"
              stroke="rgba(255,31,45,0.75)"
              strokeWidth="3"
              strokeDasharray="70 870"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Logo 875 Systems"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-[0_0_28px_rgba(255,31,45,0.42)]"
            />
            <p className="mt-4 text-sm text-zinc-300 max-w-[210px]">
              Tudo conectado para facilitar a rotina do seu negócio.
            </p>
          </div>

          {modules.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: item.top, left: item.left }}
            >
              <div className="w-24 h-24 rounded-full bg-[#111116] border border-white/10 flex flex-col items-center justify-center gap-1 shadow-[0_0_22px_rgba(255,31,45,0.22)]">
                <div className="text-[#FF1F2D]">{item.icon}</div>
                <span className="text-xs font-bold">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Marketing() {
  return (
    <section className="px-5 py-24 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Marketing que ajuda a vender mais"
          subtitle="Além da organização do sistema, a 875 Systems também trabalha com vídeos, criativos, campanhas e tráfego pago."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketingCards.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="aspect-[9/12] rounded-3xl bg-gradient-to-br from-[#15151b] to-black border border-white/10 p-4 flex flex-col justify-between"
            >
              <div className="w-11 h-11 rounded-full bg-[#FF1F2D] flex items-center justify-center">
                <Play fill="white" size={20} />
              </div>
              <p className="text-left font-semibold text-sm md:text-base">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section className="px-5 py-24 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Cases reais"
          subtitle="Negócios que já utilizam soluções da 875 Systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-[#111116] border border-white/10 rounded-[2rem] p-5 hover:border-[#FF1F2D]/70 hover:scale-[1.015] transition block"
            >
              <div className="h-[420px] md:h-[380px] bg-black rounded-[1.4rem] overflow-hidden mb-5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>

              <h3 className="text-2xl font-bold group-hover:text-[#FF1F2D] transition">
                {item.name}
              </h3>

              <p className="mt-2 text-zinc-400">
                Mais presença digital e atendimento mais organizado.
              </p>

              <p className="mt-4 text-sm text-[#FF1F2D] font-semibold">
                Clique para ver no Instagram
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-5 py-24 bg-[#0B0B0F]">
      <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111116] to-black p-8 md:p-14">
        <h2 className="text-[clamp(2rem,6vw,4rem)] font-black leading-tight">
          Seu negócio mais organizado, rápido e vendendo mais.
        </h2>

        <p className="mt-5 text-zinc-400 text-lg">
          Fale com a 875 Systems e veja como conectar atendimento, vendas,
          caixa e marketing em um só lugar.
        </p>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a 875 Systems"
          className="mt-9 inline-flex items-center gap-3 bg-[#FF1F2D] hover:bg-red-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_28px_rgba(255,31,45,0.32)] transition hover:scale-[1.02]"
        >
          Falar com a 875 Systems <ArrowRight size={22} />
        </a>
      </div>
    </section>
  );
}