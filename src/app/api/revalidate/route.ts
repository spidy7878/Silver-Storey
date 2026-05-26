import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * POST /api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 *
 * Called by a Sanity webhook on every publish so Next.js ISR pages
 * are re-generated immediately. Set the webhook URL in:
 *   Sanity Dashboard → API → Webhooks → Add webhook
 *     URL: https://<your-domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 *     Trigger on: publish
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const type = (body?._type as string | undefined) ?? '';

    if (type === 'category' || type === 'video') {
      // Home page shows categories and videos
      revalidatePath('/');
    } else if (type === 'projectPage') {
      const slug = body?.slug?.current as string | undefined;
      // Revalidate the dynamic route
      if (slug) {
        revalidatePath(`/projects/${slug}`);
      }
      // Also revalidate dedicated project pages
      revalidatePath('/commercial-projects');
      revalidatePath('/residential-projects');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch {
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 },
    );
  }
}
