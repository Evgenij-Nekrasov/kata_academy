'use client';

import Link from 'next/link';
import { useState } from 'react';

import { NavLinks } from '../constant';

const NavbarMobile = ({ isOpen = false }) => {
  const [isActive, setIsActive] = useState('Home');

  return (
    <div
      className={`md:hidden  fixed right-2 bg-[#642ab5] top-[75px]  rounded-xl z-20 items-center justify-center w-[160px] h-[130px] py-[8px]  ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <nav className="md:hidden  mx-5 space-y-5 text-lg w-full list-none">
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
  );
};

export default NavbarMobile;
