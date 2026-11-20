import { Link } from 'react-router-dom';
import { BookOpen, LifeBuoy, MessageSquare, Ticket, Search, ArrowRight, Server, CreditCard, Shield } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const CATEGORIES = [
  { name: 'Getting Started', icon: Server, desc: 'Setup guides, basic configuration', count: 12 },
  { name: 'Billing & Payments', icon: CreditCard, desc: 'Invoices, refunds, payment methods', count: 8 },
  { name: 'Security & Access', icon: Shield, desc: 'Account security, passwords, 2FA', count: 6 },
  { name: 'Technical Issues', icon: LifeBuoy, desc: 'Troubleshooting, errors, performance', count: 24 },
];

const POPULAR_ARTICLES = [
  { title: 'How to install plugins on your Minecraft server', category: 'Getting Started' },
  { title: 'Understanding your server resource usage', category: 'Technical Issues' },
  { title: 'How to change your server version', category: 'Getting Started' },
  { title: 'Setting up automatic backups', category: 'Security & Access' },
];

export default function SupportCenter() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-4">
      {/* Hero */}
      <div className="text-center">
        <div className="inline-flex p-3 rounded-2xl bg-primary/20 mb-4 border border-primary/30">
          <LifeBuoy className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Support Center</h1>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">We're here to help you 24/7. Search our knowledge base or reach out to our support team.</p>
        
        <div className="max-w-xl mx-auto flex gap-2">
          <div className="flex-1 relative">
            <Input placeholder="Search help articles..." className="pl-10 py-3" />
            <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <Button size="lg">Search</Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard hover className="p-6 flex flex-col items-center text-center cursor-pointer">
          <BookOpen className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-semibold text-white mb-1">Knowledge Base</h3>
          <p className="text-xs text-gray-400">Browse articles and tutorials</p>
        </GlassCard>
        <Link to="/support/tickets">
          <GlassCard hover className="p-6 flex flex-col items-center text-center cursor-pointer h-full">
            <Ticket className="w-8 h-8 text-secondary mb-3" />
            <h3 className="font-semibold text-white mb-1">My Tickets</h3>
            <p className="text-xs text-gray-400">View and manage your support tickets</p>
          </GlassCard>
        </Link>
        <GlassCard hover className="p-6 flex flex-col items-center text-center cursor-pointer">
          <MessageSquare className="w-8 h-8 text-emerald-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Live Chat</h3>
          <p className="text-xs text-gray-400">Chat with a support agent</p>
        </GlassCard>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => (
            <GlassCard key={cat.name} hover className="p-5 flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{cat.name}</h3>
                  <p className="text-sm text-gray-400">{cat.desc}</p>
                </div>
              </div>
              <span className="text-xs font-medium bg-white/5 px-2.5 py-1 rounded-full text-gray-400 group-hover:text-white group-hover:bg-primary/20 transition-colors">
                {cat.count} articles
              </span>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Popular Articles</h2>
          <a href="#" className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <GlassCard className="divide-y divide-white/5">
          {POPULAR_ARTICLES.map((article, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                <span className="text-sm text-gray-200 group-hover:text-white">{article.title}</span>
              </div>
              <span className="text-xs text-gray-500 hidden sm:block">{article.category}</span>
            </div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}