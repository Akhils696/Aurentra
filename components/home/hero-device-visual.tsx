import { Activity, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function HeroDeviceVisual() {
  return (
    <div className="poster-device-wrap relative">
      <div className="poster-device-glow" />
      <div className="device-frame relative mx-auto max-w-xl rotate-[-2deg] rounded-[18px] border border-white/12 bg-[#050914] p-3 shadow-[0_38px_120px_rgba(0,0,0,0.58)]">
        <div className="rounded-[12px] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)),#070b15] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="quiet-label font-semibold">Aurentra Control Room</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Growth Pipeline</h2>
            </div>
            <span className="rounded-md bg-red-500/12 px-3 py-1 text-xs font-semibold text-red-100">Live</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-[0.62fr_0.38fr]">
            <div className="rounded-lg bg-white/[0.035] p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-white/48">Qualified enquiries</p>
                  <p className="mt-2 text-5xl font-black text-white">38%</p>
                </div>
                <ArrowUpRight aria-hidden className="size-6 text-red-200" />
              </div>
              <div className="mt-6 flex h-28 items-end gap-2">
                {[42, 58, 46, 64, 78, 72, 88].map((height, index) => (
                  <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-red-500/35 to-white/42" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {["Lead capture", "AI sorting", "Human review"].map((label) => (
                <div key={label} className="rounded-md bg-black/22 p-3">
                  <CheckCircle2 aria-hidden className="size-4 text-white/45" />
                  <p className="mt-3 text-sm text-white/68">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 right-2 w-44 rounded-[18px] border border-white/12 bg-[#060a13] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
        <div className="rounded-xl bg-white/[0.04] p-4">
          <Activity aria-hidden className="size-5 text-red-100" />
          <p className="mt-5 text-3xl font-black text-white">11m</p>
          <p className="mt-1 text-xs text-white/48">avg. first reply</p>
        </div>
      </div>
    </div>
  );
}
