import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  offset?: number;
}

const ParallaxScroll = ({ children, offset = 50 }: ParallaxScrollProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div style={{ y }} transition={{ type: 'spring', stiffness: 100 }}>
      {children}
    </motion.div>
  );
};

export default ParallaxScroll;