import { fallbackSurahList, fallbackSurahDetail } from "./fallback-data.js";

async function surahListFunction() {
  const link =
    "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json";

  console.log("Attempting to fetch Surah list from:", link);

  try {
    const res = await fetch(link, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    });

    console.log("Fetch response status:", res.status, res.statusText);

    if (!res.ok) {
      throw new Error(
        `Network response was not ok. Status: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    console.log(
      "Successfully fetched Surah list data:",
      data?.length || "unknown length"
    );
    return data;
  } catch (error) {
    console.error("surahListFunction fetch error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    // If fetch fails, try to use fallback data
    if (
      error.name === "TypeError" &&
      (error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError"))
    ) {
      console.warn("External API failed, using fallback data");
      return fallbackSurahList;
    }

    // For other types of errors, still throw
    throw new Error("Failed to fetch Surah list: " + (error.message || error));
  }
}

async function surahDetailFunction(link) {
  if (!link) {
    throw new Error("Surah link is required");
  }

  console.log("Attempting to fetch Surah details from:", link);

  try {
    const res = await fetch(link, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    });

    console.log("Fetch response status:", res.status, res.statusText);

    if (!res.ok) {
      throw new Error(
        `Network response was not ok. Status: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    console.log(
      "Successfully fetched Surah details data:",
      data?.verses?.length || "unknown verses count"
    );
    return data;
  } catch (error) {
    console.error("surahDetailFunction fetch error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    // If fetch fails, try to use fallback data (only for Al-Fatiha for now)
    if (
      error.name === "TypeError" &&
      (error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError"))
    ) {
      console.warn("External API failed, checking for fallback data");
      // Only provide fallback for Surah 1 (Al-Fatiha) for now
      if (link.includes("/1.json")) {
        console.warn("Using fallback data for Al-Fatiha");
        return fallbackSurahDetail;
      }
      throw new Error(
        "Unable to connect to the Quran service. Please check your internet connection and try again."
      );
    }

    // For other types of errors, still throw
    throw new Error(
      "Failed to fetch Surah details: " + (error.message || error)
    );
  }
}

export { surahListFunction, surahDetailFunction };
