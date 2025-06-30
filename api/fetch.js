async function surahListFunction() {
  const link = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json';

  try {
    const res = await fetch(link);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message || error);
  }
}

async function surahDetailFunction(link) {
  try {
    const res = await fetch(link);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message || error);
  }
}

export { surahListFunction, surahDetailFunction };