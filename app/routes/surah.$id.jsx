import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import useFetch from "../../hook/useFetch.jsx";
import { surahDetailFunction } from "../../api/fetch";
import { ThemeToggle } from "../components/ThemeToggle";
import { ArrowLeft, BookOpen, Play, Star, Copy, Share } from "lucide-react";

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
  const keywords = `surah details, surah ${surahName}, সূরা ${surahNameBn}, quran surah details, bangla quran, surah al-fatihah, সূরা আল ফাতিহা, quran translation bangla, surah tafsir, surah audio, surah recitation, surah search tool, কুরআন সূরার তালিকা, সূরা বিশদ, বাংলা তাফসীর, কুরআন অনলাইন, কুরআন অফলাইনে, বাংলা অনুবাদসহ কুরআন, আল কুরআন বাংলা, পূর্ণ কুরআন অনুবাদ, কুরআন রিডার, কুরআন অডিও, কুরআন উচ্চারণ, কুরআন তেলাওয়াত, বাংলা ক��রআন ওয়েব অ্যাপ, কুরআন ওয়েবসাইট, সূরা তালিকা, সূরা নাম, বাংলা সূরা অর্থ, সূরার অনুবাদ, ইসলামিক কুরআন অ্যাপ, সেরা কুরআন অ্যাপ, ফুল কুরআন বাংলা, কুরআন ওয়েব অ্যাপ প্রশ্নোত্তর, al quran bangla, bangla quran bangla, quran in bangla language, al quran with bangla translation full, bangla quran sharif, quran sharif, bangla quran translation full, quran shareef bangla, al quran bangla tafsir, bangla quran tafseer, bangla quran tafsir, bangla quran tafsir book, bangla quran online, online quran bangla, al quran bangla tarjuma, al quran bangla online, al quran bangla torjoma, bangla quran tarjuma, tafhimul quran online bangla, quran audio mp3 offline, full quran reading offline, offline quran audio app, quran audio offline, read quran offline, quranic apps, online quran, bangla quran online, al quran bangla online, download quran apps, quran sharif online, quran teacher online, learn quran at home, quran al quran, islam in islam, holy quran, holy al quran, quran all surah, al quran, al quan apps, al quran app download, al quran apk, bangla quran apk, quran tilawat, namaz time, fajr namaz time`;
  const ogImage = "/logo-light.png";
  return [
    {
      title: `Surah ${surahName} | সূরা ${surahNameBn} অর্থ, বাংলা অনুবাদ – Quran App`,
    },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    {
      property: "og:title",
      content: `Surah ${surahName} | সূরা ${surahNameBn} অর্থ, বাংলা অনুবাদ – Quran App`,
    },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: `https://al-quran-snowy.vercel.app/${params.id}`,
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: `Surah ${surahName} | সূরা ${surahNameBn}`,
    },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
};

export default function SurahDetail() {
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
  const surahNameArabic =
    surahDetail?.arabic_name || surahDetail?.name_arabic || "";
  const surahNameEnglish = surahDetail?.english_name || surahDetail?.name || "";
  const bismillah = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full font-medium transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Al Quran
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-300 text-lg">
            Loading Surah...
          </span>
        </div>
      )}

      {error && (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-900/40 rounded-full">
                <svg
                  className="w-6 h-6 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                Unable to Load Surah
              </h3>
              <p className="text-red-600 dark:text-red-400 mb-4">
                {error.message ||
                  "An error occurred while loading the Surah content."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Try Again
                </button>
                <Link
                  to="/"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {surahDetail && (
        <>
          {/* Surah Header */}
          <section className="relative py-12 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 dark:from-emerald-400/5 dark:to-blue-400/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {surahNameEnglish}
                </h1>

                <div className="text-4xl sm:text-5xl lg:text-6xl font-arabic text-emerald-700 dark:text-emerald-300 mb-6 leading-relaxed">
                  {surahNameArabic}
                </div>

                <div className="text-2xl sm:text-3xl font-arabic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  {bismillah}
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {surahDetail.verses?.length || 0} Verses ·{" "}
                      {surahDetail.verses?.length || 0} আয়াত
                    </span>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-700">
                    <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                      Translation by T. Usmani
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    <Play className="w-4 h-4" />
                    Listen
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
                    <Share className="w-4 h-4" />
                    Share
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
                    <Star className="w-4 h-4" />
                    Bookmark
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Verses */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {surahDetail.verses && Array.isArray(surahDetail.verses) && (
                <div className="space-y-8">
                  {surahDetail.verses.map((verse, idx) => (
                    <article
                      key={verse.id}
                      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      {/* Verse Number */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {verse.id}
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                            <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </button>
                          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                            <Play className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </button>
                        </div>
                      </div>

                      {/* Arabic Text */}
                      <div className="text-right mb-8">
                        <p className="text-3xl sm:text-4xl font-arabic text-gray-900 dark:text-white leading-relaxed sm:leading-loose">
                          {verse.text}
                        </p>
                      </div>

                      {/* Translation */}
                      <div className="space-y-4">
                        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-l-4 border-emerald-500">
                          <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                            English Translation
                          </h4>
                          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                            {verse.translation}
                          </p>
                        </div>

                        {verse.transliteration && (
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
                            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
                              Transliteration
                            </h4>
                            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed italic">
                              {verse.transliteration}
                            </p>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Surah Info Section */}
          <section className="py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Surah {surahNameEnglish}
              </h2>
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-8">
                সূরা {surahNameArabic} সম্পর্কে
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Total Verses
                  </h4>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {surahDetail.verses?.length || 0}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Arabic Name
                  </h4>
                  <p className="text-xl font-arabic text-emerald-600 dark:text-emerald-400">
                    {surahNameArabic}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    English Name
                  </h4>
                  <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                    {surahNameEnglish}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
