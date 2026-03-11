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
  sizes = "100vw",
  priority = false,
  responsive = false,
  rootMargin = "1400px 0px",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);
    setIsInView(priority);
  }, [src, priority]);

  useEffect(() => {
    if (priority) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 } // start earlier on slow networks
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [priority, rootMargin]);

  useEffect(() => {
    if (!isInView || !imgRef.current) return;
    if (imgRef.current.complete) setIsLoaded(true);
  }, [isInView, src]);

  const isWebP = src?.endsWith(".webp");
  const isLocalAsset = typeof src === "string" && src.startsWith("/assets/");

  // Build responsive srcset only for local optimized assets
  const base = isWebP ? src.replace(/\.webp$/, "") : src;
  const webpSrcSet = responsive && isWebP && isLocalAsset
    ? `${base}-480.webp 480w, ${base}-768.webp 768w, ${base}-1200.webp 1200w`
    : undefined;
  const webpSrc = isWebP ? src : undefined;
  const blurSrc = isWebP && isLocalAsset ? `${base}-blur.webp` : undefined;

  // If caller didn't supply a fallback, we just use src as-is for the <img>
  const imgSrc = fallbackSrc ?? src;

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      {/* Shimmer skeleton — visible until the image finishes loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse bg-cover bg-center"
          style={blurSrc ? { backgroundImage: `url(${blurSrc})` } : undefined}
        />
      )}

      {isInView && (
        <picture>
          {/* Serve WebP to browsers that support it */}
          {webpSrc && (
            <source
              srcSet={webpSrcSet ?? webpSrc}
              sizes={webpSrcSet ? sizes : undefined}
              type="image/webp"
            />
          )}

          <img
            ref={imgRef}
            src={imgSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "low"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${imgClassName}`}
          />
        </picture>
      )}
    </div>
  );
}
