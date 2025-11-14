'use client';

import { Card, CardBody } from '@heroui/react';
import Image from 'next/image';
import { getProductsByCategory, getCategoryById } from '@/data/database';
import type { Product } from '@/data/database';

interface ProductListProps {
  categoryId: string;
  onBack?: () => void;
}

const ProductList = ({ categoryId, onBack }: ProductListProps) => {
  const products = getProductsByCategory(categoryId);
  const category = getCategoryById(categoryId);

  return (
    <div className='w-full px-3 sm:px-4 py-4 sm:py-6 max-w-[640px] mx-auto'>
      {/* Header با دکمه بازگشت */}
      {onBack && (
        <div className='flex items-center justify-between mb-3 sm:mb-4'>
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900'>
            {category?.name || 'محصولات'}
          </h2>
          <button
            onClick={onBack}
            className='text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium'
          >
            بازگشت
          </button>
        </div>
      )}

      {/* لیست محصولات */}
      <div className='space-y-2 sm:space-y-3'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = () => {
    return new Intl.NumberFormat('fa-IR').format(product.price);
  };

  return (
    <Card
      className='w-full bg-white border border-gray-200'
      radius='lg'
      shadow='none'
    >
      <CardBody className='p-0'>
        <div className='flex items-center gap-4 p-4 sm:p-5'>
          {/* تصویر محصول */}
          <div className='relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 bg-gray-900 flex items-center justify-center'>
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-cover'
                sizes='(max-width: 640px) 80px, 96px'
                unoptimized
              />
            ) : (
              <div className='w-full h-full bg-gray-900 flex items-center justify-center'>
                <span className='text-[10px] sm:text-xs text-center px-1 text-gray-300'>
                  {product.name}
                </span>
              </div>
            )}
          </div>

          {/* اطلاعات محصول */}
          <div className='flex-1 min-w-0 flex flex-col justify-between h-full'>
            {/* نام و محتویات */}
            <div className='mb-2'>
              <h3 className='font-bold text-base sm:text-lg mb-1 text-blue-900'>
                {product.name}
              </h3>
              {product.ingredients && product.ingredients.length > 0 && (
                <p className='text-xs sm:text-sm leading-relaxed text-blue-900'>
                  {product.ingredients.join('، ')}
                </p>
              )}
              {product.description && !product.ingredients && (
                <p className='text-xs sm:text-sm leading-relaxed text-blue-900'>
                  {product.description}
                </p>
              )}
            </div>

            {/* قیمت */}
            <div className='mt-auto'>
              <span className='font-bold text-sm sm:text-base text-orange-500'>
                قیمت: {formatPrice()}
              </span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductList;
