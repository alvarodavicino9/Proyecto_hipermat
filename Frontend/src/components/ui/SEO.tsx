import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  /** Si es false, usa `title` tal cual (sin agregar " | Hipermat Rosario"). Default true. */
  appendSuffix?: boolean;
}

const BASE_URL = 'https://www.hipermatrosario.com.ar';

export default function SEO({ title, description, path = '', appendSuffix = true }: SEOProps) {
  const fullTitle = appendSuffix ? `${title} | Hipermat Rosario` : title;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
