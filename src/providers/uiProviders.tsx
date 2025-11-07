'use client';

import { useRouter } from 'next/navigation';
import { HeroUIProvider } from '@heroui/react';

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

export const UIProviders = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const useHref = (href: string) => {
    return basePath ? `${basePath}${href}` : href;
  };

  return (
    <HeroUIProvider
      navigate={router.push}
      useHref={basePath ? useHref : undefined}
    >
      {children}
    </HeroUIProvider>
  );
};
