import { useLoaderData, useNavigate } from "@remix-run/react";
import useFetch from "../../hook/useFetch";
import { surahListFunction } from "../../api/fetch";

// Loader for initial SSR data
export async function loader() {
  const data = await surahListFunction();
  return data; // Return plain data, not json()
}

export const meta = () => [
  { title: "Online Bangla Quran | বাংলা কুরআন‑পড়ুন অনলাইনে – Surah List & Tafsir" },
  { name: "description", content: "Surah list with Bangla and English translation, tafsir, audio, and more. কুরআন সূরার তালিকা, অনুবাদ, তাফসীর, অডিও, এবং আরও অনেক কিছু।" },
  { name: "keywords", content: "quran surah list, bangla quran, সূরা তালিকা, surah list quran app, online quran reader, বাংলা কুরআন পড়া, কুরআন অনলাইন, best quran app 2025, free quran reading app, কুরআন সূরার তালিকা, surah search tool, quran app seo friendly" }
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
