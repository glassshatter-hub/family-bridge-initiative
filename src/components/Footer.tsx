import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Korean Families Advocates</h3>
            <p className="text-background/80">
              Supporting Korean immigrant families and promoting equitable treatment through cultural understanding.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#mission" className="hover:text-background transition-colors">Mission</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
              <li><a href="#board" className="hover:text-background transition-colors">Board</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-background/80">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@koreanfamiliesadvocates.org" className="hover:text-background transition-colors">
                contact@koreanfamiliesadvocates.org
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Korean Families Advocates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
