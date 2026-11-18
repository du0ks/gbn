import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * Alt sayfaların üst bölümü — ana sayfa hero'sunun sade versiyonu.
 */
export default function PageHero({
  badge,
  titleLine,
  titleAccent,
  subtitle,
  children,
}: {
  badge: string;
  titleLine: string;
  titleAccent: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-muted pt-32 pb-xxl md:pt-40">
      <svg
        className="pointer-events-none absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-60"
        viewBox="0 0 600 400"
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
          <line x1="120" y1="80" x2="300" y2="180" />
          <line x1="300" y1="180" x2="240" y2="340" />
          <line x1="300" y1="180" x2="470" y2="110" />
          <line x1="470" y1="110" x2="560" y2="280" />
          <line x1="300" y1="180" x2="560" y2="280" />
        </motion.g>
        <g fill="hsl(var(--primary))">
          {[
            { cx: 120, cy: 80, r: 6, d: 0 },
            { cx: 300, cy: 180, r: 9, d: 0.8 },
            { cx: 240, cy: 340, r: 5, d: 1.6 },
            { cx: 470, cy: 110, r: 6, d: 2.4 },
            { cx: 560, cy: 280, r: 8, d: 3.2 },
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

      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 border border-primary/40 bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground">
              <span className="h-2 w-2 bg-primary" aria-hidden="true" />
              {badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {titleLine}
            <br />
            <span className="text-primary">{titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {subtitle}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
