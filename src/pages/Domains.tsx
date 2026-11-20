import { useState } from 'react';
import { Search, Globe, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { MOCK_DOMAINS } from '../data/mockData';

export default function Domains() {
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setSearched(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full py-12 px-4">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Domain <span className="text-gradient">Marketplace</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Find the perfect domain for your brand. Secure your online identity today.
        </p>

        <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Input
              placeholder="Search for a domain..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 py-4 text-lg"
            />
            <Search className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
          <Button type="submit" size="lg" className="px-8 py-4">
            Search
          </Button>
        </form>
      </div>

      {/* Results / TLDs */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" /> Popular Extensions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MOCK_DOMAINS.map((domain) => (
            <GlassCard key={domain.tld} hover className="p-6 text-center cursor-pointer group">
              <div className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {domain.tld}
              </div>
              <div className="text-sm text-gray-400 mb-1">Starting at</div>
              <div className="text-lg font-semibold text-white">₹{domain.price}<span className="text-xs text-gray-500">/yr</span></div>
              {domain.popular && (
                <div className="mt-3 text-xs bg-primary/20 text-primary py-1 px-2 rounded-full inline-block">Popular</div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="p-8 flex items-start gap-4">
          <div className="p-3 bg-emerald-500/20 rounded-xl"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Free WHOIS Privacy</h3>
            <p className="text-gray-400 text-sm">Protect your personal information with free WHOIS privacy on all eligible domains.</p>
          </div>
        </GlassCard>
        <GlassCard className="p-8 flex items-start gap-4">
          <div className="p-3 bg-secondary/20 rounded-xl"><Globe className="w-6 h-6 text-secondary" /></div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Easy DNS Management</h3>
            <p className="text-gray-400 text-sm">Manage your DNS records with our intuitive control panel. Fast propagation guaranteed.</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}