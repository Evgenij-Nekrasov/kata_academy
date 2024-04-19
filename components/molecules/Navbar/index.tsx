'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { NavLinks, NavLinks2 } from './constant';
import MobileMenu from './partial/NavbarMobile';

const Navbar = () => {
  const [isActive, setIsActive] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 right-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-[1240px] mx-auto lg:py-[20px] sm:py-[15px]  sm:p-[15px]  max-sm:p-[13px] ">
        <div className="flex flex-wrap items-center justify-between">
          {/* Icon */}
          {NavLinks2.map((link) => (
            <Link key={link.name} href={link.link}>
              <Image
                key={link.name}
                src={link.icon}
                alt={link.name}
                width={104}
                height={54}
                className="cursor-pointer  max-md:w-[95px] max-md:h-[30px] max-sm:w-[70px]  max-sm:h-[23px] max-sm:ml-[7px]"
              />
            </Link>
          ))}

          {/* Nav Links */}
          <div className="max-md:hidden mx-auto">
            <ul className="flex gap-24  m-0 items-center text-xl max-lg:text-lg max-lg:gap-14">
              {NavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    key={link.name}
                    href={link.link}
                    onClick={() => setIsActive(link.link)}
                    className={` hover:text-blue-400 custome-transition ${
                      pathname === link.link ? 'text-blue-400' : 'text-white'
                    }`}
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Burger Menu */}
          <button className=" bg-blue-500 hover:bg-blue-700 text-white max-sm:py-[6px] py-[9px] px-[27px] max-sm:px-[24px] text-[20px] lg:text-[20px] lg:text-[17px] max-sm:text-[15px] rounded-full custome-transition">
            Наши программы
          </button>

          <div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden aspect-square  border-white border-2 border-solid justify-center flex items-center sm:!w-[50px] max-sm:w-[33px]  rounded-full text-white"
            >
              {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
            <MobileMenu isOpen={isMobileMenuOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
