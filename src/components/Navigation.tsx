import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Korean Families Advocates</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('board')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Board
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Help
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
            <button 
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('board')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Board
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Contact
            </button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
              Get Help
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
