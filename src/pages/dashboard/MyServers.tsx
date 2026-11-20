import { Link } from 'react-router-dom';
import { Server, Search, Filter } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import ServerCard from '../../components/shared/ServerCard';
import { MOCK_SERVERS } from '../../data/mockData';

export default function MyServers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Server className="w-6 h-6 text-primary" /> My Servers
          </h1>
          <p className="text-gray-400 text-sm">Manage your deployed game servers.</p>
        </div>
        <Link to="/plans">
          <Button variant="primary">Deploy New Server</Button>
        </Link>
      </div>

      <GlassCard className="p-4 flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:flex-1">
          <Input 
            placeholder="Search servers..." 
            icon={<Search className="w-4 h-4 text-gray-500" />}
          />
        </div>
        <Button variant="secondary" className="w-full sm:w-auto">
          <Filter className="w-4 h-4 mr-2" /> Filters
        </Button>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_SERVERS.map((server) => (
          <ServerCard key={server.id} server={server} isDashboard={true} />
        ))}
        
        {/* Placeholder for empty state / add new */}
        <Link to="/plans">
          <div className="h-full min-h-[280px] rounded-2xl border-2 border-dashed border-white/10 hover:border-primary/50 bg-white/[0.02] hover:bg-primary/[0.02] flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
              <span className="text-2xl text-gray-400 group-hover:text-primary">+</span>
            </div>
            <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Deploy New Server</p>
          </div>
        </Link>
      </div>
    </div>
  );
}