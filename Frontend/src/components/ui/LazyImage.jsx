import { useState, useRef, useEffect } from "react";

/**
 * LazyImage — viewport-aware lazy loader with WebP <picture> support.
 *
 * Props:
 *   src        — primary image URL (WebP preferred, or any format)
 *   fallbackSrc — optional JPEG/PNG fallback for browsers without WebP support
 *   alt        — accessible alt text
 *   className  — classes applied to the wrapper <div>
 *   imgClassName — classes applied to the <img> itself
 */
export default function LazyImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  imgClassName = "",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // begin loading 200 px before the image enters viewport
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  // Derive a WebP source and a fallback automatically when only one src is given
  const isWebP = src?.endsWith(".webp");
  const webpSrc = isWebP ? src : undefined;
  // If caller didn't supply a fallback, we just use src as-is for the <img>
  const imgSrc = fallbackSrc ?? src;

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      {/* Shimmer skeleton — visible until the image finishes loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {isInView && (
        <picture>
          {/* Serve WebP to browsers that support it */}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}

          <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${imgClassName}`}
          />
        </picture>
      )}
    </div>
  );
}
