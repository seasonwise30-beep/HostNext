import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

interface GameCardProps {
  game: {
    id: string;
    name: string;
    players: string;
    image: string;
  };
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <GlassCard hover className="group overflow-hidden flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-xs text-white border border-white/10">
          <Users className="w-3 h-3 text-primary" />
          {game.players} Online
        </div>
      </div>
      
      <div className="p-4 flex items-center justify-between mt-auto">
        <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
          {game.name}
        </h3>
        <Link 
          to={`/games/${game.id}`}
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors"
        >
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
        </Link>
      </div>
    </GlassCard>
  );
}