import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-families.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Supporting Korean Families
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Bridging cultures and fostering understanding between families and child-serving systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 shadow-lg">
              Get Help Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
