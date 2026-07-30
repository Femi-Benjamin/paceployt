import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Wraps content with an IntersectionObserver trigger that applies smooth fade-in
 * and scroll reveal animations as the user scrolls through the page.
 */
export default function ScrollReveal({
  children,
  variant = "fade-up", // "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay = 0, // delay in ms, or string like "100ms"
  duration = null, // duration in ms
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  className = "",
  as: Component = "div",
  style = {},
  ...restProps
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsRevealed(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, once]);

  // Dynamic inline delay and duration support
  const customStyles = { ...style };

  if (delay > 0) {
    customStyles.transitionDelay =
      typeof delay === "number" ? `${delay}ms` : delay;
  }
  if (duration > 0) {
    customStyles.transitionDuration =
      typeof duration === "number" ? `${duration}ms` : duration;
  }

  const variantClass = `reveal-${variant}`;
  const activeClass = isRevealed ? "reveal-active" : "";
  const combinedClassName =
    `reveal-init ${variantClass} ${activeClass} ${className}`.trim();

  return (
    <Component
      ref={elementRef}
      className={combinedClassName}
      style={customStyles}
      {...restProps}
    >
      {children}
    </Component>
  );
}
