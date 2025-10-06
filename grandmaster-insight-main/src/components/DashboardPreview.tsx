import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock, 
  Star, 
  Brain,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const DashboardPreview = () => {
  const gameStats = [
    { label: 'Win Rate', value: '68%', trend: 'up', color: 'text-green-500' },
    { label: 'Avg Accuracy', value: '84.2%', trend: 'up', color: 'text-blue-500' },
    { label: 'Rating', value: '1847', trend: 'up', color: 'text-purple-500' },
    { label: 'Games Played', value: '127', trend: 'neutral', color: 'text-muted-foreground' }
  ];

  const recentGames = [
    { opponent: 'ChessMaster2024', result: 'win', accuracy: 92, moves: 34, opening: 'Sicilian Defense' },
    { opponent: 'KnightRider88', result: 'loss', accuracy: 78, moves: 51, opening: 'Queen\'s Gambit' },
    { opponent: 'PawnStorm', result: 'win', accuracy: 89, moves: 28, opening: 'Italian Game' }
  ];

  const weeklyProgress = [
    { day: 'Mon', games: 3, accuracy: 85 },
    { day: 'Tue', games: 5, accuracy: 82 },
    { day: 'Wed', games: 2, accuracy: 91 },
    { day: 'Thu', games: 4, accuracy: 87 },
    { day: 'Fri', games: 6, accuracy: 84 },
    { day: 'Sat', games: 8, accuracy: 88 },
    { day: 'Sun', games: 4, accuracy: 90 }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Chess
            <span className="text-primary block mt-2">Analytics Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get comprehensive insights into your chess performance with detailed analytics, 
            game analysis, and personalized recommendations for improvement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {gameStats.map((stat, index) => (
              <Card key={index} className="chess-card text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                    {stat.trend === 'up' && <TrendingUp className="w-4 h-4 ml-1 text-green-500" />}
                    {stat.trend === 'down' && <TrendingDown className="w-4 h-4 ml-1 text-red-500" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Games */}
            <Card className="lg:col-span-2 chess-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Recent Games Analysis
                </CardTitle>
                <CardDescription>
                  AI-powered analysis of your latest matches
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentGames.map((game, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {game.result === 'win' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                        <div>
                          <div className="font-medium">vs {game.opponent}</div>
                          <div className="text-sm text-muted-foreground">{game.opening}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium">{game.accuracy}%</div>
                        <div className="text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{game.moves}</div>
                        <div className="text-muted-foreground">Moves</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="chess-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-primary" />
                  AI Insights
                </CardTitle>
                <CardDescription>
                  Personalized recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Strong Opening Play</p>
                      <p className="text-xs text-muted-foreground">Your Sicilian Defense accuracy improved by 12%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Focus on Endgames</p>
                      <p className="text-xs text-muted-foreground">Practice rook endings for better conversion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Time Management</p>
                      <p className="text-xs text-muted-foreground">Average 18s per move, try for 15s</p>
                    </div>
                  </div>
                </div>

                <Badge className="w-full justify-center bg-primary/10 text-primary hover:bg-primary/20">
                  Next Puzzle: Tactical Combinations
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Progress Chart */}
          <Card className="mt-8 chess-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Weekly Progress
              </CardTitle>
              <CardDescription>
                Your chess activity and accuracy trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-4">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">{day.day}</div>
                    <div 
                      className="bg-primary/20 rounded-lg p-3 relative overflow-hidden"
                      style={{ height: `${Math.max(day.games * 8, 40)}px` }}
                    >
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-500"
                        style={{ height: `${day.accuracy}%` }}
                      />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium">{day.games} games</div>
                      <div className="text-muted-foreground">{day.accuracy}% acc</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="chess-button">
              View Full Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;