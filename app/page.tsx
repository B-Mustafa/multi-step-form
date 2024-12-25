'use client';

import { MultiStepForm } from '@/components/multi-step-form';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05120f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <MultiStepForm />
        </div>
      </div>
    </main>
  );
}