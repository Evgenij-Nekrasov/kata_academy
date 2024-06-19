import Image from 'next/image';
import Link from 'next/link';

import { FooterNavigation, cardPath } from './constant';

import './/style.css';

const FooterLinks = () => {
  return (
    <footer className="flex justify-evenly text-[20px] max-m:text-[17px] max-ml:text-[15px] flex-wrap max-lg:grid max-lg:grid-cols-2 max-lg:ml-[100px] max-md:ml-[50px] max-sm:ml-[35px] max-m:ml-[0px] max-lg:gap-y-[25px]  gap-x-[25px] max-md:gap-x-[40px] max-ml:gap-x-[0px] pt-[80px] pb-[50px]">
      <ul className="listStyle">
        {FooterNavigation.map((navItem, index) => (
          <li
            key={index}
            className=" mb-2 hover:text-[#a173e2] custome-transition"
          >
            <Link href={navItem.src}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="listStyle">
        {cardPath.map((navItem, index) => (
          <li
            key={index}
            className=" mb-2 hover:text-[#a173e2] custome-transition"
          >
            <Link href={navItem.src}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterLinks;
