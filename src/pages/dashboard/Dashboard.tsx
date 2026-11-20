import { Link } from 'react-router-dom';
import { Server, Globe, CreditCard, LifeBuoy, ArrowRight, Activity } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import ServerCard from '../../components/shared/ServerCard';
import { MOCK_SERVERS } from '../../data/mockData';

const STATS = [
  { label: 'Active Servers', value: '3', icon: Server, trend: '+1', color: 'text-primary', bg: 'bg-primary/20' },
  { label: 'Active Domains', value: '1', icon: Globe, trend: '+0', color: 'text-secondary', bg: 'bg-secondary/20' },
  { label: 'Total Spent', value: '₹1,299', icon: CreditCard, trend: '+12%', color: 'text-accent', bg: 'bg-accent/20' },
  { label: 'Open Tickets', value: '2', icon: LifeBuoy, trend: '+0', color: 'text-orange-400', bg: 'bg-orange-400/20' },
];

const RECENT_ACTIVITY = [
  { id: 1, title: 'Server started', desc: 'Minecraft Server', time: '2 mins ago', icon: Activity, color: 'text-emerald-400' },
  { id: 2, title: 'Payment received', desc: 'Invoice #INV-2042', time: '10 mins ago', icon: CreditCard, color: 'text-primary' },
  { id: 3, title: 'Ticket replied', desc: 'TKT-1042: Server lag', time: '1 hour ago', icon: LifeBuoy, color: 'text-secondary' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Dashboard</h1>
          <p className="text-gray-400">Welcome back, AlexPlayer! 👋</p>
        </div>
        <Link to="/plans">
          <Button variant="primary">
            + New Server
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <GlassCard key={i} className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                  {stat.trend}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Your Servers */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Your Servers</h2>
            <Link to="/dashboard/servers" className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_SERVERS.map((server) => (
              <ServerCard key={server.id} server={server} isDashboard={true} />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Recent Activity</h2>
          <GlassCard className="p-5 h-[calc(100%-2rem)]">
            <div className="space-y-6">
              {RECENT_ACTIVITY.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex gap-4">
                    <div className={`mt-1 p-2 rounded-lg bg-white/5 h-fit ${activity.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{activity.title}</p>
                      <p className="text-xs text-gray-400 mb-1">{activity.desc}</p>
                      <p className="text-[10px] text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}