import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('mark'); // mark -> wordmark -> exit
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onCompleteRef.current?.();
      return;
    }

    // 700-1200ms branded sequence: S -> SAVORA -> homepage
    const t1 = setTimeout(() => setPhase('wordmark'), 350);
    const t2 = setTimeout(() => setPhase('exit'), 750);
    const t3 = setTimeout(() => {
      setPhase('done');
      onCompleteRef.current?.();
    }, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#241A17]"
          aria-label={`Loading ${siteConfig.name}`}
          aria-live="polite"
        >
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {phase === 'mark' && (
                <motion.span
                  key="mark"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-[#FFFDF9] text-7xl font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '0.05em' }}
                >
                  {siteConfig.shortName}
                </motion.span>
              )}

              {phase === 'wordmark' && (
                <motion.div
                  key="wordmark"
                  initial={{ opacity: 0, letterSpacing: '0.25em' }}
                  animate={{ opacity: 1, letterSpacing: '0.12em' }}
                  transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display text-[#FFFDF9] text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {siteConfig.name}
                </motion.div>
              )}

              {phase === 'exit' && (
                <motion.div
                  key="exit"
                  initial={{ opacity: 1, letterSpacing: '0.12em' }}
                  animate={{ opacity: 0, letterSpacing: '0.18em' }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-[#FFFDF9] text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {siteConfig.name}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
