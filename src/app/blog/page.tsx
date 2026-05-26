import { sanityClient } from '@/lib/sanity/client';
import { allBlogPostsQuery } from '@/lib/sanity/queries';
import BlogListPage from '@/features/Blog/BlogListPage';
import type { BlogPost } from '@/features/Blog/types';

export const revalidate = 60;

export default async function BlogPage() {
  const posts: BlogPost[] = await sanityClient.fetch(allBlogPostsQuery);
  return <BlogListPage posts={posts ?? []} />;
}
