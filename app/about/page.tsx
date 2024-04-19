import Typography from '@/components/atoms/Typography';
import Image from 'next/image';
import { WhatIsOffered, AdvantageCards } from './constans';

import './style.css';

const About = () => {
  return (
    <div className="mt-[145px] max-sm:mt-[100px]">
      <div className="container max-sm:px-[10px]">
        <Typography
          preset="header1"
          className="max-lg:text-[33px] max-md:text-[28px] max-sm:text-[24px] max-sm:font-medium max-m:text-[20px] "
        >
          <span className="spanHeader">KATA</span> — это единственная в России
          школа программирования, которая{' '}
          <span className="spanHeader">инвестирует в своих студентов</span>
        </Typography>
      </div>

      {/* Prize component */}
      <div className="container max-lg:px-0">
        <div className="mb-[120px] mt-[50px]">
          <div className="flex  max-md:flex-col py-[60px] max-sm:pt-[30px] max-sm:px-[10px] px-[60px] max-md:px-[30px]] max-sm:pb-[30px] bg-[#434343] rounded-[30px] max-lg:rounded-none  gap-x-11">
            <div className="w-[calc(100% - 250px)] grow max-md:order-last">
              <h2 className="h2 max-w-[775px] max-g:text-[27px] max-md:text-[25px] max-sm:text-[20px] max-g:font-medium max-g:leading-8 max-sm:leading-4">
                Миссия Kata — дать возможность{' '}
                <span className="spanHeader">
                  каждому человеку за короткий срок
                </span>
                получить востребованную, высокооплачиваемую профессию и{' '}
                <span className="spanHeader">изменить свою жизнь</span>,
                независимо от текущего уровня дохода и стартовых знаний.
              </h2>
            </div>
            <div className="mt-0 mx-auto mb-[45px]">
              <Image
                src="/assets/icons/award.svg"
                alt="award"
                width={250}
                height={250}
                className="max-md:w-[190px] max-md:h-[190px] max-sm:w-[160px] max-sm:h-[160px] "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Perks of the job */}
      <div className="mb-[100px]">
        <div className="container max-lg:px-[20px]">
          <h2 className="h2 !mb-4 max-lg:text-[28px] max-md:text-[25px] max-md:text-[22px]">
            За 6 лет мы выпустили более 2500 студентов, которые устроились на
            работу в первый месяц после окончания обучения
          </h2>
          <p>
            Выпускники КАТА получают работу, а не бумажку о том, что их пытались
            учить в онлайн-школе веб-разработки.
          </p>
          <ul className="grid grid-cols-4 max-lg:grid-cols-2 mt-[70px] max-sm:grid-cols-1 gap-x-14 gap-y-28 max-lg:gap-x-16 max-lg:gap-y-12">
            {WhatIsOffered.map((itemOffer) => (
              <li key={itemOffer.alt} className="flex flex-col">
                <div className="sizeIcon">
                  <Image
                    src={`/assets/icons/${itemOffer.src}.svg`}
                    alt={`${itemOffer.alt}`}
                    width={120}
                    height={120}
                  />
                </div>
                <div>
                  <h3 className="text-[24px] mb-[20px] font-semibold leading-[140%] text-center text-[#89e1f3]">
                    {itemOffer.title}
                  </h3>
                  <p className="text-center">{itemOffer.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-[80px]">
        <div className="container max-lg:px-[20px]">
          <div className="grid grid-cols-2 max-md:grid-cols-1 mt-[70px] gap-x-8 max-md:gap-y-8">
            {AdvantageCards.map((itemOffer) => (
              <ul
                key={itemOffer.alt}
                className="borderCard max-lg:px-[20px] rounded-3xl"
              >
                <li className="flex flex-col gap-y-5">
                  <div className="flex max-lg:flex-col justify-between">
                    <div className="space-y-5">
                      <span className="littleTitle">{itemOffer.nameCard}</span>
                      <h2 className="h2 max-lg:text-[28px]  max-sm:text-[25px] max-lg:pb-5">
                        {itemOffer.title}
                      </h2>
                    </div>
                    <Image
                      src={`/assets/icons/${itemOffer.src}.svg`}
                      alt={`${itemOffer.alt}`}
                      width={200}
                      height={180}
                      className="mx-auto max-sm:w-[190px] max-sm:h-[150px]"
                    />
                  </div>
                  <ul className="text-[17px]  max-sm:text-[15px]">
                    <li>- повышение квалификации сотрудников</li>
                    <li>- обучение линейного персонала новым технологиям</li>
                  </ul>
                  <p className="text-[17px] max-sm:text-[15px] !mb-0">
                    {itemOffer.subtitle}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
