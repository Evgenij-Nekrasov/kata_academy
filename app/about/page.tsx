import Link from 'next/link';
import Image from 'next/image';

import Typography from '@/components/globalTypography';
import { WhatIsOffered, AdvantageCards } from './constans';
import CardWrapper from '@/components/layouts/cardLanguage/CardWrapper';
import { cardPath } from '@/constants/pages/mainPage';

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
        <div className="mb-[100px] mt-[50px]">
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
          <h2 className="h2 !mb-4 max-lg:text-[28px] max-md:text-[25px] max-md:text-[22px] max-md:text-center max-sm:text-[20px]">
            За 6 лет мы выпустили более 2500 студентов, которые устроились на
            работу в первый месяц после окончания обучения
          </h2>
          <p className="text-lg">
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
                  <h3 className="text-2xl mb-[20px] font-semibold leading-[140%] text-center text-[#642ab5]">
                    {itemOffer.title}
                  </h3>
                  <p className="text-center text-lg">{itemOffer.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-[80px]">
        <div className="container max-lg:px-5 max-sm:px-2">
          <div className="grid grid-cols-2 max-md:grid-cols-1 mt-[70px] gap-x-8 max-md:gap-y-8">
            {AdvantageCards.map((itemOffer) => (
              <ul
                key={itemOffer.alt}
                className="borderCard max-lg:px-5 max-sm:px-2 rounded-3xl"
              >
                <li className="flex flex-col gap-y-5">
                  <div className="flex gap-x-2 max-lg:flex-col justify-between">
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
                  <ul className="text-lg  max-sm:text-[15px]">
                    <li>- повышение квалификации сотрудников</li>
                    <li>- обучение линейного персонала новым технологиям</li>
                  </ul>
                  <p className="text-lg max-sm:text-[15px] !mb-0">
                    {itemOffer.subtitle}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="my-[100px]">
        <div className="container max-sm:px-5">
          <div className="flex flex-col items-center">
            <div className="sizeIcon">
              <Image
                src={`/assets/image/smiling-girl.jpeg`}
                alt={`smiling girl`}
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <p>Татьяна Таран</p>
            <p>Head of Marketing&PR</p>
            <Link
              href={`https://t.me/Evgenie061`}
              className="text-white my-5 underline text-lg"
            >
              Связаться с нами
            </Link>
            <div className="max-w-[1000px] max-sm:w-full">
              <Typography
                component={'h2'}
                className="text-center mb-5 max-lg:text-[28px] max-g:text-[26px]  max-md:text-[23px] max-sm:font-medium max-sm:text-[20px]"
                preset="header2"
              >
                Если вам откликается наш подход, вы хотите стать частью нашей
                команды и предложить что-то интересное — пишите, пообщаемся
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Our courses */}
      <Typography
        component={'div'}
        className="max-w-[1360px] pl-10 mx-auto mb-10"
        preset="header2"
      >
        Наши курсы
      </Typography>
      <CardWrapper>
        {cardPath.map((path) => (
          <Link key={path.name} href={path.href}>
            <div className="group cursor-pointer pt-[30px] px-[40px] max-m:px-[20px] pb-[35px] rounded-[30px] border-[2px] border-solid border-white hover:border-[#642ab5] custome-transition">
              <div className="flex flex-wrap mb-[6px] items-start">
                <div className="w-[calc(100%-160px)] max-g:w-[calc(100%-180px)] max-m:w-[calc(100%-195px)]">
                  <h3 className="h3 max-g:text-[45px] max-md:text-[37px] max-m:text-[30px] max-g:mt-[25px]  max-sm:mt-[15px] ">
                    {path.name}
                  </h3>
                </div>
                <div
                  className={`relative ${path.background} w-[140px] h-[140px] max-g:w-[160px] max-g:h-[160px] max-md:w-[130px] max-md:h-[130px] max-sm:w-[110px] max-sm:h-[110px] max-m:w-[95px] max-m:h-[95px] ml-[20px] max-md:ml-[40px] max-sm:ml-[70px] max-m:ml-[100px] rounded-[50%]`}
                >
                  <div className="absolute left-[15%] top-[15%]">
                    <Image
                      src={`/assets/icons/${path.image}.svg`}
                      alt={path.name}
                      width={100}
                      height={80}
                      className="max-g:w-[120px] max-md:w-[95px] max-sm:w-[85px] max-m:w-[75px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ul className="mb-[50px] text-lg max-g:text-[20px] group-has-[li]:max-sm:text-[15px]">
                  <li>
                    <p>✓ Оплата после трудоустройства</p>
                  </li>
                  <li>
                    <p>✓ Оплата во время учебы</p>
                  </li>
                  <li>
                    <p>✓ Обучение минимум 25 часов в неделю</p>
                  </li>
                  <li>
                    <p>✓ Трудоустройство в Москве или Санкт-Петербурге</p>
                  </li>
                </ul>
                <p className="mb-[20px] max-g:text-[20px] max-sm:text-[15px]">
                  Срок обучения: ≈ {path.duration} месяцев
                </p>
                <span>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="arrow-left"
                    width={47}
                    height={13}
                    className="group-hover:ml-[8px] custome-transition"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </CardWrapper>
    </div>
  );
};

export default About;
