import { useState } from 'react';
import { Server, Search, Filter, MoreVertical, ShieldAlert, CheckCircle2, Play, Square } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const MOCK_ADMIN_SERVERS = [
  { id: 'srv_8912', user: 'Rahul Sharma', game: 'Minecraft', plan: 'Pro', status: 'Online', ip: '103.45.12.88', node: 'IN-MUM-01' },
  { id: 'srv_8911', user: 'Priya Patel', game: 'Palworld', plan: 'Gamer', status: 'Offline', ip: '103.45.12.89', node: 'IN-MUM-01' },
  { id: 'srv_8910', user: 'Amit Kumar', game: 'Rust', plan: 'Ultimate', status: 'Online', ip: '103.45.12.90', node: 'IN-MUM-02' },
  { id: 'srv_8909', user: 'Sneha Reddy', game: 'Minecraft', plan: 'Starter', status: 'Suspended', ip: '103.45.12.91', node: 'IN-BLR-01' },
  { id: 'srv_8908', user: 'Vikram Singh', game: 'ARK', plan: 'Gamer', status: 'Online', ip: '103.45.12.92', node: 'IN-BLR-01' },
];

export default function AdminServers() {
  const [search, setSearch] = useState('');

  const filteredServers = MOCK_ADMIN_SERVERS.filter(s => 
    s.user.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Server className="w-6 h-6 text-primary" /> Server Management
          </h1>
          <p className="text-gray-400 text-sm">Manage all deployed game servers across the platform.</p>
        </div>
      </div>

      <GlassCard className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by user or server ID..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search className="w-4 h-4 text-gray-500" />}
          />
        </div>
        <Button variant="secondary">
          <Filter className="w-4 h-4 mr-2" /> Filter
        </Button>
      </GlassCard>

      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-white/5">
                <th className="p-4">Server ID</th>
                <th className="p-4">Owner</th>
                <th className="p-4 hidden md:table-cell">Game / Plan</th>
                <th className="p-4 hidden lg:table-cell">Node</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServers.map((server) => (
                <tr key={server.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <div className="font-mono text-sm text-primary">{server.id}</div>
                    <div className="text-xs text-gray-500 font-mono">{server.ip}</div>
                  </td>
                  <td className="p-4 font-medium text-white">{server.user}</td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="text-sm text-white">{server.game}</div>
                    <div className="text-xs text-gray-400">{server.plan}</div>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/5">
                      {server.node}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${
                      server.status === 'Online' ? 'text-emerald-400' : 
                      server.status === 'Offline' ? 'text-gray-400' : 'text-red-400'
                    }`}>
                      {server.status === 'Online' && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {server.status === 'Suspended' && <ShieldAlert className="w-3.5 h-3.5" />}
                      {server.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-md transition-colors" title="Start">
                        <Play className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors" title="Stop">
                        <Square className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors" title="More">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}