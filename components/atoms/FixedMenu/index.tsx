'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import SocialMenu from './SocialMenu';

const FixedMenu = () => {
  const [isOpenSocialMenu, setIsOpenSocialMenu] = useState(false);
  const [isOpenModelFeedback, setIsOpenModelFeedback] = useState(false);

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
    <div className="fixed right-[40px] max-sm:right-[20px] bottom-[100px] z-[50] flex flex-col gap-4">
      <button className=" w-[64px]  aspect-square rounded-full cursor-pointer bg-blue-600 opacity-50 hover:opacity-100 custome-transition">
        <Image
          src={'/assets/icons/call.svg'}
          alt="call"
          width={40}
          height={40}
          className="m-auto"
        />
      </button>
      {/* <ModalFeedback isOpen={isOpenModelFeedback}/> */}
      <button
        onClick={() => setIsOpenSocialMenu(!isOpenSocialMenu)}
        className="relative w-[64px]  aspect-square rounded-full cursor-pointer bg-blue-600 opacity-50 hover:opacity-100 custome-transition"
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
