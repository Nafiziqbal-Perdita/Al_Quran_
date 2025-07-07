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
  { title: "Bangla Quran Online | সূরা তালিকা ও তাফসীর" },
  { name: "description", content: "Read the complete Quran online in Bangla and English. সূরা তালিকা, অনুবাদ, তাফসীর, অডিও, এবং আরও অনেক কিছু। Best Quran app 2025." },
  { 
    name: "keywords", 
    content: `
      quran app, bangla quran, quran surah list, surah details, quran reading online, quran translation english, quran translation bangla, quran verses, quran tafsir, quran audio, quran recitation, surah al-fatihah, surah list quran app, quran study tool, online quran reader, offline quran app, al quran with bangla translation, complete quran in bangla, best quran app 2025, free quran reading app, quran by word, quran word by word translation, quran memorization tool, quran learning app, quran for students, islamic quran app, surah search tool, quran app with tafsir, quran app responsive design, modern quran webapp, quran mobile webapp, quran dark mode, quran UI design, quran app features, quran app seo friendly, বাংলা কুরআন, কুরআন বাংলা অনুবাদ, বাংলা কুরআন পড়া, কুরআন সূরার তালিকা, সূরা বিশদ, বাংলা তাফসীর, কুরআন অনলাইন, কুরআন অফলাইনে, বাংলা অনুবাদসহ কুরআন, আল কুরআন বাংলা, পূর্ণ কুরআন অনুবাদ, কুরআন রিডার, কুরআন অডিও, কুরআন উচ্চারণ, কুরআন তেলাওয়াত, বাংলা কুরআন ওয়েব অ্যাপ, কুরআন ওয়েবসাইট, কুরআন ওয়েব অ্যাপ ডেভেলপমেন্ট, সূরা আল ফাতিহা অনুবাদ, সূরা তালিকা, সূরা নাম, বাংলা সূরা অর্থ, সূরার অনুবাদ, ইসলামিক কুরআন অ্যাপ, সেরা কুরআন অ্যাপ, ফুল কুরআন বাংলা, কুরআন ওয়েব অ্যাপ প্রশ্নোত্তর,
      al quran bangla, bangla quran bangla, quran in bangla language, al quran with bangla translation full, bangla quran sharif, quran sharif, bangla quran translation full, quran shareef bangla, al quran bangla tafsir, bangla quran tafseer, bangla quran tafsir, bangla quran tafsir book, bangla quran online, online quran bangla, al quran bangla tarjuma, al quran bangla online, al quran bangla torjoma, bangla quran tarjuma,
      tafhimul quran online bangla, quran audio mp3 offline, full quran reading offline, offline quran audio app, quran audio offline, read quran offline, quranic apps, online quran, bangla quran online, al quran bangla online, download quran apps, quran sharif online, quran teacher online, learn quran at home, quran al quran, islam in islam, holy quran, holy al quran, quran all surah, al quran, al quan apps, al quran app download, al quran apk, bangla quran apk, quran tilawat, namaz time, fajr namaz time
    `.replace(/\s+/g, ' ').trim()
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://al-quran-snowy.vercel.app/" />
        <Meta />
        <Links />
      </head>
      <body>
        <h2 style={{position:'absolute',left:'-9999px',height:'1px',width:'1px',overflow:'hidden'}}>Bangla Quran Online - সূরা তালিকা ও তাফসীর</h2>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
      <script dangerouslySetInnerHTML={{__html:`
        document.addEventListener('DOMContentLoaded',function(){
          document.head.querySelectorAll('meta[http-equiv],meta[name]').forEach(function(meta){meta.remove()});
          var csp=document.createElement('meta');csp.httpEquiv='Content-Security-Policy';csp.content="default-src 'self'; connect-src 'self' https://cdn.jsdelivr.net; script-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com";document.head.appendChild(csp);
          var ref=document.createElement('meta');ref.httpEquiv='Referrer-Policy';ref.content='strict-origin-when-cross-origin';document.head.appendChild(ref);
          var xfo=document.createElement('meta');xfo.httpEquiv='X-Frame-Options';xfo.content='SAMEORIGIN';document.head.appendChild(xfo);
          var xct=document.createElement('meta');xct.httpEquiv='X-Content-Type-Options';xct.content='nosniff';document.head.appendChild(xct);
        });
      `}} />
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
