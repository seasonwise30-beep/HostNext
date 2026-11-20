import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Square, RotateCw, Send } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';

const INITIAL_LOGS = [
  '[16:32:10] [Server] Starting Minecraft server version 1.20.4',
  '[16:32:11] [Server] Loading properties',
  '[16:32:11] [Server] Default game type: SURVIVAL',
  '[16:32:12] [Server] Generating keypair',
  '[16:32:13] [Server] Starting Minecraft server on *:25565',
  '[16:32:14] [Server] Preparing level "world"',
  '[16:32:15] [Server] Done (2.341s)! For help, type "help"',
  '[16:32:20] [Server] Player AlexPlayer joined the game',
  '[16:32:22] [Server] Player Steve joined the game',
  '[16:35:10] [Server] Saving the game',
];

export default function ServerConsole() {
  const { id } = useParams();
  const [logs, setLogs] = useState<string[]>(INITIAL_LOGS);
  const [command, setCommand] = useState('');
  const consoleEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  const handleSendCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs((prev) => [...prev, `[${time}] [Console] ${command}`]);
    
    // Simulate server response
    setTimeout(() => {
      setLogs((prev) => [...prev, `[${time}] [Server] Executed command: ${command}`]);
    }, 500);

    setCommand('');
  };

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 flex-shrink-0">
        <div>
          <Link to={`/dashboard/servers/${id}`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Overview
          </Link>
          <h1 className="text-2xl font-bold text-white">Live Console</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="success" size="sm"><Play className="w-4 h-4 mr-2" /> Start</Button>
          <Button variant="danger" size="sm"><Square className="w-4 h-4 mr-2" /> Stop</Button>
          <Button variant="secondary" size="sm"><RotateCw className="w-4 h-4 mr-2" /> Restart</Button>
        </div>
      </div>

      {/* Console Window */}
      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden bg-[#05070a] border-white/10">
        <div className="p-3 border-b border-white/10 bg-white/5 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-gray-400">root@hostnext-srv-{id}:~</span>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm custom-scrollbar">
          {logs.map((log, i) => (
            <div key={i} className={`mb-1 ${
              log.includes('[Console]') ? 'text-primary' : 
              log.includes('joined') ? 'text-emerald-400' : 
              log.includes('Starting') ? 'text-yellow-400' : 'text-gray-300'
            }`}>
              {log}
            </div>
          ))}
          <div ref={consoleEndRef} />
        </div>

        <form onSubmit={handleSendCommand} className="p-3 border-t border-white/10 bg-black/40 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-sm pl-2">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Type a command..."
            className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none px-2"
          />
          <Button type="submit" size="sm" variant="secondary" className="px-3">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </GlassCard>
    </div>
  );
}