import { createContext, useContext, useState, useEffect } from "react";
import id from "./id.json";
import en from "./en.json";

const translations = { id, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "id";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    return (
      key.split(".").reduce((obj, k) => obj?.[k], translations[lang]) ?? key
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
