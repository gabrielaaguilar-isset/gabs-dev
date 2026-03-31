// ─── NAV ────────────────────────────────────────────────
export const NAV_LINKS = [
  { key: "portfolio", href: "#portfolio" },
  { key: "about",       href: "#abuotme"       },
  { key: "contact",   href: "#contact"   },
];

// ─── MARQUEE ────────────────────────────────────────────
// Los textos vienen del JSON — solo el count importa aquí
export const MARQUEE_COUNT = 12;

// ─── WHY POINTS ─────────────────────────────────────────
// Los textos vienen del JSON
export const WHY_COUNT = 3;

// ─── FAQ ─────────────────────────────────────────────────
export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "¿Qué servicios ofreces?",
    a: "Desarrollo sitios web en WordPress y frontend moderno con React/Next.js, incluyendo diseño UI y optimizacion SEO basica."
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del alcance. Una landing puede tardar 1-2 semanas y un sitio mas completo entre 3-6 semanas."
  },
  {
    q: "¿Trabajas con clientes internacionales?",
    a: "Si, trabajo de forma remota con clientes de distintos paises y mantengo comunicacion continua durante todo el proyecto."
  },
  {
    q: "¿Ofreces mantenimiento despues de entregar?",
    a: "Si, puedo incluir soporte y mantenimiento para ajustes, actualizaciones y mejoras posteriores al lanzamiento."
  }
];

// ─── PORTFOLIO ──────────────────────────────────────────


export interface PortfolioStaticItem {
  cover: string;
  bg: string;
  techs: string[];
  images: string[];
  contactoUrl: string;
  url: string;
}

// Luego, define la interfaz completa que incluye las propiedades para el modal
export interface PortfolioItem extends PortfolioStaticItem {
  cat: string;
  title: string;
  modalDesc: string;
}

export const PORTFOLIO_STATIC: PortfolioStaticItem[] = [
 {
  cover: "/mrk.png",
  bg: "from-blue-900/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Pro"],
  images: ["mrk-1.png", "mrk-2.png", "mrk-3.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20RMK%20SONGS",
  url: "https://rmksongs.com/",
},
{
  cover: "/cookies.png",
  bg: "from-pink-900/60 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Free", "Woocommerce"],
  images: ["cokies-1.png", "cokies-2.png", "cokies-3.png", "cokies-4.png", "cokies-5.png", "cokies-6.png","cokies-7.png" ],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Cookies%20y%20más",
  url: "https://emprenderyelevarse.com/",
},
{
  cover: "/brandpro.png",
  bg: "from-red-900/40 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Free"],
  images: ["brandpro-1.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Brand%20Pro",
  url: "https://cranier-website.vercel.app/",
},
{
  cover: "/emprender-portada.png",
  bg: "from-emerald-900/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Free"],
  images: ["emprender-y-elevarse.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Emprender%20y%20Elevarse",
  url: "https://emprenderyelevarse.com/",
},
{
  cover: "/togo.png",
  bg: "from-purple-900/60 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Pro"],
  images: ["togo-1.png", "togo-2.png", "togo-3.png", "togo-4.png", "togo-5.png", "togo-6.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Togo%20Market",
  url: "https://togomarket.co/",
},
{
  cover: "/redcloud.png",
  bg: "from-red-900/40 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Pro"],
  images: ["red-1.png", "red-2.png", "red-3.png", "red-4.png", "red-5.png", "red-6.png", "red-7.png", "red-8.png", "red-9.png", "red-10.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Red%20Cloud",
  url: "https://redcloud.la/",
},
{
  cover: "/sym360.png",
  bg: "from-blue-900/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Pro"],
  images: ["sym-1.png", "sym-2.png", "sym-3.png", "sym-4.png", "sym-5.png", "sym-6.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20SYM%20360",
  url: "https://sym360.com.co/",
},
{
  cover: "/mego-cover.png",
  bg: "from-red-900/40 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor free", "Photoshop"],
  images: ["mego-1.png", "mego-2.png", "mego-3.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Mego%20Afek",
  url: "https://mego-afek.com/",
},
{
  cover: "/blog-del-rebobinador.png",
  bg: "from-blue-900/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Free", "learndash", "Figma"],
  images: ["blog-1.png", "blog-2.png", "blog-3.png", "blog-4.png", "blog-5.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Blog%20del%20Rebobinador",
  url: "https://blogdelrebobinador.com/",
},
{
  cover: "/hipnosis-group.png",
  bg: "from-emerald-900/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Pro"],
  images: ["hipnosis-1.png", "hipnosis-2.png", "hipnosis-3.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Hipnosis%20Group",
  url: "https://hipnosisgroup.com/",
},
{
  cover: "/dilo-cover.png",
  bg: "from-stone-600/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Free", "Figma"],
  images: ["dilo-1.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Dilo%20Club",
  url: "https://dilo.club/",
},
{
  cover: "/next-cover.png",
  bg: "from-emerald-900/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Pro"],
  images: ["next-1.png", "next-2.png", "next-3.png", "next-4.png", "next-5.png", "next-6.png", "next-7.png", "next-8.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Next!",
  url: "https://agencianextmkt.com/",
},
{
  cover: "/travsecret-cover.png",
  bg: "from-blue-900/50 to-[#0d0d1a]",
  techs: ["Wordpress", "Elementor Pro", "Figma"],
  images: ["travsects.png"],
  contactoUrl: "https://wa.me/573133207188?text=Hola,%20me%20gustaría%20una%20página%20como%20la%20de%20Travsecrets",
  url: "https://travnow.vercel.app/",
},
];

// ─── TESTIMONIALS ────────────────────────────────────────
export interface Testimonial {
  initials: string; bg: string; name: string; role: string; text: string;
}
export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MK",
    bg: "from-purple-700 to-purple-900",
    name: "Moses Kirsh",
    role: "Cliente",
    text: "GABI DID AN AMAZING JOB, AND SHE IS AN AMZING PERSON, YOU WLL FOR SURE LIKE HER WORK!!!!"
  },
  {
    initials: "AR",
    bg: "from-fuchsia-700 to-pink-900",
    name: "Aleinny Rivero",
    role: "Frontend Developer · Ex compañera de equipo",
    text: "Tuve la oportunidad de liderar a Gabriela durante su paso por el equipo de desarrollo no code en LinkTIC, puedo decir con total seguridad que fue una pieza clave en múltiples proyectos de alto impacto. \n\nDesde el inicio, destacó por su capacidad para aportar ideas valiosas, su pensamiento estratégico y su enfoque proactivo para resolver desafíos. Trabajamos de manera muy cercana, construyendo soluciones en conjunto, lo que permitió no solo alcanzar excelentes resultados, sino también fortalecer la dinámica del equipo.\n\nGabriela es una profesional altamente colaborativa, comprometida y con una actitud siempre orientada al aprendizaje y la mejora continua. Su disposición para apoyar a otros y su calidad humana hacen que trabajar con ella sea una experiencia realmente positiva.\n\nSin duda, tiene un enorme potencial y estoy convencida de que cualquier organización que cuente con su talento estará incorporando a una profesional que genera valor desde el primer momento."
  },
  {
    initials: "JG",
    bg: "from-sky-600 to-blue-700",
    name: "Javier Alejandro Garzon Escalante",
    role: "Frontend Developer · Ex compañera de equipo",
    text: "Tuve la oportunidad de trabajar con Gabriela Aguilar en el desarrollo y estructuración del portal web de Positiva Compañía de Seguros, y puedo decir que es una profesional destacada en Front-end. Gabriela tiene un manejo excelente de WordPress, Elementor Pro, React y JavaScript, y sabe implementar páginas dinámicas, formularios personalizados y elementos interactivos UX/UI.\n\nAdemás de sus habilidades técnicas, trabajar con ella fue una experiencia muy positiva; es colaborativa, proactiva y sabe integrarse al equipo, aportando ideas y soluciones de manera efectiva. Su enfoque en la calidad del código y en la experiencia del usuario hace que los proyectos en los que participa sean exitosos y bien ejecutados.\n\nRecomiendo ampliamente a Gabriela como profesional de Front-end y como compañera de trabajo confiable y comprometida."
  },
  {
    initials: "JC",
    bg: "from-cyan-600 to-blue-800",
    name: "Joshua Aranza Cubides",
    role: "Frontend Developer · Ex compañera de equipo",
    text: "Trabajar con Gabriela fue fluido y proactivo. Ella aportó ideas frescas, cumplió con los plazos establecidos y elevó la funcionalidad y el desarrollo de nuestro proyecto WordPress."
  },
  {
    initials: "SS",
    bg: "from-green-700 to-emerald-900",
    name: "Selene Santacruz",
    role: "Líder Técnico · Supervisión directa",
    text: "Trabajar con Gabi ha sido una experiencia muy enriquecedora, es una desarrolladora con gran atención al detalle y un excelente sentido estético.\n\n Tiene una actitud muy positiva, sabe colaborar con el equipo y aporta siempre ideas valiosas para mejorar los productos.\n\n Su compromiso, responsabilidad y pasión por el desarrollo web la convierten en una profesional que cualquier equipo quisiera tener."
  },
  {
    initials: "CG",
    bg: "from-rose-700 to-red-900",
    name: "Camilo Guerrero",
    role: "Cliente",
    text: "Gaby es una excelente diseñadora web, pero sobre todo una gran persona... Nos encanta trabajar y hacer cosas grandiosas.. mil éxitos Gaby."
  },
  {
    initials: "FZ",
    bg: "from-orange-700 to-amber-900",
    name: "Fabiola Zavala Gertosio",
    role: "Frontend Developer · Ex compañera de equipo",
    text: "Tuve la oportunidad de trabajar con Gabriela Aguilar, y puedo afirmar que es una desarrolladora excepcional con un dominio impresionante en WordPress y desarrollo frontend. Su experiencia incluye el uso avanzado de Elementor, React y TypeScript, combinando estas herramientas para crear soluciones web modernas y funcionales.\n\n Es una persona con gran atención al detalle, siempre buscando la mejor manera de resolver desafíos y aportar valor a los proyectos en los que participa. Su pasión por el desarrollo web y su enfoque colaborativo la convierten en una pieza clave para cualquier equipo."
  },
  {
    initials: "AE",
    bg: "from-fuchsia-700 to-pink-900",
    name: "Angely Escafuller",
    role: "Frontend Developer · Ex compañera de equipo",
    text: "Gabriela es una desarrolladora web excepcional con experiencia sólida en plataformas como WordPress, Shopify, Prestashop y en tecnologías modernas como React, TypeScript, JavaScript, HTML y CSS. He tenido el placer de trabajar con ella y puedo dar fe de su capacidad para abordar proyectos con profesionalismo, creatividad y un enfoque centrado en la solución.\n\n Además de sus habilidades técnicas, destaca por ser una persona de valores, siempre respetuosa y colaborativa. Es alguien que se esfuerza por crear un ambiente de trabajo positivo y que constantemente busca superar las expectativas en todo lo que hace.\n\n Recomiendo a Gabriela sin reservas para cualquier equipo que valore la excelencia técnica y las cualidades humanas. Estoy seguro de que será un gran aporte para cualquier proyecto o empresa."
  }
];