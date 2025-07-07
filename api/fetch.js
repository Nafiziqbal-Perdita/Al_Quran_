async function surahListFunction() {
  const link = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json';

  try {
    const res = await fetch(link);
    if (!res.ok) {
      throw new Error(`Network response was not ok. Status: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('surahListFunction fetch error:', error);
    throw new Error('Failed to fetch Surah list. ' + (error.message || error));
  }
}

async function surahDetailFunction(link) {
  try {
    const res = await fetch(link);
    if (!res.ok) {
      throw new Error(`Network response was not ok. Status: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('surahDetailFunction fetch error:', error);
    throw new Error('Failed to fetch Surah details. ' + (error.message || error));
  }
}

export { surahListFunction, surahDetailFunction };