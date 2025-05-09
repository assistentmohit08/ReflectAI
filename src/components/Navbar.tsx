import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageTransition from '@/components/PageTransition';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <PageTransition>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">ReflectAI</span>
            </Link>

            {/* Desktop navigation - hidden on small screens */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-foreground/80 hover:text-primary transition-colors">
                Journal
              </Link>
              <Link to="/counselor" className="text-foreground/80 hover:text-primary transition-colors">
                Counselor
              </Link>
              <Link to="/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/login" className="text-foreground/80 hover:text-primary transition-colors">
                Logout
              </Link>
            </div>

            {/* Mobile menu button - visible only on small screens */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground bg-white/30 hover:bg-white/60"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile sidebar menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed right-0 top-16 h-screen w-64 bg-white/60 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/about" 
                className="text-foreground/80 bg-black/30 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/journal" 
                className="text-foreground/80 bg-black/30 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Journal
              </Link>
              <Link 
                to="/counselor" 
                className="text-foreground/80 bg-black/30 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Counselor
              </Link>
              <Link 
                to="/dashboard" 
                className="text-foreground/80 bg-black/30 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/login" 
                className="text-foreground/80 bg-black/30 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </nav>
    </PageTransition>
  );
}