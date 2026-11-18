import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Slow ambient connection lines for the hero — decorative, very subtle. */
export function HeroNetwork() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-full lg:w-2/3 opacity-70"
      viewBox="0 0 900 700"
      fill="none"
      aria-hidden="true"
    >
      <motion.g
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeDasharray="8 12"
        animate={{ strokeDashoffset: [0, -400] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <line x1="120" y1="120" x2="380" y2="260" />
        <line x1="380" y1="260" x2="300" y2="520" />
        <line x1="380" y1="260" x2="640" y2="150" />
        <line x1="640" y1="150" x2="820" y2="380" />
        <line x1="380" y1="260" x2="820" y2="380" />
        <line x1="300" y1="520" x2="820" y2="380" />
        <line x1="120" y1="120" x2="640" y2="150" />
      </motion.g>
      <g fill="hsl(var(--primary))">
        {[
          { cx: 120, cy: 120, r: 7, d: 0 },
          { cx: 380, cy: 260, r: 10, d: 0.8 },
          { cx: 300, cy: 520, r: 6, d: 1.6 },
          { cx: 640, cy: 150, r: 7, d: 2.4 },
          { cx: 820, cy: 380, r: 9, d: 3.2 },
        ].map((n) => (
          <motion.circle
            key={n.cx + '-' + n.cy}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: n.d }}
          />
        ))}
      </g>
    </svg>
  );
}

/** Red corner brackets that draw in on hover. */
export function CornerAccent() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary origin-top-left scale-0 transition-transform duration-200 group-hover:scale-100"
    />
  );
}
