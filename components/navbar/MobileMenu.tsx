"use client";

import Link from "next/link";
import { useState } from "react";

import { NavLinks } from "@/constants";

const MobileMenu = ({ isOpen = false }) => {
   const [isActive, setIsActive] = useState("Home");

   return (
      <>
         <div
            className={`md:hidden fixed top-0 left-0 right-0 z-10 ${
               isOpen ? "flex" : "hidden"
            }`}
         />
         <div
            className={`md:hidden  fixed right-2 bg-blue-500 top-[66px] rounded-xl z-20 justify-center w-[140px] h-[135px] sm:w-[156px] py-[8px]  ${
               isOpen ? "flex" : "hidden"
            }`}
         >
            <nav className="md:hidden  mx-5 space-y-3 text-lg w-full list-none">
               {NavLinks.map((link) => (
                  <li
                     key={link.name}
                     className="text-white hover:text-blue-400 custome-transition"
                  >
                     <Link
                        key={link.name}
                        href={link.link}
                        onClick={() => setIsActive(link.name)}
                     >
                        {link.icon}
                     </Link>
                  </li>
               ))}
            </nav>
         </div>
      </>
   );
};

export default MobileMenu;
