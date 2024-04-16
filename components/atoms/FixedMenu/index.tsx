'use client';

import { useState } from 'react';
import Image from 'next/image';

import SocialMenu from './partial/SocialMenu';

const FixedMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="fixed right-[40px] max-sm:right-[30px] bottom-[100px] z-[50] flex flex-col gap-4">
      <button className=" w-[64px] max-sm:w-[55px] aspect-square rounded-full cursor-pointer bg-blue-600 opacity-50 hover:opacity-100 custome-transition">
        <Image
          src={'/assets/icons/call.svg'}
          alt="call"
          width={40}
          height={40}
          className="m-auto max-sm:w-[30px]"
        />
      </button>
      <>
        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="relative w-[64px] max-sm:w-[55px] aspect-square rounded-full cursor-pointer bg-blue-600 opacity-50 hover:opacity-100 custome-transition"
        >
          <Image
            src={'/assets/icons/messages.svg'}
            alt="call"
            width={40}
            height={40}
            className=" m-auto max-sm:w-[30px]"
          />
        </button>
        <SocialMenu isOpen={isOpenMenu} />
      </>
    </div>
  );
};

export default FixedMenu;
