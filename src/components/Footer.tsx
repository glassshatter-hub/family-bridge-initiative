import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Korean Families Advocates</h3>
            <p className="text-background/80">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/mission" className="hover:text-background transition-colors">{t('nav.mission')}</Link></li>
              <li><Link to="/services" className="hover:text-background transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/board" className="hover:text-background transition-colors">{t('nav.board')}</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contactUs')}</h4>
            <div className="flex items-center gap-2 text-background/80">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@koreanfamiliesadvocates.org" className="hover:text-background transition-colors">
                contact@koreanfamiliesadvocates.org
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Korean Families Advocates. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
