import { notFound } from 'next/navigation';
import { sanityClient } from '@/lib/sanity/client';
import {
  blogPostBySlugQuery,
  allBlogSlugsQuery,
  allProjectPagesQuery,
} from '@/lib/sanity/queries';
import BlogPostPage from '@/features/Blog/BlogPostPage';
import type { BlogPostFull } from '@/features/Blog/types';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(allBlogSlugsQuery);
  return (slugs ?? [])
    .filter((s) => Boolean(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, projectPages] = await Promise.all([
    sanityClient.fetch<BlogPostFull | null>(blogPostBySlugQuery, { slug }),
    sanityClient
      .fetch<{ title: string; slug: string }[]>(allProjectPagesQuery)
      .catch(() => []),
  ]);

  if (!post) notFound();

  return <BlogPostPage post={post} projectPages={projectPages} />;
}
