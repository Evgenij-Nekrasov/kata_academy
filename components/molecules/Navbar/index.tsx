'use client';

import { useState, useRef, useEffect } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { NavLinks, NavLinks2, cardModal } from './constant';
import MobileMenu from './partial/NavbarMobile';
import useModal from '@/hooks/useModal';
import { Modal } from '@/components/layouts/modal/Modal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, toggle } = useModal();

  const pathname = usePathname();

  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (!ref?.current?.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="px-5 max-ml:px-2.5 bg-[#001529] fixed w-full z-20 top-0 left-0 right-0 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          {/* Icon */}
          {NavLinks2.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="min-[1279px]:py-7 py-6 max-lg:py-5  px-4 max-ml:px-1"
            >
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
            <ul className="flex gap-24   items-center text-xl max-lg:text-lg max-g:text-base max-lg:gap-14 max-g:gap-8">
              {NavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    key={link.name}
                    href={link.link}
                    className={`min-[1279px]:py-8 py-7 max-lg:py-6 max-g:py-[26px] px-4 text-white ${
                      pathname === link.link ? 'bg-[#642ab5]' : 'text-white'
                    }`}
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={toggle}
            className=" bg-[#642ab5] hover:bg-[#854dd3] text-white max-sm:py-[6px] py-[9px] px-[27px] max-sm:px-[24px] text-[20px] max-lg:text-[18px] max-g:text-[16px] max-sm:text-[14px] rounded-full custome-transition"
          >
            Наши программы
          </button>
          <Modal isScroll={isOpen} handleClose={toggle}>
            <div className="flex flex-col h-full justify-around max-g:justify-evenly p-10 max-sm:p-7">
              <h2 className="text-white text-[40px] max-md:text-4xl max-ml:text-[26px] tracking-wide">
                Выбор курса
              </h2>
              <div className="grid grid-cols-2 max-g:grid-cols-1 gap-4 max-md:gap-6">
                {cardModal.map((card) => (
                  <Link key={card.name} href={`${card.href}`}>
                    <div className="border-2 hover:border-[#642ab5] custome-transition flex flex-col justify-between bg-gray-700  px-6 py-4 rounded-3xl w-full h-[250px] max-g:h-[150px]">
                      <span className="text-xl max-md:text-lg max-ml:text-base">
                        {card.duration} месяцев
                      </span>
                      <div className="flex justify-between gap-x-5">
                        <span
                          className={`text-[35px] max-lg:text-3xl max-md:text-[26px] max-ml:text-[22px] font-bold ${card.color}`}
                        >
                          {card.name}
                        </span>
                        <span
                          className={`text-[35px] max-lg:text-3xl max-md:text-[26px] max-ml:text-[22px]  font-bold ${card.color}`}
                        >
                          {card.shortname}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Modal>

          {/* Burger Menu */}
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
