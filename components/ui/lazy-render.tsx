"use client";

import { useEffect, useRef, useState } from "react";

export function LazyRender({
  children,
  className,
  minHeight = 280,
  rootMargin = "520px",
}: {
  children: React.ReactNode;
  className?: string;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={className} style={visible ? undefined : { minHeight }}>
      {visible ? children : <div aria-hidden className="performance-skeleton h-full min-h-[inherit] rounded-lg" />}
    </div>
  );
}
