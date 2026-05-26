import HowItWorksPage from '@/features/HowItWorks/HowItWorksPage';
import { sanityClient } from '@/lib/sanity/client';
import { allProjectPagesQuery } from '@/lib/sanity/queries';

export default async function Page() {
  const projectPages = await sanityClient
    .fetch<{ title: string; slug: string }[]>(allProjectPagesQuery)
    .catch(() => []);
  return <HowItWorksPage projectPages={projectPages} />;
}
