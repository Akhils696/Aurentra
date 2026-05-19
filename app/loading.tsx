import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main className="min-h-svh py-24">
      <Container>
        <div className="grid min-h-[62vh] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="performance-skeleton h-4 w-40 rounded-full" />
            <div className="mt-8 space-y-4">
              <div className="performance-skeleton h-16 max-w-2xl rounded-lg" />
              <div className="performance-skeleton h-16 max-w-xl rounded-lg" />
              <div className="performance-skeleton h-5 max-w-lg rounded-full" />
            </div>
            <div className="mt-8 flex gap-3">
              <div className="performance-skeleton h-12 w-48 rounded-md" />
              <div className="performance-skeleton h-12 w-36 rounded-md" />
            </div>
          </div>
          <div className="performance-skeleton min-h-[360px] rounded-2xl" />
        </div>
      </Container>
    </main>
  );
}
