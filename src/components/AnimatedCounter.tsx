import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /** Final value to count up to */
  end: number;
  /** Text after the number, e.g. "+", "%", "K+" */
  suffix?: string;
  /** Text before the number, e.g. "₹" */
  prefix?: string;
  /** Decimal places to show */
  decimals?: number;
  /** Count-up duration in milliseconds */
  duration?: number;
  className?: string;
}

/**
 * Counts up from 0 to `end` the first time it scrolls into view.
 * Respects the user's reduced-motion preference (jumps straight to the end).
 */
const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1600,
  className = "",
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // ease-out cubic for a satisfying settle
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
