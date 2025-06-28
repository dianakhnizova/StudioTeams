// import { messages } from '@/sources/messages';
import styles from './block.module.css';

import { useRef, useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

export const BlockSection = () => {
  const { y: scrollY } = useWindowScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const elementCenterY = rect.top + rect.height / 2;

    const windowCenterY = window.innerHeight / 2;

    const relativePosition = (elementCenterY - windowCenterY) / windowCenterY;

    const maxAngle = 30;
    const newAngle = relativePosition * maxAngle;

    setAngle(newAngle);
  }, [scrollY]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{
        transform: `perspective(500px) rotateX(${-angle / 4}deg) scale(${1 - Math.abs(angle) / 300})`,
      }}
    >
      {/* style={{ transform: `scale(${1 - Math.abs(angle) / 300})`}}> */}
    </section>
  );
};
