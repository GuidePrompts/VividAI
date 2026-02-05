
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, Wand2, Shield, Video, Layers } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-1/4 -left-10 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4">
            <Sparkles className="w-4 h-4" />
            <span>Introducing Veo 3.1 - Hyper-realistic Video Generation</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 leading-tight tracking-tight">
            Generate Stunning <br />
            <span className="gradient-text">AI Videos Instantly</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            The world's most powerful text-to-video platform. Cinematic quality, professional control, 
            and limitless creativity powered by state-of-the-art neural networks.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/generator"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-2"
            >
              Start Generating <Play className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold text-lg transition-all border border-slate-700"
            >
              View Features
            </Link>
          </div>

          <div className="mt-20 relative max-w-5xl mx-auto">
             <div className="rounded-3xl overflow-hidden glass-panel border border-slate-800 shadow-2xl neon-glow">
                <img 
                  src="https://picsum.photos/seed/aivideo/1200/600" 
                  alt="Platform Preview" 
                  className="w-full h-auto opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="p-6 bg-brand-600/30 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-12 h-12 text-white fill-current" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Powered by Innovation</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to create Hollywood-grade content from your desktop.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Wand2 className="w-8 h-8 text-brand-400" />}
              title="Magic Text-to-Video"
              description="Simply describe what you want to see. Our AI handles lighting, motion, and cinematography."
            />
            <FeatureCard 
              icon={<Layers className="w-8 h-8 text-purple-400" />}
              title="Advanced Styles"
              description="Choose from a library of professional styles including Cinematic, Anime, and Unreal Engine 5 renders."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-cyan-400" />}
              title="Safe & Private"
              description="Your data and generations are secure. Enterprise-grade encryption and safety filters built-in."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 glass-panel rounded-3xl border border-slate-800 hover:border-brand-500/50 transition-all group">
    <div className="mb-6 p-4 rounded-2xl bg-slate-900 w-fit group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export default Home;
