import { React, useState, createContext } from 'react';

export const LangContext = createContext();

export function LangProvider({ children }) {
  const localLangData = localStorage.getItem('lang') || 'eng';
  const [lang, setLang] = useState(localLangData);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
