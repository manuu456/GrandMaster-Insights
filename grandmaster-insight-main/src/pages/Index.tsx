import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PlatformIntegration from '@/components/PlatformIntegration';
import DashboardPreview from '@/components/DashboardPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <PlatformIntegration />
      <DashboardPreview />
      <Footer />
    </div>
  );
};

export default Index;
