import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, HardDriveDownload, Plus, RotateCcw, Trash2, Clock, CheckCircle2 } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';

const INITIAL_BACKUPS = [
  { id: '1', name: 'Automatic Backup', date: '2024-03-10 12:00', size: '450 MB', type: 'Auto', status: 'Completed' },
  { id: '2', name: 'Before Plugin Update', date: '2024-03-08 18:30', size: '448 MB', type: 'Manual', status: 'Completed' },
  { id: '3', name: 'Weekly Backup', date: '2024-03-03 00:00', size: '440 MB', type: 'Auto', status: 'Completed' },
];

export default function Backups() {
  const { id } = useParams();
  const [backups, setBackups] = useState(INITIAL_BACKUPS);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateBackup = () => {
    setIsCreating(true);
    setTimeout(() => {
      const newBackup = {
        id: Date.now().toString(),
        name: 'Manual Backup',
        date: new Date().toISOString().slice(0, 16).replace('T', ' '),
        size: '452 MB',
        type: 'Manual',
        status: 'Completed'
      };
      setBackups([newBackup, ...backups]);
      setIsCreating(false);
    }, 2000);
  };

  const handleDelete = (backupId: string) => {
    if (confirm('Are you sure you want to delete this backup?')) {
      setBackups(backups.filter(b => b.id !== backupId));
    }
  };

  const handleRestore = (backupName: string) => {
    if (confirm(`Are you sure you want to restore ${backupName}? This will overwrite current server files.`)) {
      alert('Restore process started (Demo)');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link to={`/dashboard/servers/${id}`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <HardDriveDownload className="w-6 h-6 text-orange-400" /> Backups
          </h1>
        </div>
        <Button 
          variant="primary" 
          onClick={handleCreateBackup} 
          disabled={isCreating}
          className="w-full sm:w-auto"
        >
          {isCreating ? (
            <><Clock className="w-4 h-4 mr-2 animate-spin" /> Creating...</>
          ) : (
            <><Plus className="w-4 h-4 mr-2" /> Create Backup</>
          )}
        </Button>
      </div>

      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-white/5">
                <th className="p-4">Name</th>
                <th className="p-4 hidden md:table-cell">Date</th>
                <th className="p-4 hidden sm:table-cell">Size</th>
                <th className="p-4 hidden lg:table-cell">Type</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {backups.map((backup) => (
                <tr key={backup.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4 font-medium text-white">{backup.name}</td>
                  <td className="p-4 hidden md:table-cell text-sm text-gray-400">{backup.date}</td>
                  <td className="p-4 hidden sm:table-cell text-sm text-gray-400">{backup.size}</td>
                  <td className="p-4 hidden lg:table-cell">
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/5">
                      {backup.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {backup.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleRestore(backup.name)}
                        className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" 
                        title="Restore"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(backup.id)}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors" 
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
      
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-3">
        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-semibold text-white">Automatic Backups Enabled</h4>
          <p className="text-xs text-gray-400 mt-1">Your server is backed up automatically every 24 hours. You can manage this in Settings.</p>
        </div>
      </div>
    </div>
  );
}