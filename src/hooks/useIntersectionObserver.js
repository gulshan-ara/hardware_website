import { useState, useEffect } from "react";

function useIntersectionObserver(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(entry.isIntersecting);
        }, 500); // Debounce time in milliseconds
      },
      { threshold: 0.05 } // Adjust the threshold value as needed
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(timeoutId);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isVisible;
}

export default useIntersectionObserver;
