import { Link, useLoaderData, useParams, useSearchParams } from "@remix-run/react";
import useFetch from "../../hook/useFetch.jsx";
import { surahDetailFunction } from "../../api/fetch";

// Loader for initial SSR data
export async function loader({ request }) {
  const url = new URL(request.url);
  const link = url.searchParams.get("link");
  if (!link) return null;
  const data = await surahDetailFunction(link);
  return data; // Return plain data, not json()
}

export const meta = ({ params, data }) => {
  const surahName = data?.english_name || data?.name || params.id || "Surah";
  const surahNameBn = data?.bangla_name || data?.name_bn || "সূরা";
  const description = `Read Surah ${surahName} (${surahNameBn}) with Bangla and English translation, tafsir, audio, and more. সূরা ${surahNameBn} অর্থ, বাংলা অনুবাদ, তাফসীর, অডিও।`;
  const keywords = `surah details, surah ${surahName}, সূরা ${surahNameBn}, quran surah details, bangla quran, surah al-fatihah, সূরা আল ফাতিহা, quran translation bangla, surah tafsir, surah audio, surah recitation, surah search tool, কুরআন সূরার তালিকা, সূরা বিশদ, বাংলা তাফসীর, কুরআন অনলাইন, কুরআন অফলাইনে, বাংলা অনুবাদসহ কুরআন, আল কুরআন বাংলা, পূর্ণ কুরআন অনুবাদ, কুরআন রিডার, কুরআন অডিও, কুরআন উচ্চারণ, কুরআন তেলাওয়াত, বাংলা কুরআন ওয়েব অ্যাপ, কুরআন ওয়েবসাইট, সূরা তালিকা, সূরা নাম, বাংলা সূরা অর্থ, সূরার অনুবাদ, ইসলামিক কুরআন অ্যাপ, সেরা কুরআন অ্যাপ, ফুল কুরআন বাংলা, কুরআন ওয়েব অ্যাপ প্রশ্নোত্তর`;
  const ogImage = "/logo-light.png";
  return [
    { title: `Surah ${surahName} | সূরা ${surahNameBn} অর্থ, বাংলা অনুবাদ – Quran App` },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: `Surah ${surahName} | সূরা ${surahNameBn} অর্থ, বাংলা অনুবাদ – Quran App` },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:type", content: "article" },
    { property: "og:url", content: `https://al-quran-snowy.vercel.app/${params.id}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `Surah ${surahName} | সূরা ${surahNameBn}` },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
};

export default function SurahDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const link = searchParams.get("link");
  const loadData = useLoaderData();
  // Pass a function to useFetch, not a promise
  const {
    data: surahDetail,
    error,
    loading,
  } = useFetch(() => surahDetailFunction(link), { initialData: loadData });

  // Placeholder for Surah info
  const surahNameArabic = surahDetail?.arabic_name || surahDetail?.name_arabic || "";
  const surahNameEnglish = surahDetail?.english_name || surahDetail?.name || "";
  const bismillah = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";

  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-2" style={{ backgroundColor: '#EAE8E1' }}>
      {/* Header */}
      <header className="w-full max-w-5xl mx-auto mb-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-center mb-1" style={{ color: '#DA4B2C' }}>{surahNameEnglish}</h2>
          <div className="text-3xl md:text-4xl font-arabic text-center mb-2" style={{ color: '#FA6F51' }}>{surahNameArabic}</div>
          <div className="text-xl md:text-2xl text-center mb-4 font-arabic" style={{ color: '#DA4B2C' }}>{bismillah}</div>
        </div>
        <div className="flex justify-between items-center w-full mt-2 mb-6">
          {/* Translation Info */}
          <div className="text-sm" style={{ color: '#FA6F51' }}>
            Translation by <span className="font-semibold" style={{ color: '#DA4B2C' }}>T. Usmani</span> <span className="underline cursor-pointer" style={{ color: '#DA4B2C' }}>(Change)</span>
          </div>
          {/* Surah Info Placeholder */}
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{ color: '#FA6F51' }}>Surah Info</span>
          </div>
        </div>
      </header>
      {/* Verses */}
      <main className="w-full max-w-4xl">
        {loading && <p className="text-black">Loading...</p>}
        {error && <p className="text-[#DA4B2C]">Error: {error.message}</p>}
        {surahDetail && Array.isArray(surahDetail.verses) && surahDetail.verses.map((verse, idx) => (
          <section key={verse.id} className="mb-12">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-full">
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-arabic text-center leading-relaxed mb-4" style={{ color: '#FA6F51' }}>
                    {verse.text}
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#DA4B2C] text-xl font-bold bg-white" style={{ color: '#DA4B2C' }}>
                    {verse.id}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-base md:text-lg text-center max-w-2xl mx-auto" style={{ color: 'black' }}>
                {verse.translation}
              </div>
              <div className="mt-2 text-sm md:text-base text-center max-w-2xl mx-auto italic" style={{ color: '#FA6F51' }}>
                {verse.transliteration}
              </div>
            </div>
            {idx !== surahDetail.verses.length - 1 && (
              <hr className="my-10 border-[#FA6F51] opacity-60" />
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
