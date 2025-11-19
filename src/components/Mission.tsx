import flagsImage from "@/assets/flags-unity.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">{t('mission.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('mission.text')}
            </p>
          </div>
          <div className="relative">
            <img 
              src={flagsImage} 
              alt="Korean and American flags representing cultural unity" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
