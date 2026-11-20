import { Check } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

interface Plan {
  id: string;
  name: string;
  ram: string;
  price: number;
  features: string[];
  popular: boolean;
}

export default function PlanCard({ plan, isYearly }: { plan: Plan; isYearly: boolean }) {
  const displayPrice = isYearly ? Math.floor(plan.price * 0.8) : plan.price;

  return (
    <GlassCard 
      hover 
      className={`p-6 flex flex-col relative ${
        plan.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(79,70,229,0.15)] bg-primary/[0.02]' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-white">₹{displayPrice}</span>
          <span className="text-sm text-gray-400">/mo</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Button 
        variant={plan.popular ? 'primary' : 'secondary'} 
        className="w-full justify-center"
      >
        Get Started
      </Button>
    </GlassCard>
  );
}