import { Users, Server, CreditCard, Ticket, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Chart from '../../components/shared/Chart';

const ADMIN_STATS = [
  { label: 'Total Customers', value: '24,850', icon: Users, trend: '+12%', isPositive: true, color: 'text-primary', bg: 'bg-primary/20' },
  { label: 'Total Servers', value: '48,320', icon: Server, trend: '+8%', isPositive: true, color: 'text-secondary', bg: 'bg-secondary/20' },
  { label: 'Monthly Revenue', value: '₹24,80,750', icon: CreditCard, trend: '+15%', isPositive: true, color: 'text-emerald-400', bg: 'bg-emerald-400/20' },
  { label: 'Open Tickets', value: '342', icon: Ticket, trend: '-5%', isPositive: false, color: 'text-orange-400', bg: 'bg-orange-400/20' },
];

const RECENT_SIGNUPS = [
  { name: 'Rahul Sharma', email: 'rahul@example.com', plan: 'Pro', time: '5 mins ago' },
  { name: 'Priya Patel', email: 'priya@example.com', plan: 'Gamer', time: '12 mins ago' },
  { name: 'Amit Kumar', email: 'amit@example.com', plan: 'Ultimate', time: '1 hour ago' },
  { name: 'Sneha Reddy', email: 'sneha@example.com', plan: 'Starter', time: '2 hours ago' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm">Platform overview and system metrics.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
          <Activity className="w-3.5 h-3.5" /> System Status: Operational
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ADMIN_STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <GlassCard key={i} className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md ${
                  stat.isPositive ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'
                }`}>
                  {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
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
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white">Revenue Overview</h2>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-gray-300 focus:outline-none">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>This Year</option>
              </select>
            </div>
            <Chart />
          </GlassCard>
        </div>

        {/* Recent Signups */}
        <div className="lg:col-span-1">
          <GlassCard className="p-6 h-full">
            <h2 className="text-lg font-bold text-white mb-4">Recent Signups</h2>
            <div className="space-y-4">
              {RECENT_SIGNUPS.map((user, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-xs font-bold text-white">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">{user.plan}</div>
                    <div className="text-[10px] text-gray-500 mt-1">{user.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}