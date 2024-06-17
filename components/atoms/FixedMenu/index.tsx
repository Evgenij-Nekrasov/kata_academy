'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import SocialMenu from './SocialMenu';

const FixedMenu = () => {
  const [isOpenSocialMenu, setIsOpenSocialMenu] = useState(false);

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (!ref?.current?.contains(e.target as Node)) {
        setIsOpenSocialMenu(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isOpenSocialMenu]);

  return (
    <div className="fixed right-[50px] bottom-[50px]  max-sm:right-[20px] z-[10] flex flex-col gap-4">
      <button
        onClick={() => setIsOpenSocialMenu(!isOpenSocialMenu)}
        className="relative w-[64px]  aspect-square rounded-full cursor-pointer bg-[#642ab5] opacity-60 hover:opacity-100 custome-transition"
      >
        <Image
          src={'/assets/icons/messages.svg'}
          alt="call"
          width={40}
          height={40}
          className=" m-auto"
        />
      </button>
      <SocialMenu isOpen={isOpenSocialMenu} />
    </div>
  );
};

export default FixedMenu;
