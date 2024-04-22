import Link from 'next/link';
import './style.css';
import { socialLinks } from '@/components/molecules/Footer/FooterLinks/constant';
import Image from 'next/image';

const Conacts = () => {
  return (
    <div className="mb-26 mt-28 max-sm:mt-24 ">
      <div className="max-w-[1300px] px-10 max-sm:px-[20px] mx-auto">
        <h1 className="text-[32px] max-lg:text-[27px] max-sm:text-[21px] leading-[1.2] font-semibold text-white  mb-16 max-md:mb-6">
          Свяжитесь с нами
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Lelf large block */}
          <div className="row-span-2 col-span-1 max-g:col-span-2 styleGrid">
            <h2 className="header1">Реквизиты</h2>
            <p className="paragraph">
              Общество с ограниченной ответственностью
            </p>
            <p className="paragraph">{'"КАТА АКАДЕМИЯ"'}</p>
            <div className="[&>*:nth-child(even)]:mb-[15px] [&>*:nth-child(odd)]:font-semibold max-sm:mb-[13px] text-[22px] max-lg:text-[20px]">
              <p className="paragraph">ИНН</p>
              <p className="paragraph">654646456</p>
              <p className="paragraph">КПП</p>
              <p className="paragraph">5656556</p>
              <p className="paragraph">Счёт</p>
              <p className="paragraph">6448898491915</p>
              <p className="paragraph">Банк получатель</p>
              <p className="paragraph">ООО {'Мурзилка'}</p>
              <p className="paragraph">ИНН 666666666</p>
              <p className="paragraph">КПП 69696969</p>
              <p className="paragraph">Город</p>
              <p className="paragraph">Удольск</p>
              <p className="paragraph">БИК</p>
              <p className="paragraph">78787878787</p>
              <p className="paragraph">Корр.счёт</p>
              <p className="paragraph">49849843949463161</p>
            </div>
          </div>

          {/* Upper right block */}
          <div className=" max-md:col-span-2 flex flex-col justify-between styleGrid">
            <h2 className="header1">Для СМИ и партнеров</h2>
            <div className="flex items-center flex-wrap">
              <span className="text-5xl max-lg:text-4xl max-m:text-3xl">
                👋
              </span>
              <div className="ml-2">
                {/* redefining the color */}
                <p className="text-[32px] max-lg:text-[27px] max-sm:text-[21px] leading-[1.2] font-semibold text-gray-600">
                  Влад Сухих
                </p>
                <Link
                  href={'belowunderscor@gmail.com'}
                  className="text-xl max-lg:text-lg max-m:text-base font-bold text-gray-700"
                >
                  belowunderscor@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/*  Right block */}
          <div className="max-md:col-span-2 flex flex-col justify-between styleGrid">
            <h2 className="header1">По вопросам Community</h2>
            <div className="flex items-center flex-wrap">
              <span className="text-5xl max-lg:text-4xl max-m:text-3xl">
                👋
              </span>
              <div className="ml-2">
                {/* redefining the color */}
                <p className="text-[32px] max-lg:text-[27px] max-sm:text-[21px] leading-[1.2] font-semibold text-gray-600">
                  Ден Семишкин
                </p>
                <Link
                  href={'belowunderscor@gmail.com'}
                  className="text-xl max-lg:text-lg max-m:text-base font-bold text-gray-700"
                >
                  belowunderscor@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Lower block */}
          <div className="col-start-1 col-end-3 flex items-center max-sm:items-start max-sm:flex-col  max-g:gap-x-8 max-sm:gap-y-7 styleGrid">
            {/* redefining the margin-bottom */}
            <div className="w-[63%] max-sm:w-full flex flex-col space-y-[5px]">
              <p className="paragraph">+7 800 855 58 55</p>
              <p className="paragraph">info@kata.academy</p>
              <p className="paragraph">
                Санкт-Петербург, Выборгская набережная, 29
              </p>
            </div>
            <div className="flex flex-col">
              <p className="header1">Присоединяйтесь</p>
              <ul className="flex gap-[10px] cursor-pointer">
                {socialLinks.map((socialItem, index) => (
                  <Link
                    key={index}
                    href={`https://${socialItem.src}.com/kata_academy`}
                  >
                    <li
                      key={index}
                      className={`${socialItem.bg} w-[40px] h-[40px] max-sm:h-[35px] max-sm:w-[35px] max-sm:flex   max-sm:flex-wrap rounded-full flex items-center  justify-center`}
                    >
                      <Image
                        src={`/assets/icons/${socialItem.src}.svg`}
                        alt={`${socialItem.src}`}
                        width={`${socialItem.width}`}
                        height={`${socialItem.height}`}
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conacts;
