import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): Theme {
  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light"); // Always start with light for SSR
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // This only runs on the client after hydration
    setIsHydrated(true);
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    // Only apply theme changes after hydration
    if (!isHydrated) return;

    try {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } catch {
      // Silently fail if localStorage is not available
    }
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    // Light mode only (intentional)
    setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isHydrated }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
