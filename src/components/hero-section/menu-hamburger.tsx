'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@heroui/react';
import { Button } from '@/components/CustomButton';
import MenuIcon from '@/../public/icons/menu.svg';
import MenuCloseIcon from '@/../public/icons/menu.svg';

const menuCategories = [
  'اسپرسو',
  'نوشیدنی گرم',
  'قهوه سرد',
  'شیک',
  'نوشیدنی سرد',
  'چای و دمنوش',
  'بستنی',
];

interface MenuHamburgerProps {
  onCategorySelect?: (category: string) => void;
}

const MenuHamburger = ({ onCategorySelect }: MenuHamburgerProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCategoryClick = (category: string) => {
    onCategorySelect?.(category);
    onOpenChange();
  };

  return (
    <>
      <button
        onClick={onOpen}
        className='p-2 hover:bg-white/10 rounded-lg transition-colors'
        aria-label='باز کردن منو'
      >
        <MenuIcon className='w-6 h-6 fill-white' />
      </button>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
