import { CheckCircle2 } from "lucide-react";

export function ProductVisuals() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="glass rounded-lg p-6">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/38">Ops Dashboard</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Lead response snapshot</h3>
          </div>
          <span className="rounded-md bg-white/7 px-3 py-1 text-xs text-white/58">This week</span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            ["214", "new enquiries"],
            ["11m", "avg. first reply"],
            ["38%", "qualified"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-md bg-white/[0.035] p-4">
              <p className="text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-xs text-white/45">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-3">
          {["Website enquiry", "AI qualification", "CRM handoff", "Founder review"].map((step, index) => (
            <div key={step} className="flex items-center gap-3 rounded-md bg-black/18 p-3">
              <span className="h-2 w-16 rounded-full bg-white/10">
                <span className="block h-2 rounded-full bg-white/45" style={{ width: `${48 + index * 13}%` }} />
              </span>
              <p className="flex-1 text-sm text-white/68">{step}</p>
              <CheckCircle2 aria-hidden className="size-4 text-white/45" />
            </div>
          ))}
        </div>
      </div>
      <div className="depth-card rounded-lg p-7 lg:mt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-white/38">Workflow Map</p>
        <h3 className="mt-2 text-xl font-semibold text-white">A small system, clearly connected</h3>
        <div className="mt-6 grid gap-3">
          {["Capture", "Sort", "Notify", "Measure"].map((label, index) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.035] text-sm text-white/72">{index + 1}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/18 to-transparent" />
              <p className="w-20 text-sm text-white/58">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
