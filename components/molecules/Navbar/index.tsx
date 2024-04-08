"use client";

import { useState } from "react";
import Link from "next/link";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { NavLinks, NavLinks2 } from "@/constants";
import MobileMenu from "./patrials/NavbarMobile";

const NavbarPC = () => {
   const [isActive, setIsActive] = useState("");
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const pathname = usePathname();

   return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
         <div className="max-w-[1240px] mx-auto  lg:py-[20px] sm:py-[13px]  sm:px-[15px] ">
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
                        className="cursor-pointer  max-md:w-[80px] max-md:h-[23px]"
                     />
                  </Link>
               ))}

               {/* Nav Links */}
               <div className="max-md:hidden">
                  <ul className="flex gap-24  m-0 items-center text-xl max-lg:text-base max-lg:gap-14">
                     {NavLinks.map((link) => (
                        <li
                           key={link.name}
                           className="text-white hover:text-blue-400 custome-transition"
                        >
                           <Link
                              key={link.name}
                              href={link.link}
                              onClick={() => setIsActive(link.name)}
                              className={
                                 isActive === link.name ? "text-black" : ""
                              }
                           >
                              {link.icon}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Burger Menu */}

               <button className="bg-blue-500 hover:bg-blue-700 text-white sm:py-[4px] sm:px-[24px] text-[20px] lg:text-[20px] lg:text-[15px] sm:text-[14px] rounded-full custome-transition">
                  Наши программы
               </button>

               <div>
                  <button
                     type="button"
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                     className="md:hidden aspect-square  border-white border-2 border-solid !p-0 justify-center flex items-center !w-[44px] sm:!w-[32px] rounded-full text-white"
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

export default NavbarPC;
