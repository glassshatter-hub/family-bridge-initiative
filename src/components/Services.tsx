import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages, Users, GraduationCap, FileText, Link2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Languages,
      title: t('services.language.title'),
      description: t('services.language.desc'),
    },
    {
      icon: Users,
      title: t('services.family.title'),
      description: t('services.family.desc'),
    },
    {
      icon: FileText,
      title: t('services.legal.title'),
      description: t('services.legal.desc'),
    },
    {
      icon: GraduationCap,
      title: t('services.education.title'),
      description: t('services.education.desc'),
    },
    {
      icon: Link2,
      title: t('services.community.title'),
      description: t('services.community.desc'),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t('services.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
