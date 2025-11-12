'use client';

import { CustomLink } from '@/components/CustomLink';

export default function Home() {
  return (
    <div className='p-section bg-bg-primary min-h-screen'>
      <div className='space-y-8'>
        <div>
          <h1 className='text-heading text-3xl mb-4'>سیستم دیزاین کافه منو</h1>
          <CustomLink href='#'>لینک</CustomLink>
        </div>
      </div>
    </div>
  );
}
