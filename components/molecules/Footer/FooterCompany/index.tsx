import Image from 'next/image';
import Link from 'next/link';

import './style.css';

const FooterCompany = () => {
  return (
    <div className="flex justify-around items-center max-g:grid max-g:place-items-center  max-g:gap-3 max-g:grid-cols-1 pt-[50px] pb-[80px] max-g:pb-[40px] border-t-[1px] border-solid border-gray-500">
      <Link href={'/'}>
        <Image
          src={'/assets/icons/dev-guru.svg'}
          alt="kata"
          width={50}
          height={50}
        />
      </Link>
      <span className="textStyle">© 2024 KATA Programming Academy</span>

      <Link href={'/documentation'}>
        <span className="textStyle hover:text-[#a173e2] custome-transition">
          Документация
        </span>
      </Link>
      <Link href={'/privacy'}>
        <span className="textStyle hover:text-[#a173e2] custome-transition">
          Политика конфиденциальности
        </span>
      </Link>
    </div>
  );
};

export default FooterCompany;
