// Fallback data for when the external API is unavailable
export const fallbackSurahList = [
  {
    id: 1,
    english_name: "Al-Fatiha",
    arabic_name: "الفاتحة",
    name_arabic: "الفاتحة",
    translation: "The Opening",
    total_verses: 7,
    link: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/1.json",
  },
  {
    id: 2,
    english_name: "Al-Baqarah",
    arabic_name: "البقرة",
    name_arabic: "البقرة",
    translation: "The Cow",
    total_verses: 286,
    link: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/2.json",
  },
  {
    id: 3,
    english_name: "Ali 'Imran",
    arabic_name: "آل عمران",
    name_arabic: "آل عمران",
    translation: "Family of Imran",
    total_verses: 200,
    link: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/3.json",
  },
  // Add a few more important Surahs for fallback
  {
    id: 4,
    english_name: "An-Nisa",
    arabic_name: "النساء",
    name_arabic: "النساء",
    translation: "The Women",
    total_verses: 176,
    link: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/4.json",
  },
  {
    id: 5,
    english_name: "Al-Ma'idah",
    arabic_name: "المائدة",
    name_arabic: "المائدة",
    translation: "The Table Spread",
    total_verses: 120,
    link: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/5.json",
  },
];

export const fallbackSurahDetail = {
  id: 1,
  english_name: "Al-Fatiha",
  arabic_name: "الفاتحة",
  name_arabic: "الفاتحة",
  translation: "The Opening",
  verses: [
    {
      id: 1,
      text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation:
        "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      transliteration: "Bismillāhi r-raḥmāni r-raḥīm",
    },
    {
      id: 2,
      text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "[All] praise is [due] to Allah, Lord of the worlds -",
      transliteration: "Al-ḥamdu lillāhi rabbi l-'ālamīn",
    },
    {
      id: 3,
      text: "الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "The Entirely Merciful, the Especially Merciful,",
      transliteration: "Ar-raḥmāni r-raḥīm",
    },
    {
      id: 4,
      text: "مَالِكِ يَوْمِ الدِّينِ",
      translation: "Sovereign of the Day of Recompense.",
      transliteration: "Māliki yawmi d-dīn",
    },
    {
      id: 5,
      text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "It is You we worship and You we ask for help.",
      transliteration: "Iyyāka na'budu wa-iyyāka nasta'īn",
    },
    {
      id: 6,
      text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path -",
      transliteration: "Ihdinā ṣ-ṣirāṭa l-mustaqīm",
    },
    {
      id: 7,
      text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّ��لِّينَ",
      translation:
        "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
      transliteration:
        "Ṣirāṭa lladhīna an'amta 'alayhim ghayri l-maghḍūbi 'alayhim wa-lā ḍ-ḍāllīn",
    },
  ],
};
