import { useEffect } from 'react';

export function useInertBackground(isActive: boolean) {
  useEffect(() => {
    const targets = [
      document.getElementById('main-content'),
      document.querySelector('nav'),
    ].filter(Boolean) as HTMLElement[];

    targets.forEach((element) => {
      if (isActive) {
        element.setAttribute('inert', '');
      } else {
        element.removeAttribute('inert');
      }
    });

    return () => {
      targets.forEach((element) => element.removeAttribute('inert'));
    };
  }, [isActive]);
}
