import { Service, PortfolioItem, Testimonial, TeamMember } from './types';

export const services: Service[] = [
  {
    icon: 'bi-mic-fill',
    title: 'Meetings',
    description: 'Sesi yang produktif dan inspiratif yang mendorong hasil.',
    details: 'Kami mengubah pertemuan standar menjadi sesi yang menarik dan produktif. Dari rapat dewan direksi yang intim hingga sesi strategis berskala besar, kami menangani semua logistik, teknologi, dan fasilitasi untuk memastikan tim Anda terinspirasi dan selaras.'
  },
  {
    icon: 'bi-award-fill',
    title: 'Incentives',
    description: 'Perjalanan insentif tak terlupakan yang memotivasi dan memberi penghargaan.',
    details: 'Hargai karyawan berprestasi Anda dengan perjalanan insentif yang dirancang khusus yang memadukan kemewahan, petualangan, dan budaya lokal Sulawesi. Kami menciptakan pengalaman tak terlupakan yang memotivasi tim Anda dan menumbuhkan loyalitas, menangani semuanya mulai dari perjalanan hingga aktivitas eksklusif.'
  },
  {
    icon: 'bi-easel-fill',
    title: 'Conferences',
    description: 'Konferensi yang diselenggarakan dengan sempurna, baik secara virtual maupun tatap muka.',
    details: 'Dengan memanfaatkan keahlian kami dalam acara hybrid, kami menghasilkan konferensi yang lancar yang menghubungkan audiens di mana saja. Kami mengelola pemilihan tempat, koordinasi pembicara, platform teknologi, dan keterlibatan peserta untuk pengalaman yang sempurna.'
  },
  {
    icon: 'bi-building-fill',
    title: 'Exhibitions',
    description: 'Pameran dinamis yang menghubungkan Anda dengan audiens Anda.',
    details: 'Kami merancang dan mengelola pameran dan pameran dagang yang berdampak yang menampilkan merek Anda. Layanan kami meliputi desain stan, manajemen logistik, strategi keterlibatan pengunjung, dan teknologi perolehan prospek untuk memaksimalkan ROI Anda.'
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Digital Horizons Tech Summit',
    category: 'Conferences',
    imageUrl: '/sweetplanner-official/images/portfolio/digital-horizons.jpg',
    client: 'Innovate Corp',
    challenge: 'To host a hybrid tech conference for 500+ attendees (in-person and virtual) focusing on AI, with seamless streaming and networking opportunities for both audiences.',
    solution: 'We secured a state-of-the-art venue in Makassar and implemented a robust hybrid event platform. Interactive Q&A sessions, virtual networking lounges, and culturally-themed evening events were organized to foster engagement.',
    result: 'Achieved a 98% attendee satisfaction rate. The virtual platform saw over 2,000 unique interactions, and the event generated a 30% increase in qualified leads for sponsors.',
    gallery: ['/sweetplanner-official/images/portfolio/digital-horizons-1.jpg', '/sweetplanner-official/images/portfolio/digital-horizons-2.jpg', '/sweetplanner-official/images/portfolio/digital-horizons-3.jpg']
  },
  {
    id: 2,
    title: 'Apex Traders Incentive Trip',
    category: 'Incentives',
    imageUrl: '/sweetplanner-official/images/portfolio/apex-traders.jpg',
    client: 'Global Solutions Ltd.',
    challenge: 'To create a unique, 5-day incentive trip for 50 top executives that went beyond a typical beach holiday, incorporating local culture and team-building elements.',
    solution: 'A curated itinerary was designed, including a private Phinisi boat trip to the Taka Bonerate islands, a traditional cooking class with a local chef, and a gala dinner at Fort Rotterdam. Every detail was personalized.',
    result: 'The trip was rated "exceptional" by 95% of participants. The client reported a significant boost in morale and a renewed sense of company loyalty among the leadership team.',
    gallery: ['/sweetplanner-official/images/portfolio/apex-traders-1.jpg', '/sweetplanner-official/images/portfolio/apex-traders-2.jpg', '/sweetplanner-official/images/portfolio/apex-traders-3.jpg']
  },
  {
    id: 3,
    title: 'Eastern Indonesia Trade Expo',
    category: 'Exhibitions',
    imageUrl: '/sweetplanner-official/images/portfolio/trade-expo.jpg',
    client: 'Regional Commerce Chamber',
    challenge: 'Organize a three-day trade exhibition to showcase products from 100+ local SMEs, attracting both national and international buyers.',
    solution: 'We managed the entire event lifecycle, from venue logistics and exhibitor registration to a targeted digital marketing campaign. An easy-to-use event app was developed for matchmaking between buyers and sellers.',
    result: 'Facilitated over $2 million in potential trade deals. The event app was used by 85% of attendees, with an average of 15 connections made per user.',
    gallery: ['/sweetplanner-official/images/portfolio/trade-expo-1.jpg', '/sweetplanner-official/images/portfolio/trade-expo-2.jpg', '/sweetplanner-official/images/portfolio/trade-expo-3.jpg']
  },
  {
    id: 4,
    title: 'Annual Strategy Meeting',
    category: 'Meetings',
    imageUrl: '/sweetplanner-official/images/portfolio/strategy-meeting.jpg',
    client: 'Archipelago Bank',
    challenge: 'Facilitate a high-stakes, two-day annual strategy meeting for the board of directors that was both secure and conducive to focused discussion.',
    solution: 'A private villa was secured, equipped with top-tier AV and security. We handled all logistical aspects, including confidential material handling, and arranged for a professional facilitator to guide the sessions.',
    result: 'The meeting was completed on schedule with all key objectives met. The client praised the seamless execution and discreet, professional service.',
    gallery: ['/sweetplanner-official/images/portfolio/strategy-meeting-1.jpg', '/sweetplanner-official/images/portfolio/strategy-meeting-2.jpg', '/sweetplanner-official/images/portfolio/strategy-meeting-3.jpg']
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Sweet Planner mengubah konferensi tahunan kami. Perhatian mereka terhadap detail dan keahlian dalam acara hybrid tidak tertandingi. Mereka bukan hanya perencana; mereka adalah mitra sejati.",
    author: 'Anya Sharma',
    title: 'Marketing Director, Innovate Corp',
    imageUrl: '/sweetplanner-official/images/testimonials/anya-sharma.jpg'
  },
  {
    quote: "Our incentive trip was the best we've ever had. The blend of luxury and authentic local culture was perfect. The team is still talking about it!",
    author: 'Budi Hartono',
    title: 'CEO, Global Solutions Ltd.',
    imageUrl: '/sweetplanner-official/images/testimonials/budi-hartono.jpg'
  },
  {
    quote: "The professionalism and flawless execution for our trade expo were outstanding. Sweet Planner delivered beyond our expectations and helped our local businesses shine.",
    author: 'Citra Lestari',
    title: 'Head of Regional Commerce Chamber',
    imageUrl: '/sweetplanner-official/images/testimonials/citra-lestari.jpg'
  },
];

export const team: TeamMember[] = [
    {
        name: 'Clara E.D.',
        role: 'Founder & Lead Planner',
        imageUrl: '/sweetplanner-official/images/team/clara-ed.jpg',
        bio: 'Dengan lebih dari 15 tahun di industri MICE, Clara menggabungkan perencanaan yang teliti dengan semangat untuk menampilkan budaya unik Sulawesi.'
    },
    {
        name: 'Ray F.H.',
        role: 'Head of Technology & Hybrid Events',
        imageUrl: '/sweetplanner-official/images/team/ray-fh.jpg',
        bio: 'Ray adalah pakar teknologi kami, memastikan setiap acara virtual dan hybrid berjalan tanpa cela dengan teknologi terkini dan fokus pada pengalaman pengguna.'
    }
];