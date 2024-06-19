import Link from 'next/link';
import './style.css';
import { socialLinksInContacts } from '@/components/molecules/Footer/FooterLinks/constant';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
  description:
    'The "Contacts" page of online programming courses will give you information on how to contact the Dev Guru management',
};

const Contacts = () => {
  return (
    <div className="mb-26 mt-28 max-sm:mt-24 ">
      <div className="max-w-[1300px] px-10 max-sm:px-[20px] mx-auto">
        <h1 className="text-[32px] max-lg:text-[27px] max-sm:text-[21px] leading-[1.2] font-semibold text-white  mb-16 max-md:mb-6">
          Свяжитесь с нами
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Lelf large block */}
          <div className="row-span-2 col-span-1 max-g:col-span-2 styleGrid p-[25px] max-m:p-[15px]">
            <h2 className="header1 text-[23px] max-sm:text-[20px]">
              Реквизиты
            </h2>
            <div className="paragraph">
              <div className="[&>*:nth-child(even)]:mb-[15px] [&>*:nth-child(odd)]:font-bold max-sm:mb-[13px] text-[22px] max-lg:text-[20px]">
                <p>
                  Общество с ограниченной ответственностью <br />{' '}
                  {'"КАТА АКАДЕМИЯ"'}
                </p>
                <p>ИНН</p>
                <p>654646456</p>
                <p>КПП</p>
                <p>5656556</p>
                <p>Счёт</p>
                <p>6448898491915</p>
                <p>Банк получатель</p>
                <p>ООО {'Мурзилка'}</p>
                <p>ИНН 666666666</p>
                <p>КПП 69696969</p>
                <p>Город</p>
                <p>Удольск</p>
                <p>БИК</p>
                <p>78787878787</p>
                <p>Корр.счёт</p>
                <p>49849843949463161</p>
              </div>
            </div>
          </div>

          {/* Upper right block */}
          <div className=" max-md:col-span-2 flex flex-col justify-between styleGrid p-[25px] max-m:p-[15px]">
            <h2 className="header1 text-[23px] max-sm:text-[20px]">
              Для СМИ и партнеров
            </h2>
            <div className="flex items-center flex-wrap">
              <span className="text-5xl max-lg:text-4xl max-m:text-3xl">
                👋
              </span>
              <div className="ml-2">
                {/* redefining the color */}
                <p className="text-[32px] max-lg:text-[27px] max-sm:text-[21px] leading-[1.2] font-semibold text-black">
                  Влад Сухих
                </p>
                <Link
                  href={'belowunderscor@gmail.com'}
                  className="text-xl max-lg:text-lg max-m:text-base font-bold text-black"
                >
                  belowunderscor@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/*  Right block */}
          <div className="max-md:col-span-2 flex flex-col justify-between styleGrid p-[25px] max-m:p-[15px]">
            <h2 className="header1 text-[23px] max-sm:text-[20px]">
              По вопросам Community
            </h2>
            <div className="flex items-center flex-wrap">
              <span className="text-5xl max-lg:text-4xl max-m:text-3xl">
                👋
              </span>
              <div className="ml-2">
                {/* redefining the color */}
                <p className="text-[32px] max-lg:text-[27px] max-sm:text-[21px] leading-[1.2] font-semibold text-black">
                  Ден Семишкин
                </p>
                <Link
                  href={'belowunderscor@gmail.com'}
                  className="text-xl max-lg:text-lg max-m:text-base font-bold text-black"
                >
                  belowunderscor@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Lower block */}
          <div className="col-start-1 col-end-3 flex items-center gap-5 max-md:gap-x-4 max-sm:items-start max-sm:flex-col  max-g:gap-x-8 max-sm:gap-y-7 styleGrid p-[25px] max-m:p-[15px]">
            {/* redefining the margin-bottom */}
            <div className="w-[55%] max-sm:w-full flex flex-col space-y-[5px]">
              <div className="paragraph">
                <p>+7 800 855 58 55</p>
                <p>info@kata.academy</p>
                <p>Санкт-Петербург, Выборгская набережная, 29</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-5 items-baseline">
              <p className="header1 mb-0 text-[23px] max-md:text-[20px]">
                Присоединяйтесь
              </p>
              <ul className="flex cursor-pointer">
                {socialLinksInContacts.map((socialItem, index) => (
                  <li
                    key={index}
                    className={`${socialItem.bg} w-[40px] h-[40px] max-sm:h-[35px] max-sm:w-[35px] max-sm:flex   max-sm:flex-wrap rounded-full flex items-center  justify-center`}
                  >
                    <Link href={`${socialItem.href}`}>
                      <Image
                        src={`/assets/icons/${socialItem.src}.svg`}
                        alt={`${socialItem.src}`}
                        width={`${socialItem.width}`}
                        height={`${socialItem.height}`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
