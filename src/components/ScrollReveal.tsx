import { ReactNode, useEffect, useRef, useState } from "react";

type Variant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom";

const hiddenClasses: Record<Variant, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 -translate-x-10",
  "slide-right": "opacity-0 translate-x-10",
  zoom: "opacity-0 scale-95",
};

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation style once the element scrolls into view */
  variant?: Variant;
  /** Stagger delay in milliseconds */
  delay?: number;
  className?: string;
}

/**
 * Reveals its children with a smooth animation the first time they enter
 * the viewport. Respects the user's reduced-motion preference.
 */
const ScrollReveal = ({ children, variant = "fade-up", delay = 0, className = "" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hiddenClasses[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
