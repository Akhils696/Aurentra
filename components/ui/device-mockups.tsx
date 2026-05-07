export function LaptopMockup({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="device-laptop">
      <div className="rounded-t-xl border border-white/10 bg-[#060a14] p-4">
        <div className="mb-4 flex gap-1.5">
          <span className="size-2 rounded-full bg-red-300/60" />
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/18" />
        </div>
        <p className="quiet-label font-semibold">{meta}</p>
        <h3 className="mt-3 text-2xl font-black uppercase text-white">{title}</h3>
        <div className="mt-6 grid gap-3">
          <span className="h-20 rounded-md bg-gradient-to-br from-white/12 to-red-500/10" />
          <span className="h-3 w-3/4 rounded-full bg-white/14" />
          <span className="h-3 w-1/2 rounded-full bg-white/8" />
        </div>
      </div>
      <div className="mx-auto h-3 w-[86%] rounded-b-2xl bg-gradient-to-b from-white/16 to-white/5" />
    </div>
  );
}

export function MobileMockup({ label }: { label: string }) {
  return (
    <div className="device-mobile">
      <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-white/18" />
      <p className="quiet-label font-semibold">{label}</p>
      <div className="mt-5 grid gap-3">
        <span className="h-24 rounded-lg bg-gradient-to-br from-red-500/16 to-white/8" />
        <span className="h-10 rounded-md bg-white/8" />
        <span className="h-10 rounded-md bg-white/5" />
      </div>
    </div>
  );
}
