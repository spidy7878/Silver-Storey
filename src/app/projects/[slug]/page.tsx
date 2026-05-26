import { notFound } from 'next/navigation';
import { sanityClient } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';
import {
  projectPageBySlugQuery,
  allProjectSlugsQuery,
  allProjectPagesQuery,
} from '@/lib/sanity/queries';
import type { SanityProjectPage } from '@/lib/sanity/types';
import ProjectPageTemplate from '@/features/ProjectPage/ProjectPageTemplate';

export async function generateStaticParams() {
  const slugs = await sanityClient
    .fetch<{ slug: string }[]>(allProjectSlugsQuery)
    .catch(() => [] as { slug: string }[]);
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [page, projectPages] = await Promise.all([
    sanityClient
      .fetch<SanityProjectPage | null>(projectPageBySlugQuery, { slug })
      .catch(() => null),
    sanityClient
      .fetch<{ title: string; slug: string }[]>(allProjectPagesQuery)
      .catch(() => []),
  ]);

  if (!page) notFound();

  const gallery = (page.gallery ?? []).map((item, i) => ({
    id: i + 1,
    title: item.title,
    description: item.description,
    image: urlFor(item.image).width(640).height(800).url(),
  }));

  return (
    <ProjectPageTemplate
      heroImageUrl={
        page.heroImage
          ? urlFor(page.heroImage).width(1920).height(1080).url()
          : undefined
      }
      heroTitle={page.heroTitle}
      heroSubtitle={page.heroSubtitle}
      gallery={gallery}
      projectPages={projectPages}
    />
  );
}
