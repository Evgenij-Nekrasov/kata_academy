import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/atoms/Button';
import Plug from '@/components/atoms/Plug';
import Typography from '@/components/atoms/Typography';
import {
  WhatIsOffered,
  adventuresList,
  cardPath,
} from '@/constants/pages/mainPage';
import AdvantagesWrapper from '@/components/layouts/Advantages/AdvantagesWrapper';
import Prize from '@/components/atoms/Prize';
import CardWrapper from '@/components/layouts/CardLanguage/CardWrapper';
import CommunityComponent from '@/components/atoms/Community';
import AdmissionButton from '@/components/atoms/AdmissionButton';

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-hidden xl:mt-[80px] lg:mt-[70px] md:mt-[64px]">
      {/* <Typography  preset="common1" color="whited" component="p">
            some text
         </Typography>
           <Typography  preset="header1" color="whited" component="h1">
            some text
         </Typography> */}

      {/* <Plug>
            <Typography>
               kekke
            </Typography>
         </Plug> */}
      <div className="mb-[80px] max-lg:mt-[0px] relative left-0 top-0 w-full h-full">
        <Image
          src="/assets/image/main-background.jpeg"
          width={2200}
          height={1275}
          alt="main-background"
          className="object-cover w-full h-full max-g:w-[900px] max-g:h-[650px] max-sm:w-[600px] max-sm:h-[450px] max-m:w-[510px] max-m:h-[430px] max-ml:h-[430px] max-l:h-[470px]"
        />
      </div>
      <div className="max-w-[1360px] w-full mx-auto px-[40px] max-sm:px-[20px] absolute  z-[2] max-sm:px-[30px]">
        <div className="pt-[200px] pb-[263px] flex-wrap items-center max-lg:pt-[120px]  max-md:pt-[150px] max-md:pt-[190px] max-sm:pt-[200px] ">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[14px] max-ml:mx-[-20px]">
              <h1 className="font-semibold text-[60px] leading-[1.2] text-white mb-0 max-lg:text-[45px] max-sm:text-[30px] max-sm:mt-[20px]  max-md:text-left max-sm:leading-[1]">
                Онлайн-курсы программирования
              </h1>
              <div>
                <p className="font-normal text-[26px]  leading-[1.4] text-white mb-0 max-md:text-[23px] max-sm:text-[18px]  max-sm:text-[18px] tracking-wider">
                  {' '}
                  с последующим трудоустройством в Москве или Санкт-Петербурге
                </p>
              </div>
            </div>

            {/* Plugs */}
            <div className="flex flex-col gap-[60px]">
              <ul className="flex flex-wrap gap-[10px] mb-0 max-ml:mx-[-20px] ">
                <Link href="/java-course">
                  <Plug background="lilac">
                    <Typography color="grayed" preset="plug">
                      Java
                    </Typography>
                  </Plug>
                </Link>
                <Link href="/frontend-course">
                  <Plug background="turquoise">
                    <Typography color="grayed" preset="plug">
                      Frontend
                    </Typography>
                  </Plug>
                </Link>
                <Link href="/qa-manual-course">
                  <Plug background="swamp">
                    <Typography color="grayed" preset="plug">
                      QA manual
                    </Typography>
                  </Plug>
                </Link>
                <Link href="/golang-course">
                  <Plug background="blue">
                    <Typography color="grayed" preset="plug">
                      Golang
                    </Typography>
                  </Plug>
                </Link>
              </ul>
              <Button background="swamp">
                <Typography color="grayed" preset="buttonBig">
                  Поступить в ката
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="subtitle  max-g:mt-[-10px]  max-sm:mt-[30px] max-sm:text-[18px]  max-md:text-[18px]">
        <div className="container">
          <h2 className="h2 max-md:text-[30px]">
            Обучение проходит онлайн и нацелено на результат
          </h2>
          <p>
            У нас с тобой общие цели: твоё трудоустройство веб-разработчиком и
            твой карьерный рост.
          </p>
        </div>
      </div>
      <AdvantagesWrapper>
        {adventuresList.map((adventureItem, index) => (
          <div key={index} className="grid grid-cols-1">
            <div className="sizeIcon">
              <Image
                width={102}
                height={120}
                src={`/assets/icons/${adventureItem.src}.svg`}
                alt={adventureItem.alt}
                className="w-[110px] h-[110px] max-sm:w-[80px] max-md:w-[95px] max-md:h-[95px] max-lg:w-[90px] max-lg:h-[90px]"
              />
            </div>
            <Typography preset="advantagesText">
              {adventureItem.underTitle}
            </Typography>
          </div>
        ))}
      </AdvantagesWrapper>
      <Prize />
      <div className="subtitle">
        <div className="container max-m:px-[10px]">
          <h2 className="h2 max-md:text-[30px] max-m:text-[20px] max-md:mt-[-70px]">
            КАТА инвестирует в твое будущее. Ты можешь <br />
            <span>сначала учиться, а платить после трудоустройства</span>в
            Москве или Петербурге.{' '}
          </h2>
          <p>
            Мы на 100% уверены в нашей методике обучения, поэтому не боимся
            инвестировать в наших студентов.
          </p>
        </div>
      </div>
      <CardWrapper>
        {cardPath.map((path) => (
          <Link key={path.alt} href={path.href}>
            <div className="group cursor-pointer pt-[30px] px-[40px] max-m:px-[20px] pb-[35px] rounded-[30px] border-[2px] border-solid border-white hover:border-blue-700 custome-transition">
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
                      alt={path.alt}
                      width={100}
                      height={80}
                      className="max-g:w-[120px] max-md:w-[95px] max-sm:w-[85px] max-m:w-[75px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ul className="mb-[50px] max-g:text-[20px] group-has-[li]:max-sm:text-[15px]">
                  <li>
                    <p>✓ Оплата после трудоустройства</p>
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
      <div className="subtitle">
        <div className="container max-m:px-[10px]">
          <h2 className="h2 max-md:text-[30px] max-m:text-[20px] max-md:mt-[-70px]">
            <span>Самурайский подход </span> в обучении программированию
          </h2>
          <p>
            Kata Academy — это не просто курсы веб-разработки. Мы готовим
            самостоятельных бойцов и востребованных специалистов за максимально
            короткий срок.
          </p>
        </div>
      </div>
      <div className="mb-[100px]">
        <div className="container max-lg:px-[20px]">
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-rows-2 gap-x-40 gap-y-28 max-lg:gap-x-16 max-lg:gap-y-12">
            {WhatIsOffered.map((itemOffer) => (
              <div key={itemOffer.alt} className="flex flex-col">
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container max-g:px-[20px]">
        <h1 className="text-white text-[40px] max-lg:text-[34px] max-sm:text-[30px] max-ml:text-[25px] font-bold">
          Kata Community
        </h1>
        <p className="mb-[64px] max-md:mb-[40px] text-2xl max-lg:text-xl max-sm:text-lg  max-ml:text-base">
          Комфортное пространство для общения и обмена знаниями на каждом из
          этапов подготовки.
        </p>
        <CommunityComponent />
      </div>
      <div className="container max-g:px-[20px]">
        <AdmissionButton />
      </div>
    </div>
  );
}
