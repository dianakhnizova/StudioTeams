import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { SplashScreen } from './components/splash-screen/splash-screen';

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen
          duration={2500}
          onAnimationEnd={() => setShowSplash(false)}
        />
      )}

      {!showSplash && <RouterProvider router={router} />}
    </>
  );
};
