import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          Oops! Diese Seite gibt es bei Sonnenhelden24 nicht.
        </p>
        <a
          href="/"
          className="text-yellow-600 hover:text-yellow-700 underline"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default NotFound;
