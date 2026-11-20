import { useState } from 'react';
import { Server, CheckCircle2, ArrowRight } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function SubmitServer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto w-full py-20 px-4 text-center">
        <GlassCard className="p-12">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Server Submitted!</h1>
          <p className="text-gray-400 mb-8">
            Thank you for submitting your server to HostNext Discover. Our team will review your listing and it will be live shortly.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="secondary">
            Submit Another Server
          </Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-3 flex items-center justify-center gap-3">
          <Server className="w-8 h-8 text-primary" />
          Submit Your Server
        </h1>
        <p className="text-gray-400">
          Share your world with the HostNext community. Fill out the details below to get listed.
        </p>
      </div>

      <GlassCard className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Server Name" placeholder="e.g. Survival Kingdom" required />
            <Input label="Server IP" placeholder="play.yourserver.com" required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Game</label>
              <select className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                <option value="minecraft" className="bg-[#0B0F19]">Minecraft</option>
                <option value="palworld" className="bg-[#0B0F19]">Palworld</option>
                <option value="ark" className="bg-[#0B0F19]">ARK: Survival</option>
                <option value="rust" className="bg-[#0B0F19]">Rust</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Region</label>
              <select className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                <option value="india" className="bg-[#0B0F19]">India</option>
                <option value="us" className="bg-[#0B0F19]">United States</option>
                <option value="eu" className="bg-[#0B0F19]">Europe</option>
              </select>
            </div>
          </div>

          <Input label="Tags (comma separated)" placeholder="Survival, PvP, SMP" required />
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Short Description</label>
            <textarea 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px] resize-y"
              placeholder="Tell players what makes your server unique..."
              required
            ></textarea>
          </div>

          <div className="pt-4 border-t border-white/10">
            <Button type="submit" size="lg" className="w-full justify-center">
              Submit for Review <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-center text-xs text-gray-500 mt-4">
              By submitting, you agree to our listing guidelines. Reviews typically take 24-48 hours.
            </p>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}