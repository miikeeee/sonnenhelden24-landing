const RatgeberFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="/favicon.ico"
              alt="sonnenhelden24 Logo"
              className="h-8 mb-4"
            />
            <p className="text-gray-400 text-sm sm:text-base">Dein Partner für moderne Solaranlagen und Photovoltaik in ganz Deutschland.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/solaranlagen" className="hover:text-white transition-colors">Solaranlagen</a></li>
              <li><a href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h4>
            <p className="text-gray-400 text-sm sm:text-base">
              <span className="block">✉️ info@sonnenhelden24.de</span>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 sonnenhelden24. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default RatgeberFooter;
