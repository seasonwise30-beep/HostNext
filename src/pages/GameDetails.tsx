import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Zap, Shield, Play } from 'lucide-react';
import { MOCK_GAMES, MOCK_PLANS } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import PlanCard from '../components/shared/PlanCard';

export default function GameDetails() {
  const { id } = useParams();
  const game = MOCK_GAMES.find((g) => g.id === id) || MOCK_GAMES[0];

  return (
    <div className="max-w-7xl mx-auto w-full py-8 px-4">
      <Link to="/games" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Games
      </Link>

      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden mb-12 border border-white/10">
        <div className="absolute inset-0">
          <img src={game.image} alt={game.name} className="w-full h-full object-cover opacity-40 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
        </div>
        <div className="relative p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl flex-shrink-0">
            <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{game.name}</h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Experience {game.name} on premium hardware. Zero lag, instant setup, and full mod support.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button size="lg"><Play className="w-5 h-5 mr-2" /> Deploy Server</Button>
              <div className="flex items-center gap-4 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-sm">
                <span className="flex items-center gap-1.5 text-emerald-400"><Users className="w-4 h-4" /> {game.players} Playing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <GlassCard className="p-6 flex items-start gap-4">
          <div className="p-2 bg-primary/20 rounded-lg"><Zap className="w-6 h-6 text-primary" /></div>
          <div>
            <h3 className="font-bold text-white mb-1">Optimized Performance</h3>
            <p className="text-sm text-gray-400">Pre-configured for maximum FPS and minimal latency.</p>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-start gap-4">
          <div className="p-2 bg-secondary/20 rounded-lg"><Shield className="w-6 h-6 text-secondary" /></div>
          <div>
            <h3 className="font-bold text-white mb-1">DDoS Protection</h3>
            <p className="text-sm text-gray-400">Always-on protection against malicious attacks.</p>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-start gap-4">
          <div className="p-2 bg-accent/20 rounded-lg"><Users className="w-6 h-6 text-accent" /></div>
          <div>
            <h3 className="font-bold text-white mb-1">Mod Support</h3>
            <p className="text-sm text-gray-400">Easily install mods and plugins with one click.</p>
          </div>
        </GlassCard>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Available Plans for {game.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} isYearly={false} />
          ))}
        </div>
      </div>
    </div>
  );
}