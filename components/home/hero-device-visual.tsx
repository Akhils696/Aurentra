import { Activity, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { DeviceMotion } from "@/components/ui/device-motion";

export function HeroDeviceVisual() {
  return (
    <div className="poster-device-wrap relative perspective-[1200px]">
      <div className="poster-device-glow" />
      <DeviceMotion>
      <div className="device-frame relative mx-auto max-w-xl rotate-[-2deg] rounded-[18px] border border-white/8 bg-[#050812] p-2.5 shadow-[0_34px_90px_rgba(0,0,0,0.6)] lg:translate-z-6">
        <div className="rounded-[14px] border border-white/5 bg-gradient-to-b from-[#080b15] to-[#04060c] p-5 relative overflow-hidden">
          {/* Subtle grid backdrop for realism */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
          
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="quiet-label font-bold text-[10px] tracking-[0.2em] text-white/44">Aurentra Systems Room</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Growth Pipeline</h2>
            </div>
            <span className="rounded-md border border-red-500/22 bg-red-500/8 px-2.5 py-0.5 font-mono text-[10px] text-red-400">LIVE FEED</span>
          </div>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-[0.62fr_0.38fr] relative z-10">
            <div className="rounded-lg border border-white/5 bg-[#03050b]/80 p-4 relative overflow-hidden">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/44 uppercase tracking-wider font-mono">Enquiries Lift</p>
                  <p className="mt-1.5 text-5xl font-black tracking-tight text-white">+38%</p>
                </div>
                <ArrowUpRight aria-hidden className="size-5 text-red-400" />
              </div>
              <div className="mt-6 flex h-28 items-end gap-2 relative">
                {/* Micro target line */}
                <div className="absolute inset-x-0 bottom-[64%] h-px border-b border-dashed border-white/10 pointer-events-none" />
                {[42, 58, 46, 64, 78, 72, 88].map((height, index) => (
                  <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-red-500/18 to-white/35 hover:from-red-500/35 hover:to-white/55 transition-all duration-300 relative overflow-hidden" style={{ height: `${height}%` }}>
                    {height > 70 && <span className="absolute top-0 inset-x-0 h-0.5 bg-red-300" />}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-2.5 font-mono text-[10px]">
              {[
                { label: "Lead capture", desc: "Instantly mapped", ok: true },
                { label: "AI sorting", desc: "Clarity audit", ok: true },
                { label: "Human review", desc: "Ready to fire", ok: true }
              ].map((item) => (
                <div key={item.label} className="rounded-md border border-white/5 bg-[#03050b]/80 p-3 flex items-start gap-2.5">
                  <CheckCircle2 aria-hidden className="size-4 text-red-500/80 mt-0.5" />
                  <div>
                    <p className="font-bold text-white uppercase tracking-wider">{item.label}</p>
                    <p className="text-[9px] text-white/38 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </DeviceMotion>
      <div className="absolute -bottom-8 right-2 w-44 rounded-[18px] border border-white/12 bg-[#060a13] p-3 shadow-[0_18px_46px_rgba(0,0,0,0.42)]">
        <div className="rounded-xl bg-white/[0.04] p-4">
          <Activity aria-hidden className="size-5 text-red-100" />
          <p className="mt-5 text-3xl font-black text-white">11m</p>
          <p className="mt-1 text-xs text-white/48">avg. first reply</p>
        </div>
      </div>
    </div>
  );
}
