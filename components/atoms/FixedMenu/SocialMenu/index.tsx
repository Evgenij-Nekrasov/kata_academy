import Link from 'next/link';
import Image from 'next/image';

import { socialLinks } from './constant';
import './style.css';

const SocialMenu = ({ isOpen = false }) => {
  return (
    <>
      <div
        className={`absolute py-2 w-[196px] h-[115px] rounded-xl top-[58px] left-[-203px] bg-white z-50   ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <ul className="flex flex-col cursor-pointer">
          {socialLinks.map((socialItem, index) => (
            <Link
              key={index}
              href={`https://${socialItem.src}.com/kata_academy`}
            >
              <div className="flex items-center hover:bg-blue-100 custome-transition p-2">
                <li
                  className={`${socialItem.bg} w-[30px] h-[30px] flex  rounded-full items-center  justify-center`}
                >
                  <Image
                    src={`/assets/icons/${socialItem.src}.svg`}
                    alt={`${socialItem.src}`}
                    width={`${socialItem.width}`}
                    height={`${socialItem.height}`}
                  />
                </li>
                <span className="text-black ml-2">{socialItem.content}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className={`triangle  ${isOpen ? 'flex' : 'hidden'}`}></div>
    </>
  );
};

export default SocialMenu;
