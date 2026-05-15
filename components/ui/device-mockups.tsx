import { DeviceMotion } from "@/components/ui/device-motion";

export function LaptopMockup({ title, meta }: { title: string; meta: string }) {
  return (
    <DeviceMotion>
    <div className="device-laptop premium-device">
      <div className="device-screen rounded-t-xl border border-white/10 bg-[#060a14] p-4">
        <div className="mb-4 flex gap-1.5">
          <span className="size-2 rounded-full bg-red-300/60" />
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/18" />
        </div>
        <p className="quiet-label font-semibold">{meta}</p>
        <h3 className="mt-3 text-2xl font-black uppercase text-white">{title}</h3>
        <div className="mt-6 grid gap-3">
          <span className="h-24 rounded-md bg-[radial-gradient(circle_at_70%_25%,rgba(239,61,61,0.32),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.025))]" />
          <span className="h-3 w-3/4 rounded-full bg-white/14" />
          <span className="h-3 w-1/2 rounded-full bg-white/8" />
          <span className="grid grid-cols-3 gap-2">
            <span className="h-10 rounded bg-white/[0.045]" />
            <span className="h-10 rounded bg-white/[0.065]" />
            <span className="h-10 rounded bg-red-500/10" />
          </span>
        </div>
      </div>
      <div className="mx-auto h-3 w-[86%] rounded-b-2xl bg-gradient-to-b from-white/18 to-white/5" />
    </div>
    </DeviceMotion>
  );
}

export function MobileMockup({ label }: { label: string }) {
  return (
    <DeviceMotion>
    <div className="device-mobile premium-device">
      <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-white/18" />
      <p className="quiet-label font-semibold">{label}</p>
      <div className="mt-5 grid gap-3">
        <span className="h-28 rounded-lg bg-[radial-gradient(circle_at_50%_20%,rgba(239,61,61,0.32),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.035))]" />
        <span className="h-10 rounded-md bg-white/8" />
        <span className="h-10 rounded-md bg-white/5" />
      </div>
    </div>
    </DeviceMotion>
  );
}
