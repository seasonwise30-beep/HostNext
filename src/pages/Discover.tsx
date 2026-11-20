import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, ArrowRight, Server, Filter, Shield, Zap } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { MOCK_GAMES } from '../data/mockData';

const MOCK_PUBLIC_SERVERS = [
  { id: '1', name: 'Survival Kingdom', game: 'Minecraft', players: '42/100', ip: 'play.survivalkingdom.com', tags: ['Survival', 'PvP', 'SMP'], image: MOCK_GAMES[0].image, rating: 4.8 },
  { id: '2', name: 'SkyBlock Legends', game: 'Minecraft', players: '85/150', ip: 'play.skyblocklegends.net', tags: ['SkyBlock', 'Economy'], image: MOCK_GAMES[0].image, rating: 4.5 },
  { id: '3', name: 'Palworld Ultimate', game: 'Palworld', players: '12/32', ip: 'pal.ultimate.com', tags: ['PvE', 'Modded'], image: MOCK_GAMES[1].image, rating: 4.2 },
  { id: '4', name: 'ARK: Primal Rage', game: 'ARK', players: '56/70', ip: 'ark.primalrage.io', tags: ['PvP', 'Hardcore'], image: MOCK_GAMES[2].image, rating: 4.7 },
];

export default function Discover() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Trending');

  return (
    <div className="max-w-7xl mx-auto w-full py-12 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-3 flex items-center gap-3">
            <Server className="w-8 h-8 text-primary" />
            Discover Servers
          </h1>
          <p className="text-gray-400 max-w-xl">
            Find your next world. Share yours with everyone. The best community servers, all in one place.
          </p>
        </div>
        <Link to="/submit">
          <Button variant="primary" size="lg">
            Submit Your Server
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search servers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search className="w-4 h-4 text-gray-500" />}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {['Trending', 'Popular', 'New', 'Top Rated'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 flex items-center gap-2 whitespace-nowrap">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      {/* Server Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_PUBLIC_SERVERS.map((server) => (
          <GlassCard key={server.id} hover className="flex flex-col sm:flex-row overflow-hidden group">
            <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
              <img src={server.image} alt={server.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0F19] hidden sm:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent sm:hidden" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{server.name}</h3>
                  <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-400 text-xs px-2 py-1 rounded-md border border-yellow-500/20">
                    ★ {server.rating}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-emerald-400 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Online • {server.players} Players
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {server.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-xs text-gray-500 font-mono">{server.ip}</div>
                <Link to={`/discover/${server.id}`}>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 p-0 px-3">
                    View Server <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}