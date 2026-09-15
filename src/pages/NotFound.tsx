import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const pathLanguage = location.pathname.split('/')[1];
  const preferredLang = pathLanguage === 'en' ? 'en' : 'es';

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
  }, [location.pathname]);

  const content = {
    es: {
      title: '404',
      message: '¡Oops! Página no encontrada',
      link: 'Volver al inicio'
    },
    en: {
      title: '404',
      message: 'Oops! Page not found',
      link: 'Return to Home'
    }
  };

  const t = content[preferredLang];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">{t.title}</h1>
        <p className="mb-6 text-xl text-muted-foreground">{t.message}</p>
        <Link 
          to={`/${preferredLang}`} 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          {t.link}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
