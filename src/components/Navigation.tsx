import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center py-2">
            <img src="/Logo.png?v=2" alt="Korean Families Advocates" className="h-28 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-2 mr-4">
              <button
                onClick={() => setLanguage('en')}
                className={`text-2xl transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                title="English"
              >
                🇺🇸
              </button>
              <button
                onClick={() => setLanguage('ko')}
                className={`text-2xl transition-opacity ${language === 'ko' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                title="한국어"
              >
                🇰🇷
              </button>
            </div>
            <Link 
              to="/mission"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.mission')}
            </Link>
            <Link 
              to="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/board"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.board')}
            </Link>
            <Link 
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <a href="mailto:contact@koreanfamiliesadvocates.org">{t('nav.getHelp')}</a>
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <div className="flex items-center gap-3 px-4 pb-3 border-b border-border mb-3">
              <button
                onClick={() => setLanguage('en')}
                className={`text-2xl transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40'}`}
                title="English"
              >
                🇺🇸
              </button>
              <button
                onClick={() => setLanguage('ko')}
                className={`text-2xl transition-opacity ${language === 'ko' ? 'opacity-100' : 'opacity-40'}`}
                title="한국어"
              >
                🇰🇷
              </button>
            </div>
            <Link 
              to="/mission"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.mission')}
            </Link>
            <Link 
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/board"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.board')}
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.contact')}
            </Link>
            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
            >
              <a href="mailto:contact@koreanfamiliesadvocates.org">{t('nav.getHelp')}</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
