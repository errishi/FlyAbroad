import React, { useState } from 'react';
import { 
  Globe, 
  TrendingUp, 
  Star, 
  ShieldCheck, 
  Zap, 
  Info, 
  Calendar, 
  ClipboardCheck, 
  ChevronDown 
} from 'lucide-react';

/**
 * Custom SVG Briefcase Icon
 */
const BriefcaseIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const GreenSupplyChainBlog = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { label: "CARBON REDUCTION", value: "28%", desc: "Avg. Emission Drop via Optimization", icon: TrendingUp },
    { label: "EV FLEET ADOPTION", value: "41%", desc: "Electric Logistics Vehicles in Use", icon: Globe },
    { label: "WASTE REDUCTION", value: "32%", desc: "Packaging & Material Efficiency", icon: ClipboardCheck },
    { label: "RENEWABLE ENERGY", value: "57%", desc: "Warehouses Using Solar/Wind", icon: Zap },
  ];

  const strategies = [
    { title: "Smart Route Planning", desc: "Reduce fuel burn & idle emissions", icon: MapIcon },
    { title: "Green Warehouse Ops", desc: "Solar, automation, energy efficiency", icon: Zap },
    { title: "Eco-Packaging Strategy", desc: "Recyclables, reusables, lightweighting", icon: BriefcaseIcon },
    { title: "ESG Compliance 2025", desc: "Carbon reporting & global standards", icon: ShieldCheck },
  ];

  const smartMoves = [
    { id: "01", title: "Optimize Routes with AI for Lower Emissions", desc: "Leveraging real-time data to minimize deadhead miles and reduce carbon output per delivery through advanced algorithmic clustering." },
    { id: "02", title: "Transition to Electric & Hybrid Fleets", desc: "Phasing out internal combustion engines in favor of zero-emission last-mile solutions and hydrogen-powered long-haul transport." },
    { id: "03", title: "Adopt Renewable-Powered Warehousing", desc: "Integrating on-site solar arrays and battery storage systems to achieve carbon-neutral facility footprints and peak-shaving benefits." },
    { id: "04", title: "Implement Circular Packaging Systems", desc: "Moving beyond single-use plastics to standardized, reusable crates and biodegradable fillers that minimize end-to-end lifecycle waste." },
    { id: "05", title: "Use Predictive Analytics for Carbon Forecasting", desc: "Utilizing deep learning models to simulate environmental impact before shipping, ensuring ESG targets are met at the planning stage." },
  ];

  const faqs = [
    { q: "How do smart routes reduce carbon emissions?", a: "By using AI to analyze traffic, weather, and load capacity, smart routing eliminates unnecessary mileage and idling time, directly decreasing fuel consumption and greenhouse gas emissions." },
    { q: "Are EV fleets cost-effective for logistics companies?", a: "While initial capital expenditure is higher, lower maintenance costs and significant fuel savings typically result in a positive ROI within 3-5 years, alongside improved ESG scores." },
    { q: "What is the ROI of switching to renewable-powered warehouses?", a: "Renewable energy provides long-term energy price stability. Most solar installations pay for themselves within 6-8 years through energy savings and government incentives." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100">
      {/* Top Visual Accent Background */}
      <div 
        className="absolute top-0 left-0 w-full h-150 pointer-events-none -z-10"
        style={{ background: 'linear-gradient(180deg, rgba(255, 122, 0, 0.05) 0%, transparent 100%)' }}
      />

      {/* Hero Section */}
      <header className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 text-orange-600 bg-orange-50/50 mb-8 animate-fade-in">
            <Zap size={16} fill="#FF7A00" stroke="#FF7A00" />
            <span className="text-sm font-bold tracking-tight uppercase">2025 Sustainable Logistics Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
            <span className="text-[#FF7A00]">Greener Supply Chains</span> <br />
            Start with Smart Moves
          </h1>

          <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed">
            In 2025, environmental stewardship is no longer a corporate choice—it's a competitive necessity. Discover how intelligent logistics and carbon-aware operations are redefining the global trade landscape.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-orange-500/20 transition-all duration-500 cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#FF7A00] transition-colors duration-300">
                  <stat.icon className="text-slate-400 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="text-3xl font-black mb-1 group-hover:text-[#FF7A00] transition-colors">{stat.value}</div>
                <div className="text-xs font-black text-[#FF7A00] tracking-widest uppercase mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400 leading-snug">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-12 space-y-8">
              <div className="relative p-10 bg-slate-100 rounded-[2.5rem] overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full -mr-10 -mt-10" />
                
                <h3 className="text-2xl font-black mb-2 relative z-10">Sustainability Guide</h3>
                <p className="text-slate-500 text-sm mb-8 relative z-10 font-medium">Tactical strategies for 2025</p>

                <div className="space-y-4 relative z-10">
                  {strategies.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-white/20">
                        <item.icon className="text-slate-500 group-hover:text-white" size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-sm group-hover:text-white">{item.title}</div>
                        <div className="text-[10px] text-slate-400 group-hover:text-white/80 uppercase font-black tracking-wider">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200">
                  <div className="bg-white p-5 rounded-2xl mb-6 flex gap-4 items-center">
                    <Calendar className="text-orange-500 shrink-0" size={24} />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Next Major Deadline</div>
                      <div className="text-sm font-bold text-slate-900 leading-tight">July 1, 2025 — Carbon Disclosure Rules</div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-between bg-slate-900 text-white p-5 rounded-2xl hover:bg-[#FF7A00] transition-all duration-300 font-bold group">
                    <span>Download Report</span>
                    <ChevronDown className="-rotate-90 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-8 space-y-16">
            {/* Executive Summary Divider */}
            <div className="flex items-center gap-6">
              <div className="h-px grow bg-slate-100" />
              <div className="flex items-center gap-2 text-slate-400 font-black tracking-widest uppercase text-[10px]">
                <Info size={14} />
                Executive Summary
              </div>
              <div className="h-px grow bg-slate-100" />
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-3xl font-black mb-8">The 2025 Green Logistics Landscape</h2>
              <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                <p>
                  Transitioning to <span className="px-1 bg-orange-100 text-[#FF7A00] font-bold">carbon-neutral operations</span> is no longer a peripheral goal. 
                  Leading logistics firms are rapidly integrating <span className="font-bold text-slate-900">EV fleets</span> and <span className="font-bold text-slate-900">smart routing algorithms</span> to cut overhead and satisfy stringent ESG requirements. 
                </p>
                <p>
                  By optimizing the circular supply chain, companies are discovering that sustainability and profitability are not mutually exclusive. Modern warehouses are now being designed as <span className="underline decoration-[#FF7A00] decoration-2 underline-offset-4">renewable energy hubs</span>, utilizing solar-plus-storage systems to power operations and feedback surplus energy into the local grid.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-shadow group">
                  <Star className="text-orange-500 mb-4" fill="#FF7A00" size={32} />
                  <h4 className="font-black text-xl mb-2">Sustainable Innovation</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Pioneering the use of biodegradable materials and zero-waste fulfillment centers.</p>
                </div>
                <div className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-shadow group">
                  <ShieldCheck className="text-orange-500 mb-4" size={32} />
                  <h4 className="font-black text-xl mb-2">Environmental Assurance</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Third-party audited carbon footprints and verifiable ESG reporting benchmarks.</p>
                </div>
              </div>
            </section>

            {/* Smart Moves Section */}
            <section className="space-y-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-black">Top 5 Smart Moves</h2>
                <div className="w-20 h-1.5 bg-[#FF7A00] rounded-full" />
              </div>

              <div className="space-y-12">
                {smartMoves.map((move, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="text-6xl font-black text-slate-100 group-hover:text-orange-500/20 transition-colors select-none">
                      {move.id}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-black mb-3 group-hover:text-[#FF7A00] transition-colors inline-block relative">
                        {move.title}
                        <div className="absolute bottom-0 left-0 w-full h-px bg-orange-500/30 group-hover:bg-[#FF7A00] group-hover:h-0.5 transition-all" />
                      </h3>
                      <p className="text-slate-500 leading-relaxed font-medium">
                        {move.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Forecast Banner */}
            <section className="relative p-12 bg-[#FF7A00] rounded-[2.5rem] text-white overflow-hidden shadow-2xl shadow-orange-200">
              <Globe className="absolute bottom-0 right-0 w-64 h-64 text-white/5 -mb-20 -mr-20" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-4">
                  <h3 className="text-4xl font-black tracking-tight leading-none">2025 Green Forecast</h3>
                  <p className="text-orange-50 font-medium">Industry projections for the next 18 months of eco-logistics.</p>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center min-w-40">
                    <div className="text-4xl font-black mb-1">45%</div>
                    <div className="text-[10px] font-black tracking-widest uppercase">Emission Potent.</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center min-w-40">
                    <div className="text-4xl font-black mb-1">18%</div>
                    <div className="text-[10px] font-black tracking-widest uppercase">Cost Savings</div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 bg-white border border-slate-100 rounded-3xl hover:border-[#FF7A00] transition-all cursor-pointer group shadow-sm"
                    onMouseEnter={() => setActiveFaq(idx)}
                    onMouseLeave={() => setActiveFaq(null)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-bold text-lg text-slate-800">{faq.q}</h4>
                      <ChevronDown 
                        className={`text-slate-300 group-hover:text-[#FF7A00] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                        size={20} 
                      />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${activeFaq === idx ? 'max-h-40 opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-slate-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Bottom Spacing */}
      <footer className="py-5" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
};

// Internal Map Icon Component
const MapIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

export default GreenSupplyChainBlog;