import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

/**
 * Reveal — fades and lifts its children into place the first time they
 * scroll into view. Falls back to visible immediately when the user has
 * asked for reduced motion.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  variant = "up",
  once = true,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", variant !== "up" && `reveal-${variant}`, visible && "is-visible", className)}
      {...props}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...props.style }}
    >
      {children}
    </Tag>
  );
}
