'use client';

import { extendVariants, Button as HeroButton } from '@heroui/react';

export const Button = extendVariants(HeroButton, {
  variants: {
    // Color variants based on OKLCH design system
    color: {
      // Primary - نارنجی برای دکمه مشاهده همه
      primary:
        'bg-interactive-primary text-text-on-orange hover:bg-interactive-primary-hover active:bg-interactive-primary-active shadow-sm hover:shadow-md transition-all duration-200 font-medium',
      // Secondary - آبی برای دکمه‌های ثانویه
      secondary:
        'bg-interactive-secondary text-text-on-blue hover:bg-interactive-secondary-hover active:bg-interactive-secondary-active shadow-sm hover:shadow-md transition-all duration-200 font-medium',
      // Category selected - آبی روشن برای دسته‌بندی انتخاب شده
      'category-selected':
        'bg-category-selected-bg text-category-selected-text border border-category-selected-text/20 hover:bg-blue-200 hover:border-blue-300 transition-all duration-200 font-medium',
      // Category default - برای دسته‌بندی‌های غیرفعال
      'category-default':
        'bg-category-default-bg text-category-default-text border border-border-default hover:bg-gray-50 hover:border-border-hover transition-all duration-200 font-medium',
      // Neutral variants
      white:
        'bg-white text-text-primary border border-border-default hover:bg-gray-50 hover:border-border-hover shadow-sm hover:shadow-md transition-all duration-200 font-medium',
      black:
        'bg-black text-text-inverse hover:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-200 font-medium',
      gray: 'bg-gray-300 text-text-primary border border-gray-400 hover:bg-gray-400 hover:border-gray-500 transition-all duration-200 font-medium',
      // Success, Warning, Error variants
      success:
        'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 shadow-sm hover:shadow-md transition-all duration-200 font-medium',
      warning:
        'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 shadow-sm hover:shadow-md transition-all duration-200 font-medium',
      error:
        'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-sm hover:shadow-md transition-all duration-200 font-medium',
      // Transparent variants
      'primary-transparent':
        'bg-interactive-primary/80 text-text-on-orange hover:bg-interactive-primary hover:shadow-md transition-all duration-200 font-medium backdrop-blur-sm',
      'secondary-transparent':
        'bg-interactive-secondary/80 text-text-on-blue hover:bg-interactive-secondary hover:shadow-md transition-all duration-200 font-medium backdrop-blur-sm',
    },
    // Size variants with proper spacing
    size: {
      xs: 'px-2 py-1 text-xs rounded-button font-medium min-h-[24px]',
      sm: 'px-3 py-1.5 text-sm rounded-button font-medium min-h-[32px]',
      md: 'px-4 py-2 text-base rounded-button font-medium min-h-[40px]',
      lg: 'px-6 py-3 text-lg rounded-button font-medium min-h-[48px]',
      xl: 'px-8 py-4 text-xl rounded-button font-semibold min-h-[56px]',
    },
    // Variant styles
    variant: {
      solid: 'border-0',
      outline:
        'bg-transparent border-2 border-current hover:bg-current/10 active:bg-current/20 transition-all duration-200',
      ghost:
        'bg-transparent border-0 hover:bg-current/10 active:bg-current/20 transition-all duration-200',
      soft: 'bg-current/10 text-current border border-current/20 hover:bg-current/20 hover:border-current/30 transition-all duration-200',
      link: 'bg-transparent border-0 text-current underline-offset-4 hover:underline p-0 min-h-0 shadow-none',
    },
    // Full width variant
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    // Disabled state
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'solid',
    fullWidth: false,
    isDisabled: false,
  },
  compoundVariants: [
    // Outline variants with proper colors
    {
      variant: 'outline',
      color: 'primary',
      class:
        'border-interactive-primary text-interactive-primary hover:bg-interactive-primary/10',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class:
        'border-interactive-secondary text-interactive-secondary hover:bg-interactive-secondary/10',
    },
    {
      variant: 'outline',
      color: 'category-selected',
      class:
        'border-category-selected-text text-category-selected-text hover:bg-category-selected-bg',
    },
    // Ghost variants
    {
      variant: 'ghost',
      color: 'primary',
      class: 'text-interactive-primary hover:bg-interactive-primary/10',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'text-interactive-secondary hover:bg-interactive-secondary/10',
    },
    // Soft variants
    {
      variant: 'soft',
      color: 'primary',
      class:
        'bg-interactive-primary/10 text-interactive-primary border-interactive-primary/20',
    },
    {
      variant: 'soft',
      color: 'secondary',
      class:
        'bg-interactive-secondary/10 text-interactive-secondary border-interactive-secondary/20',
    },
  ],
});
