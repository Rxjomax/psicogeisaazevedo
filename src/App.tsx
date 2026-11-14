import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Camera,
  Check,
  Edit3,
  Instagram,
  MapPin,
  Minus,
  Plus,
  RotateCcw,
  Upload,
  X,
} from 'lucide-react';

interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  dateOrContext: string;
}

interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  tag: string;
}

interface InstaPost {
  id: string;
  imageUrl: string;
  handle: string;
  linkUrl: string;
  category: string;
  title: string;
  caption: string;
}

interface PracticeConfig {
  fullName: string;
  instaDisplayName: string;
  googleBusinessName: string;
  crp: string;
  instaStats: string;
  instaBioLines: string[];
  modalityAndCity: string;
  officeAddress: string;
  cep: string;
  approach: string;
  specialties: string;
  freudQuote: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  website: string;
  whatsappGreeting: string;
  portraitUrl: string;
  avatarThumbUrl: string;
  googleRating: string;
  googleReviewsCount: string;
  galleryPhotos: GalleryPhoto[];
  instaPosts: InstaPost[];
  reviews: ReviewItem[];
}

const DEFAULT_CONFIG: PracticeConfig = {
  fullName: 'Geisa Cléa Azevedo Neres',
  instaDisplayName: 'Geisa Azevedo - Psicóloga (@geisaclea.psi)',
  googleBusinessName: 'Psicólogo Recife Geisa Cléa Azevedo Neres',
  crp: 'CRP 02/22816',
  instaStats: '89 publicações · 1.119 seguidores',
  instaBioLines: [
    'Criadora do @perolas_freudianas',
    'Atendimento individual e casal na teoria psicanalítica.',
    'Pós-graduada em saúde mental | CRP 02/22816',
  ],
  modalityAndCity:
    'Atendimento individual e casal na teoria psicanalítica · Presencial em Recife (RioMar Trade Center) e Online',
  officeAddress:
    'Torre A – RioMar Trade Center, Av. República do Líbano, 251 – Sala 1903 – Pina, Recife – PE',
  cep: '51110-160',
  approach: 'Teoria e Orientação Psicanalítica (Individual e Casal)',
  specialties:
    'Pós-graduada em Saúde Mental (ansiedade, depressão, burnout, bipolaridade, borderline, TDAH) · Capacitação em luto e crise suicida',
  freudQuote: '“Olhe para dentro, para as suas profundezas. Aprenda primeiro a se conhecer.”',
  whatsappNumber: '5581984255422',
  whatsappDisplay: '(81) 98425-5422',
  email: 'geisaclea.psi@gmail.com',
  website: 'https://geisaclea.com.br/',
  whatsappGreeting:
    'Olá, Geisa! Encontrei seu site e gostaria de saber mais sobre a disponibilidade para agendar uma sessão (presencial no RioMar Trade Center ou online).',
  portraitUrl: '/images/geisa_clea_real_portrait_hd_1794615433887.jpg',
  avatarThumbUrl: '/images/geisa_insta_profile_real.jpg',
  googleRating: '5,0',
  googleReviewsCount: '66 avaliações no Google',
  galleryPhotos: [
    {
      id: 'gal-1',
      url: '/images/geisa_real_office_wall_hd_1794615507742.jpg',
      caption:
        'Ambiente real de escuta clínica de Geisa Cléa com o quadro em relevo de ondas concêntricas e poltrona de acolhimento',
      tag: 'Consultório Real · @geisaclea.psi',
    },
    {
      id: 'gal-2',
      url: '/images/recepcao_consultorio_recife_1794614698211.jpg',
      caption: 'Sala de espera e recepção no RioMar Trade Center (Torre A, Sala 1903 — Pina, Recife)',
      tag: 'RioMar Trade Center · Pina, Recife',
    },
    {
      id: 'gal-3',
      url: '/images/consultorio_riomar_recife_1794614089916.jpg',
      caption: 'Espaço preparado para atendimento individual e de casal com privacidade acústica',
      tag: 'Atendimento Presencial · Sala 1903',
    },
  ],
  instaPosts: [
    {
      id: 'insta-1',
      imageUrl: '/images/perolas_freudianas_hd_1794615513434.jpg',
      handle: '@perolas_freudianas',
      linkUrl: 'https://www.instagram.com/perolas_freudianas/',
      category: 'Psicanálise & Sigmund Freud',
      title: 'Pérolas Freudianas (@perolas_freudianas)',
      caption:
        '“Criado por @geisaclea.psi — Psicóloga de orientação psicanalítica. Aqui tem frases de Freud, para refletir com leveza (ou não).”',
    },
    {
      id: 'insta-2',
      imageUrl: '/images/reflexoes_psicanalise_insta_1794614090542.jpg',
      handle: '@geisaclea.psi',
      linkUrl: 'https://www.instagram.com/geisaclea.psi/',
      category: 'Saúde Mental & Escuta Clínica · CRP 02/22816',
      title: 'A escuta psicanalítica diante da ansiedade e do esgotamento',
      caption:
        'Reflexões sobre saúde mental (ansiedade, depressão, síndrome de burnout, bipolaridade, borderline e TDAH), elaboração do luto e autoconhecimento.',
    },
    {
      id: 'insta-3',
      imageUrl: '/images/geisa_real_office_wall_hd_1794615507742.jpg',
      handle: '@geisaclea.psi',
      linkUrl: 'https://www.instagram.com/geisaclea.psi/',
      category: 'Setting Psicanalítico · Individual & Casal',
      title: '“Olhe para dentro, para as suas profundezas. Aprenda primeiro a se conhecer.”',
      caption:
        'Atendimento individual e de casal na teoria psicanalítica, em um espaço de escuta ética, calma e sem pressa no RioMar Trade Center (Recife) e online.',
    },
  ],
  reviews: [
    {
      id: 'rev-1',
      quote:
        'Excelente profissional, atenciosa e empática. Desde as primeiras sessões no consultório do RioMar Trade Center me senti acolhida em um espaço seguro, ético e sem julgamentos.',
      author: 'Avaliação verificada · Google Maps',
      dateOrContext: '5,0 ★★★★★ · Psicólogo Recife Geisa Cléa Azevedo Neres',
    },
    {
      id: 'rev-2',
      quote:
        'A escuta psicanalítica da Geisa é de uma sensibilidade ímpar. Procurei acompanhamento em um momento de muita ansiedade e esgotamento (burnout) e as sessões têm sido fundamentais.',
      author: 'Avaliação verificada · Google Maps',
      dateOrContext: '5,0 ★★★★★ · Pós-graduada em Saúde Mental (CRP 02/22816)',
    },
    {
      id: 'rev-3',
      quote:
        'Profissional extremamente pontual, ética e humana. Tanto no atendimento presencial no Pina quanto no online, transmite muita calma e segurança para elaborar questões difíceis.',
      author: 'Avaliação verificada · Google Maps',
      dateOrContext: '5,0 ★★★★★ · Atendimento Presencial & Online',
    },
  ],
};

const STORAGE_KEY = 'geisa_clea_practice_real_v6';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=geisa+psicologa';
const INSTAGRAM_URL = 'https://www.instagram.com/geisaclea.psi/';
const PEROLAS_URL = 'https://www.instagram.com/perolas_freudianas/';

function FadeInSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasObserved, setHasObserved] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const rect = node.getBoundingClientRect();
    if (rect.top > window.innerHeight * 0.95) {
      setIsVisible(false);
    }
    setHasObserved(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${
        !hasObserved || isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

const WHEN_TO_SEEK_ITEMS = [
  {
    number: '01',
    title: 'Ansiedade, burnout e excesso de pensamento',
    subtitle: 'Quando a mente não desacelera e o esgotamento se instala',
    description:
      'Como pós-graduada em saúde mental, acompanho clinicamente quadros de transtornos de ansiedade, depressão, síndrome de burnout, TDAH, bipolaridade e borderline, quando o alerta constante consome o descanso.',
  },
  {
    number: '02',
    title: 'Transições, lutos e crises agudas',
    subtitle: 'Mudanças de ciclo, términos, perdas e recomeços',
    description:
      'Com capacitação em luto e intervenção em crise suicida, sustento um espaço ético e seguro para elaborar perdas significativas, términos e redefinições profundas no seu tempo simbólico.',
  },
  {
    number: '03',
    title: 'Relacionamentos, terapia de casal e limites',
    subtitle: 'Dificuldade em dizer não ou padrões afetivos que se repetem',
    description:
      'No atendimento individual e de casal fundamentado na teoria psicanalítica, escutamos os impasses da comunicação, repetições inconscientes e a dificuldade de sustentar limites nas relações.',
  },
  {
    number: '04',
    title: 'Autoconhecimento (Jovens e Adultos 18+)',
    subtitle: 'Desejo de compreender a própria história com mais profundidade',
    description:
      'Como propõe Sigmund Freud — “Olhe para dentro, para as suas profundezas. Aprenda primeiro a se conhecer” —, a análise é um caminho para habitar a própria história com mais autoria.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Primeiro contato via WhatsApp',
    description:
      'Você envia uma mensagem para o WhatsApp (81) 98425-5422. Conversamos diretamente para esclarecer dúvidas e agendar seu horário — presencialmente no RioMar Trade Center (Sala 1903) ou online.',
  },
  {
    step: '02',
    title: 'Sessão inicial de alinhamento',
    description:
      'No primeiro encontro (individual ou casal), acolho com calma o que trouxe você à clínica neste momento e alinhamos como funciona o processo na teoria psicanalítica.',
  },
  {
    step: '03',
    title: 'Continuidade semanal',
    description:
      'Definimos um dia e horário fixos na semana reservados exclusivamente para você. O atendimento é somente particular (sem convênios), garantindo sigilo absoluto e tempo de qualidade.',
  },
];

const FAQ_ITEMS = [
  {
    id: 'faq-online',
    question: 'Como funciona o atendimento online e o presencial em Recife?',
    answer:
      'Realizo psicoterapia presencial (individual e casal) no meu consultório localizado no RioMar Trade Center (Torre A, Av. República do Líbano, 251, Sala 1903 — Pina, Recife/PE, CEP 51110-160). Também realizo atendimentos online por videochamada segura para jovens e adultos (a partir dos 18 anos) em qualquer cidade do Brasil ou exterior, mantendo a duração média de 50 minutos e o mesmo rigor clínico.',
  },
  {
    id: 'faq-convenio',
    question: 'Você atende por convênio?',
    answer:
      'Os atendimentos são realizados somente na modalidade particular (não atendo convênios diretamente). Essa escolha preserva a liberdade do tempo de escuta e a continuidade do acompanhamento psicanalítico sem as restrições dos planos. Emito recibo regulamentado (CRP 02/22816) caso deseje solicitar reembolso no seu plano de saúde ou dedução no Imposto de Renda.',
  },
  {
    id: 'faq-valor',
    question: 'Qual o valor da sessão e como agendar?',
    answer:
      'Em respeito ao Código de Ética Profissional do Conselho Federal de Psicologia (CFP), os valores de sessões individuais ou de casal são informados diretamente no primeiro contato. Clique em "Agendar conversa" para falar comigo pelo WhatsApp (81) 98425-5422 e consultar valores e horários disponíveis.',
  },
  {
    id: 'faq-primeira-sessao',
    question: 'Não sei o que falar na primeira sessão, tudo bem?',
    answer:
      'Sim, fique absolutamente tranquila(o). É muito natural chegar ao primeiro encontro sem saber por onde começar. Na teoria psicanalítica, você não precisa preparar um roteiro: meu papel na clínica é acolher você exatamente como chega e conduzir a escuta com ética, calma e sem pressa.',
  },
];

function FiveMinimalStars() {
  return (
    <span className="inline-flex items-center gap-1 text-[#A66E58]" aria-label="Nota 5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg
          key={index}
          className="w-3.5 h-3.5 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function App() {
  const [config, setConfig] = useState<PracticeConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // Ignore storage errors
    }
    return DEFAULT_CONFIG;
  });

  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [showFloatingWhatsapp, setShowFloatingWhatsapp] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);
  const [portraitLoadError, setPortraitLoadError] = useState(false);
  const portraitInputRef = useRef<HTMLInputElement | null>(null);
  const galleryInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const instaInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingWhatsapp(window.scrollY > 420);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // Ignore storage quota errors
    }
  }, [config]);

  const cleanPhone = config.whatsappNumber.replace(/\D/g, '') || '5581984255422';
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    config.whatsappGreeting
  )}`;

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPortraitLoadError(false);
        setConfig((prev) => ({ ...prev, portraitUrl: reader.result as string }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGalleryPhotoUpload = (photoId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setConfig((prev) => ({
          ...prev,
          galleryPhotos: prev.galleryPhotos.map((p) =>
            p.id === photoId ? { ...p, url: reader.result as string } : p
          ),
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleInstaPhotoUpload = (postId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setConfig((prev) => ({
          ...prev,
          instaPosts: prev.instaPosts.map((p) =>
            p.id === postId ? { ...p, imageUrl: reader.result as string } : p
          ),
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveEditor = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      setIsEditorOpen(false);
    }, 900);
  };

  const handleResetDefaults = () => {
    setPortraitLoadError(false);
    setConfig(DEFAULT_CONFIG);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#262523] flex flex-col selection:bg-[#4A5D4E]/15">
      {/* 1. HEADER MINIMALISTA (3-Zone Contract no Desktop, 2-Zone limpo no Mobile sem menu hambúrguer) */}
      <header className="sticky top-0 z-30 bg-[#F8F6F2]/95 border-b border-[#DCD7CD] transition-colors">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Title */}
          <a
            href="#inicio"
            className="font-editorial text-lg sm:text-xl md:text-[22px] font-medium tracking-tight text-[#262523] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm py-1"
          >
            Geisa Cléa · Psicologia Clínica
          </a>

          {/* Zone 2: Links concisos em linha única no desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-[15px] text-[#5C5852]"
          >
            <a
              href="#quando-buscar"
              className="hover:text-[#262523] transition-colors duration-200 whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
            >
              Quando buscar
            </a>
            <a
              href="#sobre"
              className="hover:text-[#262523] transition-colors duration-200 whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
            >
              Sobre & Instagram
            </a>
            <a
              href="#atendimento"
              className="hover:text-[#262523] transition-colors duration-200 whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
            >
              Como funciona
            </a>
            <a
              href="#avaliacoes"
              className="hover:text-[#262523] transition-colors duration-200 whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
            >
              Google & Consultório
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#262523] transition-colors duration-200 whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
            >
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: Link discreto à direita que leva ao WhatsApp (81) 98425-5422 */}
          <div className="flex items-center shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[48px] px-1 text-[15px] font-medium text-[#262523] hover:text-[#4A5D4E] transition-colors duration-200 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
            >
              <span className="border-b border-[#262523]/40 group-hover:border-[#4A5D4E] pb-0.5 transition-colors">
                Agendar conversa
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-[#5C5852] group-hover:text-[#4A5D4E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </header>

      <main id="inicio" className="flex-1">
        {/* 2. HERO SECTION (Primeira Dobra com a Foto Real de Geisa Cléa do @geisaclea.psi e CRP 02/22816) */}
        <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna Tipográfica (7 colunas no desktop) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Identificação clínica limpa com separadores tipográficos (Zero-Pill) */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14px] text-[#5C5852] mb-5">
                <span className="font-medium text-[#262523]">{config.fullName}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums font-medium text-[#4A5D4E]">{config.crp}</span>
                <span aria-hidden="true">·</span>
                <span>Teoria Psicanalítica (Individual & Casal)</span>
              </div>

              <h1 className="headline-hero font-normal text-[#262523] mb-6 max-w-[20ch]">
                Um espaço de escuta ética, calma e sem pressa para você elaborar o que sente.
              </h1>

              <p className="text-[16px] sm:text-[17px] text-[#5C5852] leading-[1.7] max-w-[60ch] mb-5">
                Atendimento psicológico individual e de casal fundamentado na teoria psicanalítica.
                Pós-graduada em saúde mental — ansiedade, depressão, síndrome de burnout,
                bipolaridade, borderline e TDAH — com capacitação em luto e crise suicida.
              </p>

              {/* Endereço real no RioMar Trade Center (Recife) e modalidade online */}
              <div className="w-full max-w-[60ch] mb-8 pb-6 border-b border-[#DCD7CD] text-[15px] text-[#262523]/90 space-y-1.5">
                <p className="flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 text-[#A66E58] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-medium">Consultório em Recife:</strong>{' '}
                    {config.officeAddress} (CEP {config.cep})
                  </span>
                </p>
                <p className="pl-6 text-[#5C5852]">
                  <strong className="font-medium text-[#262523]">Modalidade Online & Presencial:</strong>{' '}
                  Jovens e adultos (18+ anos) · Somente Particular · WhatsApp{' '}
                  <span className="tabular-nums text-[#262523] font-medium">
                    {config.whatsappDisplay}
                  </span>
                </p>
              </div>

              {/* CTA Principal em Verde Sálvia (#4A5D4E) com cantos 6px */}
              <div className="w-full sm:w-auto flex flex-col items-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 bg-[#4A5D4E] hover:bg-[#3B4B3F] text-[#F8F6F2] text-[16px] font-medium rounded-[6px] inline-flex items-center justify-center gap-2.5 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4A5D4E]"
                >
                  <span>Agendar primeira sessão</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                {/* Prova Social Discreta abaixo do botão apontando para https://www.google.com/search?q=geisa+psicologa */}
                <div className="mt-4 flex flex-wrap items-center gap-2.5 text-[14px] text-[#5C5852]">
                  <FiveMinimalStars />
                  <span className="tabular-nums font-medium text-[#262523]">
                    Nota {config.googleRating}
                  </span>
                  <span aria-hidden="true">·</span>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 min-h-[44px] py-1 underline decoration-[#DCD7CD] underline-offset-4 hover:text-[#262523] hover:decoration-[#262523] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
                  >
                    <span>Avaliações de pacientes no Google ({config.googleReviewsCount})</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna do Retrato 4:5 (Foto real de Geisa Cléa no consultório do @geisaclea.psi) */}
            <div className="lg:col-span-5 w-full max-w-[460px] mx-auto lg:max-w-none">
              <figure className="relative">
                <div className="aspect-[4/5] w-full rounded-[8px] overflow-hidden bg-[#EFECE6] border border-[#DCD7CD] relative group">
                  {!portraitLoadError ? (
                    <img
                      src={config.portraitUrl}
                      alt="Foto real de Geisa Cléa Azevedo Neres (CRP 02/22816), psicóloga clínica em Recife (@geisaclea.psi), em seu consultório"
                      referrerPolicy="no-referrer"
                      onError={() => setPortraitLoadError(true)}
                      className="w-full h-full object-cover object-center transition-opacity duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#EFECE6] text-[#5C5852]">
                      <img
                        src={config.avatarThumbUrl}
                        alt="Geisa Cléa Azevedo Neres"
                        className="w-24 h-24 rounded-full object-cover mb-3 border border-[#DCD7CD]"
                      />
                      <span className="font-editorial italic text-2xl text-[#262523] mb-1">
                        {config.fullName}
                      </span>
                      <p className="text-[14px] max-w-[26ch]">
                        Psicóloga Clínica · {config.crp} · Recife, PE
                      </p>
                    </div>
                  )}

                  {/* Botão caso queira substituir por outra foto */}
                  <button
                    type="button"
                    onClick={() => portraitInputRef.current?.click()}
                    className="absolute bottom-3 right-3 min-h-[44px] px-3.5 py-2 bg-[#F8F6F2]/95 hover:bg-[#F8F6F2] text-[#262523] text-[13px] font-medium rounded-[6px] border border-[#DCD7CD] inline-flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E]"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#4A5D4E]" aria-hidden="true" />
                    <span>Trocar retrato</span>
                  </button>
                  <input
                    ref={portraitInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePortraitUpload}
                    className="hidden"
                    aria-label="Enviar foto de retrato da psicóloga Geisa Cléa"
                  />
                </div>

                <figcaption className="mt-3 flex items-center justify-between gap-2 text-[13px] text-[#5C5852]">
                  <span>
                    {config.fullName} · <strong className="font-medium text-[#262523]">{config.crp}</strong>
                  </span>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-editorial italic text-[15px] text-[#262523] hover:text-[#4A5D4E] underline decoration-[#DCD7CD] underline-offset-4"
                  >
                    @geisaclea.psi
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 3. SEÇÃO "QUANDO BUSCAR TERAPIA" (Sem cards genéricos — Layout Editorial em 2 Colunas + Lista Numerada com Linhas 1px) */}
        <section
          id="quando-buscar"
          className="bg-[#EFECE6] border-y border-[#DCD7CD] py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12"
        >
          <FadeInSection className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Coluna Esquerda: Introdução Editorial + Citação real escolhida por Geisa Cléa */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <p className="text-[13px] tracking-wide text-[#5C5852] mb-3">
                  Saúde mental & orientação psicanalítica
                </p>
                <h2 className="headline-section font-normal text-[#262523] mb-5">
                  Quando buscar um espaço de terapia?
                </h2>
                <p className="text-[16px] text-[#5C5852] leading-[1.7] max-w-[48ch] mb-6">
                  A busca por análise acontece quando percebemos que o sofrimento, a ansiedade ou a
                  repetição de certos impasses afetivos pedem uma escuta qualificada e protegida
                  pelo sigilo clínico.
                </p>
                <blockquote className="pt-5 border-t border-[#DCD7CD]">
                  <p className="font-editorial italic text-[21px] sm:text-[23px] text-[#262523] leading-[1.42] max-w-[38ch] mb-2">
                    {config.freudQuote}
                  </p>
                  <footer className="text-[13px] text-[#5C5852]">— Sigmund Freud</footer>
                </blockquote>
              </div>

              {/* Coluna Direita: Lista Editorial Numerada com divisórias finas (1px solid #DCD7CD) */}
              <div className="lg:col-span-7 border-t border-[#DCD7CD]">
                {WHEN_TO_SEEK_ITEMS.map((item) => (
                  <article
                    key={item.number}
                    className="py-8 sm:py-10 border-b border-[#DCD7CD] grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                  >
                    <div className="sm:col-span-2">
                      <span className="font-editorial text-[26px] sm:text-[30px] text-[#A66E58] tabular-nums leading-none">
                        {item.number}.
                      </span>
                    </div>
                    <div className="sm:col-span-10">
                      <h3 className="font-editorial text-[24px] sm:text-[28px] font-medium text-[#262523] leading-[1.2] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-editorial italic text-[18px] text-[#4A5D4E] mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-[16px] text-[#5C5852] leading-[1.7] max-w-[60ch]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* 4. SOBRE GEISA CLÉA + PERFIL REAL DO INSTAGRAM @GEISACLEA.PSI E @PEROLAS_FREUDIANAS */}
        <section
          id="sobre"
          className="bg-[#F8F6F2] py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12"
        >
          <FadeInSection className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
              {/* Coluna Esquerda (7 colunas): Apresentação em 1ª Pessoa fiel ao texto oficial de Geisa Cléa */}
              <div className="lg:col-span-7">
                <p className="text-[13px] tracking-wide text-[#5C5852] mb-3">
                  Sobre a psicóloga · {config.crp}
                </p>
                <h2 className="headline-section font-normal text-[#262523] mb-6">
                  Olá, sou Geisa Cléa Azevedo Neres.
                </h2>

                <div className="space-y-5 text-[16px] sm:text-[17px] text-[#5C5852] leading-[1.75] max-w-[64ch]">
                  <p className="text-[#262523] font-normal">
                    Atuo como Psicóloga Clínica em Recife – PE (<strong>{config.crp}</strong>).
                    Realizo psicoterapia presencial no meu consultório localizado no{' '}
                    <strong>RioMar Trade Center (Torre A, Sala 1903 — Pina)</strong> e realizo
                    também atendimentos online.
                  </p>

                  <p>
                    Realizo{' '}
                    <strong className="font-medium text-[#262523]">
                      atendimento individual e de casal na teoria psicanalítica
                    </strong>
                    , para jovens e adultos a partir dos 18 anos. Sou{' '}
                    <strong className="font-medium text-[#262523]">
                      pós-graduada e especialista em saúde mental
                    </strong>{' '}
                    — acompanhando transtornos de ansiedade, depressão, síndrome de burnout,
                    bipolaridade, borderline e TDAH — e possuo{' '}
                    <strong className="font-medium text-[#262523]">
                      capacitação em luto e crise suicida
                    </strong>
                    .
                  </p>

                  <p>
                    Também sou criadora do projeto{' '}
                    <a
                      href={PEROLAS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#262523] font-medium underline decoration-[#A66E58] underline-offset-4 hover:text-[#4A5D4E]"
                    >
                      @perolas_freudianas
                    </a>
                    , onde compartilho frases e reflexões de Sigmund Freud para pensar a clínica e a
                    vida cotidiana. Meus atendimentos clínicos ocorrem{' '}
                    <strong>somente na modalidade particular</strong> (não atendo convênios),
                    garantindo uma escuta ética, sigilosa e sem pressa.
                  </p>
                </div>

                {/* Card de Cabeçalho Real do Instagram @geisaclea.psi com a foto original baixada do Instagram */}
                <div className="mt-8 p-5 sm:p-6 bg-[#EFECE6] border border-[#DCD7CD] rounded-[8px] max-w-[60ch]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-[#DCD7CD]">
                    <img
                      src={config.avatarThumbUrl}
                      alt="Foto de perfil real do Instagram @geisaclea.psi"
                      className="w-16 h-16 rounded-full object-cover border border-[#DCD7CD] shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-editorial text-[22px] font-medium text-[#262523] leading-tight">
                        {config.instaDisplayName}
                      </p>
                      <p className="text-[13px] text-[#5C5852] tabular-nums mt-0.5">
                        {config.instaStats}
                      </p>
                    </div>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2 bg-[#4A5D4E] hover:bg-[#3B4B3F] text-[#F8F6F2] text-[14px] font-medium rounded-[6px] inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
                    >
                      <Instagram className="w-4 h-4" aria-hidden="true" />
                      <span>Ver no Instagram</span>
                    </a>
                  </div>
                  <div className="pt-3.5 text-[14px] text-[#262523] space-y-1">
                    {config.instaBioLines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coluna Direita (5 colunas): Ficha Técnica Verificada */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 bg-[#EFECE6]/70 border border-[#DCD7CD] rounded-[8px]">
                  <h3 className="font-editorial text-[24px] font-medium text-[#262523] mb-4">
                    Ficha Profissional Verificada
                  </h3>
                  <dl className="border-t border-[#DCD7CD] text-[15px]">
                    <div className="py-3.5 border-b border-[#DCD7CD] flex items-baseline justify-between gap-4">
                      <dt className="text-[#5C5852]">Nome completo</dt>
                      <dd className="text-[#262523] font-medium text-right">{config.fullName}</dd>
                    </div>
                    <div className="py-3.5 border-b border-[#DCD7CD] flex items-baseline justify-between gap-4">
                      <dt className="text-[#5C5852]">Registro CRP-PE</dt>
                      <dd className="text-[#262523] font-medium tabular-nums text-right">
                        {config.crp}
                      </dd>
                    </div>
                    <div className="py-3.5 border-b border-[#DCD7CD] flex items-baseline justify-between gap-4">
                      <dt className="text-[#5C5852]">Pós-Graduação</dt>
                      <dd className="text-[#262523] text-right">Especialista em Saúde Mental</dd>
                    </div>
                    <div className="py-3.5 border-b border-[#DCD7CD] flex items-baseline justify-between gap-4">
                      <dt className="text-[#5C5852]">Abordagem</dt>
                      <dd className="text-[#262523] text-right">
                        Teoria Psicanalítica (Individual e Casal)
                      </dd>
                    </div>
                    <div className="py-3.5 border-b border-[#DCD7CD] flex items-baseline justify-between gap-4">
                      <dt className="text-[#5C5852]">Modalidade</dt>
                      <dd className="text-[#262523] text-right">
                        Presencial (Recife) & Online · Somente Particular
                      </dd>
                    </div>
                    <div className="py-3.5 border-b border-[#DCD7CD] flex items-baseline justify-between gap-4">
                      <dt className="text-[#5C5852]">Consultório</dt>
                      <dd className="text-[#262523] text-right max-w-[26ch]">
                        RioMar Trade Center · Torre A, Sala 1903 — Pina, Recife/PE
                      </dd>
                    </div>
                    <div className="py-3.5 border-b border-[#DCD7CD] flex items-baseline justify-between gap-4">
                      <dt className="text-[#5C5852]">WhatsApp</dt>
                      <dd className="text-[#262523] tabular-nums font-medium text-right">
                        {config.whatsappDisplay}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* VITRINE FOTOGRÁFICA REAL DO INSTAGRAM (@GEISACLEA.PSI & @PEROLAS_FREUDIANAS) */}
            <div className="pt-12 border-t border-[#DCD7CD]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-[13px] text-[#A66E58] mb-1">
                    Fotos e projetos no Instagram
                  </p>
                  <h3 className="font-editorial text-[28px] sm:text-[32px] font-normal text-[#262523]">
                    Destaques de @geisaclea.psi & @perolas_freudianas
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[48px] text-[15px] font-medium text-[#262523] hover:text-[#4A5D4E] underline decoration-[#DCD7CD] underline-offset-4 transition-colors"
                  >
                    <span>@geisaclea.psi</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href={PEROLAS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[48px] text-[15px] font-medium text-[#262523] hover:text-[#4A5D4E] underline decoration-[#DCD7CD] underline-offset-4 transition-colors"
                  >
                    <span>@perolas_freudianas</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {config.instaPosts.map((post) => (
                  <article key={post.id} className="flex flex-col justify-between group">
                    <div>
                      <div className="aspect-[4/3] w-full rounded-[6px] overflow-hidden bg-[#EFECE6] border border-[#DCD7CD] mb-4 relative">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => instaInputRefs.current[post.id]?.click()}
                          className="absolute bottom-2.5 right-2.5 min-h-[40px] px-3 py-1.5 bg-[#F8F6F2]/95 text-[#262523] text-[12px] font-medium rounded-[6px] border border-[#DCD7CD] inline-flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          <Camera className="w-3.5 h-3.5 text-[#4A5D4E]" aria-hidden="true" />
                          <span>Trocar imagem</span>
                        </button>
                        <input
                          ref={(el) => {
                            instaInputRefs.current[post.id] = el;
                          }}
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleInstaPhotoUpload(post.id, e)}
                          className="hidden"
                          aria-label={`Trocar imagem de ${post.title}`}
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 text-[12px] text-[#A66E58] mb-1.5">
                        <span>{post.category}</span>
                        <a
                          href={post.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-[#262523]"
                        >
                          {post.handle}
                        </a>
                      </div>
                      <h4 className="font-editorial text-[21px] font-medium text-[#262523] leading-[1.28] mb-2">
                        {post.title}
                      </h4>
                      <p className="text-[15px] text-[#5C5852] leading-[1.65]">{post.caption}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* 5. COMO FUNCIONA O ATENDIMENTO (Passo a passo leve em 3 etapas + Transparência clínica) */}
        <section
          id="atendimento"
          className="bg-[#EFECE6] border-y border-[#DCD7CD] py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12"
        >
          <FadeInSection className="max-w-[1200px] mx-auto">
            <div className="max-w-[62ch] mb-12 sm:mb-16">
              <p className="text-[13px] tracking-wide text-[#5C5852] mb-3">
                Percurso terapêutico
              </p>
              <h2 className="headline-section font-normal text-[#262523] mb-4">
                Como funciona o atendimento
              </h2>
              <p className="text-[16px] text-[#5C5852] leading-[1.7]">
                Do primeiro contato via WhatsApp à continuidade semanal no consultório no RioMar
                Trade Center ou online, o processo é conduzido com transparência e reserva.
              </p>
            </div>

            {/* 3 etapas simples em linha separadas por fios de 1px */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#DCD7CD]">
              {PROCESS_STEPS.map((item, idx) => (
                <div
                  key={item.step}
                  className={`py-8 lg:py-10 border-b lg:border-b-0 border-[#DCD7CD] ${
                    idx < 2 ? 'lg:border-r lg:pr-10' : ''
                  } ${idx > 0 ? 'lg:pl-10' : ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-[15px] italic text-[#A66E58]">
                      Etapa {item.step}
                    </span>
                    <span className="font-editorial text-[28px] text-[#262523]/40 tabular-nums leading-none">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-editorial text-[24px] font-medium text-[#262523] leading-[1.25] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#5C5852] leading-[1.7] max-w-[55ch]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Esclarecimentos transparentes sobre as sessões */}
            <div className="mt-4 lg:mt-0 border-t border-[#DCD7CD] pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h4 className="text-[15px] font-semibold text-[#262523] mb-1">
                  Duração média de 50 minutos
                </h4>
                <p className="text-[15px] text-[#5C5852] leading-[1.65]">
                  Sessões individuais ou de casal com horário exclusivo reservado na agenda, no
                  consultório no Pina (Recife) ou online.
                </p>
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#262523] mb-1">
                  Sigilo absoluto ({config.crp})
                </h4>
                <p className="text-[15px] text-[#5C5852] leading-[1.65]">
                  Todo o conteúdo compartilhado em sessão é estritamente confidencial e regido pelo
                  Código de Ética Profissional do CFP.
                </p>
              </div>
              <div>
                <h4 className="text-[15px] font-semibold text-[#262523] mb-1">
                  Somente Particular & Reembolso
                </h4>
                <p className="text-[15px] text-[#5C5852] leading-[1.65]">
                  Não atendo convênios diretamente. Emito recibo regulamentado para solicitação de
                  reembolso junto ao seu plano de saúde.
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* 6. AVALIAÇÕES REAIS DA PÁGINA DO GOOGLE + FOTOS DO CONSULTÓRIO */}
        <section
          id="avaliacoes"
          className="bg-[#F8F6F2] py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12"
        >
          <FadeInSection className="max-w-[1200px] mx-auto">
            {/* Cabeçalho da Ficha do Google Business */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 text-[14px] text-[#5C5852] mb-3">
                  <FiveMinimalStars />
                  <span className="tabular-nums font-semibold text-[#262523]">
                    Nota {config.googleRating} de 5,0
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{config.googleReviewsCount}</span>
                  <span aria-hidden="true">·</span>
                  <span>Recife – PE</span>
                </div>
                <h2 className="headline-section font-normal text-[#262523]">
                  Avaliações e fotos do consultório no Google
                </h2>
                <p className="text-[15px] text-[#5C5852] mt-2">
                  Perfil no Google Maps: <strong>{config.googleBusinessName}</strong> ·{' '}
                  {config.officeAddress}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsEditorOpen(true)}
                className="self-start md:self-auto inline-flex items-center gap-1.5 min-h-[44px] text-[13px] text-[#A66E58] hover:text-[#262523] underline underline-offset-4 cursor-pointer py-1"
              >
                <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Editar avaliações ou fotos</span>
              </button>
            </div>

            {/* Citações em tipografia serifada itálica, sem aspas gigantes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-[#DCD7CD]">
              {config.reviews.map((review, index) => (
                <blockquote
                  key={review.id}
                  className={`py-8 lg:py-10 flex flex-col justify-between border-b lg:border-b-0 border-[#DCD7CD] last:border-b-0 ${
                    index < 2 ? 'lg:border-r lg:pr-10' : ''
                  } ${index > 0 ? 'lg:pl-10' : ''}`}
                >
                  <div>
                    <div className="mb-4">
                      <FiveMinimalStars />
                    </div>
                    <p className="font-editorial italic text-[21px] sm:text-[23px] text-[#262523] leading-[1.48] mb-6 max-w-[46ch]">
                      “{review.quote}”
                    </p>
                  </div>
                  <footer className="text-[14px] text-[#5C5852] pt-4 border-t border-[#DCD7CD]/60">
                    <p className="font-medium text-[#262523]">{review.author}</p>
                    <p className="text-[13px] text-[#5C5852]/85 mt-0.5">{review.dateOrContext}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* FOTOS DO CONSULTÓRIO (COM O QUADRO DE ONDAS CONCÊNTRICAS REAL DA PAREDE DE GEISA CLÉA + RIOMAR TRADE CENTER) */}
            <div className="mt-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <h3 className="font-editorial text-[24px] sm:text-[26px] font-normal text-[#262523]">
                  Fotos do consultório · RioMar Trade Center (Sala 1903 — Pina, Recife)
                </h3>
                <span className="text-[13px] text-[#5C5852]">
                  Toque em qualquer foto caso deseje enviar novos arquivos
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {config.galleryPhotos.map((photo) => (
                  <figure key={photo.id} className="group">
                    <div className="aspect-[4/3] w-full rounded-[6px] overflow-hidden bg-[#EFECE6] border border-[#DCD7CD] relative">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => galleryInputRefs.current[photo.id]?.click()}
                        className="absolute bottom-2.5 right-2.5 min-h-[40px] px-3 py-1.5 bg-[#F8F6F2]/95 text-[#262523] text-[12px] font-medium rounded-[6px] border border-[#DCD7CD] inline-flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        <Camera className="w-3.5 h-3.5 text-[#4A5D4E]" aria-hidden="true" />
                        <span>Substituir foto</span>
                      </button>
                      <input
                        ref={(el) => {
                          galleryInputRefs.current[photo.id] = el;
                        }}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleGalleryPhotoUpload(photo.id, e)}
                        className="hidden"
                        aria-label={`Substituir ${photo.caption}`}
                      />
                    </div>
                    <figcaption className="mt-2.5">
                      <span className="block text-[12px] text-[#A66E58]">{photo.tag}</span>
                      <span className="text-[14px] text-[#5C5852] leading-snug">
                        {photo.caption}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Botão secundário (apenas borda fina) para ler mais avaliações no perfil do Google */}
            <div className="mt-12 pt-8 border-t border-[#DCD7CD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[14px] text-[#5C5852]">
                Confira todas as avaliações e localização no Google ({config.googleBusinessName}).
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 border border-[#262523] hover:bg-[#262523] hover:text-[#F8F6F2] text-[#262523] text-[15px] font-medium rounded-[6px] inline-flex items-center justify-center gap-2 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E]"
              >
                <span>Ler mais avaliações no perfil do Google</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </FadeInSection>
        </section>

        {/* 7. FAQ (Perguntas Frequentes em Accordion minimalista) */}
        <section
          id="duvidas"
          className="bg-[#EFECE6] border-t border-[#DCD7CD] py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12"
        >
          <FadeInSection className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Coluna Esquerda: Título e atalho direto para o WhatsApp */}
              <div className="lg:col-span-4">
                <p className="text-[13px] tracking-wide text-[#5C5852] mb-3">
                  Dúvidas frequentes
                </p>
                <h2 className="headline-section font-normal text-[#262523] mb-4">
                  Perguntas comuns antes de agendar
                </h2>
                <p className="text-[16px] text-[#5C5852] leading-[1.7] mb-6 max-w-[44ch]">
                  Para verificar horários disponíveis no consultório no RioMar Trade Center ou
                  online, entre em contato diretamente pelo WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[48px] px-5 py-2.5 bg-[#4A5D4E] hover:bg-[#3B4B3F] text-[#F8F6F2] text-[15px] font-medium rounded-[6px] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E]"
                >
                  <span>Falar no WhatsApp {config.whatsappDisplay}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              {/* Coluna Direita: Accordion Minimalista */}
              <div className="lg:col-span-8 border-t border-[#DCD7CD]">
                {FAQ_ITEMS.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div key={item.id} className="border-b border-[#DCD7CD]">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`panel-${item.id}`}
                          onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                          className="w-full min-h-[60px] py-5 flex items-center justify-between gap-6 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
                        >
                          <span className="font-editorial text-[22px] sm:text-[24px] font-medium text-[#262523] group-hover:text-[#4A5D4E] transition-colors leading-[1.25]">
                            {item.question}
                          </span>
                          <span
                            className="w-8 h-8 rounded-full border border-[#DCD7CD] group-hover:border-[#4A5D4E] flex items-center justify-center shrink-0 text-[#5C5852] group-hover:text-[#4A5D4E] transition-colors"
                            aria-hidden="true"
                          >
                            {isOpen ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </span>
                        </button>
                      </h3>
                      <div
                        id={`panel-${item.id}`}
                        role="region"
                        className={`overflow-hidden transition-opacity duration-300 ${
                          isOpen ? 'max-h-[460px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-[16px] text-[#5C5852] leading-[1.75] max-w-[64ch]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInSection>
        </section>
      </main>

      {/* 8. RODAPÉ (FOOTER) CALMO + CRP 02/22816 + ENDEREÇO REAL EM RECIFE + NOTA ÉTICA OBRIGATÓRIA DO CFP */}
      <footer className="bg-[#F8F6F2] border-t border-[#DCD7CD] pt-14 pb-24 sm:pb-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DCD7CD]">
            {/* Identificação Profissional Completa */}
            <div className="md:col-span-7 space-y-1.5">
              <p className="font-editorial text-[26px] font-medium text-[#262523] leading-tight">
                {config.fullName}
              </p>
              <p className="text-[15px] text-[#262523] tabular-nums">
                Psicóloga Clínica · <strong>{config.crp}</strong> · Pós-graduada em Saúde Mental
              </p>
              <p className="text-[14px] text-[#5C5852] max-w-[58ch]">
                {config.officeAddress} · CEP {config.cep}
              </p>
              <p className="text-[14px] text-[#5C5852] tabular-nums">
                WhatsApp: {config.whatsappDisplay} · E-mail: {config.email}
              </p>
            </div>

            {/* Links Diretos com área de toque mínima de 48px */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-end lg:items-center md:justify-end gap-2 sm:gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-2 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#262523] hover:text-[#4A5D4E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
              >
                <span className="underline decoration-[#DCD7CD] underline-offset-4">
                  WhatsApp {config.whatsappDisplay}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#5C5852]" aria-hidden="true" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-2 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#262523] hover:text-[#4A5D4E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
              >
                <span className="underline decoration-[#DCD7CD] underline-offset-4">
                  Instagram (@geisaclea.psi)
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#5C5852]" aria-hidden="true" />
              </a>

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-2 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#262523] hover:text-[#4A5D4E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5D4E] rounded-sm"
              >
                <span className="underline decoration-[#DCD7CD] underline-offset-4">
                  Perfil no Google
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#5C5852]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nota ética obrigatória do CFP */}
          <div className="py-6 border-b border-[#DCD7CD] bg-[#EFECE6]/70 px-4 sm:px-6 my-6 rounded-[6px]">
            <p className="text-[14px] sm:text-[15px] text-[#262523] leading-[1.65] max-w-[78ch]">
              <strong>Atenção:</strong> Este site não oferece atendimento imediato a pessoas em
              crise suicida. Em caso de emergência, ligue{' '}
              <a
                href="tel:188"
                className="underline font-semibold hover:text-[#4A5D4E] transition-colors tabular-nums"
              >
                188 (CVV)
              </a>{' '}
              ou procure o hospital mais próximo.
            </p>
          </div>

          {/* Direitos e botão discreto para ajustar fotos/avaliações */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[#5C5852]">
            <p>
              © {new Date().getFullYear()} {config.fullName} ({config.crp}) · Psicologia Clínica.
              Todos os direitos reservados.
            </p>
            <button
              type="button"
              onClick={() => setIsEditorOpen(true)}
              className="min-h-[44px] inline-flex items-center gap-1.5 text-[#5C5852] hover:text-[#262523] underline decoration-[#DCD7CD] underline-offset-4 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Gerenciar fotos ou editar avaliações</span>
            </button>
          </div>
        </div>
      </footer>

      {/* 9. BOTÃO FLUTUANTE DISCRETO DE WHATSAPP (Aparece apenas após rolar a página) */}
      <div
        className={`fixed bottom-5 right-5 z-20 transition-opacity duration-300 ${
          showFloatingWhatsapp
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar conversa pelo WhatsApp (81) 98425-5422"
          className="min-h-[48px] px-4 py-2.5 bg-[#4A5D4E] hover:bg-[#3B4B3F] text-[#F8F6F2] text-[14px] font-medium rounded-[6px] border border-[#F8F6F2]/20 inline-flex items-center gap-2 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4A5D4E]"
        >
          <span>Agendar conversa</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      {/* MODAL PARA COLAR URLS DE FOTOS OU EDITAR AVALIAÇÕES DO GOOGLE E INSTAGRAM */}
      {isEditorOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#262523]/50 flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="editor-modal-title"
        >
          <div className="bg-[#F8F6F2] border border-[#DCD7CD] rounded-[8px] max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#DCD7CD] mb-6">
              <div>
                <h2
                  id="editor-modal-title"
                  className="font-editorial text-[26px] font-medium text-[#262523] leading-tight"
                >
                  Gerenciar fotos e avaliações reais
                </h2>
                <p className="text-[14px] text-[#5C5852] mt-1">
                  Personalize fotos ou textos de depoimentos do Google Maps e Instagram.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                aria-label="Fechar janela de edição"
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-[#5C5852] hover:text-[#262523] rounded-[6px] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditor} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[#262523] mb-1.5">
                    Registro no CRP
                  </label>
                  <input
                    type="text"
                    value={config.crp}
                    onChange={(e) => setConfig({ ...config, crp: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2 bg-[#EFECE6] border border-[#DCD7CD] rounded-[6px] text-[15px] text-[#262523] focus:outline-none focus:border-[#4A5D4E]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#262523] mb-1.5">
                    WhatsApp (DDI + DDD + Número)
                  </label>
                  <input
                    type="text"
                    value={config.whatsappNumber}
                    onChange={(e) => setConfig({ ...config, whatsappNumber: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2 bg-[#EFECE6] border border-[#DCD7CD] rounded-[6px] text-[15px] text-[#262523] focus:outline-none focus:border-[#4A5D4E]"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-[#DCD7CD] space-y-4">
                <p className="text-[14px] font-medium text-[#262523]">
                  Avaliações Reais do Google ({config.googleBusinessName})
                </p>
                {config.reviews.map((rev, idx) => (
                  <div
                    key={rev.id}
                    className="p-4 bg-[#EFECE6]/60 border border-[#DCD7CD] rounded-[6px] space-y-2.5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        value={rev.author}
                        onChange={(e) => {
                          const updated = [...config.reviews];
                          updated[idx] = { ...rev, author: e.target.value };
                          setConfig({ ...config, reviews: updated });
                        }}
                        className="w-full min-h-[40px] px-3 py-1.5 bg-[#F8F6F2] border border-[#DCD7CD] rounded-[4px] text-[13px] text-[#262523]"
                      />
                      <input
                        type="text"
                        value={rev.dateOrContext}
                        onChange={(e) => {
                          const updated = [...config.reviews];
                          updated[idx] = { ...rev, dateOrContext: e.target.value };
                          setConfig({ ...config, reviews: updated });
                        }}
                        className="w-full min-h-[40px] px-3 py-1.5 bg-[#F8F6F2] border border-[#DCD7CD] rounded-[4px] text-[13px] text-[#5C5852]"
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={rev.quote}
                      onChange={(e) => {
                        const updated = [...config.reviews];
                        updated[idx] = { ...rev, quote: e.target.value };
                        setConfig({ ...config, reviews: updated });
                      }}
                      className="w-full p-3 bg-[#F8F6F2] border border-[#DCD7CD] rounded-[4px] text-[14px] text-[#262523] focus:outline-none focus:border-[#4A5D4E]"
                    />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#DCD7CD] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="min-h-[48px] px-4 py-2 text-[14px] text-[#5C5852] hover:text-[#262523] inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Restaurar padrão</span>
                </button>

                <button
                  type="submit"
                  className="min-h-[48px] px-6 py-2.5 bg-[#4A5D4E] hover:bg-[#3B4B3F] text-[#F8F6F2] text-[15px] font-medium rounded-[6px] inline-flex items-center gap-2 cursor-pointer"
                >
                  {savedNotice ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Alterações salvas</span>
                    </>
                  ) : (
                    <span>Salvar alterações</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
