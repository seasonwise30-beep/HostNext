import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ticket, Plus, MessageSquare, Clock, CheckCircle2, Search, Filter } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Modal from '../../components/ui/Modal';
import { MOCK_TICKETS } from '../../data/mockData';

export default function SupportTickets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTickets] = useState(MOCK_TICKETS);
  const [newSubject, setNewSubject] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    const newTicket = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: newSubject,
      status: 'Open',
      priority: newPriority,
      date: 'Just now'
    };

    setTickets([newTicket, ...tickets]);
    setIsModalOpen(false);
    setNewSubject('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link to="/support" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Support Center
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Ticket className="w-6 h-6 text-secondary" /> My Support Tickets
          </h1>
        </div>
        <Button variant="primary" onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" /> New Ticket
        </Button>
      </div>

      <GlassCard className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input placeholder="Search tickets..." icon={<Search className="w-4 h-4 text-gray-500" />} />
        </div>
        <Button variant="secondary">
          <Filter className="w-4 h-4 mr-2" /> Filter
        </Button>
      </GlassCard>

      <div className="grid gap-4">
        {tickets.map((ticket) => (
          <GlassCard key={ticket.id} hover className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-lg mt-1 ${
                ticket.status === 'Open' ? 'bg-orange-400/10 text-orange-400' : 
                ticket.status === 'Resolved' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-gray-500/10 text-gray-400'
              }`}>
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-gray-500">{ticket.id}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    ticket.priority === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                    ticket.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {ticket.priority}
                  </span>
                </div>
                <h3 className="font-semibold text-white group-hover:text-primary transition-colors">{ticket.subject}</h3>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Clock className="w-3 h-3" /> {ticket.date}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:flex-col sm:items-end">
              <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                ticket.status === 'Open' ? 'bg-orange-400/10 text-orange-400' : 
                ticket.status === 'Resolved' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-gray-500/10 text-gray-400'
              }`}>
                {ticket.status === 'Resolved' && <CheckCircle2 className="w-3.5 h-3.5" />}
                {ticket.status}
              </span>
              <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View Thread →
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Ticket">
        <form onSubmit={handleCreateTicket} className="space-y-4">
          <Input 
            label="Subject" 
            placeholder="Brief description of the issue" 
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Priority</label>
            <select 
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
            >
              <option value="Low" className="bg-[#0B0F19]">Low</option>
              <option value="Medium" className="bg-[#0B0F19]">Medium</option>
              <option value="High" className="bg-[#0B0F19]">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
            <textarea 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px] resize-y"
              placeholder="Describe your issue in detail..."
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit" variant="primary">Submit Ticket</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}