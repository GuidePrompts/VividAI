
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">Choose Your <span className="text-brand-400">Creative Power</span></h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Start for free, scale when you need. Flexible pricing for hobbyists and professionals alike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => (
          <div 
            key={plan.name}
            className={`relative p-8 rounded-3xl flex flex-col border transition-all hover:scale-[1.02] ${
              plan.recommended 
                ? 'bg-slate-900 border-brand-500/50 shadow-2xl shadow-brand-500/10' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              plan.recommended
                ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}>
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-3xl glass-panel border border-brand-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Zap className="text-brand-400" /> Need more custom credits?
          </h3>
          <p className="text-slate-400">Scale your production with high-volume enterprise API access.</p>
        </div>
        <button className="px-8 py-4 bg-brand-500 text-white rounded-xl font-bold whitespace-nowrap">
          Request Custom Quote
        </button>
      </div>
    </div>
  );
};

export default Pricing;
