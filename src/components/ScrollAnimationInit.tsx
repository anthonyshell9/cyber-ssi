"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      // Select all elements with data-animation attribute
      const animatedElements = document.querySelectorAll("[data-animation]");

      if (animatedElements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              const animation = element.dataset.animation || "fadeInUp";
              const delay = element.dataset.delay || "0";

              if (parseFloat(delay) > 0) {
                element.style.animationDelay = `${delay}s`;
              }

              element.classList.add("is-visible", animation);
              observer.unobserve(element);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px 0px 0px",
        }
      );

      animatedElements.forEach((el) => {
        // Reset any previous animation state
        el.classList.remove("is-visible", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeIn", "scaleIn");
        el.classList.add("animate-on-scroll");
        observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Re-run on page navigation

  return null;
}
