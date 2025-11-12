'use client';

import { extendVariants, Link } from '@heroui/react';

export const CustomLink = extendVariants(Link, {
  variants: {
    // Variant primary
    variant: {
      primary:
        'text-text-secondary hover:text-text-hover transition-colors duration-200 hover:underline hover:underline-offset-4',
    },
    // Color variant
    color: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    color: 'default',
  },
});
