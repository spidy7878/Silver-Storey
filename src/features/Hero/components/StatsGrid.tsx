'use client';

import React from 'react';
import { StatItem } from '../types';
import { useCountOnVisible } from '../../../hooks/useCountOnVisible';

function formatNumber(n: number) {
  return new Intl.NumberFormat().format(n);
}

function parseNumericPart(val: string) {
  const m = val.match(/([\d,\.]+)/);
  if (!m) return { num: 0, prefix: '', suffix: val };
  const numeric = m[0].replace(/,/g, '');
  const num = Number(numeric) || 0;
  const prefix = val.slice(0, m.index || 0);
  const suffix = val.slice((m.index || 0) + m[0].length);
  return { num, prefix, suffix };
}

export default function StatsGrid({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-16 text-center md:grid-cols-4">
      {items.map((stat, i) => {
        const { num, prefix, suffix } = parseNumericPart(stat.val);
        return (
          <Stat
            key={i}
            num={num}
            prefix={prefix}
            suffix={suffix}
            label={stat.label}
          />
        );
      })}
    </div>
  );
}

function Stat({
  num,
  prefix,
  suffix,
  label,
}: {
  num: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const { ref, value } = useCountOnVisible(num, 700);
  return (
    <div ref={ref as any} className="flex flex-col items-center justify-center">
      <div className="mb-3 text-5xl font-light sm:text-6xl">
        {prefix}
        {formatNumber(value)}
        {suffix}
      </div>
      <div className="text-sm font-medium text-black/60 sm:text-base">
        {label}
      </div>
    </div>
  );
}
