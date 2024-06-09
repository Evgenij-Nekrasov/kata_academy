import Image from 'next/image';
import Link from 'next/link';

import * as TreeList from '@/components/index';

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-hidden xl:mt-[80px] lg:mt-[70px] md:mt-[64px]">
      <div className="mb-[80px] max-lg:mt-[0px] relative left-0 top-0 w-full h-full">
        <Image
          src="/assets/image/main-background.jpeg"
          width={2200}
          height={1275}
          alt="main-background"
          className="object-cover w-full h-full max-g:w-[900px] max-g:h-[650px] max-sm:w-[600px] max-sm:h-[450px] max-m:w-[510px] max-m:h-[430px] max-ml:h-[430px]"
        />
      </div>
      <div className="max-w-[1360px] w-full mx-auto px-[40px] max-sm:px-[20px] absolute  z-[2] max-sm:px-[30px]">
        <div className="pt-[200px] pb-[263px] flex-wrap items-center max-lg:pt-[120px]  max-md:pt-[150px] max-md:pt-[190px] max-sm:pt-[200px] ">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[14px] max-ml:mx-[-20px]">
              <h1 className="font-semibold text-[60px] leading-[1.2] text-white mb-0 max-lg:text-[45px] max-sm:text-[30px] max-sm:mt-[19px]  max-md:text-left max-sm:leading-[1]">
                Онлайн-курсы программирования
              </h1>
              <div>
                <p className="font-normal text-[26px]  leading-[1.4] text-white mb-0 max-md:text-[23px] max-sm:text-[18px]  max-ml:text-[15px] tracking-wider">
                  {' '}
                  с последующим трудоустройством в Москве или Санкт-Петербурге
                </p>
              </div>
            </div>

            {/* Plugs */}
            <div className="flex flex-col gap-[60px]">
              <ul className="flex flex-wrap gap-[10px] mb-0 max-ml:mx-[-20px] ">
                <Link href="/java">
                  <TreeList.Plug background="darkBlue">
                    <TreeList.Typography color="lightBlue" preset="plug">
                      Java
                    </TreeList.Typography>
                  </TreeList.Plug>
                </Link>
                <Link href="/analytics">
                  <TreeList.Plug background="green">
                    <TreeList.Typography color="lightGreen" preset="plug">
                      Big Data Analytics
                    </TreeList.Typography>
                  </TreeList.Plug>
                </Link>
              </ul>
              <Link href="https://t.me/Evgenie061" target="_blank">
                <TreeList.Button background="transparent">
                  <TreeList.Typography
                    className="text-sm hover:text-black"
                    color="whited"
                    preset="buttonBig"
                  >
                    Поступить в ката
                  </TreeList.Typography>
                </TreeList.Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="subtitle  max-g:mt-[-10px]  max-sm:mt-[30px] max-md:text-[18px] max-sm:text-[18px]">
        <div className="container max-sm:px-3">
          <h2 className="h3">
            Обучение проходит онлайн и нацелено на результат
          </h2>
          <p className="paragraph">
            У нас с тобой общие цели: твоё трудоустройство веб-разработчиком и
            твой карьерный рост.
          </p>
        </div>
      </div>
      <TreeList.WrapperAdvantages>
        {TreeList.adventuresList.map((adventureItem, i) => (
          <TreeList.Advantages
            key={i}
            image={`${adventureItem.src}`}
            alt={`${adventureItem.alt}`}
            paragraph={`${adventureItem.underTitle}`}
          />
        ))}
      </TreeList.WrapperAdvantages>

      <TreeList.Prize
        background="bg-[#434343]"
        title={
          <>
            <h2 className="h2 max-md:text-[27px] max-sm:text-[23px] max-sm:text-[20px] md:leading-10">
              <span> Каждый выпускник</span> получает от 3 до 5 офферов и
              <span> устраивается на работу</span>
            </h2>
          </>
        }
        paragraph={
          <>
            <p className="my-[40px] text-white leading-[140%] text-2xl max-sm:text-[15px]">
              в течение двух месяцев после окончания обучения в школе
              программирования Kata Academy.
            </p>
          </>
        }
        button={
          <>
            <Link href="http://localhost:3000/about">
              <TreeList.Button
                background="transparent"
                className=" max-md:w-full max-sm:w-full"
              >
                <TreeList.Typography
                  color="whited"
                  preset="buttonBig"
                  className="hover:text-black text-sm"
                >
                  Истории выпускников
                </TreeList.Typography>
              </TreeList.Button>
            </Link>
          </>
        }
        image={
          <>
            <div className="mt-0 mx-auto mb-[45px]">
              <Image
                src="/assets/icons/award.svg"
                alt="award"
                width={250}
                height={250}
                className="max-md:w-[190px] max-md:h-[190px] max-sm:w-[160px] max-sm:h-[160px] "
              />
            </div>
          </>
        }
      />
      <div className="subtitle">
        <div className="container max-m:px-[10px]">
          <h2 className="h2  max-md:mt-[-70px]">
            КАТА инвестирует в твое будущее. Ты можешь <br />
            <span>сначала учиться, а платить после трудоустройства</span>в
            Москве или Петербурге.{' '}
          </h2>
          <p className="paragraph">
            Мы на 100% уверены в нашей методике обучения, поэтому не боимся
            инвестировать в наших студентов.
          </p>
        </div>
      </div>
      <TreeList.CardWrapper>
        {TreeList.cardPath.map((path) => (
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
                <ul className="mb-[50px] text-xl max-g:text-[20px] group-has-[li]:max-sm:text-[15px]">
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
      </TreeList.CardWrapper>
      <div className="subtitle">
        <div className="container max-m:px-[10px]">
          <h2 className="h2 max-m:text-[20px] max-md:mt-[-70px]">
            <span>Самурайский подход </span> в обучении программированию
          </h2>
          <p className="text-lg">
            Kata Academy — это не просто курсы веб-разработки. Мы готовим
            самостоятельных бойцов и востребованных специалистов за максимально
            короткий срок.
          </p>
        </div>
      </div>
      <div className="mb-[100px]">
        <div className="container max-lg:px-[20px]">
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-rows-2 gap-x-40 gap-y-28 max-lg:gap-x-16 max-lg:gap-y-12">
            {TreeList.WhatIsOffered.map((itemOffer) => (
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
                  <h3 className="text-[26px] mb-[20px] font-semibold leading-[140%] text-center text-[#a173e2]">
                    {itemOffer.title}
                  </h3>
                  <p className="text-center text-lg">{itemOffer.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container max-g:px-[20px]">
        <TreeList.Typography
          preset="header1"
          className="max-lg:text-[34px] max-sm:text-[30px] max-ml:text-[25px]"
        >
          Kata Community
        </TreeList.Typography>
        <p className="mb-[64px] max-md:mb-[40px] text-2xl max-lg:text-xl max-sm:text-lg  max-ml:text-base">
          Комфортное пространство для общения и обмена знаниями на каждом из
          этапов подготовки.
        </p>
        <TreeList.CommunityComponent />
      </div>
      <div className="container max-g:px-[20px]">
        <TreeList.AdmissionButton
          link="https://t.me/Evgenie061"
          background="bg-violet"
          title={
            <h2 className="h2 max-md:text-[26px] max-sm:text-[20px] max-l:text-[15px]">
              Поступить в KATA
            </h2>
          }
          imageUnderTitle={
            <div>
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={47}
                height={13}
                className="group-hover:ml-[8px] custome-transition"
              />
            </div>
          }
          imageBig={
            <Image
              src="/assets/icons/kata.svg"
              alt="kata"
              width={318}
              height={113}
              className="max-md:w-[280px] max-md:h-[90px] max-md:h-[70px] max-m:h-[50px] max-m:w-[170px]"
            />
          }
        />
      </div>
    </div>
  );
}
