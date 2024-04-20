import Image from 'next/image';
import Link from 'next/link';

import { FooterNavigation, cardPath } from './constant';
import { socialLinks } from './/constant';

import './/style.css';

const FooterLinks = () => {
  return (
    <footer className="flex justify-between text-[20px] max-m:text-[17px] max-ml:text-[15px] flex-wrap max-lg:grid max-lg:grid-cols-2 max-lg:ml-[100px] max-md:ml-[50px] max-sm:ml-[35px] max-m:ml-[0px] max-lg:gap-y-[25px]  gap-x-[25px] max-md:gap-x-[40px] max-ml:gap-x-[0px] pt-[80px] pb-[50px]">
      <ul className="listStyle ">
        {FooterNavigation.map((navItem, index) => (
          <Link key={index} href={navItem.src}>
            <li className=" mb-2 hover:text-blue-400 custome-transition">
              {navItem.title}
            </li>
          </Link>
        ))}
      </ul>
      <ul className="listStyle">
        <p className=" mb-2 font-bold ">Оплата после трудоустройства</p>
        {cardPath.map((navItem, index) => (
          <Link key={index} href={`https://kata.academy/${navItem.src}`}>
            <li className=" mb-2 hover:text-blue-400 custome-transition">
              {navItem.name}
            </li>
          </Link>
        ))}
      </ul>
      <ul className="listStyle">
        <p className=" mb-2 font-bold">Оплата во время учебы</p>
        {cardPath.map((navItem, index) => (
          <Link key={index} href={`https://kata.academy/${navItem.alt}`}>
            <li className=" mb-2 hover:text-blue-400 custome-transition">
              {navItem.name}
            </li>
          </Link>
        ))}
      </ul>
      <ul className="listStyle">
        <p className="mb-2">info@kata.academy</p>
        <ul className="flex gap-[10px] cursor-pointer">
          {socialLinks.map((socialItem, index) => (
            <Link
              key={index}
              href={`https://${socialItem.src}.com/kata_academy`}
            >
              <li
                key={index}
                className={`${socialItem.bg} w-[32px] h-[32px] max-ml:flex   max-ml:flex-wrap rounded-full flex items-center  justify-center`}
              >
                <Image
                  src={`/assets/icons/${socialItem.src}.svg`}
                  alt={`${socialItem.src}`}
                  width={`${socialItem.width}`}
                  height={`${socialItem.height}`}
                />
              </li>
            </Link>
          ))}
        </ul>
      </ul>
    </footer>
  );
};

export default FooterLinks;
