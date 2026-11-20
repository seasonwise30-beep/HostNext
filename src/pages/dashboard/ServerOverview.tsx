import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Play, Square, RotateCw, Terminal, FolderOpen, Puzzle, HardDriveDownload, Settings, Users, Cpu, HardDrive } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { MOCK_SERVERS } from '../../data/mockData';

export default function ServerOverview() {
  const { id } = useParams();
  const server = MOCK_SERVERS.find(s => s.id === id) || MOCK_SERVERS[0];
  const [isPowerModalOpen, setIsPowerModalOpen] = useState(false);
  const [powerAction, setPowerAction] = useState('');

  const handlePowerAction = (action: string) => {
    setPowerAction(action);
    setIsPowerModalOpen(true);
  };

  const confirmPowerAction = () => {
    alert(`Server ${powerAction} command sent (Demo)`);
    setIsPowerModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-white">{server.name}</h1>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              server.status === 'Online' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {server.status}
            </span>
          </div>
          <p className="text-gray-400 font-mono text-sm">{server.ip}</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="success" onClick={() => handlePowerAction('start')} className="flex-1 md:flex-none">
            <Play className="w-4 h-4 mr-2" /> Start
          </Button>
          <Button variant="danger" onClick={() => handlePowerAction('stop')} className="flex-1 md:flex-none">
            <Square className="w-4 h-4 mr-2" /> Stop
          </Button>
          <Button variant="secondary" onClick={() => handlePowerAction('restart')} className="flex-1 md:flex-none">
            <RotateCw className="w-4 h-4 mr-2" /> Restart
          </Button>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Console', icon: Terminal, path: `/dashboard/servers/${server.id}/console`, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
          { name: 'File Manager', icon: FolderOpen, path: `/dashboard/servers/${server.id}/files`, color: 'text-primary', bg: 'bg-primary/10' },
          { name: 'Mods & Plugins', icon: Puzzle, path: `/dashboard/servers/${server.id}/mods`, color: 'text-secondary', bg: 'bg-secondary/10' },
          { name: 'Backups', icon: HardDriveDownload, path: `/dashboard/servers/${server.id}/backups`, color: 'text-orange-400', bg: 'bg-orange-400/10' },
        ].map((item) => (
          <Link key={item.name} to={item.path}>
            <GlassCard hover className="p-4 flex items-center gap-3">
              <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-medium text-white text-sm">{item.name}</span>
            </GlassCard>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resource Usage */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-6">Resource Usage</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 flex items-center gap-2"><Cpu className="w-4 h-4" /> CPU Usage</span>
                  <span className="text-white font-medium">{server.cpu}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: `${server.cpu}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 flex items-center gap-2"><HardDrive className="w-4 h-4" /> RAM Usage</span>
                  <span className="text-white font-medium">{server.ram.used} GB / {server.ram.total} GB</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{ width: `${(server.ram.used / server.ram.total) * 100}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 flex items-center gap-2"><Users className="w-4 h-4" /> Players Online</span>
                  <span className="text-white font-medium">{server.players}</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full" style={{ width: '24%' }} />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Server Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400 block mb-1">Game Type</span>
                <span className="text-white font-medium">{server.game}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Server ID</span>
                <span className="text-white font-mono">srv_{server.id}x89f</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Location</span>
                <span className="text-white font-medium">Mumbai, India</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Plan</span>
                <span className="text-white font-medium">Gamer (4GB)</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Console Preview */}
        <div className="space-y-4">
          <GlassCard className="h-full flex flex-col p-0 overflow-hidden bg-[#0a0d14]">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><Terminal className="w-4 h-4" /> Console</h3>
              <Link to={`/dashboard/servers/${server.id}/console`} className="text-xs text-primary hover:text-primary/80">Expand</Link>
            </div>
            <div className="p-4 font-mono text-xs text-gray-300 space-y-2 flex-1 overflow-y-auto no-scrollbar h-64">
              <p className="text-emerald-400">[16:32:10] [Server] Starting Minecraft server...</p>
              <p className="text-gray-400">[16:32:11] [Server] Loading properties...</p>
              <p className="text-gray-400">[16:32:12] [Server] Default game type: SURVIVAL</p>
              <p className="text-emerald-400">[16:32:15] [Server] Done (2.341s)! For help, type "help"</p>
              <p className="text-primary">[16:32:20] [Server] Player AlexPlayer joined the game</p>
            </div>
            <div className="p-3 border-t border-white/10 bg-black/20">
              <input 
                type="text" 
                placeholder="Type a command..." 
                className="w-full bg-transparent text-sm text-white focus:outline-none px-2"
                disabled
              />
            </div>
          </GlassCard>
        </div>
      </div>

      <Modal 
        isOpen={isPowerModalOpen} 
        onClose={() => setIsPowerModalOpen(false)}
        title={`Confirm ${powerAction.charAt(0).toUpperCase() + powerAction.slice(1)}`}
      >
        <p className="text-gray-300 mb-6">
          Are you sure you want to {powerAction} <strong>{server.name}</strong>? 
          This action will affect all connected players.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setIsPowerModalOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={confirmPowerAction}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}