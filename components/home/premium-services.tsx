import { Check } from "lucide-react";
import { customServiceIcons } from "@/components/ui/brand-icons";
import { services } from "@/lib/site-data";

export function PremiumServices() {
  return (
    <div className="grid gap-6">
      {services.map((service, index) => {
        const Icon = customServiceIcons[service.slug as keyof typeof customServiceIcons] ?? service.icon;
        return (
          <article key={service.slug} className={`premium-feature-panel metal-edge grid gap-6 p-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <div className="flex size-12 items-center justify-center rounded-md bg-white/8 text-white">
                <Icon aria-hidden className="size-6" />
              </div>
              <p className="quiet-label mt-6 font-semibold">0{index + 1} / capability</p>
              <h3 className="mt-3 text-3xl font-black uppercase text-white">{service.title}</h3>
              <p className="body-copy mt-4 max-w-xl">{service.summary}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-sm text-white/68">
                    <Check aria-hidden className="size-4 text-white/45" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-mockup rounded-xl border border-white/10 bg-black/24 p-4">
              <div className="rounded-lg bg-[#050914] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/38">Preview</span>
                  <span className="h-2 w-16 rounded-full bg-white/12" />
                </div>
                <div className="grid gap-3">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="grid grid-cols-[0.28fr_1fr_0.22fr] items-center gap-3 rounded-md bg-white/[0.04] p-3">
                      <span className="h-8 rounded bg-white/8" />
                      <span className="space-y-2">
                        <span className="block h-2 w-4/5 rounded-full bg-white/18" />
                        <span className="block h-2 w-1/2 rounded-full bg-white/10" />
                      </span>
                      <span className="h-7 rounded bg-red-500/12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
