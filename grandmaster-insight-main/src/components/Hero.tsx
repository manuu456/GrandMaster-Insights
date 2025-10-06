import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Target, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/chess-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Chess pattern overlay */}
      <div className="absolute inset-0 chess-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Master Chess with
            <span className="text-primary block mt-2">AI-Powered Analysis</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your chess game with advanced AI analysis, personalized learning, 
            and insights from grandmaster strategies. Connect your Chess.com and Lichess accounts 
            to unlock your potential.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-medium">AI-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-medium">Personalized Learning</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-medium">Performance Tracking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="chess-button text-lg px-8 py-4">
              Start Analyzing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ chess players worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium">Chess.com Integration</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-sm font-medium">Lichess Support</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-sm font-medium">GM Strategies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chess pieces animation */}
      <div className="absolute top-20 left-10 text-6xl animate-chess-move opacity-20">♔</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-chess-move opacity-20" style={{ animationDelay: '1s' }}>♛</div>
      <div className="absolute top-1/2 right-20 text-5xl animate-chess-move opacity-20" style={{ animationDelay: '2s' }}>♞</div>
    </section>
  );
};

export default Hero;