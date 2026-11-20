import { useState } from 'react';
import PlanCard from '../components/shared/PlanCard';
import { MOCK_PLANS } from '../data/mockData';
import Toggle from '../components/ui/Toggle';
import { motion } from 'framer-motion';

export default function Plans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="max-w-7xl mx-auto w-full py-12 px-4">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Our Plans
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Choose the perfect plan for your needs. Upgrade or downgrade at any time.
        </motion.p>
        
        <div className="flex items-center justify-center gap-4 bg-white/5 w-fit mx-auto px-4 py-2 rounded-full border border-white/10">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <Toggle checked={isYearly} onChange={setIsYearly} />
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full ml-1">Save 20%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_PLANS.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <PlanCard plan={plan} isYearly={isYearly} />
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h2>
        <p className="text-gray-400 mb-6">Contact our sales team for enterprise-level hosting requirements.</p>
        <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  );
}