'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { getPopularProducts } from '@/data/database';
import type { Product } from '@/data/database';
import 'swiper/css';
import 'swiper/css/pagination';

interface SpecialOffersProps {
  onProductClick?: (product: Product) => void;
}

const SpecialOffers = ({ onProductClick }: SpecialOffersProps) => {
  const specialProducts = getPopularProducts().slice(0, 3); // حداکثر 3 محصول ویژه

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  if (specialProducts.length === 0) return null;

  return (
    <div className='w-full px-3 sm:px-4 py-4 sm:py-6 max-w-[640px] mx-auto'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={specialProducts.length > 1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active-special',
        }}
        className='special-offers-swiper'
      >
        {specialProducts.map(product => (
          <SwiperSlide key={product.id}>
            <OfferCard
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

interface OfferCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
  formatPrice: (price: number) => string;
}

const OfferCard = ({
  product,
  onProductClick,
  formatPrice,
}: OfferCardProps) => {
  return (
    <div
      className='relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700 cursor-pointer'
      onClick={() => onProductClick?.(product)}
    >
      {/* تصویر پس‌زمینه */}
      {product.image && (
        <div className='absolute inset-0 opacity-20'>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-cover blur-sm'
            sizes='100vw'
            unoptimized
          />
        </div>
      )}

      {/* محتوای کارت */}
      <div className='relative h-full flex items-center gap-4 p-4 sm:p-6'>
        {/* تصویر محصول */}
        <div className='relative w-32 h-32 sm:w-40 sm:h-40 shrink-0'>
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className='object-contain drop-shadow-lg'
              sizes='(max-width: 640px) 128px, 160px'
              unoptimized
            />
          ) : (
            <div className='w-full h-full bg-white/10 rounded-lg flex items-center justify-center'>
              <span className='text-xs text-white text-center px-2'>
                {product.name}
              </span>
            </div>
          )}
        </div>

        {/* متن و دکمه */}
        <div className='flex-1 flex flex-col justify-center gap-3'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-white text-xs sm:text-sm font-medium'>
              پیشنهادهای ویژه
            </h3>
            <h2 className='text-white text-lg sm:text-xl font-bold'>
              {product.name}
            </h2>
          </div>

          {/* دکمه قیمت */}
          <button
            className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 w-fit text-white font-bold text-sm sm:text-base hover:bg-white/30 transition-all'
            onClick={e => {
              e.stopPropagation();
              onProductClick?.(product);
            }}
          >
            {formatPrice(product.price)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
