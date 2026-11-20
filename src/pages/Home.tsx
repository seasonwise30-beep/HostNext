import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Zap, Server } from 'lucide-react';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import GameCard from '../components/shared/GameCard';
import { MOCK_GAMES } from '../data/mockData';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All Systems Online
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Power Your World.<br />
            <span className="text-gradient">Host Without Limits.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            Premium game server hosting, domains, and more. All in one place. 
            Experience unparalleled performance with our next-gen infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/plans">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/games">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Play className="w-4 h-4 mr-2" /> Explore Games
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> 99.9% Uptime</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-secondary" /> 2.24/7 Support</div>
            <div className="flex items-center gap-2"><Server className="w-4 h-4 text-accent" /> Global Locations</div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[80px] rounded-full" />
          <GlassCard className="relative p-2 rounded-2xl border-white/20 shadow-2xl overflow-hidden aspect-video flex items-center justify-center bg-[#0f1423]">
             {/* Placeholder for hero image/graphic */}
             <div className="text-center">
                <Server className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-gray-400 font-mono text-sm">HostNext Infrastructure</p>
             </div>
          </GlassCard>
        </div>
      </section>

      {/* Popular Games */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Popular Games</h2>
            <p className="text-gray-400">Explore our game hosting services</p>
          </div>
          <Link to="/games" className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_GAMES.slice(0, 4).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose HostNext?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We provide the best infrastructure for your game servers, ensuring zero lag and maximum uptime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard hover className="p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Blazing Fast</h3>
            <p className="text-gray-400 text-sm">Equipped with NVMe SSDs and the latest generation CPUs for instant load times.</p>
          </GlassCard>
          <GlassCard hover className="p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">DDoS Protected</h3>
            <p className="text-gray-400 text-sm">Enterprise-grade DDoS protection keeps your server online and your players happy.</p>
          </GlassCard>
          <GlassCard hover className="p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Server className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
            <p className="text-gray-400 text-sm">Your server is deployed instantly after payment. No waiting, just playing.</p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}