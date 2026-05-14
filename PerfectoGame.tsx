import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Calendar,
  Layers,
  Sparkles,
  Award,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { PERFECTO_DATA, PerfectoChallenge } from './perfectoData';

interface PerfectoGameProps {
  onBack: () => void;
}

export default function PerfectoGame({ onBack }: PerfectoGameProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentChallenge = PERFECTO_DATA[currentIdx];

  const handleStart = () => setGameState('playing');

  const handleChoice = (text: string, isCorrect: boolean) => {
    if (isSubmitted) return;
    setSelectedOption(text);
    setIsSubmitted(true);
    if (isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < PERFECTO_DATA.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setIsSubmitted(false);
      setSelectedOption(null);
    } else {
      setGameState('result');
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setGameState('intro');
    setIsSubmitted(false);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500/30 overflow-x-hidden font-sans">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <AnimatePresence mode="wait">
        {gameState === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center space-y-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative p-10 bg-slate-900/50 border border-slate-800 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
                 <History className="w-24 h-24 text-indigo-400 mb-6 mx-auto" />
                 <h1 className="text-5xl sm:text-8xl font-black tracking-tighter uppercase italic bg-gradient-to-br from-white via-indigo-200 to-slate-500 bg-clip-text text-transparent leading-[0.9]">
                  Pretérito<br/>
                  <span className="text-indigo-500">Perfecto</span>
                </h1>
                <p className="mt-6 text-indigo-400/60 font-bold tracking-[0.6em] uppercase text-[10px] sm:text-xs">
                  A1 Spanish Time Machine
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
               {[
                 { icon: <Zap className="text-amber-400" />, title: "Haber", desc: "he, has, ha, hemos, habéis, han" },
                 { icon: <Layers className="text-emerald-400" />, title: "Participio", desc: "-ado, -ido & irregulars" },
                 { icon: <Calendar className="text-indigo-400" />, title: "Recent Past", desc: "Hoy, ya todavía, esta..." }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] text-left space-y-3 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-black uppercase italic text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>

            <button 
              onClick={handleStart}
              className="group relative px-16 py-8 bg-indigo-600 text-white font-black uppercase tracking-[0.2em] rounded-full shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95 transition-all"
            >
              <span className="relative z-10">Start Expedition</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div 
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-16 flex flex-col min-h-screen"
          >
            {/* Header / HUD */}
            <div className="flex justify-between items-end mb-16">
               <div className="space-y-4">
                  <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors uppercase text-[10px] font-black tracking-widest">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl border border-indigo-500/30 flex items-center justify-center">
                       <Sparkles className="text-indigo-400 w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-black italic uppercase tracking-tighter">Level {currentIdx + 1}</h2>
                      <div className="flex gap-1 mt-1">
                        {PERFECTO_DATA.map((_, idx) => (
                           <div key={idx} className={`h-1.5 rounded-full transition-all ${idx <= currentIdx ? (idx === currentIdx ? 'w-8 bg-indigo-500' : 'w-4 bg-indigo-500/40') : 'w-2 bg-slate-800'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
               </div>
               <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl min-w-[120px] text-center shadow-xl">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">SCORE</p>
                  <p className="text-4xl font-black italic text-indigo-400">{score}</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 flex-1">
               {/* Question Section */}
               <div className="lg:col-span-3 space-y-12">
                  <div className="space-y-8">
                     <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        {currentChallenge.marker ? `Marker: ${currentChallenge.marker}` : 'Conjugation Focus'}
                     </div>
                     <h3 className="text-4xl sm:text-6xl font-black italic tracking-tighter leading-[1.1] text-white">
                        {currentChallenge.sentence.split('___').map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="inline-block min-w-[120px] border-b-4 border-indigo-500 mx-2 text-indigo-400 h-[1.1em] align-bottom">
                                {selectedOption || ''}
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                     </h3>
                     <p className="text-xl sm:text-2xl text-slate-400 font-bold italic border-l-4 border-slate-800 pl-6">
                        {currentChallenge.translation}
                     </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                     {currentChallenge.options.map((opt) => (
                       <motion.button
                         key={opt.text}
                         disabled={isSubmitted}
                         whileHover={!isSubmitted ? { x: 10, backgroundColor: 'rgba(255,255,255,0.05)' } : {}}
                         onClick={() => handleChoice(opt.text, opt.correct)}
                         className={`relative group p-10 rounded-[2.5rem] border-2 text-left transition-all overflow-hidden ${
                           isSubmitted
                             ? opt.correct
                               ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.1)]'
                               : opt.text === selectedOption
                               ? 'bg-rose-500/10 border-rose-500/50 text-rose-400 shadow-[0_0_50px_rgba(244,63,94,0.1)]'
                               : 'bg-white/5 border-white/5 text-slate-600'
                             : 'bg-slate-900 border-slate-800 hover:border-indigo-500/50'
                         }`}
                       >
                          <div className="flex justify-between items-center relative z-10 text-2xl sm:text-3xl font-black italic uppercase tracking-tighter">
                            {opt.text}
                            {isSubmitted && opt.correct && <CheckCircle2 className="text-emerald-400 w-8 h-8" />}
                            {isSubmitted && !opt.correct && opt.text === selectedOption && <XCircle className="text-rose-400 w-8 h-8" />}
                          </div>
                          {!isSubmitted && (
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform" />
                          )}
                       </motion.button>
                     ))}
                  </div>
               </div>

               {/* Feedback / Sidebar */}
               <div className="lg:col-span-2 space-y-6">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div 
                        key="feedback"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] space-y-8 backdrop-blur-xl shadow-2xl h-full flex flex-col"
                      >
                         <div className="flex-1 space-y-6">
                            <div className={`inline-flex p-4 rounded-3xl ${selectedOption === currentChallenge.options.find(o => o.correct)?.text ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                               {selectedOption === currentChallenge.options.find(o => o.correct)?.text ? <Zap size={32} /> : <Layers size={32} />}
                            </div>
                            <div className="space-y-4">
                               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500">Explanation</h4>
                               <p className="text-xl sm:text-2xl font-bold italic leading-tight text-slate-200">
                                  {currentChallenge.explanation}
                               </p>
                            </div>
                         </div>
                         <button 
                           onClick={handleNext}
                           className="w-full py-8 bg-indigo-600 text-white rounded-full font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4"
                         >
                            Next Step <ChevronRight />
                         </button>
                      </motion.div>
                    ) : (
                      <motion.div 
                         key="guide"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="bg-indigo-500/5 border border-indigo-500/10 p-10 rounded-[3rem] h-full flex flex-col items-center justify-center text-center space-y-6"
                      >
                         <History className="w-16 h-16 text-indigo-500/20" />
                         <div className="space-y-2">
                           <p className="text-slate-500 text-sm font-bold italic uppercase tracking-widest">Awaiting Your Input</p>
                           <p className="text-xs text-slate-700 font-medium">Select the correct Pretérito Perfecto conjugation to continue.</p>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </motion.div>
        )}

        {gameState === 'result' && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 min-h-screen flex items-center justify-center p-6"
          >
            <div className="max-w-2xl w-full bg-slate-900/90 rounded-[4rem] p-12 sm:p-24 border border-indigo-500/20 space-y-12 shadow-2xl relative overflow-hidden backdrop-blur-3xl text-center">
               <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
               <Award className="w-32 h-32 mx-auto text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-bounce" />
               
               <div className="space-y-4">
                  <h2 className="text-4xl sm:text-7xl font-black uppercase italic tracking-tighter">Expedition Complete</h2>
                  <p className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-xs">You have mastered the recent past.</p>
               </div>
               
               <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5">
                  <p className="text-indigo-500 font-black text-8xl sm:text-[10rem] leading-none">{score}/{PERFECTO_DATA.length}</p>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.6em] mt-6">SUCCESS RATE</p>
               </div>

               <div className="flex flex-col gap-4">
                  <button 
                    onClick={resetGame}
                    className="bg-indigo-600 text-white py-8 rounded-full font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3"
                  >
                     <RotateCcw /> Retry Quest
                  </button>
                  <button 
                    onClick={onBack}
                    className="text-slate-500 font-black uppercase text-[10px] tracking-widest pt-6 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    Return to Menu
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
