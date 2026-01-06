"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const setProgress = useCallback((value: number) => {
    if (barRef.current) {
      barRef.current.style.width = `${value}%`;
      barRef.current.style.opacity = value === 100 ? "0" : "1";
    }
    if (containerRef.current) {
      containerRef.current.style.display = value === 0 ? "none" : "block";
    }
  }, []);

  useEffect(() => {
    // Reset on route change complete
    setProgress(100);
    const timer = setTimeout(() => setProgress(0), 200);
    return () => clearTimeout(timer);
  }, [pathname, searchParams, setProgress]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href);
        if (url.pathname !== pathname) {
          setProgress(30);
          setTimeout(() => setProgress(60), 100);
          setTimeout(() => setProgress(80), 200);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, setProgress]);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 right-0 z-[100] h-1" style={{ display: "none" }}>
      <div
        ref={barRef}
        className="h-full bg-[#7d53de] transition-all duration-200 ease-out"
        style={{ width: "0%", opacity: 0 }}
      />
    </div>
  );
}
