//importaciones
import { useState, useEffect } from "react";

//hook
export const useScreen = (reference, margin) => {
  //variables de estado
  const [isShowing, setIsShowing] = useState(false);

  //useEffect
  useEffect(() => {
    if (IntersectionObserver) {
      const handleIntersecting = (entries) => {
        const [entry] = entries;
        setIsShowing(entry.isIntersecting);
      };
      const options = { rootMargin: margin };
      const observer = new IntersectionObserver(handleIntersecting, options);
      let referencia = reference.current;
      if (referencia) {
        observer.observe(referencia);
      }

      return () => observer.unobserve(referencia);
    }
  }, [reference, margin]);

  return [isShowing];
};
