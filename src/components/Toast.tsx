import { AnimatePresence, motion } from 'motion/react';
import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';

const EVENT = 'gbn:toast';

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: message }));
}

/** Ekranın altında kısa süreli bilgi mesajı. */
export default function Toast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    const onToast = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setMessage(null), 3500);
    };
    window.addEventListener(EVENT, onToast);
    return () => {
      window.removeEventListener(EVENT, onToast);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4" aria-live="polite">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto flex items-center gap-3 border-l-4 border-primary bg-secondary px-5 py-3.5 text-sm font-medium text-secondary-foreground shadow-lg"
            role="status"
          >
            <Info size={18} className="shrink-0 text-primary" />
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
