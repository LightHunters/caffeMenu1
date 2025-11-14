// دیتابیس کامل کافه - شامل تمام اطلاعات منو، محصولات، دسته‌بندی‌ها و اطلاعات کافه

export interface Category {
  id: string;
  name: string;
  nameEn?: string;
  icon?: string;
  description?: string;
  order: number;
}

export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  price: number;
  categoryId: string;
  image?: string;
  isAvailable: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  ingredients?: string[];
  allergens?: string[];
  nutritionInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  sizes?: {
    small?: number;
    medium?: number;
    large?: number;
  };
  customizations?: {
    milk?: string[];
    sugar?: string[];
    extras?: string[];
  };
  tags?: string[];
}

export interface CafeInfo {
  name: string;
  nameEn?: string;
  description?: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    telegram?: string;
    whatsapp?: string;
  };
  workingHours: {
    [key: string]: {
      open: string;
      close: string;
      isOpen: boolean;
    };
  };
  location?: {
    lat: number;
    lng: number;
  };
}

export interface MenuSection {
  id: string;
  title: string;
  titleEn?: string;
  categoryIds: string[];
  order: number;
}

// دسته‌بندی‌های منو
export const categories: Category[] = [
  {
    id: 'espresso',
    name: 'اسپرسو',
    nameEn: 'Espresso',
    order: 1,
    description: 'قهوه‌های اسپرسو و انواع آن',
  },
  {
    id: 'hot-drinks',
    name: 'نوشیدنی گرم',
    nameEn: 'Hot Drinks',
    order: 2,
    description: 'نوشیدنی‌های گرم و داغ',
  },
  {
    id: 'cold-coffee',
    name: 'قهوه سرد',
    nameEn: 'Cold Coffee',
    order: 3,
    description: 'قهوه‌های سرد و یخی',
  },
  {
    id: 'shakes',
    name: 'شیک',
    nameEn: 'Shakes',
    order: 4,
    description: 'شیک‌های خوشمزه و خنک',
  },
  {
    id: 'cold-drinks',
    name: 'نوشیدنی سرد',
    nameEn: 'Cold Drinks',
    order: 5,
    description: 'نوشیدنی‌های سرد و خنک',
  },
  {
    id: 'tea',
    name: 'چای و دمنوش',
    nameEn: 'Tea & Herbal Tea',
    order: 6,
    description: 'چای‌های مختلف و دمنوش‌های گیاهی',
  },
  {
    id: 'ice-cream',
    name: 'بستنی',
    nameEn: 'Ice Cream',
    order: 7,
    description: 'بستنی‌های خوشمزه',
  },
  {
    id: 'desserts',
    name: 'دسر',
    nameEn: 'Desserts',
    order: 8,
    description: 'دسرهای خوشمزه',
  },
  {
    id: 'breakfast',
    name: 'صبحانه',
    nameEn: 'Breakfast',
    order: 9,
    description: 'صبحانه‌های کامل و خوشمزه',
  },
  {
    id: 'sandwiches',
    name: 'ساندویچ',
    nameEn: 'Sandwiches',
    order: 10,
    description: 'ساندویچ‌های متنوع',
  },
  {
    id: 'snacks',
    name: 'تنقلات',
    nameEn: 'Snacks',
    order: 11,
    description: 'تنقلات و میان‌وعده‌ها',
  },
];

// محصولات کافه
export const products: Product[] = [
  // اسپرسو
  {
    id: 'espresso-1',
    name: 'اسپرسو',
    nameEn: 'Espresso',
    description: 'قهوه اسپرسو خالص و قوی',
    price: 45000,
    categoryId: 'espresso',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 40000,
      medium: 45000,
      large: 50000,
    },
    tags: ['قوی', 'کلاسیک'],
  },
  {
    id: 'espresso-2',
    name: 'دوپل اسپرسو',
    nameEn: 'Double Espresso',
    description: 'دو شات اسپرسو قوی',
    price: 70000,
    categoryId: 'espresso',
    isAvailable: true,
    tags: ['قوی'],
  },
  {
    id: 'espresso-3',
    name: 'آمریکانو',
    nameEn: 'Americano',
    description: 'اسپرسو با آب داغ',
    price: 50000,
    categoryId: 'espresso',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 45000,
      medium: 50000,
      large: 55000,
    },
    tags: ['کلاسیک'],
  },
  {
    id: 'espresso-4',
    name: 'کاپوچینو',
    nameEn: 'Cappuccino',
    description: 'اسپرسو با شیر بخارزده و فوم',
    price: 65000,
    categoryId: 'espresso',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 60000,
      medium: 65000,
      large: 70000,
    },
    customizations: {
      milk: ['شیر معمولی', 'شیر بدون لاکتوز', 'شیر بادام', 'شیر سویا'],
    },
    tags: ['محبوب'],
  },
  {
    id: 'espresso-5',
    name: 'لاته',
    nameEn: 'Latte',
    description: 'اسپرسو با شیر بخارزده',
    price: 70000,
    categoryId: 'espresso',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 65000,
      medium: 70000,
      large: 75000,
    },
    customizations: {
      milk: ['شیر معمولی', 'شیر بدون لاکتوز', 'شیر بادام', 'شیر سویا'],
    },
    tags: ['محبوب'],
  },
  {
    id: 'espresso-6',
    name: 'ماکیاتو',
    nameEn: 'Macchiato',
    description: 'اسپرسو با کمی شیر بخارزده',
    price: 60000,
    categoryId: 'espresso',
    isAvailable: true,
    sizes: {
      small: 55000,
      medium: 60000,
      large: 65000,
    },
  },
  {
    id: 'espresso-7',
    name: 'موکا',
    nameEn: 'Mocha',
    description: 'لاته با شکلات',
    price: 80000,
    categoryId: 'espresso',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 75000,
      medium: 80000,
      large: 85000,
    },
    customizations: {
      milk: ['شیر معمولی', 'شیر بدون لاکتوز', 'شیر بادام', 'شیر سویا'],
    },
    tags: ['شکلاتی'],
  },

  // نوشیدنی گرم
  {
    id: 'hot-1',
    name: 'قهوه ترک',
    nameEn: 'Turkish Coffee',
    description: 'قهوه ترک اصیل',
    price: 55000,
    categoryId: 'hot-drinks',
    isAvailable: true,
    isPopular: true,
    tags: ['سنتی'],
  },
  {
    id: 'hot-2',
    name: 'قهوه فرانسه',
    nameEn: 'French Press',
    description: 'قهوه فرانسه با طعم غنی',
    price: 60000,
    categoryId: 'hot-drinks',
    isAvailable: true,
    sizes: {
      small: 55000,
      medium: 60000,
      large: 65000,
    },
  },
  {
    id: 'hot-3',
    name: 'هات چاکلت',
    nameEn: 'Hot Chocolate',
    description: 'شکلات داغ خامه‌ای',
    price: 70000,
    categoryId: 'hot-drinks',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 65000,
      medium: 70000,
      large: 75000,
    },
    tags: ['شکلاتی'],
  },
  {
    id: 'hot-4',
    name: 'کاپوچینو کارامل',
    nameEn: 'Caramel Cappuccino',
    description: 'کاپوچینو با سس کارامل',
    price: 75000,
    categoryId: 'hot-drinks',
    isAvailable: true,
    sizes: {
      small: 70000,
      medium: 75000,
      large: 80000,
    },
    tags: ['کارامل'],
  },

  // قهوه سرد
  {
    id: 'cold-coffee-1',
    name: 'آیس کافی',
    nameEn: 'Iced Coffee',
    description: 'قهوه سرد با یخ',
    price: 55000,
    categoryId: 'cold-coffee',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 50000,
      medium: 55000,
      large: 60000,
    },
    tags: ['خنک'],
  },
  {
    id: 'cold-coffee-2',
    name: 'آیس لاته',
    nameEn: 'Iced Latte',
    description: 'لاته سرد با یخ',
    price: 70000,
    categoryId: 'cold-coffee',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 65000,
      medium: 70000,
      large: 75000,
    },
    customizations: {
      milk: ['شیر معمولی', 'شیر بدون لاکتوز', 'شیر بادام', 'شیر سویا'],
    },
    tags: ['محبوب', 'خنک'],
  },
  {
    id: 'cold-coffee-3',
    name: 'آیس آمریکانو',
    nameEn: 'Iced Americano',
    description: 'آمریکانو سرد',
    price: 50000,
    categoryId: 'cold-coffee',
    isAvailable: true,
    sizes: {
      small: 45000,
      medium: 50000,
      large: 55000,
    },
  },
  {
    id: 'cold-coffee-4',
    name: 'کولد برو',
    nameEn: 'Cold Brew',
    description: 'قهوه سرد دم‌کرده',
    price: 65000,
    categoryId: 'cold-coffee',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 60000,
      medium: 65000,
      large: 70000,
    },
    tags: ['خنک', 'قوی'],
  },
  {
    id: 'cold-coffee-5',
    name: 'فراپه',
    nameEn: 'Frappe',
    description: 'قهوه یخ‌زده با خامه',
    price: 80000,
    categoryId: 'cold-coffee',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 75000,
      medium: 80000,
      large: 85000,
    },
    tags: ['یخ‌زده', 'خامه‌ای'],
  },

  // شیک
  {
    id: 'shake-1',
    name: 'شیک وانیل',
    nameEn: 'Vanilla Shake',
    description: 'شیک وانیل خامه‌ای',
    price: 90000,
    categoryId: 'shakes',
    isAvailable: true,
    isPopular: true,
    tags: ['وانیل'],
  },
  {
    id: 'shake-2',
    name: 'شیک شکلات',
    nameEn: 'Chocolate Shake',
    description: 'شیک شکلاتی خوشمزه',
    price: 95000,
    categoryId: 'shakes',
    isAvailable: true,
    isPopular: true,
    tags: ['شکلاتی'],
  },
  {
    id: 'shake-3',
    name: 'شیک توت فرنگی',
    nameEn: 'Strawberry Shake',
    description: 'شیک توت فرنگی تازه',
    price: 95000,
    categoryId: 'shakes',
    isAvailable: true,
    isPopular: true,
    tags: ['میوه‌ای'],
  },
  {
    id: 'shake-4',
    name: 'شیک موز',
    nameEn: 'Banana Shake',
    description: 'شیک موز طبیعی',
    price: 90000,
    categoryId: 'shakes',
    isAvailable: true,
    tags: ['میوه‌ای'],
  },
  {
    id: 'shake-5',
    name: 'شیک کارامل',
    nameEn: 'Caramel Shake',
    description: 'شیک کارامل خامه‌ای',
    price: 95000,
    categoryId: 'shakes',
    isAvailable: true,
    tags: ['کارامل'],
  },
  {
    id: 'shake-6',
    name: 'شیک قهوه',
    nameEn: 'Coffee Shake',
    description: 'شیک قهوه خوشمزه',
    price: 95000,
    categoryId: 'shakes',
    isAvailable: true,
    tags: ['قهوه‌ای'],
  },

  // نوشیدنی سرد
  {
    id: 'cold-drink-1',
    name: 'آبمیوه پرتقال',
    nameEn: 'Orange Juice',
    description: 'آبمیوه پرتقال تازه',
    price: 60000,
    categoryId: 'cold-drinks',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 55000,
      medium: 60000,
      large: 65000,
    },
    tags: ['طبیعی'],
  },
  {
    id: 'cold-drink-2',
    name: 'آبمیوه سیب',
    nameEn: 'Apple Juice',
    description: 'آبمیوه سیب تازه',
    price: 60000,
    categoryId: 'cold-drinks',
    isAvailable: true,
    sizes: {
      small: 55000,
      medium: 60000,
      large: 65000,
    },
    tags: ['طبیعی'],
  },
  {
    id: 'cold-drink-3',
    name: 'لیموناد',
    nameEn: 'Lemonade',
    description: 'لیموناد خنک و تازه',
    price: 55000,
    categoryId: 'cold-drinks',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 50000,
      medium: 55000,
      large: 60000,
    },
    tags: ['خنک'],
  },
  {
    id: 'cold-drink-4',
    name: 'موهیتو',
    nameEn: 'Mojito',
    description: 'موهیتو بدون الکل',
    price: 65000,
    categoryId: 'cold-drinks',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 60000,
      medium: 65000,
      large: 70000,
    },
    tags: ['نعناعی'],
  },
  {
    id: 'cold-drink-5',
    name: 'اسموتی میوه',
    nameEn: 'Fruit Smoothie',
    description: 'اسموتی میوه‌های تازه',
    price: 80000,
    categoryId: 'cold-drinks',
    isAvailable: true,
    sizes: {
      small: 75000,
      medium: 80000,
      large: 85000,
    },
    tags: ['میوه‌ای'],
  },

  // چای و دمنوش
  {
    id: 'tea-1',
    name: 'چای سیاه',
    nameEn: 'Black Tea',
    description: 'چای سیاه اصیل',
    price: 30000,
    categoryId: 'tea',
    isAvailable: true,
    isPopular: true,
    tags: ['سنتی'],
  },
  {
    id: 'tea-2',
    name: 'چای سبز',
    nameEn: 'Green Tea',
    description: 'چای سبز طبیعی',
    price: 35000,
    categoryId: 'tea',
    isAvailable: true,
    tags: ['طبیعی'],
  },
  {
    id: 'tea-3',
    name: 'چای اولونگ',
    nameEn: 'Oolong Tea',
    description: 'چای اولونگ خوش طعم',
    price: 40000,
    categoryId: 'tea',
    isAvailable: true,
  },
  {
    id: 'tea-4',
    name: 'دمنوش بابونه',
    nameEn: 'Chamomile Tea',
    description: 'دمنوش آرامش‌بخش بابونه',
    price: 40000,
    categoryId: 'tea',
    isAvailable: true,
    tags: ['آرامش‌بخش'],
  },
  {
    id: 'tea-5',
    name: 'دمنوش نعناع',
    nameEn: 'Mint Tea',
    description: 'دمنوش نعناع تازه',
    price: 40000,
    categoryId: 'tea',
    isAvailable: true,
    tags: ['نعناعی'],
  },
  {
    id: 'tea-6',
    name: 'دمنوش زنجبیل',
    nameEn: 'Ginger Tea',
    description: 'دمنوش زنجبیل گرم',
    price: 40000,
    categoryId: 'tea',
    isAvailable: true,
    tags: ['گرم'],
  },
  {
    id: 'tea-7',
    name: 'چای میوه‌ای',
    nameEn: 'Fruit Tea',
    description: 'چای با طعم میوه',
    price: 45000,
    categoryId: 'tea',
    isAvailable: true,
    sizes: {
      small: 40000,
      medium: 45000,
      large: 50000,
    },
    tags: ['میوه‌ای'],
  },

  // بستنی
  {
    id: 'ice-cream-1',
    name: 'بستنی وانیل',
    nameEn: 'Vanilla Ice Cream',
    description: 'بستنی وانیل خامه‌ای',
    price: 50000,
    categoryId: 'ice-cream',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 45000,
      medium: 50000,
      large: 55000,
    },
    tags: ['کلاسیک'],
  },
  {
    id: 'ice-cream-2',
    name: 'بستنی شکلات',
    nameEn: 'Chocolate Ice Cream',
    description: 'بستنی شکلاتی',
    price: 55000,
    categoryId: 'ice-cream',
    isAvailable: true,
    isPopular: true,
    sizes: {
      small: 50000,
      medium: 55000,
      large: 60000,
    },
    tags: ['شکلاتی'],
  },
  {
    id: 'ice-cream-3',
    name: 'بستنی توت فرنگی',
    nameEn: 'Strawberry Ice Cream',
    description: 'بستنی توت فرنگی',
    price: 55000,
    categoryId: 'ice-cream',
    isAvailable: true,
    sizes: {
      small: 50000,
      medium: 55000,
      large: 60000,
    },
    tags: ['میوه‌ای'],
  },
  {
    id: 'ice-cream-4',
    name: 'بستنی قهوه',
    nameEn: 'Coffee Ice Cream',
    description: 'بستنی با طعم قهوه',
    price: 55000,
    categoryId: 'ice-cream',
    isAvailable: true,
    sizes: {
      small: 50000,
      medium: 55000,
      large: 60000,
    },
    tags: ['قهوه‌ای'],
  },
  {
    id: 'ice-cream-5',
    name: 'بستنی مخلوط',
    nameEn: 'Mixed Ice Cream',
    description: 'بستنی با چند طعم',
    price: 60000,
    categoryId: 'ice-cream',
    isAvailable: true,
    sizes: {
      small: 55000,
      medium: 60000,
      large: 65000,
    },
    tags: ['مخلوط'],
  },

  // دسر
  {
    id: 'dessert-1',
    name: 'چیزکیک',
    nameEn: 'Cheesecake',
    description: 'چیزکیک خامه‌ای',
    price: 120000,
    categoryId: 'desserts',
    isAvailable: true,
    isPopular: true,
    tags: ['خامه‌ای'],
  },
  {
    id: 'dessert-2',
    name: 'براونیز',
    nameEn: 'Brownie',
    description: 'براونیز شکلاتی',
    price: 80000,
    categoryId: 'desserts',
    isAvailable: true,
    isPopular: true,
    tags: ['شکلاتی'],
  },
  {
    id: 'dessert-3',
    name: 'تیramisu',
    nameEn: 'Tiramisu',
    description: 'تیramisu ایتالیایی',
    price: 130000,
    categoryId: 'desserts',
    isAvailable: true,
    isPopular: true,
    tags: ['ایتالیایی'],
  },
  {
    id: 'dessert-4',
    name: 'کیک شکلاتی',
    nameEn: 'Chocolate Cake',
    description: 'کیک شکلاتی خامه‌ای',
    price: 100000,
    categoryId: 'desserts',
    isAvailable: true,
    sizes: {
      small: 80000,
      medium: 100000,
      large: 120000,
    },
    tags: ['شکلاتی'],
  },

  // صبحانه
  {
    id: 'breakfast-1',
    name: 'صبحانه کامل',
    nameEn: 'Full Breakfast',
    description: 'تخم مرغ، نان، پنیر، کره، مربا',
    price: 150000,
    categoryId: 'breakfast',
    isAvailable: true,
    isPopular: true,
    tags: ['کامل'],
  },
  {
    id: 'breakfast-2',
    name: 'املت',
    nameEn: 'Omelette',
    description: 'املت با قارچ و پنیر',
    price: 120000,
    categoryId: 'breakfast',
    isAvailable: true,
    tags: ['تخم مرغ'],
  },
  {
    id: 'breakfast-3',
    name: 'پنکیک',
    nameEn: 'Pancake',
    description: 'پنکیک با عسل و کره',
    price: 100000,
    categoryId: 'breakfast',
    isAvailable: true,
    isPopular: true,
    tags: ['شیرین'],
  },

  // ساندویچ
  {
    id: 'sandwich-1',
    name: 'ساندویچ مرغ',
    nameEn: 'Chicken Sandwich',
    description: 'ساندویچ مرغ گریل شده',
    price: 140000,
    categoryId: 'sandwiches',
    isAvailable: true,
    isPopular: true,
    tags: ['مرغ'],
  },
  {
    id: 'sandwich-2',
    name: 'ساندویچ گوشت',
    nameEn: 'Beef Sandwich',
    description: 'ساندویچ گوشت گریل شده',
    price: 160000,
    categoryId: 'sandwiches',
    isAvailable: true,
    isPopular: true,
    tags: ['گوشت'],
  },
  {
    id: 'sandwich-3',
    name: 'ساندویچ پنیر',
    nameEn: 'Cheese Sandwich',
    description: 'ساندویچ پنیر گریل شده',
    price: 120000,
    categoryId: 'sandwiches',
    isAvailable: true,
    tags: ['پنیر'],
  },

  // تنقلات
  {
    id: 'snack-1',
    name: 'چیپس',
    nameEn: 'Chips',
    description: 'چیپس ترد',
    price: 40000,
    categoryId: 'snacks',
    isAvailable: true,
  },
  {
    id: 'snack-2',
    name: 'پفک',
    nameEn: 'Puffs',
    description: 'پفک خوشمزه',
    price: 35000,
    categoryId: 'snacks',
    isAvailable: true,
  },
  {
    id: 'snack-3',
    name: 'بیسکویت',
    nameEn: 'Biscuits',
    description: 'بیسکویت ترد',
    price: 30000,
    categoryId: 'snacks',
    isAvailable: true,
  },
];

// اطلاعات کافه
export const cafeInfo: CafeInfo = {
  name: 'کافه خیابان آرام',
  nameEn: 'Khiyaban Aram Cafe',
  description: 'کافه‌ای دنج و آرام برای لحظات خوش شما',
  address: 'تهران، خیابان ولیعصر، پلاک 123',
  phone: '021-12345678',
  email: 'info@khiyabanaram.com',
  website: 'https://khiyabanaram.com',
  socialMedia: {
    instagram: '@khiyabanaram',
    telegram: '@khiyabanaram',
    whatsapp: '09123456789',
  },
  workingHours: {
    saturday: { open: '08:00', close: '23:00', isOpen: true },
    sunday: { open: '08:00', close: '23:00', isOpen: true },
    monday: { open: '08:00', close: '23:00', isOpen: true },
    tuesday: { open: '08:00', close: '23:00', isOpen: true },
    wednesday: { open: '08:00', close: '23:00', isOpen: true },
    thursday: { open: '08:00', close: '23:00', isOpen: true },
    friday: { open: '10:00', close: '23:00', isOpen: true },
  },
  location: {
    lat: 35.6892,
    lng: 51.3890,
  },
};

// بخش‌های منو
export const menuSections: MenuSection[] = [
  {
    id: 'coffee',
    title: 'قهوه',
    titleEn: 'Coffee',
    categoryIds: ['espresso', 'hot-drinks', 'cold-coffee'],
    order: 1,
  },
  {
    id: 'drinks',
    title: 'نوشیدنی',
    titleEn: 'Drinks',
    categoryIds: ['shakes', 'cold-drinks', 'tea'],
    order: 2,
  },
  {
    id: 'food',
    title: 'غذا',
    titleEn: 'Food',
    categoryIds: ['breakfast', 'sandwiches', 'snacks'],
    order: 3,
  },
  {
    id: 'sweets',
    title: 'شیرینی',
    titleEn: 'Sweets',
    categoryIds: ['ice-cream', 'desserts'],
    order: 4,
  },
];

// توابع کمکی
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.categoryId === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find((category) => category.id === categoryId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find((product) => product.id === productId);
};

export const getPopularProducts = (): Product[] => {
  return products.filter((product) => product.isPopular === true);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.isNew === true);
};

export const getAvailableProducts = (): Product[] => {
  return products.filter((product) => product.isAvailable === true);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.nameEn?.toLowerCase().includes(lowerQuery) ||
      product.description?.toLowerCase().includes(lowerQuery) ||
      product.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};

// Export همه چیز
export const database = {
  categories,
  products,
  cafeInfo,
  menuSections,
  getProductsByCategory,
  getCategoryById,
  getProductById,
  getPopularProducts,
  getNewProducts,
  getAvailableProducts,
  searchProducts,
};

export default database;

