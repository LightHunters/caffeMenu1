import { create } from 'zustand';

export interface MenuState {
  // دسته‌بندی انتخاب شده
  selectedCategory: string;
  // نمایش لیست محصولات یا صفحه اصلی
  showProducts: boolean;
  // محصول انتخاب شده (برای آینده)
  selectedProduct: string | null;
  // باز/بسته بودن drawer منو
  isMenuDrawerOpen: boolean;
}

export interface MenuActions {
  // انتخاب دسته‌بندی
  setSelectedCategory: (categoryId: string) => void;
  // نمایش لیست محصولات
  showProductList: () => void;
  // بازگشت به صفحه اصلی
  hideProductList: () => void;
  // انتخاب دسته‌بندی و نمایش محصولات
  selectCategoryAndShowProducts: (categoryId: string) => void;
  // انتخاب محصول (برای آینده)
  setSelectedProduct: (productId: string | null) => void;
  // مدیریت drawer منو
  openMenuDrawer: () => void;
  closeMenuDrawer: () => void;
  toggleMenuDrawer: () => void;
  // ریست کردن state
  reset: () => void;
}

export type MenuStore = MenuState & MenuActions;

const initialState: MenuState = {
  selectedCategory: 'hot-drinks',
  showProducts: false,
  selectedProduct: null,
  isMenuDrawerOpen: false,
};

export const useMenuStore = create<MenuStore>(set => ({
  ...initialState,

  setSelectedCategory: categoryId => set({ selectedCategory: categoryId }),

  showProductList: () => set({ showProducts: true }),

  hideProductList: () => set({ showProducts: false }),

  selectCategoryAndShowProducts: categoryId =>
    set({
      selectedCategory: categoryId,
      showProducts: true,
    }),

  setSelectedProduct: productId => set({ selectedProduct: productId }),

  openMenuDrawer: () => set({ isMenuDrawerOpen: true }),

  closeMenuDrawer: () => set({ isMenuDrawerOpen: false }),

  toggleMenuDrawer: () =>
    set(state => ({ isMenuDrawerOpen: !state.isMenuDrawerOpen })),

  reset: () => set(initialState),
}));
