import { cn } from "../lib/utils";

/**
 * AtomLogo — inline SVG recreation of the club emblem.
 * Three orbital ellipses (rotated 0°/60°/120°) around a nucleus, with
 * three electron dots. Uses `currentColor` so it inherits from the parent.
 */
export default function AtomLogo({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      {/* orbital ellipses — 3 rotated axes */}
      <ellipse cx="32" cy="32" rx="22" ry="9" transform="rotate(0 32 32)" />
      <ellipse cx="32" cy="32" rx="22" ry="9" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="22" ry="9" transform="rotate(120 32 32)" />
      {/* nucleus */}
      <circle cx="32" cy="32" r="2.6" fill="currentColor" stroke="none" />
      {/* electrons */}
      <circle cx="52" cy="24" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="18" cy="45" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="42" cy="49" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
