
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4">Get in <span className="text-brand-400">Touch</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Have questions or need custom solutions? Our team is here to help you scale your video generation workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-800">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-slate-400">We've received your request and will get back to you within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-brand-400 hover:underline font-bold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">How can we help?</label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>

        <div className="space-y-8">
           <ContactCard 
             icon={<Mail className="w-6 h-6 text-brand-400" />}
             title="Email Support"
             detail="support@vividai.example.com"
           />
           <ContactCard 
             icon={<Phone className="w-6 h-6 text-brand-400" />}
             title="Phone Support"
             detail="+1 (555) 000-VIVID"
           />
           <ContactCard 
             icon={<MapPin className="w-6 h-6 text-brand-400" />}
             title="Headquarters"
             detail="101 Innovation Dr, Silicon Valley, CA 94025"
           />
           
           <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/20">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-400" /> Community
              </h3>
              <p className="text-slate-400 mb-6">Join over 50,000 creators in our Discord server for tips, tricks, and feedback.</p>
              <button className="px-6 py-2 border border-brand-500 text-brand-400 rounded-lg hover:bg-brand-500 hover:text-white transition-all">
                Join Discord
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) => (
  <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800">
    <div className="p-4 bg-slate-800 rounded-2xl">{icon}</div>
    <div>
      <h4 className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">{title}</h4>
      <p className="text-lg font-bold text-white">{detail}</p>
    </div>
  </div>
);

export default Contact;
