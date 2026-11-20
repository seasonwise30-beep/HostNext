import { useState } from 'react';
import { Users, Search, Filter, MoreVertical, Mail, ShieldCheck, Ban, CreditCard } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const MOCK_CUSTOMERS = [
  { id: 'usr_001', name: 'Rahul Sharma', email: 'rahul@example.com', joined: '2023-08-15', servers: 2, spent: '₹12,450', status: 'Active' },
  { id: 'usr_002', name: 'Priya Patel', email: 'priya@example.com', joined: '2023-09-02', servers: 1, spent: '₹4,200', status: 'Active' },
  { id: 'usr_003', name: 'Amit Kumar', email: 'amit@example.com', joined: '2023-06-20', servers: 3, spent: '₹28,900', status: 'Active' },
  { id: 'usr_004', name: 'Sneha Reddy', email: 'sneha@example.com', joined: '2024-01-10', servers: 0, spent: '₹0', status: 'Suspended' },
  { id: 'usr_005', name: 'Vikram Singh', email: 'vikram@example.com', joined: '2023-11-05', servers: 1, spent: '₹5,600', status: 'Active' },
];

export default function AdminCustomers() {
  const [search, setSearch] = useState('');

  const filteredCustomers = MOCK_CUSTOMERS.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" /> Customer Management
          </h1>
          <p className="text-gray-400 text-sm">View and manage all registered users on the platform.</p>
        </div>
        <Button variant="primary">
          <Mail className="w-4 h-4 mr-2" /> Send Announcement
        </Button>
      </div>

      <GlassCard className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by name or email..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search className="w-4 h-4 text-gray-500" />}
          />
        </div>
        <Button variant="secondary">
          <Filter className="w-4 h-4 mr-2" /> Filters
        </Button>
      </GlassCard>

      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-white/5">
                <th className="p-4">Customer</th>
                <th className="p-4 hidden md:table-cell">Joined</th>
                <th className="p-4 hidden lg:table-cell">Servers</th>
                <th className="p-4 hidden sm:table-cell">Total Spent</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-xs font-bold text-white">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-white">{customer.name}</div>
                        <div className="text-xs text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell text-sm text-gray-400">{customer.joined}</td>
                  <td className="p-4 hidden lg:table-cell text-sm text-gray-300">{customer.servers}</td>
                  <td className="p-4 hidden sm:table-cell text-sm font-medium text-white">{customer.spent}</td>
                  <td className="p-4">
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${
                      customer.status === 'Active' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {customer.status === 'Active' ? <ShieldCheck className="w-3.5 h-3.5" /> : <Ban className="w-3.5 h-3.5" />}
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Billing">
                        <CreditCard className="w-4 h-4" />
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