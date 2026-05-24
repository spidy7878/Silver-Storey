'use client';

import React from 'react';
import { processPhases } from '../constants';
import type { ProcessPhase, ProcessStep } from '../types';
import { useInView } from '../hooks/useInView';

// ── Arrow SVG (reused in every phase heading) ─────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 shrink-0 text-black sm:h-12 sm:w-12"
      aria-hidden
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </svg>
  );
}

// ── Single step card ──────────────────────────────────────────────────────────
function StepCard({ number, title, items }: ProcessStep) {
  return (
    <div className="flex flex-col gap-5 border-t border-black/12 pt-6">
      {/* Number + title */}
      <div className="flex items-start gap-4">
        <span className="shrink-0 text-sm font-semibold text-black/40">
          {number}
        </span>
        <h3 className="text-base leading-snug font-bold text-black sm:text-lg">
          {title}
        </h3>
      </div>

      {/* Items */}
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.bold} className="text-sm leading-relaxed text-black/75">
            <span className="font-bold text-black">{item.bold}</span>{' '}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── One complete phase block with scroll-triggered animation ──────────────────
function PhaseSection({ heading, steps }: ProcessPhase) {
  const { ref, isInView } = useInView(0.1);

  const headingStyle: React.CSSProperties = {
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(28px)',
  };

  const cardStyle = (i: number): React.CSSProperties => ({
    transition: `opacity 0.6s ease ${0.2 + i * 0.08}s, transform 0.6s ease ${0.2 + i * 0.08}s`,
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <section className="cursor-default bg-white px-6 pt-4 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div
          ref={ref}
          className="mb-14 flex items-center gap-4"
          style={headingStyle}
        >
          <ArrowIcon />
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} style={cardStyle(i)}>
              <StepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Exported section: renders all phases ──────────────────────────────────────
export default function AboutProcess() {
  return (
    <>
      {/* "Our Process" label sits above the first phase */}
      <div className="bg-white px-6 pt-4">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-black/50">
            Our Process
          </p>
        </div>
      </div>

      {processPhases.map((phase) => (
        <PhaseSection key={phase.heading} {...phase} />
      ))}
    </>
  );
}
