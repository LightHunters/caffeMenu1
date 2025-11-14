'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { Button } from '@/components/CustomButton';
import { categories } from '@/data/database';
import { useMenuStore } from '@/store';
import 'swiper/css';
import 'swiper/css/free-mode';

const CategoryButtons = () => {
  const { selectedCategory, selectCategoryAndShowProducts } = useMenuStore();

  // دسته‌بندی‌های اصلی برای نمایش
  const mainCategories = categories
    .filter(cat =>
      ['hot-drinks', 'cold-coffee', 'shakes', 'cold-drinks'].includes(cat.id)
    )
    .sort((a, b) => a.order - b.order);

  return (
    <div className='w-full bg-gray-50 py-4'>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={12}
        slidesPerView='auto'
        freeMode={true}
        className='category-buttons-swiper'
      >
        {mainCategories.map(category => (
          <SwiperSlide key={category.id} className='w-auto!'>
            <Button
              color={
                selectedCategory === category.id
                  ? 'category-selected'
                  : 'category-default'
              }
              variant='solid'
              size='md'
              className='whitespace-nowrap shrink-0'
              onPress={() => selectCategoryAndShowProducts(category.id)}
            >
              {category.name}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryButtons;
