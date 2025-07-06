import React from 'react';
import './splash-screen.modele.css';
import { Logo } from '../logo/logo';

interface SplashScreenProps {
  duration?: number;
  onAnimationEnd?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  duration = 2000,
  onAnimationEnd,
}) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onAnimationEnd]);

  return (
    <div className="splashScreen">
      <Logo className="logo" />
    </div>
  );
};
