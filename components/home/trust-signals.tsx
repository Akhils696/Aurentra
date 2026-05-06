const clientMarks = ["Northstar Labs", "Growthlane", "FinEdge", "ClinicDesk"];

const trustMetrics = [
  { value: "35+", label: "systems shipped" },
  { value: "18 hrs", label: "weekly ops time saved in one workflow" },
  { value: "8 weeks", label: "typical first release window" },
];

export function TrustSignals() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
      <div>
        <p className="quiet-label font-semibold">Trusted By</p>
        <p className="mt-4 max-w-sm text-white/62">Early teams, founders, and operators who need useful systems more than theater.</p>
      </div>
      <div className="grid gap-5">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {clientMarks.map((mark) => (
            <div key={mark} className="rounded-md bg-white/[0.025] px-4 py-4 text-sm font-medium text-white/52">
              {mark}
            </div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {trustMetrics.map((metric) => (
            <div key={metric.label} className="ui-card ui-card-hover p-5">
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/52">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
