import { MetadataRoute } from 'next';
import { getProductsAsync } from '@/lib/storage';
import { Product } from '@/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://londressdistribuidora.com.ar';

  let products: Product[] = [];
  try {
    products = await getProductsAsync();
  } catch {
    products = [];
  }

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/catalogo/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...productUrls,
  ];
}
