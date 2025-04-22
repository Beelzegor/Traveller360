import type { Link } from "../types";

export const SITE = {
  title: "Travellers360",
  description: "A news website built with Astro",
  author: "Mohammad Rahmani",
  url: "https://astro-news-six.vercel.app",
  github: "https://github.com/Mrahmani71/astro-news",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/migracion",
    text: "Migración",
  },
  {
    href: "/categories/causas",
    text: "Causas",
  },
  {
    href: "/categories/globalizacion",
    text: "Globalización",
  },
  {
    href: "/categories/origen",
    text: "Origen",
  },
  {
    href: "/categories/destino",
    text: "Destino",
  },
  {
    href: "/categories/refugiados",
    text: "Refugiados",
  },
  {
    href: "/categories/futuro",
    text: "Futuro",
  }
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "Nosotros",
  },
  {
    href: "/authors",
    text: "Autores",
  },
  /*
  {
    href: "/contact",
    text: "Contacto",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "https://astro-news-six.vercel.app/rss.xml",
    text: "RSS",
  },
  {
    href: "https://astro-news-six.vercel.app/sitemap-index.xml",
    text: "Sitemap",
  },
  */
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
