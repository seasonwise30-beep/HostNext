import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Copy, Users, Shield, Zap, Server, Clock, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { MOCK_GAMES } from '../data/mockData';

export default function ServerDetails() {
  const { id } = useParams();
  
  // Mock data based on the ID from Discover page
  const server = {
    id: id || '1',
    name: 'Survival Kingdom',
    game: 'Minecraft',
    players: '42/100',
    ip: 'play.survivalkingdom.com',
    tags: ['Survival', 'PvP', 'SMP'],
    image: MOCK_GAMES[0].image,
    rating: 4.8,
    description: 'Welcome to Survival Kingdom! A premium Minecraft experience featuring land claims, custom enchants, player shops, and weekly events. Join us for endless adventures!',
    version: '1.20.4',
    uptime: '99.9%',
    submitted: '2 months ago',
  };

  return (
    <div className="max-w-5xl mx-auto w-full py-8 px-4">
      <Link to="/discover" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Discover
      </Link>

      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-8 border border-white/10">
        <div className="absolute inset-0">
          <img src={server.image} alt={server.name} className="w-full h-full object-cover opacity-30 blur-md" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent" />
        </div>
        
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl flex-shrink-0 bg-[#0B0F19]">
            <img src={server.image} alt={server.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left flex-1 mb-2">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
              {server.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/10 text-white px-2.5 py-1 rounded-md backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-2">{server.name}</h1>
            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Online
              </span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {server.players} Players</span>
              <span className="flex items-center gap-1 text-yellow-400">★ {server.rating} Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-8">
            <h2 className="text-xl font-bold text-white mb-4">About this Server</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{server.description}</p>
            
            <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Land Claims', 'Custom Enchants', 'Player Shops', 'Weekly Events', 'Active Staff', 'Anti-Cheat'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {feature}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="text-xl font-bold text-white mb-4">Server Specs</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Game Version</div>
                <div className="text-lg font-semibold text-white">{server.version}</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Uptime</div>
                <div className="text-lg font-semibold text-emerald-400">{server.uptime}</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Region</div>
                <div className="text-lg font-semibold text-white">India (Mumbai)</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Listed</div>
                <div className="text-lg font-semibold text-white">{server.submitted}</div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Connect to Server</h3>
            <div className="bg-black/50 border border-white/10 rounded-xl p-3 flex items-center justify-between mb-4">
              <code className="text-sm text-primary font-mono select-all">{server.ip}</code>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(server.ip);
                  alert('IP Copied to clipboard!');
                }}
                className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                title="Copy IP"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <Button className="w-full justify-center">
              <Zap className="w-4 h-4 mr-2" /> Join Server
            </Button>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Server Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Server className="w-4 h-4" /> Game</span>
                <span className="text-white font-medium">{server.game}</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Users className="w-4 h-4" /> Players</span>
                <span className="text-white font-medium">{server.players}</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Shield className="w-4 h-4" /> DDoS Protection</span>
                <span className="text-emerald-400 font-medium">Enabled</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Clock className="w-4 h-4" /> Last Ping</span>
                <span className="text-white font-medium">12ms</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}