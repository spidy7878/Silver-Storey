import React from 'react';
import ProcessStepCard from './ProcessStepCard';
import { processSteps } from '../constants';
import { processStepIcons } from '../icons';

export default function WarrantySection() {
  return (
    <div className="relative mt-8">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/5 to-transparent" />

      {/* Process Steps Grid */}
      <div className="relative mx-auto max-w-360 px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {processSteps.map((step) => {
            const stepWithIcon = processStepIcons.find(
              (item) => item.name === step.name,
            );
            return (
              <ProcessStepCard
                key={step.name}
                name={step.name}
                icon={stepWithIcon?.icon}
              />
            );
          })}
        </div>
      </div>

      {/* Features & Warranty Section */}
      <div className="mx-auto mt-16 max-w-360 px-6 pt-16 pb-8 text-center hover:cursor-default sm:pt-20 sm:pb-10">
        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          10 Years of Warranty !
        </h2>
        <button className="rounded-full border border-black bg-transparent px-8 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white">
          How It Works
        </button>
      </div>

      <div className="relative mt-12 flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:gap-8">
        {/* Left Texts */}
        <div className="flex w-full flex-col justify-center gap-8 text-center lg:w-1/3 lg:py-0 lg:text-center">
          <div>
            <h3 className="mb-3 text-lg font-semibold tracking-wide">
              Experience 3D Visualization
            </h3>
            <p className="text-sm font-medium text-black/70">
              Experience 3D visualization of your project before it begins.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="mb-3 text-lg font-semibold tracking-wide">
              Guarantee 45 Days Delivery
            </h3>
            <p className="text-sm font-medium text-black/70">
              We ensure your order is delivered within 45 days period.**
            </p>
          </div>
        </div>

        {/* Center Laptop */}
        <div className="relative w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:w-1/3 lg:max-w-none">
          <div className="relative aspect-16/10 overflow-hidden rounded-t-xl border-4 border-b-8 border-black bg-black shadow-2xl sm:rounded-t-2xl sm:border-6 sm:border-b-12 md:rounded-t-3xl md:border-8 md:border-b-14">
            <img
              src="/images/laptop.avif"
              alt="Interior preview screen"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Laptop Base */}
          <div className="mx-auto h-3 w-[115%] -translate-x-[6%] rounded-t-sm rounded-b-xl bg-black sm:h-4 md:h-3"></div>
        </div>

        {/* Right Texts */}
        <div className="flex w-full flex-col justify-center gap-8 text-center lg:w-1/3 lg:py-0 lg:text-center">
          <div>
            <h3 className="mb-3 text-lg font-semibold tracking-wide">
              Price Match Guarantee
            </h3>
            <p className="text-sm font-medium text-black/70">
              At the end of your Project , You pay exactly what we quote
              initially**
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="mb-3 text-lg font-semibold tracking-wide">
              Transparency In Every Step
            </h3>
            <p className="text-sm font-medium text-black/70">
              Complete transparency throughout the entire process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
