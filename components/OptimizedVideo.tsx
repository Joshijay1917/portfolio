import React from 'react';

interface OptimizedVideoProps {
  src: string; // Base path without extension, e.g., "/videos/hero"
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

/**
 * Performance-optimized Video component.
 * Features:
 * - Lazy loading via preload="none"
 * - Modern format support (WebM with MP4 fallback)
 * - Accessibility and performance best practices (muted, playsInline)
 */
const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  preload = 'none',
}) => {
  return (
    <video
      poster={poster}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      controls={controls}
      preload={preload}
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;
