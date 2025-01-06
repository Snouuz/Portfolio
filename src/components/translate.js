import translations from "../utils/translations.json";

export const translate = (key, language) => {
  return translations[language]?.[key] || key; 
};
