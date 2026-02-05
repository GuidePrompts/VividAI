
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play, Zap } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-brand-500 rounded-lg group-hover:bg-brand-400 transition-colors">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">Vivid<span className="text-brand-400">AI</span></span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-brand-400 font-bold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/generator"
                className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-brand-500/20"
              >
                <Zap className="w-4 h-4" /> Start Generating
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path ? 'bg-slate-800 text-brand-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/generator"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 bg-brand-600 text-white px-6 py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" /> Start Generating
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
