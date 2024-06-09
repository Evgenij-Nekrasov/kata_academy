import Image from 'next/image';
import Link from 'next/link';

import {
  AdmissionButton,
  Advantages,
  Button,
  CardWrapper,
  Prize,
  Typography,
  WrapperAdvantages,
} from '@/components';

import { adventagesList, courseFeatures, graduatesOfCourses } from './constant';
import Graduates from '@/components/layouts/graduates/Graduates';
import Accordion from '@/components/molecules/Accordion/Accordion';
import { accordionItems } from '@/components/molecules/Accordion/constant';

const Java = () => {
  return (
    // Main image
    <>
      <div className={`mt-20 max-g:mt-0 pt-11 pb-52 max-g:pb-40 bg-darkOrange`}>
        <CardWrapper>
          <div className="[&>*]:text-black mt-20">
            <Typography
              preset="header1"
              className="max-lg:text-3xl max-sm:text-2xl"
            >
              Обучаем <span className="bg-lilac">Java-разработчиков</span>{' '}
              online
            </Typography>
            <p className="mt-5">
              Начни учиться бесплатно — <b>оплата после трудоустройства</b>
            </p>
            <p className="mt-14">Идёт набор на поток, дата старта:</p>
            <Typography preset="header2" className="max-lg:text-2xl">
              17 июня 2024
            </Typography>
            <p className="mt-5">Приём тестового задания до:</p>
            <Typography
              className="block mb-10 max-lg:text-2xl"
              preset="header2"
            >
              10 июня 2024
            </Typography>
            <Link href="https://t.me/Evgenie061" target="_blank">
              <Button className="hover:bg-lilac" background="transparent">
                <Typography
                  className="text-sm hover:text-black"
                  color="whited"
                  preset="buttonBig"
                >
                  Поступить в ката
                </Typography>
              </Button>
            </Link>
          </div>
          <div className="max-g:hidden flex justify-end">
            <div className="flex items-center  justify-center bg-lilac h-auto max-lg:h-[80%]  w-[110%] max-g:w-[50%]  rounded-[50%]">
              <Image
                src={`/assets/icons/java.svg`}
                alt="java-course"
                width={0}
                height={0}
                style={{ width: '75%', height: 'auto' }}
              />
            </div>
          </div>
        </CardWrapper>
      </div>

      {/* Prize component */}

      <Prize
        wrapperStyle={'mt-[-160px]'}
        background="bg-[#434343]"
        title={
          <>
            <h2 className="h2 max-md:text-[27px] max-sm:text-[23px] max-sm:text-[20px] md:leading-10">
              Kata Academy - это <span className="bg-lilac">новый подход</span>к
              обучению программистов
            </h2>
          </>
        }
        paragraph={
          <>
            <p className="my-[40px] text-white leading-[140%] text-2xl max-sm:text-[15px]">
              {'>'} 2500 выпускников за 6 лет уже устроились разработчиками.
            </p>
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

      <WrapperAdvantages>
        {adventagesList.map((adventageItem, i) => (
          <Advantages
            key={i}
            image={`${adventageItem.src}`}
            alt={`${adventageItem.alt}`}
            paragraph={`${adventageItem.underTitle}`}
            title={`${adventageItem.title}`}
          />
        ))}
      </WrapperAdvantages>

      <Prize
        background="bg-violet"
        title={
          <>
            <h2 className="h2 max-md:text-center max-md:text-[27px] max-sm:text-[23px] md:leading-10">
              Kata Academy - это новый подход к обучению программистов
            </h2>
          </>
        }
        paragraph={
          <>
            <p className="my-[40px] max-md:text-center text-white leading-[140%] text-2xl max-sm:text-[17px]">
              С нашей поддержкой ты 100% устроишься на работу и станешь крутым
              Frontend-разработчиком уже в этом году.
            </p>
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

      {/* Header of money*/}
      <Typography
        preset="header1"
        className="container max-sm:px-2 flex justify-center max-lg:text-3xl max-md:text-2xl"
      >
        Оплата после трудоустройства или во время обучения
      </Typography>
      <Prize
        wrapperStyle={'mt-8'}
        background="bg-violet"
        title={
          <>
            <h2 className="text-[27px] max-md:text-[23px] max-sm:text-[20px] max-m:text-[16px] md:leading-10">
              Минимальная гарантированная зарплата по договору — 80 000 рублей
            </h2>
          </>
        }
      />

      {/* Graduates of courses */}
      <div className="container max-sm:px-5 [&>*]:mb-5">
        <h2 className="h2">
          <span className="bg-lilac">Эти ребята смогли - сможешь и ты!</span>
        </h2>
        <p>
          Сомневаешься? Тогда скорее читай отзывы наших выпускников, которые
          успешно работают на позициях Frontend Developer и Backend Developer.
          За 6 лет мы выпустили более 2500 программистов в разных странах:
          России, СНГ, Европе, США и Канаде.
        </p>
        <p>
          Еще больше отзывов об обучении в KATA Academy (ex-Java Mentor) — в
          нашей группе
        </p>
      </div>

      <WrapperAdvantages>
        {graduatesOfCourses.map((adventageItem, i) => (
          <Graduates
            key={i}
            image={`${adventageItem.src}`}
            alt={`${adventageItem.alt}`}
            title={`${adventageItem.name}`}
            paragraph={`${adventageItem.text}`}
          />
        ))}
      </WrapperAdvantages>

      {/* Employment opportunities */}
      <h2 className="container max-sm:px-2 max-lg:text-3xl max-md:text-2xl">
        Готов играть по нашим правилам? Тогда отсчитывай {}
        <span className="bg-violet">9 месяцев</span> до трудоустройства {}
        <span className="bg-violet"> Java-разработчиком</span>, и поехали!
      </h2>

      <WrapperAdvantages>
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-w-full gap-7">
          {courseFeatures.map((feature, i) => (
            <AdmissionButton
              key={i}
              title={<h2 className="h2 text-black">{feature.title}</h2>}
              imageUnderTitle={
                <p className="paragraph">{feature.description}</p>
              }
              background={feature.background}
            />
          ))}
        </div>
      </WrapperAdvantages>

      {/* Training program */}
      <h2 className="container mb-5  max-sm:px-2 max-lg:text-3xl max-md:text-2xl">
        Программа обучения
      </h2>
      <div className="container">
        <Accordion items={accordionItems} />
      </div>
    </>
  );
};

export default Java;
