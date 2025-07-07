import { useLoaderData, useNavigate } from "@remix-run/react";
import useFetch from "../../hook/useFetch";
import { surahListFunction } from "../../api/fetch";

// Loader for initial SSR data
export async function loader() {
  const data = await surahListFunction();
  return data; // Return plain data, not json()
}

export const meta = () => [
  { title: "Bangla Quran Online | সূরা তালিকা ও তাফসীর" },
  { name: "description", content: "Surah list with Bangla and English translation, tafsir, audio, and more. কুরআন সূরার তালিকা, অনুবাদ, তাফসীর, অডিও, এবং আরও অনেক কিছু।" },
  { 
    name: "keywords", 
    content: `
      quran surah list, bangla quran, সূরা তালিকা, surah list quran app, online quran reader, বাংলা কুরআন পড়া, কুরআন অনলাইন, best quran app 2025, free quran reading app, কুরআন সূরার তালিকা, surah search tool, quran app seo friendly,
      quran app, quran reading online, quran translation english, quran translation bangla, quran verses, quran tafsir, quran audio, quran recitation, surah al-fatihah, quran study tool, offline quran app, al quran with bangla translation, complete quran in bangla, quran by word, quran word by word translation, quran memorization tool, quran learning app, quran for students, islamic quran app, quran app with tafsir, quran app responsive design, modern quran webapp, quran mobile webapp, quran dark mode, quran UI design, quran app features, বাংলা কুরআন, কুরআন বাংলা অনুবাদ, কুরআন অফলাইনে, বাংলা অনুবাদসহ কুরআন, আল কুরআন বাংলা, পূর্ণ কুরআন অনুবাদ, কুরআন রিডার, কুরআন অডিও, কুরআন উচ্চারণ, কুরআন তেলাওয়াত, বাংলা কুরআন ওয়েব অ্যাপ, কুরআন ওয়েবসাইট, কুরআন ওয়েব অ্যাপ ডেভেলপমেন্ট, সূরা আল ফাতিহা অনুবাদ, সূরা নাম, বাংলা সূরা অর্থ, সূরার অনুবাদ, ইসলামিক কুরআন অ্যাপ, সেরা কুরআন অ্যাপ, ফুল কুরআন বাংলা, কুরআন ওয়েব অ্যাপ প্রশ্নোত্তর,
      al quran bangla, bangla quran bangla, quran in bangla language, al quran with bangla translation full, bangla quran sharif, quran sharif, bangla quran translation full, quran shareef bangla, al quran bangla tafsir, bangla quran tafseer, bangla quran tafsir, bangla quran tafsir book, bangla quran online, online quran bangla, al quran bangla tarjuma, al quran bangla online, al quran bangla torjoma, bangla quran tarjuma,
      tafhimul quran online bangla, quran audio mp3 offline, full quran reading offline, offline quran audio app, quran audio offline, read quran offline, quranic apps, online quran, bangla quran online, al quran bangla online, download quran apps, quran sharif online, quran teacher online, learn quran at home, quran al quran, islam in islam, holy quran, holy al quran, quran all surah, al quran, al quan apps, al quran app download, al quran apk, bangla quran apk, quran tilawat, namaz time, fajr namaz time
    `.replace(/\s+/g, ' ').trim()
  }
];

export default function SurahList() {
  // Get initial data from loader
  const initialSurahList = useLoaderData();

  // Use useFetch for client-side refetch/reset
  const {
    data: surahList,
    error,
    loading,
  } = useFetch(surahListFunction, { initialData: initialSurahList });
// console.log(surahList);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8" style={{ backgroundColor: '#EAE8E1' }}>
      {/* Header */}
      <header className="w-full sticky top-0 z-30 bg-[#EAE8E1]/80 backdrop-blur border-b border-[#FA6F51] shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo or Icon */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FA6F51] text-white font-bold text-2xl shadow">
              Q
            </span>
            <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#DA4B2C]">Al Quran</span>
          </div>
          {/* Navigation (expand as needed) */}
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="/" className="text-black hover:text-[#FA6F51] font-medium transition">Home</a>
              </li>
              {/* Add more links here */}
            </ul>
          </nav>
        </div>
      </header>
      {/* Main Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center underline decoration-[#DA4B2C] decoration-4 underline-offset-8 mt-10" style={{ color: '#DA4B2C' }}>
        Surah List (সূরাহ সমূহ)
      </h1>
      <h2 className="text-xl font-semibold mb-4 text-center text-[#FA6F51]">
        Browse all Surahs with Bangla & English translation, tafsir, and audio
      </h2>
      {loading && <p className="text-black">Loading...</p>}
      {error && <p className="text-[#DA4B2C]">Error: {error.message}</p>}
      {surahList && Array.isArray(surahList) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-2">
          {surahList.map((surah) => (
            <button
              key={surah.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between p-5 text-left border border-[#FA6F51] h-40 relative group"
              onClick={() => navigate(`/surah/${surah.id}?link=${encodeURIComponent(surah.link)}`)}
            >
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-black">{surah.english_name || surah.name}</span>
                  <span className="text-base text-[#FA6F51] mt-1">{surah.translation}</span>
                </div>
                <span className="text-2xl font-bold text-[#DA4B2C] text-right font-arabic ml-2">{surah.arabic_name || surah.arabic || surah.name_arabic}</span>
              </div>
              <div className="flex justify-between items-end w-full absolute bottom-4 left-0 px-5">
                <span className="text-xl font-bold" style={{ color: '#FA6F51' }}>{surah.id}</span>
                <span className="text-sm text-black">{surah.total_verses} আয়াত</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
