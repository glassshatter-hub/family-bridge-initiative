import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Korean Families Advocates</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/mission"
              className="text-foreground hover:text-primary transition-colors"
            >
              Mission
            </Link>
            <Link 
              to="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/board"
              className="text-foreground hover:text-primary transition-colors"
            >
              Board
            </Link>
            <Link 
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <a href="mailto:contact@koreanfamiliesadvocates.org">Get Help</a>
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
            <Link 
              to="/mission"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Mission
            </Link>
            <Link 
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/board"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Board
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Contact
            </Link>
            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
            >
              <a href="mailto:contact@koreanfamiliesadvocates.org">Get Help</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
