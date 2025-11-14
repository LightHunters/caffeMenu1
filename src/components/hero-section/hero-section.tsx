import Link from 'next/link';
import MenuHamburger from './menu-hamburger';
import LogoIcon from '@/../public/icons/logo.svg';
import InstagramIcon from '@/../public/icons/instagram.svg';
import TelegramIcon from '@/../public/icons/telegram.svg';
import WhatsappIcon from '@/../public/icons/whatsap.svg';
import PhoneIcon from '@/../public/icons/phone.svg';

const contactLinks = [
  {
    path: 'https://instagram.com',
    icon: InstagramIcon,
  },
  {
    path: 'https://telegram.org',
    icon: TelegramIcon,
  },
  {
    path: 'https://whatsapp.com',
    icon: WhatsappIcon,
  },
  {
    path: 'tel:+989123456789',
    icon: PhoneIcon,
  },
];

const HeroSection = () => {
  return (
    <section
      className='bg-image-section h-48 w-full rounded-b-2xl px-7 flex 
        flex-col items-center justify-between pt-7 pb-7 relative'
    >
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <div className='self-start'>
            <MenuHamburger />
          </div>
          <div className='flex items-center justify-baseline gap-2'>
            <p className='text-white font-medium'>کافه خیابان آرام</p>
            <LogoIcon className='w-12 h-12' />
          </div>
        </div>
      </div>

      {/* contact-us */}
      <div className='flex items-center gap-4 w-full justify-center'>
        {contactLinks.map(({ path, icon: Icon }, index) => (
          <Link
            key={index}
            href={path}
            className='p-2.5 flex items-center justify-center rounded-lg
              bg-white/20 hover:bg-white/30 transition-colors'
          >
            <Icon className='w-5 h-5 fill-white' />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
