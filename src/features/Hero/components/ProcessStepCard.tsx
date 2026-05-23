'use client';

import React from 'react';

interface ProcessStepCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function ProcessStepCard({ name, icon }: ProcessStepCardProps) {
  return (
    <div
      style={{
        background: '#f5f4f2',
        borderRadius: '1.25rem',
        boxShadow:
          '0 2px 12px 0 rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.25rem 2rem',
        gap: '0.75rem',
        minHeight: '160px',
        textAlign: 'center',
        cursor: 'default',
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 6px 24px 0 rgba(0,0,0,0.11), 0 2px 6px 0 rgba(0,0,0,0.06)';
        (e.currentTarget as HTMLDivElement).style.transform =
          'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 2px 12px 0 rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.04)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Icon */}
      <div
        style={{
          color: '#2d3142',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.5rem',
        }}
      >
        {icon}
      </div>

      {/* Label */}
      <p
        style={{
          fontSize: '0.8125rem',
          fontWeight: 500,
          color: '#2d3142',
          lineHeight: 1.4,
          margin: 0,
          letterSpacing: '0.01em',
        }}
      >
        {name}
      </p>
    </div>
  );
}
