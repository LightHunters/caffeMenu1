'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero-section/hero-section';
import CategorySwiper from '@/components/menu/CategorySwiper';
import CategoryButtons from '@/components/menu/CategoryButtons';
import ProductList from '@/components/menu/ProductList';

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('hot-drinks');
  const [showProducts, setShowProducts] = useState<boolean>(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowProducts(true);
  };

  const handleBack = () => {
    setShowProducts(false);
  };

  return (
    <div className='bg-bg-primary min-h-screen'>
      <HeroSection />
      <CategoryButtons
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      {showProducts ? (
        <ProductList categoryId={selectedCategory} onBack={handleBack} />
      ) : (
        <CategorySwiper />
      )}
    </div>
  );
}
