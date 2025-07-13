import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import useFetch from "../../hook/useFetch";
import { surahListFunction } from "../../api/fetch";
import { ThemeToggle } from "../components/ThemeToggle";
import { BookOpen, Search, Star, ChevronRight } from "lucide-react";

// Loader for initial SSR data
export async function loader() {
  const data = await surahListFunction();
  return {
    data,
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
    },
  };
}

export const meta = () => [
  { title: "Bangla Quran Online | সূরা তালিকা ও তাফসীর" },
  {
    name: "description",
    content:
      "Surah list with Bangla and English translation, tafsir, audio, and more. কুরআন সূরার তালিকা, অনুবাদ, তাফসীর, অডিও, এবং আরও অনেক কিছু।",
  },
  {
    name: "keywords",
    content: `
      quran surah list, bangla quran, সূরা তালিকা, surah list quran app, online quran reader, বাংলা কুরআন পড়া, কুরআন অনলাইন, best quran app 2025, free quran reading app, কুরআন সূরার তালিকা, surah search tool, quran app seo friendly,
      quran app, quran reading online, quran translation english, quran translation bangla, quran verses, quran tafsir, quran audio, quran recitation, surah al-fatihah, quran study tool, offline quran app, al quran with bangla translation, complete quran in bangla, quran by word, quran word by word translation, quran memorization tool, quran learning app, quran for students, islamic quran app, quran app with tafsir, quran app responsive design, modern quran webapp, quran mobile webapp, quran dark mode, quran UI design, quran app features, বাংলা কুরআন, কুরআন বাংলা অনুবাদ, কুরআন অফলাইনে, বাংলা অনুবাদসহ কুরআন, আল কুরআন বাংলা, পূর্ণ কুরআন অনুবা���, কুরআন রিডার, কুরআন অডিও, কুরআন উচ্চারণ, কুরআন তেলাওয়াত, বাংলা কুরআন ওয়েব অ্যাপ, কুরআন ওয়েবসাইট, কুরআন ওয়েব অ্যাপ ডেভেলপমেন্ট, সূরা আল ফাতিহা অনুবাদ, সূরা নাম, বাংলা সূরা অর্থ, সূরার অনুবাদ, ইসলামিক কুরআন অ্যাপ, সেরা কুরআন অ্যাপ, ফুল কুরআন বাংলা, কুরআন ওয়েব অ্যাপ প্রশ্নোত্তর,
      al quran bangla, bangla quran bangla, quran in bangla language, al quran with bangla translation full, bangla quran sharif, quran sharif, bangla quran translation full, quran shareef bangla, al quran bangla tafsir, bangla quran tafseer, bangla quran tafsir, bangla quran tafsir book, bangla quran online, online quran bangla, al quran bangla tarjuma, al quran bangla online, al quran bangla torjoma, bangla quran tarjuma,
      tafhimul quran online bangla, quran audio mp3 offline, full quran reading offline, offline quran audio app, quran audio offline, read quran offline, quranic apps, online quran, bangla quran online, al quran bangla online, download quran apps, quran sharif online, quran teacher online, learn quran at home, quran al quran, islam in islam, holy quran, holy al quran, quran all surah, al quran, al quan apps, al quran app download, al quran apk, bangla quran apk, quran tilawat, namaz time, fajr namaz time
    `
      .replace(/\s+/g, " ")
      .trim(),
  },
];

export default function SurahList() {
  // Get initial data from loader
  const loaderData = useLoaderData();
  const initialSurahList = loaderData?.data || loaderData;

  // Use useFetch for client-side refetch/reset
  const {
    data: surahList,
    error,
    loading,
  } = useFetch(surahListFunction, { initialData: initialSurahList });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-2 h-2 text-yellow-800" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Al Quran
              </span>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Digital Quran
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-6">
            <a
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
            >
              Home
            </a>
            <Link
              to="/faqs"
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
            >
              FAQs
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button & theme toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 dark:from-emerald-400/5 dark:to-blue-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Al Quran
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                আল কুরআন
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Read the Holy Quran with beautiful Arabic text, Bangla and English
              translations.
              <br className="hidden sm:block" />
              Experience the divine words in a modern, elegant interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#surahs"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Start Reading
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300">
                <Search className="w-5 h-5" />
                Search Surahs
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  114 Surahs
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complete Quran with all chapters
                </p>
              </div>

              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    العربية
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Arabic Text
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Original Arabic with beautiful typography
                </p>
              </div>

              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    বাং
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Translations
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bangla and English translations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surah List Section */}
      <section
        id="surahs"
        className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Surah List
              <span className="block text-lg font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
                সূরাহ সমূহ
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse all 114 Surahs with Arabic text, translations, and detailed
              information
            </p>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              <span className="ml-3 text-gray-600 dark:text-gray-300">
                Loading Surahs...
              </span>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
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
                    Unable to Load Surahs
                  </h3>
                  <p className="text-red-600 dark:text-red-400 mb-4">
                    {error.message ||
                      "An error occurred while loading the Surah list."}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}

          {surahList && Array.isArray(surahList) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {surahList.map((surah, index) => (
                <button
                  key={surah.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 p-6 text-left transform hover:scale-105 transition-all duration-300 relative overflow-hidden animate-slide-up"
                  onClick={() =>
                    navigate(
                      `/surah/${surah.id}?link=${encodeURIComponent(
                        surah.link
                      )}`
                    )
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                          {surah.id}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {surah.english_name || surah.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {surah.translation}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right mb-4">
                      <p className="text-2xl font-arabic text-emerald-700 dark:text-emerald-300 leading-relaxed">
                        {surah.arabic_name || surah.arabic || surah.name_arabic}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {surah.total_verses} verses · {surah.total_verses} আয়াত
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
