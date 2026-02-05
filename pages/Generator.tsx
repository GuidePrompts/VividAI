
import React, { useState, useEffect } from 'react';
// Added Sparkles to imports
import { Wand2, Download, AlertCircle, RefreshCw, CheckCircle2, Video, Key, Sparkles } from 'lucide-react';
import { VIDEO_STYLES } from '../constants';
import { VideoStyle, GenerationRequest } from '../types';
import { generateVideo, checkHasApiKey, openApiKeySelector } from '../services/geminiService';

const Generator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState<VideoStyle>('Cinematic');
  const [duration, setDuration] = useState(5);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [needsKey, setNeedsKey] = useState(false);

  useEffect(() => {
    const verifyKey = async () => {
      const hasKey = await checkHasApiKey();
      setNeedsKey(!hasKey);
    };
    verifyKey();
  }, []);

  const handleConnectKey = async () => {
    await openApiKeySelector();
    setNeedsKey(false);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a creative prompt first.");
      return;
    }

    setIsGenerating(true);
    setError(null);
    setVideoUrl(null);
    setProgress("Initializing neural network...");

    try {
      const result = await generateVideo({
        prompt,
        style,
        duration,
        aspectRatio
      }, (msg) => setProgress(msg));
      
      setVideoUrl(result);
    } catch (err: any) {
      if (err.message === "API_KEY_EXPIRED") {
        setNeedsKey(true);
        setError("Your AI Studio session has expired. Please re-select your key.");
      } else {
        setError(err.message || "Something went wrong during generation. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  if (needsKey) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <div className="glass-panel p-12 rounded-3xl border-2 border-brand-500/20">
          <Key className="w-16 h-16 text-brand-400 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Connect Your AI Studio Key</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            VividAI uses Gemini's advanced Veo models. To start generating high-quality video, 
            you need to connect a paid Google AI Studio API key.
          </p>
          <a 
            href="https://ai.google.dev/gemini-api/docs/billing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-400 hover:underline block mb-6"
          >
            How to set up billing for Gemini API?
          </a>
          <button
            onClick={handleConnectKey}
            className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold text-lg transition-all"
          >
            Connect API Key
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Input Panel */}
        <div className="w-full lg:w-1/3">
          <div className="glass-panel p-6 rounded-3xl sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Wand2 className="text-brand-400" /> Generator Studio
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Video Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A cinematic shot of a neon-lit futuristic city in the rain..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 h-32 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Style</label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value as VideoStyle)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    {VIDEO_STYLES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Aspect Ratio</label>
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value as '16:9' | '9:16')}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    <option value="16:9">Widescreen (16:9)</option>
                    <option value="9:16">Portrait (9:16)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Duration: {duration}s</label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="5"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>5s</span>
                  <span>10s</span>
                  <span>15s</span>
                  <span>20s</span>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isGenerating 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                    : 'bg-brand-600 hover:bg-brand-500 text-white shadow-xl shadow-brand-500/20'
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" /> Generating...
                  </>
                ) : (
                  <>
                    {/* Fixed missing Sparkles icon */}
                    <Sparkles className="w-5 h-5" /> Generate Video
                  </>
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-full lg:w-2/3">
          <div className="glass-panel rounded-3xl min-h-[500px] flex flex-col relative overflow-hidden">
            {!isGenerating && !videoUrl && (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                <div className="p-6 bg-slate-900/50 rounded-full mb-6 text-slate-500 border border-slate-800">
                  <Video className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Your masterpiece starts here</h3>
                <p className="text-slate-400 max-w-md">
                  Enter a prompt on the left and hit generate to see the magic of VividAI.
                </p>
              </div>
            )}

            {isGenerating && (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                <div className="relative mb-12">
                   <div className="w-32 h-32 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      {/* Fixed missing Sparkles icon */}
                      <Sparkles className="w-10 h-10 text-brand-400 animate-pulse" />
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Generating Motion</h3>
                <p className="text-brand-400 font-mono tracking-widest uppercase text-sm">{progress}</p>
                <div className="mt-8 max-w-md w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-500 animate-progress origin-left"></div>
                </div>
              </div>
            )}

            {videoUrl && (
              <div className="flex-1 p-6 animate-in fade-in duration-700">
                <div className={`mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black ${aspectRatio === '9:16' ? 'max-w-[400px]' : 'w-full'}`}>
                   <video 
                     src={videoUrl} 
                     controls 
                     autoPlay 
                     loop 
                     className="w-full h-auto"
                   />
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-green-400 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Generation Ready</span>
                  </div>
                  
                  <a
                    href={videoUrl}
                    download="vividai-generation.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-black hover:bg-slate-200 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg"
                  >
                    <Download className="w-5 h-5" /> Download MP4
                  </a>
                </div>

                <div className="mt-8 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                   <h4 className="text-slate-500 text-sm font-semibold uppercase mb-2">Original Prompt</h4>
                   <p className="text-slate-300 italic">"{prompt}"</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
