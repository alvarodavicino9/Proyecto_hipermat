import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const BASE_URL = 'https://www.hipermatrosario.com.ar';

export default function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = `${title} | Hipermat Rosario`;
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
