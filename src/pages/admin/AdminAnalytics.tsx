import { useState } from 'react';
import { BarChart3, TrendingUp, Users, Server, CreditCard, Download, Calendar } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Chart from '../../components/shared/Chart';

const STATS = [
  { label: 'Total Revenue (YTD)', value: '₹1,84,50,200', icon: CreditCard, color: 'text-emerald-400', bg: 'bg-emerald-400/20' },
  { label: 'New Customers (MTD)', value: '1,248', icon: Users, color: 'text-primary', bg: 'bg-primary/20' },
  { label: 'Active Servers', value: '48,320', icon: Server, color: 'text-secondary', bg: 'bg-secondary/20' },
  { label: 'Avg. Revenue/User', value: '₹742', icon: TrendingUp, color: 'text-accent', bg: 'bg-accent/20' },
];

const NODE_STATS = [
  { name: 'IN-MUM-01', servers: 1240, load: 78, status: 'Online' },
  { name: 'IN-MUM-02', servers: 980, load: 45, status: 'Online' },
  { name: 'IN-BLR-01', servers: 1560, load: 92, status: 'Warning' },
  { name: 'US-NYC-01', servers: 2100, load: 65, status: 'Online' },
  { name: 'EU-FRA-01', servers: 1850, load: 55, status: 'Online' },
];

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" /> Platform Analytics
          </h1>
          <p className="text-gray-400 text-sm">Deep dive into platform performance and infrastructure health.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="secondary" className="flex-1 sm:flex-none">
            <Calendar className="w-4 h-4 mr-2" /> Last 30 Days
          </Button>
          <Button variant="primary" className="flex-1 sm:flex-none">
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <GlassCard key={i} className="p-5">
            <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} w-fit mb-4`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6 h-full">
            <h2 className="text-lg font-bold text-white mb-6">Revenue Growth</h2>
            <Chart />
          </GlassCard>
        </div>

        {/* Node Status */}
        <div>
          <GlassCard className="p-6 h-full">
            <h2 className="text-lg font-bold text-white mb-4">Node Health</h2>
            <div className="space-y-4">
              {NODE_STATS.map((node) => (
                <div key={node.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono text-gray-300">{node.name}</span>
                    <span className={`text-xs font-medium ${node.load > 90 ? 'text-red-400' : 'text-gray-400'}`}>
                      {node.load}% Load
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${node.load > 90 ? 'bg-red-500' : 'bg-emerald-500'}`} 
                      style={{ width: `${node.load}%` }}
                    />
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