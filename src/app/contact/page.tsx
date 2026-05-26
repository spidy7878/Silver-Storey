import ContactPage from '@/features/Contact/ContactPage';
import { sanityClient } from '@/lib/sanity/client';
import { allProjectPagesQuery } from '@/lib/sanity/queries';

export default async function Page() {
  const projectPages = await sanityClient
    .fetch<{ title: string; slug: string }[]>(allProjectPagesQuery)
    .catch(() => []);
  return <ContactPage projectPages={projectPages} />;
}
