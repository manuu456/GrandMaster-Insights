import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink, Gamepad2, Crown, Zap } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const PlatformIntegration = () => {
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([]);

  const platforms = [
    {
      name: 'Chess.com',
      icon: '♔',
      description: 'Connect your Chess.com account for automatic game import and analysis',
      features: ['Game History Import', 'Real-time Analysis', 'Rating Tracking', 'Puzzle Integration'],
      color: 'bg-green-500',
      isPopular: true
    },
    {
      name: 'Lichess',
      icon: '♛',
      description: 'Integrate with Lichess for comprehensive game analysis and insights',
      features: ['Open Source Support', 'Tournament Analysis', 'Study Integration', 'Variant Support'],
      color: 'bg-blue-500',
      isPopular: true
    },
    {
      name: 'Chess24',
      icon: '♜',
      description: 'Coming soon - Premium chess platform integration',
      features: ['Premium Content', 'Master Classes', 'Live Events', 'Expert Commentary'],
      color: 'bg-purple-500',
      comingSoon: true
    }
  ];

  const handleConnect = (platformName: string) => {
    if (connectedPlatforms.includes(platformName)) {
      setConnectedPlatforms(prev => prev.filter(p => p !== platformName));
      toast({
        title: 'Platform Disconnected',
        description: `${platformName} has been disconnected from your account`,
      });
    } else {
      setConnectedPlatforms(prev => [...prev, platformName]);
      toast({
        title: 'Platform Connected!',
        description: `${platformName} has been successfully connected to your account`,
      });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Connect Your
            <span className="text-primary block mt-2">Chess Platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamlessly integrate with your favorite chess platforms to import games, 
            track progress, and get comprehensive analysis across all your matches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => {
            const isConnected = connectedPlatforms.includes(platform.name);
            
            return (
              <Card key={index} className="chess-card relative overflow-hidden">
                {platform.isPopular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${platform.color} flex items-center justify-center text-2xl text-white`}>
                      {platform.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{platform.name}</CardTitle>
                      {platform.comingSoon && (
                        <Badge variant="secondary" className="mt-1">Coming Soon</Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {platform.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleConnect(platform.name)}
                    disabled={platform.comingSoon}
                    className="w-full"
                    variant={isConnected ? "outline" : "default"}
                  >
                    {platform.comingSoon ? (
                      'Coming Soon'
                    ) : isConnected ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Connected
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Connect Account
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Benefits */}
        <div className="bg-secondary/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Connect Your Platforms?</h3>
            <p className="text-muted-foreground">
              Get the most out of Chess.AI by connecting your existing chess accounts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold">Automatic Import</h4>
              <p className="text-sm text-muted-foreground">
                All your games are automatically imported and ready for analysis
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold">Comprehensive Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Get detailed insights across all platforms in one unified dashboard
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold">Real-time Sync</h4>
              <p className="text-sm text-muted-foreground">
                Your latest games and statistics are always up to date
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntegration;