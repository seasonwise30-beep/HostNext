import { Link } from 'react-router-dom';
import { Users, Cpu, HardDrive, Play, Square, RotateCw, MoreVertical } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

interface ServerCardProps {
  server: {
    id: string;
    name: string;
    ip: string;
    game: string;
    status: string;
    players: string;
    ram: { used: number; total: number };
    cpu: number;
  };
  isDashboard?: boolean;
}

export default function ServerCard({ server, isDashboard = false }: ServerCardProps) {
  const ramPercentage = (server.ram.used / server.ram.total) * 100;

  return (
    <GlassCard hover className="p-5 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10">
            <span className="text-lg">🎮</span>
          </div>
          <div>
            <h3 className="font-semibold text-white">{server.name}</h3>
            <p className="text-xs text-gray-400 font-mono">{server.ip}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            server.status === 'Online' 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}>
            {server.status}
          </span>
          {!isDashboard && (
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/5 rounded-lg p-2 text-center">
          <Users className="w-4 h-4 text-primary mx-auto mb-1" />
          <div className="text-sm font-semibold text-white">{server.players}</div>
          <div className="text-[10px] text-gray-400">Players</div>
        </div>
        <div className="bg-white/5 rounded-lg p-2 text-center">
          <Cpu className="w-4 h-4 text-secondary mx-auto mb-1" />
          <div className="text-sm font-semibold text-white">{server.cpu}%</div>
          <div className="text-[10px] text-gray-400">CPU</div>
        </div>
        <div className="bg-white/5 rounded-lg p-2 text-center">
          <HardDrive className="w-4 h-4 text-accent mx-auto mb-1" />
          <div className="text-sm font-semibold text-white">{server.ram.used} / {server.ram.total} GB</div>
          <div className="text-[10px] text-gray-400">RAM</div>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>RAM Usage</span>
          <span>{Math.round(ramPercentage)}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500" 
            style={{ width: `${ramPercentage}%` }}
          />
        </div>
      </div>

      {isDashboard ? (
        <div className="mt-auto flex gap-2">
          <Button variant="success" size="sm" className="flex-1">
            <Play className="w-3.5 h-3.5 mr-1.5" /> Start
          </Button>
          <Button variant="danger" size="sm" className="flex-1">
            <Square className="w-3.5 h-3.5 mr-1.5" /> Stop
          </Button>
          <Button variant="secondary" size="sm" className="flex-1">
            <RotateCw className="w-3.5 h-3.5 mr-1.5" /> Restart
          </Button>
        </div>
      ) : (
        <Link to={`/dashboard/servers/${server.id}`} className="mt-auto">
          <Button variant="secondary" className="w-full justify-center">
            Manage Server
          </Button>
        </Link>
      )}
    </GlassCard>
  );
}