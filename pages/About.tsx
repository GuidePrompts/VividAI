
import React from 'react';
import { Cpu, Globe, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mb-24">
        <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 leading-tight">
          Democratizing <br />
          <span className="text-brand-400">Digital Cinema</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Founded in 2024, VividAI was born from a simple vision: to make cinematic storytelling 
          accessible to everyone. We believe that creative expression shouldn't be limited by 
          budget, equipment, or technical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="rounded-3xl overflow-hidden glass-panel border border-slate-800 p-2">
           <img 
             src="https://picsum.photos/seed/about-vision/800/600" 
             alt="Our Vision" 
             className="w-full h-auto rounded-2xl opacity-90"
           />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-slate-400 text-lg mb-6">
            We are building the definitive engine for creative synthesis. Our platform leverages the latest 
            breakthroughs in Large Visual Models to translate imagination into motion. 
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <Cpu className="text-brand-400 w-6 h-6" />
              <span className="font-semibold text-white">Next-gen Inference Engines</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <Globe className="text-purple-400 w-6 h-6" />
              <span className="font-semibold text-white">Global Creative Community</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <Rocket className="text-cyan-400 w-6 h-6" />
              <span className="font-semibold text-white">Rapid Prototyping Tools</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 rounded-3xl p-12 border border-slate-800 text-center">
         <h2 className="text-3xl font-bold mb-12">The Future is Generative</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="10M+" label="Videos Generated" />
            <StatCard value="500K+" label="Active Creators" />
            <StatCard value="99.9%" label="Uptime Reliability" />
            <StatCard value="1.2s" label="Avg. Response Time" />
         </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string, label: string }) => (
  <div>
    <div className="text-4xl font-extrabold text-brand-400 mb-2">{value}</div>
    <div className="text-slate-500 font-medium">{label}</div>
  </div>
);

export default About;
