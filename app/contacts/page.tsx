import Link from 'next/link';
import './style.css';
import { socialLinks } from '@/components/molecules/Footer/FooterLinks/constant';
import Image from 'next/image';

const Conacts = () => {
  return (
    <div className="mb-26 mt-28 max-sm:mt-24 ">
      <div className="container max-sm:px-[20px] !max-w-[1300px] mx-auto">
        <h1 className="text mb-16 max-md:mb-6">Свяжитесь с нами</h1>
        <div className="grid grid-cols-7 max-g:grid-cols-8 grid-rows-10 max-g:grid-rows-12 max-m:grid-rows-13  h-[940px] max-md:h-[1270px] max-sm:h-[1210px] gap-4">
          {/* Lelf large block */}
          <div className="row-span-8 max-md:row-span-6  col-span-4 max-g:col-span-8 styleGrid">
            <h2 className="header1">Реквизиты</h2>
            <div className="wrapperParagraphs">
              <p className="paragraph">
                Общество с ограниченной ответственностью
              </p>
              <p className="paragraph">{'КАТА АКАДЕМИЯ'}</p>
            </div>
            <div className="wrapperParagraphs">
              <p className="paragraph">ИНН</p>
              <p className="paragraph">654646456</p>
            </div>
            <div className="wrapperParagraphs">
              <p className="paragraph">КПП</p>
              <p className="paragraph">5656556</p>
            </div>
            <div className="wrapperParagraphs">
              <p className="paragraph">Счёт</p>
              <p className="paragraph">6448898491915</p>
            </div>
            <div className="wrapperParagraphs">
              <p className="paragraph">Банк получатель</p>
              <p className="paragraph">ООО {'Мурзилка'}</p>
              <p className="paragraph">ИНН 666666666</p>
              <p className="paragraph">КПП 69696969</p>
            </div>
            <div className="wrapperParagraphs">
              <p className="paragraph">Город</p>
              <p className="paragraph">Удольск</p>
            </div>
            <div className="wrapperParagraphs">
              <p className="paragraph">БИК</p>
              <p className="paragraph">78787878787</p>
            </div>
            <div className="wrapperParagraphs">
              <p className="paragraph">Корр.счёт</p>
              <p className="paragraph">49849843949463161</p>
            </div>
          </div>

          {/* Upper right block */}
          <div className="row-span-4 max-g:row-span-2 max-md:row-span-2 col-span-3 max-g:col-span-4  max-md:col-span-8 flex flex-col justify-between styleGrid">
            <h2 className="header1">Для СМИ и партнеров</h2>
            <div className="flex items-center flex-wrap">
              <div className="text-5xl max-lg:text-4xl max-m:text-3xl">👋</div>
              <div className="ml-2">
                <p className="text !text-gray-600">Влад Сухих</p>
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
          <div className="row-span-4 max-g:row-span-2 max-md:row-span-2 col-span-3 max-g:col-span-4 max-md:col-span-8  flex flex-col justify-between styleGrid">
            <h2 className="header1">По вопросам Community</h2>
            <div className="flex items-center flex-wrap">
              <div className="text-5xl max-lg:text-4xl max-m:text-3xl">👋</div>
              <div className="ml-2">
                <p className="text !text-gray-600">Ден Семишкин</p>
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
          <div className="row-span-2 max-md:row-span-2 max-m:row-span-3 col-span-7 max-g:col-span-8 flex max-m:flex-col max-g:gap-x-8 max-m:gap-y-5 styleGrid">
            <div className="wrapperParagraphs w-[63%] max-sm:w-[100%] !mb-0 flex flex-col justify-between">
              <p className="paragraph">+7 800 855 58 55</p>
              <p className="paragraph">info@kata.academy</p>
              <p className="paragraph">
                Санкт-Петербург, Выборгская набережная, 29
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="header1">Присоединяйтесь</p>
              <ul className="flex gap-[10px] cursor-pointer">
                {socialLinks.map((socialItem, index) => (
                  <Link
                    key={index}
                    href={`https://${socialItem.src}.com/kata_academy`}
                  >
                    <li
                      key={index}
                      className={`${socialItem.bg} w-[40px] h-[40px] max-sm:h-[35px] max-sm:w-[35px] max-ml:flex   max-ml:flex-wrap rounded-full flex items-center  justify-center`}
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
