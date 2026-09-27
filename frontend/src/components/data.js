// Static content for Igreja Casa da Oração — easy to edit / swap later.

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cultos", href: "#cultos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Vídeos", href: "#videos" },
  { label: "Contribuição", href: "#contribuicao" },
  { label: "Contato", href: "#contato" },
];

// ---- MEDIA (temporary — swap for real church media later) ----
export const HERO_VIDEO = "";
export const HERO_POSTER = `${process.env.PUBLIC_URL}/fotos/culto-da-familia-poster-optimized.jpg`;

const unsplash = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;
const pexels = (path, width = 900) => `https://images.pexels.com/${path}?auto=compress&cs=tinysrgb&w=${width}`;

// reliable placeholder mp4s (replace with real sermons/worship clips)
const V1 = `${process.env.PUBLIC_URL}/hero.mp4`;
const V2 = "https://download.samplelib.com/mp4/sample-10s.mp4";
const V3 = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

export const VIDEOS = [
  { title: "Culto de Celebração — Domingo", meta: "Mensagem · 48 min", poster: unsplash("photo-1522158637959-30385a09e0da", 900), src: V1 },
  { title: "Noite de Louvor & Adoração", meta: "Momentos · 12 min", poster: unsplash("photo-1519892300165-cb5542fb47c7", 900), src: V2 },
  { title: "A Casa que Permanece", meta: "Série Raízes · 42 min", poster: unsplash("photo-1504052434569-70ad5836ab65", 900), src: V3 },
  { title: "Testemunhos da Comunidade", meta: "Histórias · 8 min", poster: unsplash("photo-1529070538774-1843cb3265df", 900), src: V2 },
];

export const PHOTO_INTRO = [
  { src: `${process.env.PUBLIC_URL}/fotos/miss-bruna-optimized.jpg`, alt: "Ministração de louvor durante o culto", cap: "Louvor & Palavra", shape: "wide", rotate: -1.5, fit: "contain" },
  { src: `${process.env.PUBLIC_URL}/fotos/pastor-jhonatan-optimized.jpg`, alt: "Adoração e oração na Casa da Oração", cap: "Pregaçoes", shape: "tall", rotate: 1.5, fit: "contain" },
  { src: `${process.env.PUBLIC_URL}/fotos/culto-rosa-poster-optimized.jpg`, alt: "Momento de entrega em oração", cap: "Adoração", shape: "portrait", rotate: -2, fit: "contain" },
  { src: `${process.env.PUBLIC_URL}/fotos/pregadores-cinza-poster-optimized.jpg`, alt: "Liderança e comunhão da igreja", cap: "Pregaçoes", shape: "portrait", rotate: 2, fit: "contain" },
];

export const SERVICES = [
  { day: "Domingo", name: "Culto de Celebração", time: "11h00 · 13h00", note: "Louvor, palavra e comunhão", icon: "sun" },
  { day: "Sexta-feira", name: "Live Profética", time: "21h00", note: "Horario de Portugal", icon: "book-open" },
 
];

export const CHAPTERS = [
  { n: "01", title: "Uma casa de oração para todos os povos", body: "Nascemos do desejo de ver Amora e as nações se encontrarem com Deus. Aqui não há estranhos há família ainda por chegar." },
  { n: "02", title: "Fé que se vive em comunidade", body: "Cremos que a caminhada cristã acontece à volta da mesa, no cuidado mútuo e na alegria de partilhar a vida." },
  { n: "03", title: "Raízes profundas, ramos que acolhem", body: "Como a árvore do nosso símbolo, aprofundamos raízes na Palavra e estendemos ramos para abrigar quem chega cansado." },
];

export const ABOUT_PHOTOS = [
  { src: `${process.env.PUBLIC_URL}/fotos/musico_branco_poster.jpg`, alt: "Ministrante de louvor com guitarra", rotate: -2 },
  { src: `${process.env.PUBLIC_URL}/fotos/pr ricardo.png`, alt: "Pr. Ricardo", rotate: 2.5 },
];


export const EVENTS = [
  { date: "03 Ago", title: "Domingo de Louvor, Adoração & Libertaçao", tag: "Culto especial", img: `${process.env.PUBLIC_URL}/fotos/culto-da-familia-poster-optimized.jpg`, desc: "Uma Manhã dedicada à presença de Deus." },
  { date: "20 DEZ", title: "Manhã de Adoração", tag: "Família", img: `${process.env.PUBLIC_URL}/fotos/oracao_branco_landscape_poster.jpg`, desc: "Culto de adoração e celebração ao nome de Jeus", fit: "contain" },
  { date: "31 DEZ", title: "Culto de Santa Ceia", tag: "Oração", img: `${process.env.PUBLIC_URL}/fotos/ceia_vermelho_landscape_poster.jpg`, desc: "", fit: "contain" },
  { date: "18 JAN", title: "Batismos nas Águas", tag: "Celebração", img: `${process.env.PUBLIC_URL}/fotos/batismo_elegante_poster.jpg`, desc: "Testemunhe a decisão pública de novas vidas transformadas.", fit: "contain" },
];

export const MARQUEE = [
  "Culto da Família",
  "Eventos e Aniversários",
  "Batismos nas Águas",
  "Culto de Obreiros",
  "Santa Ceia",
];

export const EVENT_GALLERY = [
  { src: `${process.env.PUBLIC_URL}/fotos/ccc.jpg`, alt: "Momento da comunidade", rotate: 0 },
  { src: `${process.env.PUBLIC_URL}/fotos/criancas.png`, alt: "Crianças da igreja", rotate: 0 },
  { src: `${process.env.PUBLIC_URL}/fotos/busca diaria.png`, alt: "Busca diária", rotate: 0 },
  { src: `${process.env.PUBLIC_URL}/fotos/mulheres.png`, alt: "Mulheres da igreja", rotate: 0 },
  { src: `${process.env.PUBLIC_URL}/fotos/senhora.png`, alt: "Senhora da igreja", rotate: 0 },
  { src: unsplash("photo-1522158637959-30385a09e0da", 700), alt: "Culto de celebração", rotate: -2, span: "big" },
  { src: unsplash("photo-1477281765962-ef34e8bb0967", 700), alt: "Mãos em adoração", rotate: 2 },
  { src: unsplash("photo-1543269865-cbf427effbad", 700), alt: "Encontro de células", rotate: -1 },
  { src: unsplash("photo-1490077476659-095159692ab5", 700), alt: "Batismo nas águas", rotate: 2 },
  { src: unsplash("photo-1541339907198-e08756dedf3f", 700), alt: "Estudo em grupo", rotate: -2 },
  { src: pexels("photos/37808644/pexels-photo-37808644.jpeg", 700), alt: "Interior da igreja", rotate: 1, span: "tall" },
  { src: unsplash("photo-1529070538774-1843cb3265df", 700), alt: "Adoração coletiva", rotate: -2 },
  { src: unsplash("photo-1511632765486-a01980e01a18", 700), alt: "Comunidade", rotate: 2 },
];

export const MINISTRIES = [
  { name: "Louvor & Adoração", desc: "Música que conduz corações à presença.", img: unsplash("photo-1519892300165-cb5542fb47c7", 700) },
  { name: "Infantil", desc: "Ensino bíblico criativo para os pequenos.", img: unsplash("photo-1543269865-cbf427effbad", 700) },
  { name: "Jovens", desc: "Uma geração apaixonada e enviada.", img: unsplash("photo-1529070538774-1843cb3265df", 700) },
  { name: "Mulheres", desc: "Encontros de fé, cuidado e amizade.", img: unsplash("photo-1501281668745-f7f57925c3b4", 700) },
  { name: "Homens", desc: "Firmeza, propósito e caráter.", img: unsplash("photo-1511632765486-a01980e01a18", 700) },
  { name: "Oração", desc: "A intercessão que sustenta a casa.", img: unsplash("photo-1438032005730-c779502df39b", 700) },
];

export const GALLERY = [
  { src: pexels("photos/37808644/pexels-photo-37808644.jpeg", 700), alt: "Interior da igreja com arcos", rotate: -3 },
  { src: unsplash("photo-1477281765962-ef34e8bb0967", 700), alt: "Mãos levantadas em adoração", rotate: 2 },
  { src: unsplash("photo-1522158637959-30385a09e0da", 700), alt: "Comunidade reunida em culto", rotate: -2 },
  { src: unsplash("photo-1504052434569-70ad5836ab65", 700), alt: "Bíblia aberta sobre a mesa", rotate: 3 },
];

export const SERMON_IMG = unsplash("photo-1504052434569-70ad5836ab65", 900);

// ---- CONTACT / SOCIAL / GIVING ----
export const WHATSAPP_NUMBER = "351967543844";
export const WHATSAPP_DISPLAY = "+351 967 543 844";

export const CONTACT = {
  address: "Rua do Contubo 36, Amora",
  region: "Seixal · Portugal",
  phone: "+351 967 543 844",
  email: "ola@casadaoracao.pt",
  instagram: "https://www.instagram.com/casadaoracao.igreja/",
  instagramHandle: "@casadaoracao.igreja",
  churchPhoto: `${process.env.PUBLIC_URL}/fotos/igreja_apresentacao_poster.jpg`,
  mapEmbed: "https://www.google.com/maps?q=38.6297667,-9.12516&z=16&output=embed",
  mapLink: "https://www.google.com/maps/place/38%C2%B037'47.2%22N+9%C2%B007'30.6%22W/@38.6297667,-9.1277349,648m",
};

export const GIVING = {
  mbway: "+351 967 543 844",
  iban: "PT50 0002 0123 3456 7890 1543 2",
  holder: "Igreja Casa da Oração",
  // QR encodes the WhatsApp/MB WAY number, coloured to match the palette.
  qr: "https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&color=22201C&bgcolor=FFFDF8&data=351967543844",
};

export const WA_OPTIONS = [
  { label: "Marcar um horário", icon: "calendar-clock", msg: "Olá! Gostaria de marcar um horário na Igreja Casa da Oração." },
  { label: "Pedido de oração", icon: "hand-heart", msg: "Olá! Tenho um pedido de oração que gostaria de partilhar." },
  { label: "Ver localização", icon: "map-pin", msg: "Olá! Podem enviar-me a localização da igreja, por favor?" },
  { label: "Falar com a igreja", icon: "message-circle", msg: "Olá! Gostaria de falar com alguém da Igreja Casa da Oração." },
  { label: "Obter informações", icon: "info", msg: "Olá! Gostaria de mais informações sobre os cultos e eventos." },
];

export const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg || "Olá! Vim através do site da Igreja Casa da Oração.")}`;
