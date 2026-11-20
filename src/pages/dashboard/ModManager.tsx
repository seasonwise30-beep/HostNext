import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Download, CheckCircle2, Puzzle, Upload, RefreshCw } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const MOCK_MODS = [
  { id: '1', name: 'EssentialsX', version: '2.20.1', author: 'EssentialsX Team', installed: true, category: 'Utility' },
  { id: '2', name: 'WorldEdit', version: '7.2.15', author: 'EngineHub', installed: true, category: 'Building' },
  { id: '3', name: 'LuckPerms', version: '5.4.102', author: 'Luck', installed: false, category: 'Permissions' },
  { id: '4', name: 'Vault', version: '1.7.3', author: 'Sleaker', installed: true, category: 'API' },
  { id: '5', name: 'ClearLag', version: '3.2.2', author: 'Bob7', installed: false, category: 'Performance' },
  { id: '6', name: 'Dynmap', version: '3.6', author: 'mikeprimm', installed: false, category: 'Utility' },
];

export default function ModManager() {
  const { id } = useParams();
  const [search, setSearch] = useState('');
  const [mods, setMods] = useState(MOCK_MODS);

  const toggleInstall = (modId: string) => {
    setMods(mods.map(mod => 
      mod.id === modId ? { ...mod, installed: !mod.installed } : mod
    ));
  };

  const filteredMods = mods.filter(mod => 
    mod.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link to={`/dashboard/servers/${id}`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Puzzle className="w-6 h-6 text-secondary" /> Mods & Plugins
          </h1>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="secondary" className="flex-1 sm:flex-none">
            <RefreshCw className="w-4 h-4 mr-2" /> Refresh
          </Button>
          <Button variant="primary" className="flex-1 sm:flex-none">
            <Upload className="w-4 h-4 mr-2" /> Upload Mod
          </Button>
        </div>
      </div>

      <GlassCard className="p-4">
        <Input 
          placeholder="Search plugins or mods..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<Search className="w-4 h-4 text-gray-500" />}
        />
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMods.map((mod) => (
          <GlassCard key={mod.id} className="p-5 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <Puzzle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{mod.name}</h3>
                  <p className="text-xs text-gray-400">v{mod.version} by {mod.author}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4 flex-1">
              <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/5">
                {mod.category}
              </span>
            </div>

            <Button 
              variant={mod.installed ? 'secondary' : 'primary'} 
              className={`w-full justify-center ${mod.installed ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20' : ''}`}
              onClick={() => toggleInstall(mod.id)}
            >
              {mod.installed ? (
                <><CheckCircle2 className="w-4 h-4 mr-2" /> Installed</>
              ) : (
                <><Download className="w-4 h-4 mr-2" /> Install</>
              )}
            </Button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}