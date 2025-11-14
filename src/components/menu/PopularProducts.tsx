'use client';

import { Card, CardBody } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { getPopularProducts } from '@/data/database';
import type { Product } from '@/data/database';
import 'swiper/css';
import 'swiper/css/free-mode';

interface PopularProductsProps {
  onProductClick?: (product: Product) => void;
}

const PopularProducts = ({ onProductClick }: PopularProductsProps) => {
  const popularProducts = getPopularProducts().slice(0, 6); // حداکثر 6 محصول محبوب

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <div className='w-full px-3 sm:px-4 py-4 sm:py-6 max-w-[640px] mx-auto'>
      {/* عنوان بخش */}
      <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-right'>
        محبوب‌ترین‌ها
      </h2>

      {/* Swiper برای محصولات محبوب */}
      <Swiper
        modules={[FreeMode]}
        spaceBetween={12}
        initialSlide={1}
        slidesPerView='auto'
        freeMode={true}
        className='popular-products-swiper'
      >
        {popularProducts.map(product => (
          <SwiperSlide
            key={product.id}
            className='w-[calc(50%-6px)]! sm:w-[calc(50%-8px)]!'
          >
            <ProductCard
              product={product}
              onProductClick={onProductClick}
              formatPrice={formatPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
  formatPrice: (price: number) => string;
}

const ProductCard = ({
  product,
  onProductClick,
  formatPrice,
}: ProductCardProps) => {
  return (
    <Card
      className='w-full h-full bg-white border border-gray-200 text-gray-900 cursor-pointer hover:shadow-md transition-shadow flex flex-col'
      radius='lg'
      shadow='none'
      onPress={() => onProductClick?.(product)}
    >
      <CardBody className='p-0 flex flex-col'>
        <div className='flex flex-col'>
          {/* تصویر محصول */}
          <div className='relative w-full h-32 sm:h-40 rounded-t-lg overflow-hidden bg-gray-900'>
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-cover'
                sizes='(max-width: 640px) 50vw, 300px'
                unoptimized
              />
            ) : (
              <div className='w-full h-full bg-gray-900 flex items-center justify-center'>
                <span className='text-xs text-center px-2 text-gray-300'>
                  {product.name}
                </span>
              </div>
            )}
          </div>

          {/* اطلاعات محصول */}
          <div className='p-3 flex flex-col gap-1 min-h-[100px] justify-between'>
            <div className='flex flex-col gap-1'>
              <h3 className='font-bold text-sm sm:text-base text-right line-clamp-1 text-blue-900'>
                {product.name}
              </h3>
              {product.ingredients && product.ingredients.length > 0 && (
                <p className='text-xs text-right line-clamp-2 min-h-[32px] text-blue-900'>
                  محتویات: {product.ingredients.slice(0, 2).join('، ')}
                  {product.ingredients.length > 2 ? '...' : ''}
                </p>
              )}
              {product.description && !product.ingredients && (
                <p className='text-xs text-right line-clamp-2 min-h-[32px] text-blue-900'>
                  {product.description}
                </p>
              )}
            </div>
            <span className='font-bold text-sm text-right mt-auto text-orange-500'>
              قیمت: {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PopularProducts;
