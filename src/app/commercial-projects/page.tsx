import CommercialProjects from '@/features/CommercialProjects/CommercialProjects';
import { sanityClient } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';
import {
  projectPageBySlugQuery,
  allProjectPagesQuery,
} from '@/lib/sanity/queries';
import type { SanityProjectPage } from '@/lib/sanity/types';
import { galleryProjects as defaultGallery } from '@/features/CommercialProjects/constants';

export default async function CommercialProjectsPage() {
  const [page, projectPages] = await Promise.all([
    sanityClient
      .fetch<SanityProjectPage | null>(projectPageBySlugQuery, {
        slug: 'commercial-projects',
      })
      .catch(() => null),
    sanityClient
      .fetch<{ title: string; slug: string }[]>(allProjectPagesQuery)
      .catch(() => []),
  ]);

  const gallery =
    page && page.gallerySections?.length > 0
      ? page.gallerySections
          .flatMap((section) => section.images ?? [])
          .map((item, i) => ({
            id: i + 1,
            title: item.title,
            description: item.description ?? '',
            image: urlFor(item.image).width(640).height(800).url(),
          }))
      : defaultGallery;

  return (
    <CommercialProjects
      gallery={gallery}
      heroImageUrl={
        page?.heroImage
          ? urlFor(page.heroImage).width(1920).height(1080).url()
          : undefined
      }
      heroTitle={page?.heroTitle}
      heroSubtitle={page?.heroSubtitle}
      projectPages={projectPages}
    />
  );
}
