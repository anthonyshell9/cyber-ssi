"use client";

import { useEffect } from "react";

export default function ScrollAnimationInit() {
  useEffect(() => {
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    animatedElements.forEach((el) => {
      el.classList.add("animate-on-scroll");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
