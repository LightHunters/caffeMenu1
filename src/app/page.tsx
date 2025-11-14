'use client';

import HeroSection from '@/components/hero-section/hero-section';
import CategorySwiper from '@/components/menu/CategorySwiper';
import CategoryButtons from '@/components/menu/CategoryButtons';
import ProductList from '@/components/menu/ProductList';
import PopularProducts from '@/components/menu/PopularProducts';
import SpecialOffers from '@/components/menu/SpecialOffers';
import { useMenuStore } from '@/store';

export default function Home() {
  const { selectedCategory, showProducts, hideProductList } = useMenuStore();

  return (
    <div className='bg-bg-primary min-h-screen'>
      <HeroSection />
      <CategoryButtons />
      {showProducts ? (
        <ProductList categoryId={selectedCategory} onBack={hideProductList} />
      ) : (
        <>
          <CategorySwiper />
          <PopularProducts />
          <SpecialOffers />
        </>
      )}
    </div>
  );
}
