import { useEffect, useState } from "react";

const COOKIE_KEY = "cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(COOKIE_KEY, accepted ? "accepted" : "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-auto z-50 max-w-md bg-white/95 border border-blue-200 shadow-xl rounded-xl p-4 flex flex-col sm:flex-row items-center gap-3 animate-fade-in">
      <div className="flex-1 text-sm text-gray-800">
        Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. <a href="/datenschutz" className="text-blue-600 underline">Mehr erfahren</a>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          onClick={() => handleConsent(true)}
        >
          Annehmen
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
          onClick={() => handleConsent(false)}
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
