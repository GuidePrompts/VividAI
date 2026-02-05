
import React from 'react';
import { Twitter, Youtube, Instagram, Github, Play } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-brand-500 rounded-lg">
                <Play className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-xl font-display font-bold">Vivid<span className="text-brand-400">AI</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering creators worldwide with cutting-edge generative video intelligence. 
              Turn your words into high-definition cinematic experiences in seconds.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Twitter /></a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Youtube /></a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Instagram /></a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors"><Github /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Video Generator</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Style Gallery</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">API Keys</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} VividAI Technologies Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
