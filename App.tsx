import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Book, 
  Info, 
  ChevronRight, 
  Trophy,
  Sparkles,
  ArrowLeft,
  History,
  Zap,
  Layers
} from 'lucide-react';
import PerfectoGame from './PerfectoGame';

export type AppScreen = 'menu' | 'rules' | 'game';

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-24 text-center space-y-20">
      <div className="space-y-6">
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex p-4 bg-indigo-500/10 rounded-3xl text-indigo-600 shadow-inner border border-indigo-500/20"
        >
           <History className="w-12 h-12" />
        </motion.div>
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.8]">
            Pretérito <br/><span className="text-indigo-600">Perfecto</span>
          </h1>
          <p className="text-[10px] sm:text-xl font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.4em] pt-4">
            Mastery Quest • Level A1
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.button 
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('rules')}
          className="group bg-white p-6 sm:p-12 rounded-[48px] shadow-2xl border-2 border-slate-50 text-left space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full translate-x-12 -translate-y-12 transition-transform group-hover:scale-150" />
          <div className="w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white shadow-xl rotate-3 group-hover:rotate-12 transition-all">
             <Book className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors">Գրամատիկա</h3>
            <p className="text-slate-400 font-bold italic leading-tight text-sm sm:text-base">Ինչպես կազմել Pretérito Perfecto ժամանակաձևը:</p>
          </div>
          <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-[10px] tracking-widest pt-4">
             Սովորել <ChevronRight className="w-4 h-4" />
          </div>
        </motion.button>

        <motion.button 
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('game')}
          className="group bg-slate-900 p-6 sm:p-12 rounded-[48px] shadow-2xl text-left space-y-6 relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12 transition-transform group-hover:scale-150" />
          <div className="w-16 h-16 bg-indigo-600/20 rounded-3xl flex items-center justify-center text-indigo-400 shadow-xl rotate-3 group-hover:rotate-12 transition-all">
             <Trophy className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter text-indigo-400">Սկսել Մրցույթը</h3>
            <p className="text-white/60 font-bold italic leading-tight text-sm sm:text-base">Անցիր բոլոր 15 փուլերը և դարձիր գիտակ: A1 մակարդակ:</p>
          </div>
          <div className="flex items-center gap-2 text-indigo-400 font-black uppercase text-xs tracking-widest pt-4">
             Մեկնարկ <ChevronRight className="w-4 h-4" />
          </div>
        </motion.button>
      </div>
    </div>
  );
}

function RulesView({ onBack }: { onBack: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-24 space-y-12 relative">
      <button 
        onClick={onBack} 
        className="group flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-all font-black uppercase text-xs tracking-widest bg-white py-3 px-6 rounded-full shadow-md hover:shadow-lg border border-slate-100"
      >
         <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> ԵՏ
      </button>
      
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-7xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
            Pretérito <span className="text-slate-300">Perfecto</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">Գրամատիկա և Խոնարհման Կանոններ</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
           <RuleCard 
            title="Կառուցվածքը"
            icon={<Zap className="w-6 h-6 text-indigo-600" />}
            items={[
              { es: "Haber (ներկա)", hy: "he, has, ha, hemos, habéis, han" },
              { es: "Participio (-AR)", hy: "Բայի արմատ + -ado (hablar -> hablado)" },
              { es: "Participio (-ER/-IR)", hy: "Բայի արմատ + -ido (comer -> comido)" }
            ]}
           />
           <RuleCard 
            title="Անկանոն բայեր"
            icon={<Layers className="w-6 h-6 text-purple-600" />}
            items={[
              { es: "Hacer / Decir", hy: "hecho / dicho" },
              { es: "Ver / Escribir", hy: "visto / escrito" },
              { es: "Abrir / Poner", hy: "abierto / puesto" },
              { es: "Volver / Romper", hy: "vuelto / roto" }
            ]}
           />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-indigo-600 p-8 sm:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Info size={120} />
           </div>
           <div className="relative z-10 space-y-4">
             <div className="flex items-center gap-3">
               <Sparkles className="w-6 h-6" />
               <h3 className="text-2xl font-black uppercase italic">Ե՞րբ օգտագործել</h3>
             </div>
             <p className="font-bold italic opacity-90 leading-relaxed text-lg sm:text-2xl max-w-2xl">
               Օգտագործվում է անցյալում կատարված այն գործողությունների համար, որոնք կապված են ներկայի հետ: 
               Հաճախ օգտագործվում է հետևյալ բառերի հետ՝ <span className="underline decoration-white/40">hoy</span>, 
               <span className="underline decoration-white/40">ya</span>, 
               <span className="underline decoration-white/40">esta semana</span>, 
               <span className="underline decoration-white/40">alguna vez</span>:
             </p>
           </div>
        </motion.div>
      </div>
    </div>
  );
}

function RuleCard({ title, items, icon }: { title: string, items: {es: string, hy: string}[], icon: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-50 space-y-6"
    >
      <div className="flex items-center gap-3 border-b pb-4">
        {icon}
        <h3 className="text-xl sm:text-2xl font-black uppercase italic text-slate-900">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map(it => (
          <div key={it.es} className="space-y-1">
             <span className="text-indigo-600 font-black text-sm italic">{it.es}:</span>
             <p className="text-slate-500 font-bold text-xs">{it.hy}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {screen === 'menu' && (
          <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <MainMenu setScreen={setScreen} />
          </motion.div>
        )}
        
        {screen === 'rules' && (
          <motion.div 
            key="rules" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10"
          >
            <RulesView onBack={() => setScreen('menu')} />
          </motion.div>
        )}

        {screen === 'game' && (
          <motion.div key="game" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <PerfectoGame onBack={() => setScreen('menu')} />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-2xl border border-indigo-50 shadow-2xl rounded-full px-8 py-4 flex items-center gap-10">
        <NavButton active={screen === 'menu'} icon={<Home />} onClick={() => setScreen('menu')} label="Մենյու" />
        <NavButton active={screen === 'rules'} icon={<Book />} onClick={() => setScreen('rules')} label="Կանոններ" />
        <NavButton active={screen === 'game'} icon={<Trophy />} onClick={() => setScreen('game')} label="Խաղ" />
      </nav>

      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-50">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-50 rounded-full blur-[120px]" />
      </div>

      <footer className="py-20 text-center pb-32">
        <div className="flex items-center justify-center gap-2 text-slate-300 font-black uppercase text-[10px] tracking-[0.5em]">
           <Info className="w-4 h-4" /> PRETERITO PERFECTO • MASTER CLASS
        </div>
      </footer>
    </div>
  );
}

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: any, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 group relative transition-all ${active ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
    >
      <div className={`p-2.5 rounded-2xl transition-all ${active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'text-slate-600'}`}>
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <span className={`text-[9px] font-black uppercase tracking-widest ${active ? 'text-indigo-600' : 'text-slate-400'}`}>
        {label}
      </span>
    </button>
  );
}



