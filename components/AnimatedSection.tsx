import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  // Allow any other props a 'section' might have
  [key: string]: any;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only once
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the element is in view
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${className || ''} fade-in-section ${isVisible ? 'is-visible' : ''}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
