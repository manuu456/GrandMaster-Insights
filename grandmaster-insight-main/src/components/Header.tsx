import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Crown className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Chess.AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#analysis" className="text-muted-foreground hover:text-foreground transition-colors">
              Analysis
            </a>
            <a href="#learning" className="text-muted-foreground hover:text-foreground transition-colors">
              Learning
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => handleAuthClick('login')}>
              Sign In
            </Button>
            <Button onClick={() => handleAuthClick('signup')}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#analysis" className="block text-muted-foreground hover:text-foreground transition-colors">
                Analysis
              </a>
              <a href="#learning" className="block text-muted-foreground hover:text-foreground transition-colors">
                Learning
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" onClick={() => handleAuthClick('login')}>
                  Sign In
                </Button>
                <Button className="w-full" onClick={() => handleAuthClick('signup')}>
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;