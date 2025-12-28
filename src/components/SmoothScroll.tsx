"use client"; // This component must run in the browser

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // The "heaviness" of the scroll. Higher = smoother/slower.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom Apple-like curve
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}