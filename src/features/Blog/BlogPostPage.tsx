'use client';

import Link from 'next/link';
import dayjs from 'dayjs';
import { PortableText } from 'next-sanity';
import type { PortableTextComponents } from 'next-sanity';
import type { BlogPostFull } from './types';

// ── Read-time estimate ────────────────────────────────────────────────────────

function estimateReadTime(body: any[]): number {
  const text = body

    .filter((b: any) => b._type === 'block')

    .flatMap((b: any) => (b.children ?? []).map((c: any) => c.text ?? ''))
    .join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// ── Portable Text Components ──────────────────────────────────────────────────
const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-relaxed text-black/75">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold text-black">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-bold text-black">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#6b1a1a] pl-5 text-black/60 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc pl-6 text-base leading-relaxed text-black/75">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal pl-6 text-base leading-relaxed text-black/75">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1.5">{children}</li>,
    number: ({ children }) => <li className="mb-1.5">{children}</li>,
  },
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?.url) return null;
      return (
        <figure className="my-8">
          <img
            src={value.asset.url}
            alt={value.alt ?? ''}
            className="w-full rounded-xl object-cover"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-black/40">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

// ── Icons ─────────────────────────────────────────────────────────────────────
function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
interface Props {
  post: BlogPostFull;
}

export default function BlogPostPage({ post }: Props) {
  const readTime = post.body ? estimateReadTime(post.body) : 1;
  const authorInitial = post.author ? post.author[0]?.toUpperCase() : 'A';

  return (
    <div className="min-h-screen bg-[#f0efec]">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-black/50 transition-colors hover:text-black"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Blog
        </Link>

        {/* Title */}
        <h1 className="mb-4 text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {/* Description */}
        {post.description && (
          <p className="mb-8 text-base leading-relaxed text-black/50 sm:text-lg">
            {post.description}
          </p>
        )}

        {/* Meta row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Author */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-sm font-semibold text-black">
                {authorInitial}
              </div>
              <span className="text-sm font-medium text-black">
                {post.author ?? 'Silver Storey'}
              </span>
            </div>

            {/* Date */}
            {post.publishedAt && (
              <span className="flex items-center gap-1.5 text-sm text-black/45">
                <CalendarIcon />
                {dayjs(post.publishedAt).format('MMMM D, YYYY')}
              </span>
            )}

            {/* Read time */}
            <span className="flex items-center gap-1.5 text-sm text-black/45">
              <ClockIcon />
              {readTime} min read
            </span>
          </div>

          {/* Share */}
          <button
            className="flex items-center gap-1.5 text-sm text-black/45 transition-colors hover:text-black"
            onClick={() => {
              if (typeof navigator !== 'undefined' && navigator.share) {
                void navigator.share({
                  title: post.title,
                  url: window.location.href,
                });
              } else if (typeof navigator !== 'undefined') {
                void navigator.clipboard.writeText(window.location.href);
              }
            }}
          >
            <ShareIcon />
            Share
          </button>
        </div>

        {/* Cover image */}
        {post.mainImageUrl && (
          <div className="mb-10 overflow-hidden rounded-xl">
            <img
              src={post.mainImageUrl}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Body */}
        {post.body && post.body.length > 0 && (
          <article>
            <PortableText value={post.body} components={ptComponents} />
          </article>
        )}
      </div>
    </div>
  );
}
