// import { messages } from '@/sources/messages';
import styles from './block.module.css';

import { useRef, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useWindowScroll } from 'react-use';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
};

export const BlockSection: FC<Props> = ({ children, className }) => {
  const { y: scrollY } = useWindowScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const elementCenterY = rect.top + rect.height / 2;

    const windowCenterY = window.innerHeight / 2;

    const relativePosition = (elementCenterY - windowCenterY) / windowCenterY;

    const maxAngle = 10;
    const newAngle = relativePosition * maxAngle;

    setAngle(newAngle);
  }, [scrollY]);

  return (
    <section
      ref={sectionRef}
      className={classNames(styles.section, className)}
      style={{
        transform: `perspective(500px) rotateX(${-angle / 2}deg) scale(${1 - Math.abs(angle) / 300})`,
      }}
    >
      {children}
    </section>
  );
};
