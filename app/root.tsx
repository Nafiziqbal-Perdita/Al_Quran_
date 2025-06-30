import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta = () => [
  { charset: "utf-8" },
  { title: "Online Bangla Quran | বাংলা কুরআন‑পড়ুন অনলাইনে – Surah List & Tafsir" },
  { name: "description", content: "Read the complete Quran online in Bangla and English. সূরা তালিকা, অনুবাদ, তাফসীর, অডিও, এবং আরও অনেক কিছু। Best Quran app 2025." },
  { name: "keywords", content: "quran app, bangla quran, quran surah list, surah details, quran reading online, quran translation english, quran translation bangla, quran verses, quran tafsir, quran audio, quran recitation, surah al-fatihah, surah list quran app, quran study tool, online quran reader, offline quran app, al quran with bangla translation, complete quran in bangla, best quran app 2025, free quran reading app, quran by word, quran word by word translation, quran memorization tool, quran learning app, quran for students, islamic quran app, surah search tool, quran app with tafsir, quran app responsive design, modern quran webapp, quran mobile webapp, quran dark mode, quran UI design, quran app features, quran app seo friendly, বাংলা কুরআন, কুরআন বাংলা অনুবাদ, বাংলা কুরআন পড়া, কুরআন সূরার তালিকা, সূরা বিশদ, বাংলা তাফসীর, কুরআন অনলাইন, কুরআন অফলাইনে, বাংলা অনুবাদসহ কুরআন, আল কুরআন বাংলা, পূর্ণ কুরআন অনুবাদ, কুরআন রিডার, কুরআন অডিও, কুরআন উচ্চারণ, কুরআন তেলাওয়াত, বাংলা কুরআন ওয়েব অ্যাপ, কুরআন ওয়েবসাইট, কুরআন ওয়েব অ্যাপ ডেভেলপমেন্ট, সূরা আল ফাতিহা অনুবাদ, সূরা তালিকা, সূরা নাম, বাংলা সূরা অর্থ, সূরার অনুবাদ, ইসলামিক কুরআন অ্যাপ, সেরা কুরআন অ্যাপ, ফুল কুরআন বাংলা, কুরআন ওয়েব অ্যাপ প্রশ্নোত্তর" }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
