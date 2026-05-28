import { sanityClient } from '@/lib/sanity/client';
import { allBlogPostsQuery, allProjectPagesQuery } from '@/lib/sanity/queries';
import BlogListPage from '@/features/Blog/BlogListPage';
import type { BlogPost } from '@/features/Blog/types';

export const revalidate = 60;

export default async function BlogPage() {
  const [posts, projectPages] = await Promise.all([
    sanityClient.fetch<BlogPost[]>(allBlogPostsQuery).catch(() => []),
    sanityClient
      .fetch<{ title: string; slug: string }[]>(allProjectPagesQuery)
      .catch(() => []),
  ]);
  return <BlogListPage posts={posts ?? []} projectPages={projectPages} />;
}
