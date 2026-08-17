import { motion } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';

export function ScrollProgress() {
  const { scrollProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-50 bg-accent origin-left"
      style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left center' }}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}