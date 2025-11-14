'use client';

import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from '@heroui/react';
import { Button } from '@/components/CustomButton';
import MenuIcon from '@/../public/icons/menu.svg';
import MenuCloseIcon from '@/../public/icons/menu.svg';
import { useMenuStore } from '@/store';

// Mapping بین نام فارسی و categoryId
const categoryNameToId: Record<string, string> = {
  اسپرسو: 'espresso',
  'نوشیدنی گرم': 'hot-drinks',
  'قهوه سرد': 'cold-coffee',
  شیک: 'shakes',
  'نوشیدنی سرد': 'cold-drinks',
  'چای و دمنوش': 'tea',
  بستنی: 'ice-cream',
};

// لیست دسته‌بندی‌ها برای نمایش در drawer
const menuCategories = [
  'اسپرسو',
  'نوشیدنی گرم',
  'قهوه سرد',
  'شیک',
  'نوشیدنی سرد',
  'چای و دمنوش',
  'بستنی',
];

const MenuHamburger = () => {
  const {
    isMenuDrawerOpen,
    openMenuDrawer,
    closeMenuDrawer,
    selectCategoryAndShowProducts,
  } = useMenuStore();

  const handleCategoryClick = (categoryName: string) => {
    const categoryId = categoryNameToId[categoryName];
    if (categoryId) {
      selectCategoryAndShowProducts(categoryId);
      closeMenuDrawer();
    }
  };

  return (
    <>
      <button
        onClick={openMenuDrawer}
        className='p-2 hover:bg-white/10 rounded-lg transition-colors'
        aria-label='باز کردن منو'
      >
        <MenuIcon className='w-6 h-6 fill-white' />
      </button>

      <Drawer
        isOpen={isMenuDrawerOpen}
        onOpenChange={isOpen => {
          if (isOpen) {
            openMenuDrawer();
          } else {
            closeMenuDrawer();
          }
        }}
        placement='right'
        size='md'
        hideCloseButton
        classNames={{
          header: 'border-b-0!',
        }}
      >
        <DrawerContent className='bg-white h-full w-full max-w-[70vw] sm:max-w-md'>
          {onClose => (
            <>
              <DrawerHeader className='flex flex-row items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200'>
                <div className='flex items-center justify-between w-full '>
                  <MenuCloseIcon className='w-8 h-8' />
                  <h2 className='text-gray-900'>کافه خیابان آرام</h2>
                </div>
              </DrawerHeader>

              <DrawerBody className='px-6 py-4 overflow-y-auto'>
                <div className='flex flex-col gap-3'>
                  {menuCategories.map((category, index) => (
                    <Button
                      key={index}
                      variant='solid'
                      color='menu-item-white'
                      fullWidth
                      onPress={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuHamburger;
