import React from 'react';
import Hero from '../features/Hero/Hero';
import { sanityClient } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';
import {
  categoriesQuery,
  videosQuery,
  allProjectPagesQuery,
} from '@/lib/sanity/queries';
import type { SanityCategory, SanityVideo } from '@/lib/sanity/types';

export const revalidate = 0; // always fetch fresh from Sanity

export default async function Home() {
  const [rawCategories, videos, projectPages] = await Promise.all([
    sanityClient.fetch<SanityCategory[]>(categoriesQuery).catch((e) => {
      console.error('CATEGORIES FETCH ERROR:', e);
      return [] as SanityCategory[];
    }),
    sanityClient.fetch<SanityVideo[]>(videosQuery).catch((e) => {
      console.error('VIDEOS FETCH ERROR:', e);
      return [] as SanityVideo[];
    }),
    sanityClient
      .fetch<{ title: string; slug: string }[]>(allProjectPagesQuery)
      .then((pages) => {
        console.log('[Sanity] projectPages:', JSON.stringify(pages));
        return pages ?? [];
      })
      .catch((e) => {
        console.error('[Sanity] PROJECT PAGES ERROR:', e);
        return [] as { title: string; slug: string }[];
      }),
  ]);

  const categories = rawCategories.map((cat) => ({
    name: cat.name,
    price: cat.price,
    imageUrl: cat.image
      ? urlFor(cat.image).width(400).height(500).url()
      : undefined,
  }));

  return (
    <Hero categories={categories} videos={videos} projectPages={projectPages} />
  );
}
