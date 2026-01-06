"use client";

import { useEffect, useRef, ReactNode } from "react";

type AnimationType = "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay > 0) {
              element.style.animationDelay = `${delay}s`;
            }
            element.classList.add("is-visible", animation);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

// Hook version for more flexibility
export function useAnimateOnScroll(
  animation: AnimationType = "fadeInUp",
  threshold = 0.1
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", animation);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, threshold]);

  return ref;
}
