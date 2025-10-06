import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  BarChart3, 
  BookOpen, 
  Users, 
  Shield, 
  Zap,
  Target,
  Trophy,
  Lightbulb
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Move Analysis',
      description: 'Deep analysis of every move with explanations for mistakes, blunders, and tactical threats. Get instant feedback on your gameplay.',
      color: 'text-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed statistics including win/loss ratio, accuracy scores, and move efficiency over time.',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      title: 'Personalized Learning',
      description: 'AI-curated puzzles and exercises based on your weaknesses. Tailored learning paths for continuous improvement.',
      color: 'text-purple-500'
    },
    {
      icon: Trophy,
      title: 'Grandmaster Insights',
      description: 'Learn from the best with moves and patterns from Magnus Carlsen and other world champions integrated into your analysis.',
      color: 'text-yellow-500'
    },
    {
      icon: Target,
      title: 'Platform Integration',
      description: 'Seamlessly connect your Chess.com and Lichess accounts for automatic game import and real-time analysis.',
      color: 'text-red-500'
    },
    {
      icon: Lightbulb,
      title: 'Smart Suggestions',
      description: 'Get AI-powered move suggestions with detailed explanations of why each move is optimal in any given position.',
      color: 'text-orange-500'
    },
    {
      icon: Users,
      title: 'Community Features',
      description: 'Share your best games, compare with friends, and participate in community challenges and leaderboards.',
      color: 'text-cyan-500'
    },
    {
      icon: Shield,
      title: 'Privacy Control',
      description: 'Full control over your data with options to anonymize games and limit sharing for AI training purposes.',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Get instant analysis during live games with position evaluation and tactical alerts to improve your play.',
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Powerful Features for
            <span className="text-primary block mt-2">Chess Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed to elevate your chess game through advanced AI analysis, 
            personalized learning, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="chess-card hover:scale-105 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 group-hover:shadow-chess transition-all duration-300">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional stats */}
        <div className="mt-20 bg-card rounded-2xl p-8 shadow-elegant">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-muted-foreground">Games Analyzed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">AI Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;