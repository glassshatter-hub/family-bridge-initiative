import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages, Users, GraduationCap, FileText, Link2 } from "lucide-react";

const services = [
  {
    icon: Languages,
    title: "Translation Services",
    description: "Translate and explain school and government documents in Korean and English.",
  },
  {
    icon: Users,
    title: "Advocacy & Support",
    description: "Accompany families to meetings with schools, child protective services, and courts as cultural and language advocates.",
  },
  {
    icon: FileText,
    title: "Cultural Consultation",
    description: "Provide cultural consultation to social workers, teachers, and other professionals.",
  },
  {
    icon: GraduationCap,
    title: "Workshops & Education",
    description: "Offer workshops and know-your-rights materials for families and community members.",
  },
  {
    icon: Link2,
    title: "Resource Connection",
    description: "Connect families with trusted legal, mental-health, and social-service resources.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support services designed to help Korean families navigate complex systems
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
