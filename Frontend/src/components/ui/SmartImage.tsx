import { ImgHTMLAttributes, useState } from 'react';
import './SmartImage.css';

interface SmartImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Ruta del jpg, ej: "/images/foto1.jpg". Se busca el .webp con el mismo nombre. */
  src: string;
  width: number;
  height: number;
  /** Marcar true solo para la imagen más grande visible sin scroll (LCP), ej. la foto principal del Hero. */
  priority?: boolean;
}

/**
 * <picture> con fuente WebP + fallback JPG, dimensiones fijas (evita CLS),
 * lazy loading automático salvo que sea la imagen prioritaria (LCP),
 * y un shimmer de carga mientras la imagen todavía no llegó (útil con
 * conexiones lentas en el celular).
 */
export default function SmartImage({
  src,
  width,
  height,
  priority = false,
  alt,
  className,
  ...rest
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const webpSrc = src.replace(/\.jpg$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setLoaded(true)}
        className={`smart-img ${loaded ? 'smart-img--loaded' : ''} ${className ?? ''}`}
        {...rest}
      />
    </picture>
  );
}
